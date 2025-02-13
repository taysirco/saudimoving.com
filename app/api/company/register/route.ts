import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // التحقق من البيانات المطلوبة
    if (!data.companyName || !data.city || !data.phone) {
      return NextResponse.json(
        { error: 'جميع الحقول مطلوبة' },
        { status: 400 }
      )
    }

    // تنظيف وتجهيز البيانات
    const company = {
      companyName: data.companyName.trim(),
      city: data.city.trim(),
      phone: data.phone.trim(),
      email: data.email?.trim() || '',
      services: data.services || [],
      description: data.description?.trim() || '',
      createdAt: new Date(),
      status: 'pending', // pending, approved, rejected
      verified: false
    }

    // الاتصال بقاعدة البيانات
    const client = await MongoClient.connect(uri)
    const db = client.db('saudiamoving')
    
    // التحقق من عدم وجود الشركة مسبقاً
    const existingCompany = await db.collection('companies').findOne({
      $or: [
        { companyName: company.companyName },
        { phone: company.phone }
      ]
    })

    if (existingCompany) {
      await client.close()
      return NextResponse.json(
        { error: 'الشركة مسجلة مسبقاً بنفس الاسم أو رقم الهاتف' },
        { status: 400 }
      )
    }

    // إضافة الشركة
    await db.collection('companies').insertOne(company)
    await client.close()

    return NextResponse.json({
      success: true,
      message: 'تم تسجيل الشركة بنجاح وسيتم مراجعة الطلب'
    })

  } catch (error) {
    console.error('Registration Error:', error)
    return NextResponse.json(
      { 
        error: 'حدث خطأ في التسجيل',
        details: error instanceof Error ? error.message : 'خطأ غير معروف'
      },
      { status: 500 }
    )
  }
} 