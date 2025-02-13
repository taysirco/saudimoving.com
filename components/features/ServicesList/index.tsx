import React from 'react'
import Link from 'next/link'

interface ServicesListProps {
  keywords: string[]
  city?: string
}

export default function ServicesList({ keywords, city }: ServicesListProps) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6">خدماتنا</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {keywords.map((keyword) => (
          <Link
            key={keyword}
            href={city ? `/${encodeURIComponent(city)}/${encodeURIComponent(keyword)}` : `/services`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{keyword}</h3>
            {city && (
              <p className="text-gray-600">{keyword} في {city}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  )
} 