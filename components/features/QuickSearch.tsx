'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { cities, keywords } from '@/lib/utils/data'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'
import { MapPinIcon, TruckIcon } from '@heroicons/react/24/outline'

export default function QuickSearch() {
  const router = useRouter()
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedService, setSelectedService] = useState('')

  const handleSearch = () => {
    if (selectedCity && selectedService) {
      router.push(`/${selectedCity}/${selectedService}`)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-primary/10 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            ابحث عن خدمة نقل عفش
          </h1>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="relative">
                <MapPinIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full pr-10 py-3 rounded-lg border"
                >
                  <option value="">اختر المدينة</option>
                  {cities.map((city) => (
                    <option key={city} value={arabicToSlug(city)}>
                      {getArabicText(arabicToSlug(city))}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <TruckIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full pr-10 py-3 rounded-lg border"
                >
                  <option value="">اختر الخدمة</option>
                  {keywords.map((service) => (
                    <option key={service} value={arabicToSlug(service)}>
                      {getArabicText(arabicToSlug(service))}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={handleSearch}
              disabled={!selectedCity || !selectedService}
              className="w-full bg-primary text-white py-3 rounded-lg font-bold"
            >
              ابحث عن الخدمة
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 