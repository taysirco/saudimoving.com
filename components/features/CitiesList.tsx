'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { arabicToSlug } from '@/lib/utils/data'

interface CitiesListProps {
  cities: string[]
}

export default function CitiesList({ cities }: CitiesListProps) {
  // بيانات إحصائية عشوائية لكل مدينة - يمكن استبدالها ببيانات حقيقية لاحقاً
  const getCityStats = (city: string) => ({
    companies: Math.floor(Math.random() * 20) + 30, // 30-50 شركة
    districts: Math.floor(Math.random() * 30) + 20, // 20-50 حي
    customers: Math.floor(Math.random() * 5000) + 5000, // 5000-10000 عميل
    ratings: Math.floor(Math.random() * 3000) + 2000, // 2000-5000 تقييم
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cities.map((city, index) => {
        const citySlug = arabicToSlug(city)
        const stats = getCityStats(city)
        
        return (
          <motion.div
            key={city}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex flex-col space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">نقل عفش {city}</h2>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-blue-600 font-bold text-lg">{stats.companies}</div>
                  <div className="text-gray-600">شركة نقل عفش</div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-green-600 font-bold text-lg">{stats.districts}</div>
                  <div className="text-gray-600">حي سكني</div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-purple-600 font-bold text-lg">{stats.customers.toLocaleString()}</div>
                  <div className="text-gray-600">عميل تم خدمتهم</div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="text-yellow-600 font-bold text-lg">{stats.ratings.toLocaleString()}</div>
                  <div className="text-gray-600">تقييم للخدمة</div>
                </div>
              </div>

              <Link
                href={`/${citySlug}`}
                className="bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 text-center mt-2 transition-colors"
              >
                عرض شركات نقل العفش
              </Link>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
} 