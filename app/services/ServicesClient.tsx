'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cities, keywords } from '@/lib/utils/data'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceCard from '@/components/common/ServiceCard'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'

interface ServiceClientProps {
  placeId?: string
<<<<<<< HEAD
  keywords: string[]
=======
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
}

export default function ServicesClient({ placeId }: ServiceClientProps) {
  const [selectedCity, setSelectedCity] = useState(cities[0])
  const cityInArabic = getArabicText(arabicToSlug(selectedCity))
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'جميع الخدمات' },
    { id: 'moving', name: 'نقل العفش' },
    { id: 'packaging', name: 'تغليف الأثاث' },
    { id: 'storage', name: 'تخزين العفش' }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-6">
              خدمات نقل العفش
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              اكتشف جميع خدمات نقل وتخزين الأثاث المتوفرة في المملكة العربية السعودية
            </p>
          </div>
        </div>

        {/* City Selection */}
        <div className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-6 py-2 rounded-full transition ${
                    selectedCity === city
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keywords
              .filter(service => 
                selectedCategory === 'all' || 
                service.includes(categories.find(c => c.id === selectedCategory)?.name || '')
              )
              .map((service) => (
                <Link
                  key={service}
                  href={`/${arabicToSlug(selectedCity)}/${arabicToSlug(service)}`}
                  className="block"
                >
                  <ServiceCard
                    service={service}
                    city={cityInArabic}
                    onClick={() => {}}
                    isSelected={false}
                    isLink={true}
                  />
                </Link>
              ))}
          </div>
        </div>
      </main>
<<<<<<< HEAD
      <Footer currentCity={cityInArabic} currentService="" />
=======
      <Footer currentCity={cityInArabic} />
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
    </>
  )
} 