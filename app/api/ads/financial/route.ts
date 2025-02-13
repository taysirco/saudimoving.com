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

    const { searchParams } = new URL(request.url)
    const range = searchParams.get('range') || 'month'

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

    // إحصائيات الإيرادات
    const revenue = await Advertisement.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate },
          status: 'active'
        }
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          amount: { $sum: '$price' }
        }
      },
      {
        $project: {
          date: '$_id',
          amount: 1,
          _id: 0
        }
      },
      { $sort: { date: 1 } }
    ])

    // إجمالي الإيرادات
    const totalRevenue = revenue.reduce((sum, item) => sum + item.amount, 0)

    // الاشتراكات النشطة
    const activeSubscriptions = await Advertisement.countDocuments({
      status: 'active'
    })

    // متوسط الإيرادات
    const averageRevenue = totalRevenue / revenue.length || 0

    return NextResponse.json({
      revenue,
      totalRevenue,
      activeSubscriptions,
      averageRevenue
    })
  } catch (error) {
    console.error('Error fetching financial data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch financial data' },
      { status: 500 }
    )
  }
} 