'use client'

import { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts'

interface PlanStat {
  _id: string
  name: string
  nameAr: string
  price: number
  totalAds: number
  totalRevenue: number
  activeAds: number
}

interface MonthlyStat {
  _id: {
    year: number
    month: number
  }
  totalSales: number
  count: number
}

interface StatsData {
  planStats: PlanStat[]
  monthlyStats: MonthlyStat[]
}

export default function PlanStats() {
  const [stats, setStats] = useState<StatsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/plans/stats')
      if (!response.ok) {
        throw new Error('Failed to fetch stats')
      }
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error('Error fetching stats:', error)
      setError('حدث خطأ أثناء جلب الإحصائيات')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) return <div>جاري تحميل الإحصائيات...</div>
  if (error) return <div className="text-red-500">{error}</div>
  if (!stats) return <div>لا توجد إحصائيات متاحة</div>

  const planChartData = stats.planStats.map(stat => ({
    name: stat.nameAr,
    'إجمالي الإعلانات': stat.totalAds,
    'الإعلانات النشطة': stat.activeAds,
    'الإيرادات': stat.totalRevenue
  }))

  const monthlyChartData = stats.monthlyStats.map(stat => ({
    month: `${stat._id.month}/${stat._id.year}`,
    'المبيعات': stat.totalSales,
    'عدد الإعلانات': stat.count
  }))

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">إحصائيات الباقات</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={planChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="إجمالي الإعلانات" fill="#4F46E5" />
              <Bar dataKey="الإعلانات النشطة" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">المبيعات الشهرية</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="المبيعات"
                stroke="#4F46E5"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="عدد الإعلانات"
                stroke="#10B981"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.planStats.map((stat) => (
          <div key={stat._id} className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-medium text-lg mb-4">{stat.nameAr}</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">إجمالي الإعلانات:</span>
                <span className="font-medium">{stat.totalAds}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">الإعلانات النشطة:</span>
                <span className="font-medium">{stat.activeAds}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">الإيرادات:</span>
                <span className="font-medium">{stat.totalRevenue} ريال</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 