<<<<<<< HEAD
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Your validation logic here
  return NextResponse.json({ message: 'Validation endpoint' });
=======
import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { Advertisement } from '@/lib/models/Advertisement'

export async function POST(request: Request) {
  try {
    await connectToDatabase()
    const data = await request.json()

    // التحقق من البيانات المطلوبة
    const requiredFields = ['companyName', 'description', 'cities', 'services', 'phoneNumber']
    const missingFields = requiredFields.filter(field => !data[field])

    if (missingFields.length > 0) {
      return NextResponse.json({
        valid: false,
        errors: missingFields.map(field => `${field} is required`)
      })
    }

    // التحقق من تنسيق رقم الهاتف
    const phoneRegex = /^(05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
    if (!phoneRegex.test(data.phoneNumber)) {
      return NextResponse.json({
        valid: false,
        errors: ['Invalid phone number format']
      })
    }

    return NextResponse.json({ valid: true })
  } catch (error) {
    console.error('Error validating ad:', error)
    return NextResponse.json(
      { error: 'Failed to validate advertisement' },
      { status: 500 }
    )
  }
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
} 