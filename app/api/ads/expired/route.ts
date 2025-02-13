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

    const currentDate = new Date()
    
    const expiredAds = await Advertisement.find({
      endDate: { $lt: currentDate },
      status: { $ne: 'stopped' }
    }).populate('cities')

    return NextResponse.json(expiredAds)
  } catch (error) {
    console.error('Error fetching expired ads:', error)
    return NextResponse.json(
      { error: 'Failed to fetch expired ads' },
      { status: 500 }
    )
  }
} 