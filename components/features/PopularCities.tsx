'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'
import { MapPinIcon } from '@heroicons/react/24/outline'

interface PopularCitiesProps {
  cities: string[]
}

export default function PopularCities({ cities }: PopularCitiesProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">المدن الرئيسية</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => {
            const cityInArabic = getArabicText(arabicToSlug(city))
            return (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/${arabicToSlug(city)}/moving-furniture`}
                  className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition">
                      <MapPinIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">
                        {cityInArabic}
                      </h3>
                      <p className="text-gray-600">
                        خدمات نقل العفش في {cityInArabic}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/cities"
            className="inline-block bg-white px-6 py-3 rounded-lg font-medium text-primary hover:bg-primary/5 transition"
          >
            عرض جميع المدن
          </Link>
        </div>
      </div>
    </section>
  )
} 