'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { majorCities } from '@/lib/utils/data'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'

interface HeroProps {
  title: string
  subtitle: string
  city: string
  service: string
}

export default function Hero({ title, subtitle, city, service }: HeroProps) {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
          
          {/* Popular Cities */}
          <div className="flex flex-wrap justify-center gap-4">
            {majorCities.slice(0, 6).map((city) => {
              const cityInArabic = getArabicText(arabicToSlug(city))
              return (
                <Link
                  key={city}
                  href={`/${arabicToSlug(city)}/moving-furniture`}
                  className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition"
                >
                  نقل عفش {cityInArabic}
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 