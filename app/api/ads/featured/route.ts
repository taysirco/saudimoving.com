import { NextResponse } from 'next/server'
import { Advertisement } from '@/lib/models/Advertisement'
import { connectToDatabase } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
<<<<<<< HEAD
import { authOptions } from '@/lib/auth-config'
=======
import { authOptions } from '../../auth/[...nextauth]/route'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()

    const featuredAds = await Advertisement.find({
      status: 'active',
      isFeatured: true
    }).populate('cities')

    return NextResponse.json(featuredAds)
  } catch (error) {
    console.error('Error fetching featured ads:', error)
    return NextResponse.json(
      { error: 'Failed to fetch featured ads' },
      { status: 500 }
    )
  }
} 