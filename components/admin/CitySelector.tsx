'use client'

import { useState } from 'react'
import { cities } from '@/lib/utils/data'

interface CitySelectorProps {
  selectedCities: string[]
  onChange: (cities: string[]) => void
}

export default function CitySelector({ selectedCities, onChange }: CitySelectorProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCities = cities.filter(city => 
    city.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCityToggle = (city: string) => {
    const newSelection = selectedCities.includes(city)
      ? selectedCities.filter(c => c !== city)
      : [...selectedCities, city]
    onChange(newSelection)
  }

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="ابحث عن مدينة..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
      
      <div className="max-h-60 overflow-y-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {filteredCities.map((city) => (
            <label
              key={city}
              className="flex items-center p-2 border rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedCities.includes(city)}
                onChange={() => handleCityToggle(city)}
                className="ml-2"
              />
              <span className="text-sm">{city}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
} 