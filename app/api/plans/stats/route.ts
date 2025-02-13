import { NextResponse } from 'next/server'
import { Plan } from '@/lib/models/Plan'
import { Advertisement } from '@/lib/models/Advertisement'
import { connectToDatabase } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
<<<<<<< HEAD
import { authOptions } from '@/lib/auth-config'
=======
import { authOptions } from '../../auth/[...nextauth]/route'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()

    // إحصائيات الباقات
    const planStats = await Plan.aggregate([
      {
        $lookup: {
          from: 'advertisements',
          localField: '_id',
          foreignField: 'plan',
          as: 'ads'
        }
      },
      {
        $project: {
          name: 1,
          nameAr: 1,
          price: 1,
          totalAds: { $size: '$ads' },
          totalRevenue: { $multiply: ['$price', { $size: '$ads' }] },
          activeAds: {
            $size: {
              $filter: {
                input: '$ads',
                as: 'ad',
                cond: { $eq: ['$$ad.paymentStatus', 'paid'] }
              }
            }
          }
        }
      }
    ])

    // إحصائيات المبيعات الشهرية
    const monthlyStats = await Advertisement.aggregate([
      {
        $match: {
          paymentStatus: 'paid'
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          totalSales: { $sum: '$planDetails.price' },
          count: { $sum: 1 }
        }
      },
      {
        $sort: {
          '_id.year': -1,
          '_id.month': -1
        }
      },
      {
        $limit: 12
      }
    ])

    return NextResponse.json({
      planStats,
      monthlyStats
    })
  } catch (error) {
    console.error('Error fetching plan stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch plan stats' },
      { status: 500 }
    )
  }
} 