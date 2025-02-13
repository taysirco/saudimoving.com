'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { cities, keywords } from '@/lib/utils/data'

export default function SearchBox() {
  const router = useRouter()
  const [city, setCity] = useState('')
  const [service, setService] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (city && service) {
      router.push(`/${city}/${service}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-3 rounded-lg text-right"
      >
        <option value="">اختر المدينة</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="p-3 rounded-lg text-right"
      >
        <option value="">اختر الخدمة</option>
        {keywords.map((keyword) => (
          <option key={keyword} value={keyword}>{keyword}</option>
        ))}
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        بحث
      </button>
    </form>
  )
} 