import React from 'react'
import { SearchResult } from '@/types/google'
import { FaStar, FaMapMarkerAlt, FaPhone, FaGlobe, FaClock } from 'react-icons/fa'

interface ServiceResultsProps {
  results: SearchResult[]
}

export default function ServiceResults({ results }: ServiceResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">
          لم يتم العثور على نتائج. يرجى تعديل معايير البحث أو المحاولة لاحقاً.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="section-title mb-8">نتائج البحث</h2>
      {results.map((result) => (
        <div key={result.place_id} className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h3 className="card-title mb-3">{result.name}</h3>
          <p className="review-text text-gray-600">
            {result.formatted_address || result.vicinity || 'لا يوجد عنوان متاح'}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="font-medium">
                {result.rating ? `${result.rating}/5` : 'لا يوجد تقييم'}
              </span>
              {result.user_ratings_total && (
                <span className="text-gray-500 text-sm mr-2">
                  ({result.user_ratings_total} تقييم)
                </span>
              )}
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
              طلب عرض سعر
            </button>
          </div>
        </div>
      ))}
    </div>
  )
} 