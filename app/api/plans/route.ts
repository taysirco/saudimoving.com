import { NextResponse } from 'next/server'
import { Plan } from '@/lib/models/Plan'
import { connectToDatabase } from '@/lib/mongodb'

export async function GET() {
  try {
    await connectToDatabase()
    const plans = await Plan.find().sort({ price: 1 })
    return NextResponse.json(plans)
  } catch (error) {
    console.error('Error fetching plans:', error)
    return NextResponse.json({ error: 'Failed to fetch plans' }, { status: 500 })
  }
} 