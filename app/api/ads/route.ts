import { NextResponse } from 'next/server'
import { Advertisement } from '@/lib/models/Advertisement'
import { connectToDatabase } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
<<<<<<< HEAD
import { authOptions } from '@/lib/auth-config'
=======
import { authOptions } from '../auth/[...nextauth]/route'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

// إنشاء إعلان جديد
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
<<<<<<< HEAD
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
=======
      return NextResponse.json({ error: 'غير مصرح' }, { status: 401 })
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
    }

    await connectToDatabase()
    const data = await request.json()

<<<<<<< HEAD
    // إضافة تواريخ البداية والنهاية بناءً على مدة الباقة
    const startDate = data.startDate ? new Date(data.startDate) : new Date()
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + data.planDetails.duration)

    const adData = {
      ...data,
      startDate,
      endDate,
      active: true,
      featured: data.planDetails.isFeatured || data.featured,
      views: 0,
      clicks: 0,
      whatsappClicks: 0,
      phoneClicks: 0
    }

    const ad = await Advertisement.create(adData)
    return NextResponse.json(ad)
  } catch (error) {
    console.error('Error creating advertisement:', error)
    return NextResponse.json(
      { error: 'Failed to create advertisement' },
=======
    // التحقق من البيانات المطلوبة
    if (!data.companyName || !data.description || !data.cities || !data.services || !data.phoneNumber) {
      return NextResponse.json({ error: 'جميع الحقول المطلوبة يجب ملؤها' }, { status: 400 })
    }

    // إضافة تاريخ انتهاء الإعلان (30 يوم من تاريخ البداية)
    const startDate = new Date()
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 30)

    const advertisement = new Advertisement({
      ...data,
      startDate,
      endDate,
      status: 'pending'
    })

    await advertisement.save()

    return NextResponse.json(advertisement)
  } catch (error) {
    console.error('Error creating advertisement:', error)
    return NextResponse.json(
      { error: 'فشل في إنشاء الإعلان' },
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
      { status: 500 }
    )
  }
}

// الحصول على قائمة الإعلانات
export async function GET() {
  try {
    await connectToDatabase()
    const ads = await Advertisement.find().sort({ createdAt: -1 })
    return NextResponse.json(ads || [])
  } catch (error) {
    console.error('Error fetching ads:', error)
    return NextResponse.json([], { status: 500 })
  }
} 