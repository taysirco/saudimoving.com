import mongoose from 'mongoose'
import { MongoClient } from 'mongodb'
import { SearchResult } from './googlePlaces'

const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://senatorever:QCZBGMfWNqGbRJGt@cluster0.jyp3b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const CACHE_DURATION = 180 * 24 * 60 * 60 * 1000 // 180 days

// Mongoose Schema
const PlacesCacheSchema = new mongoose.Schema({
  query: { type: String, required: true, unique: true },
  results: { type: Array, required: true },
  createdAt: { type: Date, default: Date.now, expires: 15552000 } // 180 days
})

export const PlacesCache = mongoose.models.PlacesCache || mongoose.model('PlacesCache', PlacesCacheSchema)

// Generic cache functions
export async function getCachedData<T>(key: string): Promise<T | null> {
  const client = await MongoClient.connect(MONGO_URI)
  const db = client.db('saudiamoving')
  const collection = db.collection('places_cache')

  try {
    const cachedData = await collection.findOne({ 
      key,
      timestamp: { $gt: new Date(Date.now() - CACHE_DURATION) }
    })
    
    return cachedData?.results as T || null
  } finally {
    await client.close()
  }
}

export async function setCachedData<T>(key: string, results: T): Promise<void> {
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
  } finally {
    await client.close()
  }
}

// Search results specific cache functions
export async function getSearchCache(key: string): Promise<SearchResult[] | null> {
  return getCachedData<SearchResult[]>(key)
}

export async function setSearchCache(key: string, results: SearchResult[]): Promise<void> {
  return setCachedData<SearchResult[]>(key, results)
} 