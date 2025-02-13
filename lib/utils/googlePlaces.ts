import { cache } from 'react'
import { getSearchCache, setSearchCache } from './cache'
import { PlaceCache } from '../models/PlaceCache'
import { connectToDatabase } from './mongodb'
import { MongoClient } from 'mongodb'

export interface SearchResult {
  id: string;
  name: string;
  address: string;
  rating?: number;
  userRatingsTotal?: number;
  phone?: string;
  website?: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    }
  };
}

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY || 'AIzaSyATvZ4XzErB6VgEL1TbIThyiN7xCAAn_5I'
const BASE_URL = 'https://places.googleapis.com/v1/places:searchText'

interface Coordinates {
  lat: number
  lng: number
}

type CityCoordinates = {
  [key in string]: Coordinates
}

const CITY_COORDINATES: CityCoordinates = {
  'الرياض': { lat: 24.7136, lng: 46.6753 },
  'جدة': { lat: 21.5433, lng: 39.1728 },
  'مكة المكرمة': { lat: 21.3891, lng: 39.8579 },
  'المدينة المنورة': { lat: 24.5247, lng: 39.5692 },
  'الدمام': { lat: 26.4207, lng: 50.0888 }
} as const

interface Location {
  latitude: number
  longitude: number
}

interface GooglePlace {
  place_id: string
  name: string
  formatted_address?: string
  formatted_phone_number?: string
  website?: string
  geometry: {
    location: {
      lat: number
      lng: number
    }
  }
  rating?: number
  user_ratings_total?: number
  photos?: Array<{
    photo_reference: string
    height: number
    width: number
  }>
  business_status?: string
  opening_hours?: {
    open_now: boolean
  }
  types?: string[]
}

interface GooglePlacesResponse {
  results: GooglePlace[]
  status: string
  error_message?: string
}

function transformGooglePlace(place: GooglePlace): SearchResult {
  return {
    id: place.place_id,
    name: place.name,
    address: place.formatted_address || '',
    rating: place.rating,
    userRatingsTotal: place.user_ratings_total,
    phone: place.formatted_phone_number,
    website: place.website,
    geometry: place.geometry
  };
}

