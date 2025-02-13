import { NextResponse } from 'next/server'
import { Advertisement } from '@/lib/models/Advertisement'
import { connectToDatabase } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
<<<<<<< HEAD
import { authOptions } from '@/lib/auth-config'
=======
import { authOptions } from '../../auth/[...nextauth]/route'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
import { startOfDay, subDays, format } from 'date-fns'

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()

    // إحصائيات الأيام الـ 30 الماضية
    const thirtyDaysAgo = subDays(startOfDay(new Date()), 30)
    
    const dailyStats = await Advertisement.aggregate([
      {
        $match: {
          createdAt: { $gte: thirtyDaysAgo }
        }
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          date: '$_id',
          count: 1,
          _id: 0
        }
      },
      { $sort: { date: 1 } }
    ])

    // إحصائيات المدن
    const cityStats = await Advertisement.aggregate([
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

    // إحصائيات الحالة
    const statusStats = await Advertisement.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          status: '$_id',
          count: 1,
          _id: 0
        }
      }
    ])

    return NextResponse.json({
      dailyStats,
      cityStats,
      statusStats
    })
  } catch (error) {
    console.error('Error fetching detailed stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch detailed stats' },
      { status: 500 }
    )
  }
} 