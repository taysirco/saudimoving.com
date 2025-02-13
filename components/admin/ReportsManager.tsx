'use client'

import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

interface Report {
  _id: string
  type: string
  data: any
  createdAt: string
}

export default function ReportsManager() {
  const [reports, setReports] = useState<Report[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchReports()
  }, [])

  const fetchReports = async () => {
    try {
      const response = await fetch('/api/reports')
      const data = await response.json()
      setReports(data)
    } catch (error) {
      console.error('Error fetching reports:', error)
      toast.error('حدث خطأ أثناء جلب التقارير')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) return <div>جاري تحميل التقارير...</div>

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">إدارة التقارير</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {reports.map((report) => (
            <li key={report._id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">
                  {report.type}
                </p>
                <p className="text-sm text-gray-500">
                  {new Date(report.createdAt).toLocaleDateString('ar-SA')}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 