import mongoose from 'mongoose'

<<<<<<< HEAD
if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

export async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState >= 1) {
      return mongoose.connection
    }

    return await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    throw error
  }
}

// Export connectDB as the same function for backward compatibility
export { connectToDatabase as connectDB }

// Add proper typing for global mongoose instance
declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
  } | undefined
} 
=======
const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env')
}

console.log('Attempting to connect to MongoDB with URI:', MONGODB_URI)

interface MongooseCache {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts)
  }

  try {
    cached.conn = await cached.promise
    console.log('Successfully connected to MongoDB')
  } catch (e) {
    cached.promise = null
    console.error('Error establishing MongoDB connection:', e)
    throw e
  }

  return cached.conn
}

export { mongoose } 
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
