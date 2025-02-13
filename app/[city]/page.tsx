import React from 'react'
import { cities, keywords, generateMetaTitle, generateMetaDescription } from '@/lib/utils/data'
import ServiceCard from '@/components/features/ServiceCard'
import CityHero from '@/components/features/CityHero'
import { Metadata } from 'next'
import ServicesList from '@/components/features/ServicesList'
import CityIndexClient from '@/app/[city]/CityIndexClient'
import { decodeArabicText, arabicToSlug, getArabicText } from '@/lib/utils/text'
import CityReviews from '@/components/features/CityReviews'

interface PageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityName = getArabicText(params.city)
  return {
    title: `أفضل شركات نقل العفش في ${cityName} - أسعار وتقييمات حقيقية`,
    description: `مقارنة شاملة لأفضل شركات نقل العفش في ${cityName} مع تقييمات حقيقية وأسعار شفافة ✓ خدمة 24 ساعة ✓ ضمان ✓ تغليف احترافي`,
    alternates: {
      canonical: `https://your-domain.com/${params.city}`,
    },
    openGraph: {
      title: `شركات نقل العفش في ${cityName} - مقارنة الأسعار والخدمات`,
      description: `تعرف على أفضل شركات نقل العفش في ${cityName} مع مقارنة شاملة للأسعار والخدمات والتقييمات الحقيقية من العملاء`,
    }
  }
}

// توليد صفحات لكل المدن
export async function generateStaticParams() {
  return cities.map(city => ({
    city: arabicToSlug(city)
  }))
}

export default function CityPage({ params }: PageProps) {
  const cityInArabic = getArabicText(arabicToSlug(params.city))

  return (
    <main>
      <CityIndexClient city={cityInArabic} />
    </main>
  )
} 