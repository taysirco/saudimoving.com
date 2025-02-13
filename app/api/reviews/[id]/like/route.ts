import { NextResponse } from 'next/server'
<<<<<<< HEAD
import mongoose from 'mongoose'
import { connectToDatabase } from '@/lib/mongodb'
=======
import { connectToDatabase } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await request.json()
<<<<<<< HEAD
    await connectToDatabase()

    const review = await mongoose.connection.collection('reviews').findOne({
      _id: new mongoose.Types.ObjectId(params.id)
    })

    if (!review) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      )
    }

    // Update likes
    const result = await mongoose.connection.collection('reviews').updateOne(
      { _id: new mongoose.Types.ObjectId(params.id) },
      {
        $addToSet: { likes: userId }
      }
    )

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { error: 'Failed to update review' },
        { status: 400 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error liking review:', error)
    return NextResponse.json(
      { error: 'Failed to like review' },
      { status: 500 }
    )
=======
    const client = await connectToDatabase()
    const db = client.db()

    const review = await db.collection('reviews').findOne({
      _id: new ObjectId(params.id)
    })

    if (!review) {
      return NextResponse.json({ error: 'Review not found' }, { status: 404 })
    }

    const likes = review.likes || []
    const hasLiked = likes.includes(userId)

    await db.collection('reviews').updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          likes: hasLiked
            ? likes.filter((id: string) => id !== userId)
            : [...likes, userId]
        }
      }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update like' }, { status: 500 })
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  }
} 