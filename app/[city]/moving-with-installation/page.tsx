import { Metadata } from 'next'
import { getArabicText, arabicToSlug } from '@/lib/utils/text'
import CityServiceClient from '@/app/[city]/[service]/CityServiceClient'

interface PageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityInArabic = getArabicText(arabicToSlug(params.city))
  const service = 'نقل عفش مع التركيب'

  return {
    title: `${service} في ${cityInArabic} - خدمة احترافية مع الضمان`,
    description: `خدمة ${service} في ${cityInArabic} مع فريق متخصص وأسعار تنافسية. فك وتركيب وتغليف مع الضمان.`,
    openGraph: {
      title: `${service} في ${cityInArabic}`,
      description: `افضل شركات ${service} في ${cityInArabic} مع التغليف والضمان`,
      images: [
        {
          url: `/api/og?city=${params.city}&service=moving-with-installation`,
          width: 1200,
          height: 630,
        }
      ]
    }
  }
}

export default function MovingWithInstallationPage({ params }: PageProps) {
  const cityInArabic = getArabicText(arabicToSlug(params.city))
  const service = 'نقل عفش مع التركيب'

  return (
    <CityServiceClient 
      city={cityInArabic}
      service={service}
    />
  )
} 