'use client'

import { motion } from 'framer-motion'
import {
  CurrencyDollarIcon,
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  MapPinIcon,
  PhoneIcon,
  DocumentCheckIcon,
  BuildingStorefrontIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import { getArabicText, arabicToSlug } from '@/lib/utils/text'
import Link from 'next/link'

interface ServiceFeaturesProps {
  city: string
  service: string
}

export default function ServiceFeatures({ city, service }: ServiceFeaturesProps) {
  const cityName = getArabicText(city)
  const serviceName = getArabicText(service)

  const features = [
    {
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      title: 'أسعار تنافسية',
      description: 'نقدم أفضل الأسعار في السوق مع ضمان جودة الخدمة وتوفير عروض وخصومات مستمرة',
      details: [
        'أسعار شفافة بدون رسوم خفية',
        'خصومات للطلبات المسبقة',
        'عروض خاصة للمناطق المتقاربة',
        'خيارات دفع مرنة ومتعددة'
      ]
    },
    {
      icon: <TruckIcon className="w-8 h-8" />,
      title: 'أسطول نقل حديث',
      description: 'نمتلك أسطول شاحنات حديث ومجهز بأحدث التقنيات لضمان نقل آمن وسريع',
      details: [
        'شاحنات مغلقة ومكيفة',
        'أنظمة تتبع متطورة',
        'معدات رفع وتحميل حديثة',
        'صناديق آمنة لحماية الأثاث'
      ]
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'فريق عمل محترف',
      description: 'نعتمد على فريق عمل مدرب ومؤهل لتقديم خدمة احترافية متكاملة',
      details: [
        'فنيون متخصصون في الفك والتركيب',
        'عمال مدربون على التغليف الاحترافي',
        'مشرفون لمتابعة جودة العمل',
        'خدمة عملاء على مدار الساعة'
      ]
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'ضمان شامل',
      description: 'نقدم ضمان شامل على كافة خدماتنا لراحة بالك وحماية ممتلكاتك',
      details: [
        'تأمين شامل على المنقولات',
        'ضمان ضد الكسر والخدوش',
        'تعويض فوري عن أي أضرار',
        'وثيقة ضمان مكتوبة'
      ]
    },
    {
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      title: 'خدمات متكاملة',
      description: 'نوفر جميع الخدمات المتعلقة بنقل وتخزين الأثاث تحت سقف واحد',
      details: [
        'فك وتركيب جميع أنواع الأثاث',
        'تغليف احترافي بمواد عالية الجودة',
        'خدمات تخزين آمنة ومكيفة',
        'خدمات تنظيف وصيانة الأثاث'
      ]
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: 'خدمة سريعة',
      description: 'نلتزم بالمواعيد ونقدم خدمة سريعة دون المساس بجودة العمل',
      details: [
        'خدمة نقل في نفس اليوم',
        'التزام تام بالمواعيد',
        'تنفيذ سريع وفعال',
        'خطة عمل منظمة ومدروسة'
      ]
    },
    {
      icon: <DocumentCheckIcon className="w-8 h-8" />,
      title: 'شركة مرخصة',
      description: `شركة معتمدة ومرخصة رسمياً في ${cityName} لتقديم خدمات نقل العفش`,
      details: [
        'ترخيص رسمي من الجهات المختصة',
        'سجل تجاري موثق',
        'عضوية الغرفة التجارية',
        'تصاريح مزاولة النشاط'
      ]
    },
    {
      icon: <BuildingStorefrontIcon className="w-8 h-8" />,
      title: 'تغطية شاملة',
      description: `نغطي جميع أحياء ومناطق ${cityName} والمناطق المجاورة`,
      details: [
        'تغطية جميع الأحياء السكنية',
        'خدمة المناطق المجاورة',
        'نقل بين المدن',
        'خدمة المناطق النائية'
      ]
    }
  ]

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          مميزات خدمة {serviceName} في {cityName}
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          نقدم خدمات {serviceName} في {cityName} بأعلى معايير الجودة والاحترافية
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href={`/${arabicToSlug(city)}/${arabicToSlug(service)}`}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <span>المزيد عن {serviceName}</span>
            <ArrowLeftIcon className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 