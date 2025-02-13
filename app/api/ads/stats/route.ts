<<<<<<< HEAD
import { NextResponse } from 'next/server'
import { Advertisement } from '@/lib/models/Advertisement'
import { connectToDatabase } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectToDatabase()

    // إجمالي الإعلانات
    const totalAds = await Advertisement.countDocuments()
    
    // الإعلانات حسب الحالة
    const activeAds = await Advertisement.countDocuments({ status: 'active' })
    const pausedAds = await Advertisement.countDocuments({ status: 'paused' })
    const stoppedAds = await Advertisement.countDocuments({ status: 'stopped' })

    // الإعلانات حسب المدينة
    const adsByCity = await Advertisement.aggregate([
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
      { $sort: { count: -1 } }
    ])

    return NextResponse.json({
      totalAds,
      activeAds,
      pausedAds,
      stoppedAds,
      adsByCity
    })
  } catch (error) {
    console.error('Error fetching ad stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch ad stats' },
      { status: 500 }
    )
  }
} 
=======
// حذف الملف لأنه غير مستخدم
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
