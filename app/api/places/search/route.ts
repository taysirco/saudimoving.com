import { NextResponse } from 'next/server'

const GOOGLE_PLACES_API_KEY = 'AIzaSyATvZ4XzErB6VgEL1TbIThyiN7xCAAn_5I'

export async function POST(request: Request) {
  try {
    // 1. أولاً نقوم بالبحث عن الموقع الجغرافي للمدينة
    const { city = 'الرياض' } = await request.json()
    
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city)}&key=${GOOGLE_PLACES_API_KEY}&language=ar&region=SA`
    
    const geocodeResponse = await fetch(geocodeUrl)
    const geocodeData = await geocodeResponse.json()

    if (geocodeData.status !== 'OK') {
      throw new Error('Geocoding failed')
    }

    const { lat, lng } = geocodeData.results[0].geometry.location

    // 2. ثم نبحث عن الأماكن القريبة
    const nearbyUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=50000&keyword=${encodeURIComponent('نقل عفش')}&language=ar&key=${GOOGLE_PLACES_API_KEY}`

    const nearbyResponse = await fetch(nearbyUrl)
    const nearbyData = await nearbyResponse.json()

    if (nearbyData.status !== 'OK') {
      // 3. إذا لم نجد نتائج، نجرب البحث النصي
      const textSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(`شركات نقل عفش ${city}`)}&key=${GOOGLE_PLACES_API_KEY}&language=ar`
      
      const textSearchResponse = await fetch(textSearchUrl)
      const textSearchData = await textSearchResponse.json()

      if (textSearchData.status !== 'OK') {
        return NextResponse.json({
          error: 'لم يتم العثور على نتائج',
          places: []
        })
      }

      const results = textSearchData.results.map((place: any) => ({
        name: place.name,
        address: place.formatted_address,
        rating: place.rating || 0,
        totalRatings: place.user_ratings_total || 0,
        location: place.geometry.location,
        placeId: place.place_id
      }))

      return NextResponse.json({
        places: results,
        searchType: 'text',
        city,
        total: results.length
      })
    }

    // تنسيق نتائج البحث القريب
    const results = nearbyData.results.map((place: any) => ({
      name: place.name,
      address: place.vicinity,
      rating: place.rating || 0,
      totalRatings: place.user_ratings_total || 0,
      location: place.geometry.location,
      placeId: place.place_id
    }))

    return NextResponse.json({
      places: results,
      searchType: 'nearby',
      city,
      total: results.length,
      location: { lat, lng }
    })

  } catch (error) {
    console.error('Search Error:', error)
    return NextResponse.json(
      {
        error: 'حدث خطأ في البحث',
        details: error instanceof Error ? error.message : 'خطأ غير معروف',
        places: []
      },
      { status: 500 }
    )
  }
} 