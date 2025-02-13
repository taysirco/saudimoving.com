'use client'

import { useEffect, useState } from 'react'
import { StarIcon, TrophyIcon, PhoneIcon, MapPinIcon, ClockIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import type { SearchResult } from '@/lib/utils/data'
import CompanyCard from './CompanyCard'
import TopTenHeader from './TopTenHeader'

interface TopCompaniesListProps {
  city: string
  service: string
}

export default function TopCompaniesList({ city, service }: TopCompaniesListProps) {
  const [companies, setCompanies] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // توليد عناوين متنوعة
  const generateTitle = () => {
    const titles = [
      `أفضل 10 شركات ${service} في ${city}`,
      `افضل شركات ${service} في ${city} - القائمة الكاملة`,
      `قائمة أفضل 10 شركات ${service} في ${city} لعام ${new Date().getFullYear()}`,
      `دليل أفضل شركات ${service} في ${city} مع التقييمات`,
      `The 10 Best ${service} Companies in ${city}`
    ]
    return titles[Math.floor(Math.random() * titles.length)]
  }

  useEffect(() => {
    async function fetchCompanies() {
      try {
        const response = await fetch(`/api/search?city=${encodeURIComponent(city)}&service=${encodeURIComponent(service)}`)
        const data = await response.json()
        
        if (data.error) {
          throw new Error(data.error)
        }
        
        setCompanies(data.results)
      } catch (err) {
        setError('حدث خطأ في جلب النتائج')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCompanies()
  }, [city, service])

  if (loading) {
    return <div className="animate-pulse space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-gray-100 h-32 rounded-lg" />
      ))}
    </div>
  }

  if (error) {
    return <div className="text-red-600 p-4 rounded-lg bg-red-50">{error}</div>
  }

  const getRankBadgeStyle = (index: number) => {
    switch(index) {
      case 0:
        return 'bg-yellow-500' // ذهبي
      case 1:
        return 'bg-gray-400' // فضي
      case 2:
        return 'bg-amber-600' // برونزي
      default:
        return 'bg-primary'
    }
  }

  const getVerificationBadge = (rating: number) => {
    if (rating >= 4.5) return 'موثوق ومميز'
    if (rating >= 4.0) return 'موثوق'
    return ''
  }

  return (
    <div>
      <TopTenHeader city={city} service={service} />
      
      {/* Companies List */}
      <div className="space-y-8">
        {companies.map((company, index) => (
          <CompanyCard
            key={company.id}
            company={company}
            rank={index + 1}
          />
        ))}
      </div>
    </div>
  )
} 