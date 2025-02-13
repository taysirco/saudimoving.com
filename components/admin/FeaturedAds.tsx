'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

interface FeaturedAd {
  _id: string
  companyName: string
  imageUrl: string
  cities: { nameAr: string }[]
  isFeatured: boolean
}

export default function FeaturedAds() {
  const [ads, setAds] = useState<FeaturedAd[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedAds()
  }, [])

  const fetchFeaturedAds = async () => {
    try {
      const response = await fetch('/api/ads/featured')
      const data = await response.json()
      setAds(data)
    } catch (error) {
      console.error('Error fetching featured ads:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const toggleFeatured = async (adId: string, isFeatured: boolean) => {
    try {
      const response = await fetch(`/api/ads/${adId}/featured`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isFeatured: !isFeatured }),
      })

      if (!response.ok) throw new Error('Failed to update featured status')

      await fetchFeaturedAds()
    } catch (error) {
      console.error('Error updating featured status:', error)
    }
  }

  if (isLoading) {
    return <div className="text-center py-4">جاري التحميل...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {ads.map((ad) => (
        <motion.div
          key={ad._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative">
            <img
              src={ad.imageUrl}
              alt={ad.companyName}
              className="w-full h-48 object-cover"
            />
            <button
              onClick={() => toggleFeatured(ad._id, ad.isFeatured)}
              className={`absolute top-2 right-2 p-2 rounded-full ${
                ad.isFeatured ? 'bg-yellow-400' : 'bg-gray-200'
              }`}
            >
              <StarIcon className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-lg mb-2">{ad.companyName}</h3>
            <p className="text-sm text-gray-600">
              المدن: {ad.cities.map(city => city.nameAr).join('، ')}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 