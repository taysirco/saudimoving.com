'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { cities } from '@/lib/utils/data'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

interface Props {
  title?: string
  subtitle?: string
}

export default function HomeHeader({ 
  title = "خدمات نقل العفش في المملكة العربية السعودية",
  subtitle = "نقل آمن وسريع مع أفضل شركات نقل العفش المعتمدة"
}: Props) {
  const router = useRouter()
  const [selectedCity, setSelectedCity] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedCity) {
      router.push(`/${selectedCity}/نقل-عفش`)
    }
  }

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl text-blue-100">
            {subtitle}
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-lg p-2 flex">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="flex-grow p-4 text-gray-800 bg-transparent outline-none text-lg"
              required
            >
              <option value="">اختر المدينة</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition duration-200 flex items-center"
            >
              <MagnifyingGlassIcon className="h-6 w-6 ml-2" />
              <span>بحث</span>
            </button>
          </form>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">خدمة سريعة</h3>
              <p className="text-blue-100">نصل إليك في أسرع وقت ممكن</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">أسعار تنافسية</h3>
              <p className="text-blue-100">أفضل الأسعار مع ضمان الجودة</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">فريق محترف</h3>
              <p className="text-blue-100">فنيون متخصصون في نقل وفك وتركيب الأثاث</p>
            </div>
          </div>

          {/* Popular Cities */}
          <div className="mt-12 text-center">
            <h3 className="text-xl mb-4">المدن الأكثر طلباً</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {cities.slice(0, 6).map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    setSelectedCity(city)
                    router.push(`/${city}/نقل-عفش`)
                  }}
                  className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full transition duration-200"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 