import { cities, keywords, generateMetaTitle, generateMetaDescription } from '@/lib/utils/data'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'
import { Metadata } from 'next'
import CityServiceClient from '@/app/[city]/[service]/CityServiceClient'

interface PageProps {
  params: {
    city: string
    service: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityInArabic = getArabicText(arabicToSlug(params.city))
  const serviceInArabic = 'سيارات نقل العفش'

  return {
    title: generateMetaTitle(cityInArabic, serviceInArabic),
    description: generateMetaDescription(cityInArabic, serviceInArabic),
    openGraph: {
      title: `${serviceInArabic} ${cityInArabic} - ${keywords.join(' ')}`,
      description: generateMetaDescription(cityInArabic, serviceInArabic),
      images: [
        {
          url: `/api/og?city=${params.city}&service=سيارات-نقل-عفش`,
          width: 1200,
          height: 630,
        }
      ]
    }
  }
}

// توليد صفحات لكل المدن
export async function generateStaticParams() {
  return cities.map(city => ({
    city: arabicToSlug(city),
    service: 'سيارات-نقل-عفش'
  }))
}

export default function MovingTrucksPage({ params }: PageProps) {
  const cityInArabic = getArabicText(arabicToSlug(params.city))
  const serviceInArabic = 'سيارات نقل العفش'
  
  const serviceData = {
    title: serviceInArabic,
    titleWithCity: `${serviceInArabic} في ${cityInArabic}`,
    slug: 'moving-trucks',
    arabicSlug: 'سيارات-نقل-عفش',
    description: `نقدم أفضل خدمات سيارات نقل العفش في ${cityInArabic} بأحدث السيارات المجهزة خصيصاً لنقل الأثاث. سيارات مؤمنة بالكامل مع سائقين محترفين لضمان نقل آمن وسريع لأثاث منزلك.`,
    features: [
      {
        title: 'سيارات مجهزة خصيصاً',
        description: 'أسطول من السيارات الحديثة المجهزة خصيصاً لنقل العفش بأمان'
      },
      {
        title: 'سائقين محترفين',
        description: 'سائقين مدربين ومحترفين في مجال نقل العفش مع خبرة طويلة'
      },
      {
        title: 'تأمين شامل',
        description: 'تأمين شامل على العفش أثناء النقل لضمان سلامة ممتلكاتكم'
      },
      {
        title: 'أحجام مختلفة',
        description: 'سيارات بأحجام متنوعة تناسب جميع احتياجات النقل'
      },
      {
        title: 'خدمة 24 ساعة',
        description: 'خدمة متوفرة على مدار الساعة لتلبية احتياجاتكم'
      },
      {
        title: 'أسعار تنافسية',
        description: 'أسعار مناسبة وشفافة مع عروض خاصة للمسافات الطويلة'
      },
      {
        title: 'التزام بالمواعيد',
        description: 'نلتزم بالمواعيد المحددة لضمان راحتكم'
      },
      {
        title: 'تغطية شاملة',
        description: `خدمة متوفرة في جميع أحياء ${cityInArabic}`
      }
    ],
    faqs: [
      {
        question: 'هل السيارات مؤمنة على العفش؟',
        answer: 'نعم، جميع سياراتنا مؤمنة تأميناً شاملاً على العفش أثناء النقل لضمان سلامة ممتلكاتكم'
      },
      {
        question: 'ما هي أحجام السيارات المتوفرة؟',
        answer: 'نوفر سيارات بأحجام مختلفة تناسب جميع الاحتياجات، من الشقق الصغيرة إلى الفلل الكبيرة'
      },
      {
        question: 'هل يمكن حجز السيارة في نفس اليوم؟',
        answer: 'نعم، نوفر خدمة حجز سريع للحالات العاجلة حسب توفر السيارات'
      },
      {
        question: 'هل السائقين مدربين على نقل العفش؟',
        answer: 'نعم، جميع السائقين لدينا مدربين ومحترفين في مجال نقل العفش ولديهم خبرة طويلة'
      },
      {
        question: 'هل تقدمون خدمة النقل خارج المدينة؟',
        answer: 'نعم، نقدم خدمة نقل العفش بين المدن مع عروض خاصة للمسافات الطويلة'
      },
      {
        question: 'كيف يتم تحديد سعر النقل؟',
        answer: 'يتم تحديد السعر بناءً على عدة عوامل: حجم العفش، المسافة، والخدمات الإضافية المطلوبة'
      }
    ],
    relatedServices: [
      {
        title: 'نقل عفش',
        slug: 'نقل-عفش',
        description: 'خدمة نقل العفش المتكاملة مع الفك والتركيب'
      },
      {
        title: 'فك وتركيب الأثاث',
        slug: 'فك-وتركيب',
        description: 'خدمة فك وتركيب الأثاث باحترافية'
      },
      {
        title: 'تغليف الأثاث',
        slug: 'تغليف-اثاث',
        description: 'خدمة تغليف الأثاث لحمايته أثناء النقل'
      }
    ],
    callToAction: {
      title: `احجز سيارة نقل عفش في ${cityInArabic}`,
      description: `احصل على عرض سعر فوري لخدمة سيارات نقل العفش في ${cityInArabic}`
    }
  }

  return (
    <CityServiceClient 
      city={cityInArabic}
      service={serviceData.arabicSlug}
      serviceData={serviceData}
    />
  )
} 