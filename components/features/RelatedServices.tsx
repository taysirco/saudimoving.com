'use client'

import Link from 'next/link'
import { keywords } from '@/lib/utils/data'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'

interface RelatedServicesProps {
  city: string
  currentService: string
}

export default function RelatedServices({ city, currentService }: RelatedServicesProps) {
  const cityName = getArabicText(city)
  const serviceInArabic = getArabicText(arabicToSlug(currentService))
  
  const services = keywords
    .filter(service => service !== currentService)
    .slice(0, 9)
    .map((service) => ({
      title: getArabicText(arabicToSlug(service))
    }))

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">خدمات {serviceInArabic} في {cityName}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => {
            return (
              <Link
                key={service.title}
                href={`/${arabicToSlug(city)}/${arabicToSlug(service.title)}`}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group"
              >
                <h3 className="font-medium group-hover:text-primary transition">
                  {service.title} في {cityName}
                </h3>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
} 