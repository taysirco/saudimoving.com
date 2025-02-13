'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'

interface ServicesListProps {
  keywords: string[]
}

export default function ServicesList({ keywords }: ServicesListProps) {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8">خدماتنا</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {keywords.map((service) => {
          const serviceInArabic = getArabicText(arabicToSlug(service))
          return (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/riyadh/${arabicToSlug(service)}`}
                className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold mb-2">{serviceInArabic}</h3>
                <p className="text-gray-600">
                  خدمة {serviceInArabic} في جميع مدن المملكة
                </p>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
} 