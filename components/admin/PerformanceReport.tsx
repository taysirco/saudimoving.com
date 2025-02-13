'use client'

import { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts'

interface PerformanceData {
  views: {
    date: string
    count: number
  }[]
  clicks: {
    date: string
    count: number
  }[]
  conversions: {
    date: string
    count: number
  }[]
}

export default function PerformanceReport() {
  const [data, setData] = useState<PerformanceData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [dateRange, setDateRange] = useState('week') // week, month, year

  useEffect(() => {
    fetchPerformanceData()
  }, [dateRange])

  const fetchPerformanceData = async () => {
    try {
      const response = await fetch(`/api/ads/performance?range=${dateRange}`)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error('Error fetching performance data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) return <div>جاري تحميل التقرير...</div>
  if (!data) return null

  // تحويل البيانات إلى تنسيق مناسب للرسم البياني
  const chartData = data.views.map((item, index) => ({
    date: item.date,
    مشاهدات: item.count,
    نقرات: data.clicks[index]?.count || 0,
    تحويلات: data.conversions[index]?.count || 0,
  }))

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">تقرير الأداء</h3>
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

      <div className="bg-white p-4 rounded-lg shadow">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="مشاهدات" fill="#4F46E5" />
              <Bar dataKey="نقرات" fill="#10B981" />
              <Bar dataKey="تحويلات" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-sm font-medium text-gray-500">إجمالي المشاهدات</h4>
          <p className="text-2xl font-bold">
            {data.views.reduce((sum, item) => sum + item.count, 0)}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-sm font-medium text-gray-500">إجمالي النقرات</h4>
          <p className="text-2xl font-bold">
            {data.clicks.reduce((sum, item) => sum + item.count, 0)}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-sm font-medium text-gray-500">إجمالي التحويلات</h4>
          <p className="text-2xl font-bold">
            {data.conversions.reduce((sum, item) => sum + item.count, 0)}
          </p>
        </div>
      </div>
    </div>
  )
} 