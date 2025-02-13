'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

<<<<<<< HEAD
interface FAQProps {
  city: string;
  service: string;
}

export default function FAQ({ city, service }: FAQProps) {
=======
export default function FAQ() {
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "كيف يمكنني حجز خدمة نقل العفش؟",
      answer: "يمكنك حجز خدمة نقل العفش من خلال الاتصال بنا مباشرة أو ملء نموذج الطلب على موقعنا. سيقوم فريقنا بالتواصل معك لتحديد موعد المعاينة وتقديم عرض سعر مناسب."
    },
    {
      question: "هل تقدمون خدمة الفك والتركيب؟",
      answer: "نعم، نقدم خدمة متكاملة تشمل فك وتركيب جميع أنواع الأثاث بما في ذلك غرف النوم والمطابخ والستائر وغيرها."
    },
    {
      question: "هل لديكم ضمان على الخدمة؟",
      answer: "نعم، نقدم ضمان شامل على جميع خدماتنا. في حالة حدوث أي ضرر للأثاث أثناء النقل، نتحمل المسؤولية الكاملة عن الإصلاح أو التعويض."
    },
    {
      question: "ما هي مواعيد العمل لديكم؟",
      answer: "نعمل على مدار الساعة طوال أيام الأسبوع. يمكنك حجز موعد النقل في الوقت الذي يناسبك."
    },
    {
      question: "هل تقدمون خدمة التغليف؟",
      answer: "نعم، نقدم خدمة تغليف احترافية باستخدام أفضل مواد التغليف لحماية أثاثك أثناء النقل."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">الأسئلة الشائعة</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعاً حول خدمات نقل العفش
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
              >
                <span className="font-bold text-right">{faq.question}</span>
                <ChevronDownIcon 
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-white px-4 py-3 rounded-b-lg shadow-sm"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 