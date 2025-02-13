import { NextResponse } from 'next/server'
import { User } from '@/lib/models/User'
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
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // التحقق من أن المستخدم مدير
    const currentUser = await User.findOne({ email: session.user.email })
    if (currentUser?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { id } = params
    const { role } = await request.json()

    if (!['admin', 'user'].includes(role)) {
      return NextResponse.json(
        { error: 'Invalid role' },
        { status: 400 }
      )
    }

    await connectToDatabase()

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    ).select('-password')

    if (!updatedUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error('Error updating user role:', error)
    return NextResponse.json(
      { error: 'Failed to update user role' },
      { status: 500 }
    )
  }
} 