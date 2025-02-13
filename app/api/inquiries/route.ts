import { NextResponse } from 'next/server'
<<<<<<< HEAD
import { connectDB } from '@/lib/mongodb'
=======
import { connectToDatabase } from '@/lib/mongodb'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
import { Inquiry } from '@/lib/models/Inquiry'

export async function POST(request: Request) {
  try {
<<<<<<< HEAD
    await connectDB()
    const data = await request.json()
    
    const inquiry = await Inquiry.create({
      ...data,
      metadata: {
        userAgent: request.headers.get('user-agent'),
        ip: request.headers.get('x-forwarded-for'),
        referrer: request.headers.get('referer')
      }
    })

    return NextResponse.json({ success: true, inquiry })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'حدث خطأ في إرسال الطلب' },
=======
    await connectToDatabase()
    const data = await request.json()

    const inquiry = new Inquiry(data)
    await inquiry.save()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error creating inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to create inquiry' },
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
      { status: 500 }
    )
  }
} 