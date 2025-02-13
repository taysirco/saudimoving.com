import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const GOOGLE_API_KEY = process.env.GOOGLE_MAPS_API_KEY!
const MONGO_URI = process.env.MONGODB_URI!
const CACHE_DURATION = 180 * 24 * 60 * 60 * 1000 // 180 days

interface SearchResult {
  id: string
  name: string
  address: string
  rating?: number
  userRatingsTotal?: number
  phone?: string
  website?: string
  location: {
    lat: number
    lng: number
  }
}

async function searchGooglePlaces(query: string): Promise<SearchResult[]> {
  const response = await fetch(
    'https://places.googleapis.com/v1/places:searchText',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': GOOGLE_API_KEY,
        'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.internationalPhoneNumber,places.websiteUri,places.location'
      },
      body: JSON.stringify({
        textQuery: query,
        languageCode: 'ar',
        maxResultCount: 10
      })
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch from Google Places API')
  }

  const data = await response.json()
  
  return data.places.map((place: any) => ({
    id: place.id,
    name: place.displayName.text,
    address: place.formattedAddress,
    rating: place.rating,
    userRatingsTotal: place.userRatingCount,
    phone: place.internationalPhoneNumber,
    website: place.websiteUri,
    location: place.location
  }))
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const city = searchParams.get('city')
  const service = searchParams.get('service')

  if (!city || !service) {
    return NextResponse.json(
      { error: 'City and service are required' },
      { status: 400 }
    )
  }

  const searchQuery = `${service} ${city}`
  const cacheKey = encodeURIComponent(searchQuery)

  const client = await MongoClient.connect(MONGO_URI)
  const db = client.db('saudiamoving')
  const collection = db.collection('places_cache')

  try {
    // Check cache first
    const cachedData = await collection.findOne({
      key: cacheKey,
      timestamp: { $gt: new Date(Date.now() - CACHE_DURATION) }
    })

    if (cachedData?.results) {
      return NextResponse.json({ results: cachedData.results })
    }

    // If not in cache, fetch from Google Places API
    const results = await searchGooglePlaces(searchQuery)

    // Store in cache
    await collection.updateOne(
      { key: cacheKey },
      {
        $set: {
          results,
          timestamp: new Date()
        }
      },
      { upsert: true }
    )

    return NextResponse.json({ results })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { error: 'Error performing search' },
      { status: 500 }
    )
  } finally {
    await client.close()
  }
} 