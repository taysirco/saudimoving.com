import { NextResponse } from 'next/server'
import { Advertisement } from '@/lib/models/Advertisement'
import { connectToDatabase } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
<<<<<<< HEAD
import { authOptions } from '@/lib/auth-config'
=======
import { authOptions } from '../../auth/[...nextauth]/route'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = params
    await connectToDatabase()

    const advertisement = await Advertisement.findByIdAndDelete(id)

    if (!advertisement) {
      return NextResponse.json(
        { error: 'Advertisement not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: 'Advertisement deleted successfully' })
  } catch (error) {
    console.error('Error deleting advertisement:', error)
    return NextResponse.json(
      { error: 'Failed to delete advertisement' },
      { status: 500 }
    )
  }
}

// تحديث الإعلان
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
    const data = await request.json()

    await connectToDatabase()

    const advertisement = await Advertisement.findByIdAndUpdate(
      id,
      { ...data },
      { new: true }
    ).populate('cities')

    if (!advertisement) {
      return NextResponse.json(
        { error: 'Advertisement not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(advertisement)
  } catch (error) {
    console.error('Error updating advertisement:', error)
    return NextResponse.json(
      { error: 'Failed to update advertisement' },
      { status: 500 }
    )
  }
<<<<<<< HEAD
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const conn = await connectToDatabase()
    // Your route logic here
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
=======
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
} 