async function getPlaceDetails(placeId: string) {
  try {
    const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?` + 
      `place_id=${placeId}` +
      `&fields=formatted_phone_number,website,opening_hours,reviews` +
      `&language=ar` +
      `&key=${process.env.GOOGLE_MAPS_API_KEY}`

    console.log('Fetching details for place:', placeId)
    const response = await fetch(detailsUrl)
    const data = await response.json()
    
    console.log('Place details response:', {
      placeId,
      status: data.status,
      hasPhone: !!data.result?.formatted_phone_number,
      hasWebsite: !!data.result?.website
    })

    return data.result
  } catch (error) {
    console.error('Error fetching place details:', error)
    return null
  }
}

export async function searchMovingServices(city: string, service: string): Promise<{ results: SearchResult[] }> {
  const cacheKey = `${city}-${service}`
  
  // Check MongoDB cache first
  const cachedResults = await getSearchCache(cacheKey)
  if (cachedResults) {
    return { results: cachedResults }
  }

  // Create multiple search queries to improve results
  const searchQueries = [
    `${service} ${city}`,
    `شركة ${service} ${city}`,
    `مؤسسة ${service} ${city}`,
    `${service} رخيص ${city}`,
    `افضل ${service} ${city}`
  ]

  let allResults: SearchResult[] = []

  for (const query of searchQueries) {
    try {
      const response = await fetch('https://places.googleapis.com/v1/places:searchText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': process.env.GOOGLE_MAPS_API_KEY!,
          'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.phoneNumbers,places.location'
        },
        body: JSON.stringify({
          textQuery: query,
          languageCode: 'ar',
          maxResultCount: 20,
          locationBias: {
            rectangle: {
              low: {
                latitude: 16.3478, // South Saudi Arabia
                longitude: 34.6206 // West Saudi Arabia
              },
              high: {
                latitude: 32.1480, // North Saudi Arabia
                longitude: 55.6666 // East Saudi Arabia
              }
            }
          }
        })
      })

      const data = await response.json()
      allResults = [...allResults, ...data.places]
    } catch (error) {
      console.error(`Error fetching results for query "${query}":`, error)
    }
  }

  // Remove duplicates and sort results
  const uniqueResults = Array.from(
    new Map(allResults.map(item => [item.id, item])).values()
  )

  // Cache results in MongoDB
  await setSearchCache(cacheKey, uniqueResults)
  
  return { results: uniqueResults }
}

export const searchMovingServicesCached = cache(async (city: string, service: string): Promise<SearchResult[]> => {
  const cacheKey = `search:${city}:${service}`
  const cachedResults = await getSearchCache(cacheKey)
  
  if (cachedResults) {
    console.log(`Cache hit for ${cacheKey}`)
    return cachedResults
  }

  console.log(`Cache miss for ${cacheKey}, fetching from Google Places API`)
  
  // Create multiple search queries to improve results
  const searchQueries = [
    `شركة نقل عفش ${city}`,
    `مؤسسة نقل اثاث ${city}`,
    `نقل عفش ${city}`,
    `شركات نقل العفش ${city}`,
    `مكتب نقل عفش ${city}`
  ]

  let allResults: SearchResult[] = []

  for (const query of searchQueries) {
    try {
      const defaultCoords = { lat: 24.7136, lng: 46.6753 } // Default to Riyadh
      const coordinates = Object.prototype.hasOwnProperty.call(CITY_COORDINATES, city) 
        ? CITY_COORDINATES[city] 
        : defaultCoords

      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': GOOGLE_API_KEY,
          'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingsTotal,places.internationalPhoneNumber,places.websiteUri,places.location'
        },
        body: JSON.stringify({
          textQuery: query,
          languageCode: 'ar',
          maxResultCount: 20,
          locationBias: {
            circle: {
              center: {
                latitude: coordinates.lat,
                longitude: coordinates.lng
              },
              radius: 30000.0 // 30km radius
            }
          }
        })
      })

      if (!response.ok) {
        console.error(`API error for query "${query}": ${response.status} ${response.statusText}`)
        continue
      }

      const data = await response.json()
      
      const results: SearchResult[] = data.places?.map((place: any) => ({
        id: place.id || place.place_id || Math.random().toString(36).substr(2, 9),
        name: place.displayName?.text || '',
        address: place.formattedAddress || '',
        rating: place.rating,
        userRatingsTotal: place.userRatingsTotal,
        phone: place.internationalPhoneNumber,
        website: place.websiteUri,
        geometry: {
          location: place.location || { lat: 0, lng: 0 }
        }
      })) || []

      allResults = [...allResults, ...results]
    } catch (error) {
      console.error(`Error fetching from Google Places API for query "${query}":`, error)
    }
  }

  // Remove duplicates based on place ID
  const uniqueResults = Array.from(new Map(allResults.map(item => [item.id, item])).values())

  // Filter out results without names or addresses
  const validResults = uniqueResults.filter(result => result.name && result.address)

  // Sort by rating (if available) and then by number of reviews
  const sortedResults = validResults.sort((a, b) => {
    if (a.rating && b.rating) {
      if (b.rating !== a.rating) {
        return b.rating - a.rating
      }
      return (b.userRatingsTotal || 0) - (a.userRatingsTotal || 0)
    }
    return (b.userRatingsTotal || 0) - (a.userRatingsTotal || 0)
  })

  // Take top 20 results
  const finalResults = sortedResults.slice(0, 20)

  if (finalResults.length > 0) {
    await setSearchCache(cacheKey, finalResults)
    console.log(`Cached ${finalResults.length} results for ${cacheKey}`)
  }

  return finalResults
})

export { transformGooglePlace } 