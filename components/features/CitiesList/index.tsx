import React from 'react'
import Link from 'next/link'
import { cities } from '@/lib/utils/data'

export default function CitiesList() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6">المدن الرئيسية</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city) => (
          <Link
            key={city}
            href={`/${encodeURIComponent(city)}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{city}</h3>
            <p className="text-gray-600">خدمات نقل العفش في {city}</p>
          </Link>
        ))}
      </div>
    </section>
  )
} 