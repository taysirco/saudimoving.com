'use client'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { ar } from 'date-fns/locale'

interface ExpiredAd {
  _id: string
  companyName: string
  endDate: string
  cities: { nameAr: string }[]
}

export default function ExpiredAds() {
  const [expiredAds, setExpiredAds] = useState<ExpiredAd[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchExpiredAds()
  }, [])

  const fetchExpiredAds = async () => {
    try {
      const response = await fetch('/api/ads?status=stopped')
      const data = await response.json()
      setExpiredAds(data)
    } catch (error) {
      console.error('Error fetching expired ads:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div className="text-center py-4">جاري التحميل...</div>
  }

  if (expiredAds.length === 0) {
    return <div className="text-center py-4">لا توجد إعلانات منتهية</div>
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          الإعلانات المنتهية
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          قائمة بالإعلانات التي انتهت صلاحيتها
        </p>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {expiredAds.map((ad) => (
            <li key={ad._id} className="px-4 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {ad.companyName}
                  </h4>
                  <p className="text-sm text-gray-500">
                    المدن: {ad.cities.map(city => city.nameAr).join('، ')}
                  </p>
                  <p className="text-sm text-gray-500">
                    تاريخ الانتهاء: {format(new Date(ad.endDate), 'dd/MM/yyyy', { locale: ar })}
                  </p>
                </div>
                <button
                  onClick={() => {/* يمكن إضافة وظيفة التجديد هنا */}}
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  تجديد
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 