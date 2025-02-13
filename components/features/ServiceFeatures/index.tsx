import React from 'react'
import { TruckIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

interface Props {
  city: string
}

export default function ServiceFeatures({ city }: Props) {
  const features = [
    {
      icon: TruckIcon,
      title: 'خدمة سريعة وموثوقة',
      description: `نقدم خدمة نقل عفش سريعة وموثوقة في ${city} مع ضمان وصول الأثاث بحالة ممتازة`
    },
    {
      icon: ShieldCheckIcon,
      title: 'ضمان سلامة الأثاث',
      description: 'نستخدم أحدث التقنيات ومواد التغليف لضمان سلامة أثاثك أثناء النقل'
    },
    {
      icon: ClockIcon,
      title: 'خدمة 24/7',
      description: 'نعمل على مدار الساعة طوال أيام الأسبوع لتلبية احتياجاتك'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'أسعار تنافسية',
      description: 'نقدم أفضل الأسعار في السوق مع ضمان جودة الخدمة'
    }
  ]

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">
        لماذا تختار خدمات نقل العفش لدينا؟
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 