import { NextResponse } from 'next/server'
<<<<<<< HEAD
import mongoose from 'mongoose'
import { connectToDatabase } from '@/lib/mongodb'

interface Reply {
  _id: mongoose.Types.ObjectId;
  userId: string;
  content: string;
  createdAt: Date;
}

interface ReviewDocument {
  _id: mongoose.Types.ObjectId;
  replies: Reply[];
}
=======
import { connectToDatabase } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
<<<<<<< HEAD
    await connectToDatabase()

    const reply: Reply = {
      _id: new mongoose.Types.ObjectId(),
      userId: body.userId,
      content: body.content,
      createdAt: new Date()
    }

    const result = await mongoose.connection
      .collection<ReviewDocument>('reviews')
      .updateOne(
        { _id: new mongoose.Types.ObjectId(params.id) },
        { $push: { replies: reply } as any }
      )

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { error: 'Failed to add reply' },
        { status: 400 }
      )
    }

    return NextResponse.json(reply)
  } catch (error) {
    console.error('Error adding reply:', error)
    return NextResponse.json(
      { error: 'Failed to add reply' },
      { status: 500 }
    )
=======
    const client = await connectToDatabase()
    const db = client.db()

    const reply = {
      _id: new ObjectId(),
      ...body,
      createdAt: new Date().toISOString()
    }

    await db.collection('reviews').updateOne(
      { _id: new ObjectId(params.id) },
      { $push: { replies: reply } }
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add reply' }, { status: 500 })
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  }
} 