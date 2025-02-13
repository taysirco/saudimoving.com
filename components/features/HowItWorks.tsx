'use client'

import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "اختر الخدمة",
      description: "حدد نوع الخدمة التي تحتاجها من قائمة خدماتنا المتنوعة"
    },
    {
      number: "2",
      title: "اختر المدينة",
      description: "اختر مدينتك من قائمة المدن التي نخدمها في المملكة"
    },
    {
      number: "3",
      title: "احصل على عرض سعر",
      description: "سيتواصل معك فريقنا لتقديم عرض سعر مناسب لاحتياجاتك"
    },
    {
      number: "4",
      title: "استمتع بالخدمة",
      description: "نقوم بتنفيذ الخدمة باحترافية وضمان سلامة ممتلكاتك"
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">كيف نعمل؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            خطوات بسيطة للحصول على خدمة نقل عفش احترافية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 