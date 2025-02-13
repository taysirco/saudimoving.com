'use client'

import { useState, useEffect } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

interface FinancialData {
  revenue: {
    date: string
    amount: number
  }[]
  totalRevenue: number
  activeSubscriptions: number
  averageRevenue: number
}

export default function FinancialReport() {
  const [data, setData] = useState<FinancialData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [dateRange, setDateRange] = useState('month')

  useEffect(() => {
    fetchFinancialData()
  }, [dateRange])

  const fetchFinancialData = async () => {
    try {
      const response = await fetch(`/api/ads/financial?range=${dateRange}`)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error('Error fetching financial data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) return <div>جاري تحميل التقرير المالي...</div>
  if (!data) return null

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">التقرير المالي</h2>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="week">آخر أسبوع</option>
          <option value="month">آخر شهر</option>
          <option value="year">آخر سنة</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">إجمالي الإيرادات</h3>
          <p className="text-2xl font-bold">{data.totalRevenue} ريال</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">الاشتراكات النشطة</h3>
          <p className="text-2xl font-bold">{data.activeSubscriptions}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">متوسط الإيرادات</h3>
          <p className="text-2xl font-bold">{data.averageRevenue} ريال</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">الإيرادات</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.revenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#4F46E5"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
} 