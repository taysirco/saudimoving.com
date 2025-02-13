import { NextResponse } from 'next/server'
import { Report } from '@/lib/models/Report'
import { connectToDatabase } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
<<<<<<< HEAD
import { authOptions } from '@/lib/auth-config'
=======
import { authOptions } from '../auth/[...nextauth]/route'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')

    await connectToDatabase()

    const query = status && status !== 'all' ? { status } : {}
    
    const reports = await Report.find(query)
      .sort({ createdAt: -1 })
      .populate('reporterId', 'name email')

    return NextResponse.json(reports)
  } catch (error) {
    console.error('Error fetching reports:', error)
    return NextResponse.json(
      { error: 'Failed to fetch reports' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()

    await connectToDatabase()

    const report = new Report({
      ...data,
      reporterId: session.user.email,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    })

    await report.save()

    return NextResponse.json(report)
  } catch (error) {
    console.error('Error creating report:', error)
    return NextResponse.json(
      { error: 'Failed to create report' },
      { status: 500 }
    )
  }
} 