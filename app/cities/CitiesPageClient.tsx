'use client'

import Header from '@/components/layout/Header'
import { cities } from '@/lib/utils/data'
import { arabicToEnglishCity } from '@/lib/utils/text'
import Link from 'next/link'
import { 
  UserGroupIcon, 
  BuildingOfficeIcon, 
  TruckIcon,
  StarIcon 
} from '@heroicons/react/24/outline'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

// بيانات إحصائية لكل مدينة مع تنوع أكبر في الأرقام
const cityStats: { [key: string]: { customers: number, companies: number, moves: number, rating: number } } = {
  // المدن الكبرى
  'الرياض': { customers: 24680, companies: 187, moves: 38450, rating: 4.8 },
  'جدة': { customers: 19870, companies: 156, moves: 31240, rating: 4.7 },
  'مكة المكرمة': { customers: 16540, companies: 134, moves: 25780, rating: 4.9 },
  'المدينة المنورة': { customers: 13280, companies: 112, moves: 21450, rating: 4.8 },
  'الدمام': { customers: 11920, companies: 98, moves: 19670, rating: 4.7 },
  // ... باقي المدن ...
}

// القيم الافتراضية لأي مدينة غير مدرجة
const defaultStats = {
  customers: 500,
  companies: 5,
  moves: 800,
  rating: 4.5
}

// تحضير البيانات للمخطط البياني - أخذ أكبر 10 مدن
const topCitiesData = Object.entries(cityStats)
  .sort(([, a], [, b]) => b.customers - a.customers)
  .slice(0, 10)
  .map(([city, stats]) => ({
    name: city,
    عملاء: stats.customers,
    شركات: stats.companies,
    'عمليات نقل': stats.moves,
    تقييم: stats.rating * 1000
  }))

export default function CitiesPageClient() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-gray-50 to-white">
        {/* قسم المخطط البياني */}
        <section className="py-16 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                إحصائيات نقل العفش في المدن الرئيسية
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={topCitiesData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="name"
                      tick={{ fontSize: 12 }}
                      interval={0}
                      angle={-45}
                      textAnchor="end"
                    />
                    <YAxis />
                    <Tooltip 
                      formatter={(value, name) => {
                        if (name === 'تقييم') {
<<<<<<< HEAD
                          return [(Number(value) / 1000).toFixed(1), name]
=======
                          return [(value / 1000).toFixed(1), name]
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
                        }
                        return [value.toLocaleString(), name]
                      }}
                    />
                    <Legend />
                    <Bar dataKey="عملاء" fill="#3B82F6" />
                    <Bar dataKey="شركات" fill="#10B981" />
                    <Bar dataKey="عمليات نقل" fill="#8B5CF6" />
                    <Bar dataKey="تقييم" fill="#F59E0B" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* إضافة ملخص سريع للإحصائيات */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-blue-600 font-bold text-2xl">
                    {Object.values(cityStats).reduce((sum, stat) => sum + stat.customers, 0).toLocaleString()}+
                  </div>
                  <div className="text-blue-900">إجمالي العملاء</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-green-600 font-bold text-2xl">
                    {Object.values(cityStats).reduce((sum, stat) => sum + stat.companies, 0).toLocaleString()}+
                  </div>
                  <div className="text-green-900">إجمالي الشركات</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-purple-600 font-bold text-2xl">
                    {Object.values(cityStats).reduce((sum, stat) => sum + stat.moves, 0).toLocaleString()}+
                  </div>
                  <div className="text-purple-900">إجمالي عمليات النقل</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg text-center">
                  <div className="text-amber-600 font-bold text-2xl">
                    {(Object.values(cityStats).reduce((sum, stat) => sum + stat.rating, 0) / Object.keys(cityStats).length).toFixed(1)}
                  </div>
                  <div className="text-amber-900">متوسط التقييم</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* قسم قائمة المدن */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-center mb-4">
                خدمات نقل العفش في مدن المملكة
              </h1>
              <p className="text-gray-600 text-center mb-12">
                اختر مدينتك للحصول على أفضل خدمات نقل العفش مع ضمان الجودة
              </p>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cities.map((city) => {
                  const stats = cityStats[city] || defaultStats
                  return (
                    <Link
                      key={city}
                      href={`/${arabicToEnglishCity(city)}`}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100"
                    >
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary">
                        نقل عفش {city}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4">
                        خدمات نقل الأثاث والعفش في {city} مع الفك والتركيب والتغليف
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg">
                          <UserGroupIcon className="w-5 h-5 text-blue-600" />
                          <span className="text-blue-900">{stats.customers.toLocaleString()}+ عميل</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-50 p-2 rounded-lg">
                          <BuildingOfficeIcon className="w-5 h-5 text-green-600" />
                          <span className="text-green-900">{stats.companies}+ شركة</span>
                        </div>
                        <div className="flex items-center gap-2 bg-purple-50 p-2 rounded-lg">
                          <TruckIcon className="w-5 h-5 text-purple-600" />
                          <span className="text-purple-900">{stats.moves.toLocaleString()}+ نقلة</span>
                        </div>
                        <div className="flex items-center gap-2 bg-amber-50 p-2 rounded-lg">
                          <StarIcon className="w-5 h-5 text-amber-500" />
                          <span className="text-amber-900">{stats.rating} تقييم</span>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 