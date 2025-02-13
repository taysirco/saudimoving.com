import React from 'react'
import Link from 'next/link'

interface CityCardProps {
  name: string
}

export default function CityCard({ name }: CityCardProps) {
  return (
    <Link 
      href={`/${name}`}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">خدمات نقل العفش في {name}</p>
    </Link>
  )
} 