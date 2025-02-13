import { NextResponse } from 'next/server'
import { Settings } from '@/lib/models/Settings'
import { connectToDatabase } from '@/lib/mongodb'
import { getServerSession } from 'next-auth'
<<<<<<< HEAD
import { authOptions } from '@/lib/auth-config'
=======
import { authOptions } from '../auth/[...nextauth]/route'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

export async function GET(request: Request) {
  try {
    await connectToDatabase()

    const settings = await Settings.findOne()
    if (!settings) {
      // إنشاء إعدادات افتراضية إذا لم تكن موجودة
      const defaultSettings = new Settings({
        siteName: 'سعودي موفينج',
        siteDescription: 'منصة للإعلانات المبوبة',
        contactEmail: 'contact@example.com',
        phoneNumber: '',
        whatsappNumber: '',
        socialLinks: {},
        adSettings: {
          maxImagesPerAd: 5,
          maxDaysPerAd: 30,
          featuredAdPrice: 100
        }
      })
      await defaultSettings.save()
      return NextResponse.json(defaultSettings)
    }

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Error fetching settings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()
    await connectToDatabase()

    const settings = await Settings.findOneAndUpdate(
      {},
      { $set: data },
      { new: true, upsert: true }
    )

    return NextResponse.json(settings)
  } catch (error) {
    console.error('Error updating settings:', error)
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    )
  }
} 