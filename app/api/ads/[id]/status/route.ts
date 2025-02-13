import { NextResponse } from 'next/server'
import { Advertisement } from '@/lib/models/Advertisement'
import { connectToDatabase } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
<<<<<<< HEAD
import { authOptions } from '@/lib/auth-config'
=======
import { authOptions } from '../../../auth/[...nextauth]/route'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = params
    const { status } = await request.json()

    await connectToDatabase()

    const advertisement = await Advertisement.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    )

    if (!advertisement) {
      return NextResponse.json(
        { error: 'Advertisement not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(advertisement)
  } catch (error) {
    console.error('Error updating advertisement status:', error)
    return NextResponse.json(
      { error: 'Failed to update advertisement status' },
      { status: 500 }
    )
  }
} 