import { Metadata } from 'next'
import CitiesPageClient from './CitiesPageClient'

export const metadata: Metadata = {
  title: 'خدمات نقل العفش في مدن المملكة - دليل شامل',
  description: 'دليل شامل لخدمات نقل العفش في جميع مدن المملكة العربية السعودية. اختر مدينتك للحصول على أفضل خدمات نقل الأثاث.',
}

export default function CitiesPage() {
  return <CitiesPageClient />
} 