import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
<<<<<<< HEAD
import { authOptions } from '@/lib/auth-config'
=======
import { authOptions } from '../auth/[...nextauth]/route'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
import { writeFile } from 'fs/promises'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      )
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

<<<<<<< HEAD
    // Create unique filename
    const fileName = `${uuidv4()}${path.extname(file.name)}`
    const filePath = path.join(process.cwd(), 'public/uploads', fileName)
    
    // Save file
    await writeFile(filePath, buffer)
    
    // Return file URL
=======
    // إنشاء اسم فريد للملف
    const fileName = `${uuidv4()}${path.extname(file.name)}`
    const filePath = path.join(process.cwd(), 'public/uploads', fileName)
    
    // حفظ الملف
    await writeFile(filePath, buffer)
    
    // إرجاع رابط الصورة
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
    const url = `/uploads/${fileName}`

    return NextResponse.json({ url })
  } catch (error) {
    console.error('Error uploading file:', error)
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    )
  }
} 