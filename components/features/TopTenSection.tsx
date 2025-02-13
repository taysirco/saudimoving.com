'use client'

import { useState } from 'react'
import { StarIcon, TrophyIcon, MapPinIcon, PhoneIcon, CheckBadgeIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import TopCompaniesList from './TopCompaniesList'

interface TopTenSectionProps {
  city: string
  service: string
}

export default function TopTenSection({ city, service }: TopTenSectionProps) {
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('rating')

  const filters = [
    { id: 'rating', name: 'التقييم الأعلى' },
    { id: 'reviews', name: 'عدد التقييمات' },
    { id: 'distance', name: 'الأقرب إليك' }
  ]

  const criteria = [
    {
      title: 'التقييمات والمراجعات',
      description: 'نعتمد على تقييمات العملاء الحقيقية وآرائهم'
    },
    {
      title: 'الخبرة والكفاءة',
      description: 'نقيم خبرة الشركة وكفاءة فريق العمل'
    },
    {
      title: 'الأسعار والخدمات',
      description: 'نقارن الأسعار وجودة الخدمات المقدمة'
    },
    {
      title: 'الضمانات والموثوقية',
      description: 'نتحقق من الضمانات والتراخيص الرسمية'
    }
  ]

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            قائمة محدثة لعام {new Date().getFullYear()}
          </div>
          <h2 className="text-4xl font-bold mb-6">
            أفضل 10 شركات {service} في {city}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            قائمة شاملة لأفضل شركات {service} في {city} مع المقارنة والتقييمات
          </p>
        </div>

        {/* Selection Criteria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {criteria.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-gray-50 p-4 rounded-xl mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="font-bold">ترتيب حسب:</span>
              <div className="flex gap-2">
                {filters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setSortBy(filter.id)}
                    className={`px-4 py-2 rounded-lg transition ${
                      sortBy === filter.id
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-primary"
            >
              <ChevronDownIcon className={`w-5 h-5 transition ${showFilters ? 'transform rotate-180' : ''}`} />
              خيارات التصفية
            </button>
          </div>
          
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              {/* Additional filters can be added here */}
            </div>
          )}
        </div>

        {/* Companies List */}
        <TopCompaniesList city={city} service={service} />

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">
            كيف نختار أفضل شركات {service} في {city}؟
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            نعتمد في اختيارنا على معايير صارمة تشمل تقييمات العملاء، جودة الخدمة، الأسعار التنافسية،
            والضمانات المقدمة. نقوم بتحديث هذه القائمة بشكل دوري لضمان دقة المعلومات.
          </p>
        </div>
      </div>
    </div>
  )
} 