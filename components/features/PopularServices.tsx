'use client'

import Link from 'next/link'
import { keywords } from '@/lib/utils/data'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'

export default function PopularServices() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">الخدمات الأكثر طلباً</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keywords.slice(0, 6).map((service) => {
            const serviceInArabic = getArabicText(arabicToSlug(service))
            return (
              <Link
                key={service}
                href={`/riyadh/${arabicToSlug(service)}`}
                className="p-4 bg-white rounded-lg hover:bg-gray-100 transition"
              >
                <h3 className="font-medium">{serviceInArabic}</h3>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
} 