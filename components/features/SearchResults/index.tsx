'use client'

import { useEffect, useState } from 'react'
import { SearchResult } from '@/lib/utils/data'
import { StarIcon } from '@heroicons/react/20/solid'

interface SearchResultsProps {
  city: string
  service: string
}

export default function SearchResults({ city, service }: SearchResultsProps) {
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchResults() {
      try {
        const response = await fetch(`/api/search?city=${encodeURIComponent(city)}&service=${encodeURIComponent(service)}`)
        const data = await response.json()
        
        if (data.error) {
          throw new Error(data.error)
        }
        
        setResults(data.results)
      } catch (err) {
        setError('حدث خطأ في جلب النتائج')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchResults()
  }, [city, service])

  if (loading) {
    return <div className="animate-pulse bg-white rounded-lg h-96"></div>
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        {error}
      </div>
    )
  }

  if (!results.length) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <p className="text-gray-600">لم يتم العثور على نتائج</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {results.map((result) => (
        <div 
          key={result.id}
          className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
        >
          <h2 className="text-xl font-bold mb-2">{result.name}</h2>
          
          {result.rating && (
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(result.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 mr-2">
                ({result.userRatingsTotal} تقييم)
              </span>
            </div>
          )}
          
          <p className="text-gray-600 mb-4">{result.address}</p>
          
          {result.phone && (
            <p className="text-gray-600 mb-4">
              <span className="font-medium">الهاتف:</span> {result.phone}
            </p>
          )}
          
          <div className="flex gap-4">
            {result.phone && (
              <a
                href={`tel:${result.phone}`}
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition"
              >
                اتصل الآن
              </a>
            )}
            {result.website && (
              <a
                href={result.website}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition"
              >
                زيارة الموقع
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
} 