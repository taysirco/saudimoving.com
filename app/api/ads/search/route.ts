import { NextResponse } from 'next/server'
import { Advertisement } from '@/lib/models/Advertisement'
import { connectToDatabase } from '@/lib/mongodb'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const city = searchParams.get('city')
    const service = searchParams.get('service')

    if (!city || !service) {
      return NextResponse.json({ error: 'City and service are required' }, { status: 400 })
    }

    await connectToDatabase()

    // البحث عن الإعلانات النشطة في المدينة والخدمة المحددة
    const ads = await Advertisement.find({
      cities: city,
      services: service,
      active: true,
      startDate: { $lte: new Date() },
      endDate: { $gte: new Date() }
    }).sort({ 
      featured: -1,  // الإعلانات المميزة أولاً
      priority: -1,  // ثم حسب الأولوية
      createdAt: -1  // ثم الأحدث
    })

    return NextResponse.json(ads)
  } catch (error) {
    console.error('Error searching ads:', error)
    return NextResponse.json({ error: 'Failed to search ads' }, { status: 500 })
  }
} 