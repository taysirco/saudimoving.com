'use client'

import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon, 
  TruckIcon, 
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "ضمان شامل",
      description: "نقدم ضمان شامل على جميع خدماتنا لراحة بالك"
    },
    {
      icon: <TruckIcon className="w-8 h-8" />,
      title: "أسطول حديث",
      description: "نمتلك أحدث الشاحنات المجهزة خصيصاً لنقل الأثاث"
    },
    {
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      title: "أسعار تنافسية",
      description: "أفضل الأسعار في السوق مع جودة خدمة عالية"
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: "خدمة 24/7",
      description: "نعمل على مدار الساعة لخدمتكم في أي وقت"
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "فريق محترف",
      description: "عمالة مدربة ومؤهلة لنقل الأثاث باحترافية"
    },
    {
      icon: <PhoneIcon className="w-8 h-8" />,
      title: "دعم فوري",
      description: "فريق خدمة عملاء جاهز للرد على استفساراتكم"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">لماذا تختارنا؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            نقدم خدمات نقل عفش احترافية ومتكاملة مع ضمان سلامة ممتلكاتكم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 