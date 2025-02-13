import { Metadata } from 'next'
import { keywords } from '@/lib/utils/data'
import ServicesClient from '@/app/services/ServicesClient'

export const metadata: Metadata = {
  title: 'خدمات نقل العفش - جميع الخدمات',
  description: 'استكشف جميع خدمات نقل العفش والأثاث المتوفرة في المملكة العربية السعودية',
  openGraph: {
    title: 'خدمات نقل العفش',
    description: 'جميع خدمات نقل العفش والأثاث في المملكة العربية السعودية',
    images: [
      {
        url: '/api/og?type=services',
        width: 1200,
        height: 630,
      }
    ]
  }
}

export default function ServicesPage() {
  return <ServicesClient keywords={keywords} />
} 