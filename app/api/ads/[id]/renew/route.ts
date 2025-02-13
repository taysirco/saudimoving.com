import { NextResponse } from 'next/server'
import { Advertisement } from '@/lib/models/Advertisement'
import { Plan } from '@/lib/models/Plan'
import { connectToDatabase } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
<<<<<<< HEAD
import { authOptions } from '@/lib/auth-config'
=======
import { authOptions } from '../../../auth/[...nextauth]/route'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = params
    const { planId } = await request.json()

    await connectToDatabase()

    // التحقق من وجود الإعلان
    const ad = await Advertisement.findById(id)
    if (!ad) {
      return NextResponse.json(
        { error: 'Advertisement not found' },
        { status: 404 }
      )
    }

    // التحقق من وجود الباقة
    const plan = await Plan.findById(planId)
    if (!plan) {
      return NextResponse.json(
        { error: 'Plan not found' },
        { status: 404 }
      )
    }

    // تحديث تواريخ الإعلان وتفاصيل الباقة
    const startDate = new Date()
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + plan.duration)

    const updatedAd = await Advertisement.findByIdAndUpdate(
      id,
      {
        plan: planId,
        planDetails: {
          name: plan.name,
          nameAr: plan.nameAr,
          price: plan.price,
          duration: plan.duration,
          features: plan.features,
          maxCities: plan.maxCities,
          isFeatured: plan.isFeatured,
          maxImages: plan.maxImages
        },
        startDate,
        endDate,
        status: 'active',
        paymentStatus: 'pending'
      },
      { new: true }
    )

    return NextResponse.json(updatedAd)
  } catch (error) {
    console.error('Error renewing advertisement:', error)
    return NextResponse.json(
      { error: 'Failed to renew advertisement' },
      { status: 500 }
    )
  }
} 