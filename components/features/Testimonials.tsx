'use client'

import { motion } from 'framer-motion'
import { StarIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Testimonials() {
  const testimonials = [
    {
      name: "محمد السيد",
      city: "الرياض",
      rating: 5,
      text: "خدمة ممتازة وفريق عمل محترف. تم نقل الأثاث بعناية فائقة وبدون أي خدوش."
    },
    {
      name: "أحمد علي",
      city: "جدة",
      rating: 5,
      text: "سعر منافس وخدمة سريعة. أنصح بالتعامل معهم."
    },
    {
      name: "فهد العتيبي",
      city: "الدمام",
      rating: 5,
      text: "تجربة رائعة من البداية للنهاية. فريق منظم ومحترف."
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">آراء العملاء</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ماذا يقول عملاؤنا عن خدماتنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <UserCircleIcon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.city}</div>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 