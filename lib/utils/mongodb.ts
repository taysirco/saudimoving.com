import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable')
}

type MongooseConnection = {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

// إعلان global
declare global {
  var mongoose: MongooseConnection | undefined
}

let cached: MongooseConnection = (global as any).mongoose

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: true,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    }

    try {
      const uri: string = MONGODB_URI as string
      cached.promise = mongoose.connect(uri, opts).then((mongoose) => {
        console.log('Successfully connected to MongoDB Atlas')
        return mongoose
      })
    } catch (error) {
      console.error('Error connecting to MongoDB Atlas:', error)
      throw error
    }
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    console.error('Failed to establish MongoDB connection:', e)
    throw e
  }

  return cached.conn
} 