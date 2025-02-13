import { NextResponse } from 'next/server'
<<<<<<< HEAD
import { User } from '@/lib/models/User'
import { Advertisement } from '@/lib/models/Advertisement'
import { connectToDatabase } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'
=======
import { Advertisement } from '@/lib/models/Advertisement'
import { User } from '@/lib/models/User'
import { connectToDatabase } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
import { startOfDay, subDays, format } from 'date-fns'

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

<<<<<<< HEAD
    await connectToDatabase()

    // Check if user is admin
=======
    // التحقق من أن المستخدم مدير
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
    const currentUser = await User.findOne({ email: session.user.email })
    if (currentUser?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const range = searchParams.get('range') || 'week'

    let startDate = new Date()
    switch (range) {
      case 'week':
        startDate = subDays(startOfDay(new Date()), 7)
        break
      case 'month':
        startDate = subDays(startOfDay(new Date()), 30)
        break
      case 'year':
        startDate = subDays(startOfDay(new Date()), 365)
        break
    }

<<<<<<< HEAD
    // User activity
    const userActivity = await User.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate }
=======
    await connectToDatabase()

    // نشاط المستخدمين
    const userActivity = await User.aggregate([
      {
        $match: {
          lastLogin: { $gte: startDate }
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
        }
      },
      {
        $group: {
<<<<<<< HEAD
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          count: { $sum: 1 }
=======
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$lastLogin' } },
          activeUsers: { $sum: 1 },
          newUsers: {
            $sum: {
              $cond: [
                { $gte: ['$createdAt', startDate] },
                1,
                0
              ]
            }
          }
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
        }
      },
      {
        $project: {
          date: '$_id',
<<<<<<< HEAD
          count: 1,
=======
          activeUsers: 1,
          newUsers: 1,
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
          _id: 0
        }
      },
      { $sort: { date: 1 } }
    ])

    // توزيع المدن
    const cityDistribution = await Advertisement.aggregate([
      { $unwind: '$cities' },
      {
        $lookup: {
          from: 'cities',
          localField: 'cities',
          foreignField: '_id',
          as: 'cityInfo'
        }
      },
      { $unwind: '$cityInfo' },
      {
        $group: {
          _id: '$cityInfo.nameAr',
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          city: '$_id',
          count: 1,
          _id: 0
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ])

    // إحصائيات الأجهزة (بيانات تجريبية)
    const deviceStats = [
      { device: 'هاتف', count: 150 },
      { device: 'حاسوب', count: 80 },
      { device: 'لوحي', count: 40 }
    ]

    return NextResponse.json({
      userActivity,
      cityDistribution,
      deviceStats
    })
  } catch (error) {
    console.error('Error fetching analytics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
} 