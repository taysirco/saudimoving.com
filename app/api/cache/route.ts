import { NextRequest, NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const MONGO_URI = process.env.MONGODB_URI!
const CACHE_DURATION = 180 * 24 * 60 * 60 * 1000 // 180 days

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const key = searchParams.get('key')

  if (!key) {
    return NextResponse.json({ error: 'Key is required' }, { status: 400 })
  }

  const client = await MongoClient.connect(MONGO_URI)
  const db = client.db('saudiamoving')
  const collection = db.collection('places_cache')

  try {
    const cachedData = await collection.findOne({ 
      key,
      timestamp: { $gt: new Date(Date.now() - CACHE_DURATION) }
    })
    
    return NextResponse.json({ results: cachedData?.results || null })
  } finally {
    await client.close()
  }
}

export async function POST(request: NextRequest) {
  const { key, results } = await request.json()

  if (!key || !results) {
    return NextResponse.json({ error: 'Key and results are required' }, { status: 400 })
  }

  const client = await MongoClient.connect(MONGO_URI)
  const db = client.db('saudiamoving')
  const collection = db.collection('places_cache')

  try {
    await collection.updateOne(
      { key },
      { 
        $set: { 
          results,
          timestamp: new Date()
        }
      },
      { upsert: true }
    )
    
    return NextResponse.json({ success: true })
  } finally {
    await client.close()
  }
} 