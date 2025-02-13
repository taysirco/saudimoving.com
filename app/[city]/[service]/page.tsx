import { Metadata } from 'next'
import { cities, keywords } from '@/lib/utils/data'
import CityServiceClient from './CityServiceClient'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'

interface Props {
  params: {
    city: string
    service: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cityName = getArabicText(params.city)
  const serviceName = getArabicText(params.service)

  return {
    title: `أفضل شركات ${serviceName} في ${cityName} - مقارنة أسعار وتقييمات`,
    description: `دليل شامل لأفضل شركات ${serviceName} في ${cityName} مع مقارنة أسعار وتقييمات حقيقية من العملاء ✓ خدمة 24 ساعة ✓ ضمان ✓ أسعار تنافسية`,
    openGraph: {
      title: `شركات ${serviceName} في ${cityName} - مقارنة الأسعار والخدمات`,
      description: `اختر أفضل شركة ${serviceName} في ${cityName} من خلال مقارنة شاملة للأسعار والخدمات مع تقييمات حقيقية من العملاء السابقين`
    }
  }
}

// توليد جميع المسارات الممكنة
export async function generateStaticParams() {
  // قراءة المدن من الملف
  const allCities = cities.map(city => arabicToSlug(city))
  
  // قراءة الخدمات من الملف
  const allServices = keywords.map(service => arabicToSlug(service))
  
  // توليد جميع التركيبات الممكنة
  const paths = []
  for (const city of allCities) {
    for (const service of allServices) {
      paths.push({
        city: city,
        service: service
      })
    }
  }

  return paths
}

export default function CityServicePage({ params }: Props) {
  return <CityServiceClient city={params.city} service={params.service} />
} 