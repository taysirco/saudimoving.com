'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, TruckIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline'

interface QuoteFormProps {
  city: string
  service: string
}

export default function QuoteForm({ city, service }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // هنا يمكنك إضافة منطق إرسال النموذج
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <div id="quote-form" className="bg-white py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">احصل على عرض سعر مجاني</h2>
            <p className="text-gray-600">
              املأ النموذج التالي وسنقوم بالتواصل معك خلال 24 ساعة مع عرض سعر مفصل
            </p>
          </div>

          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">الاسم</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="الاسم الكامل"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">رقم الجوال</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="05xxxxxxxx"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">المدينة</label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue={city}
                      readOnly
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50"
                    />
                    <MapPinIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">الخدمة المطلوبة</label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue={service}
                      readOnly
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50"
                    />
                    <TruckIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">تفاصيل إضافية</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition h-32 resize-none"
                    placeholder="اكتب أي تفاصيل إضافية تريد إضافتها..."
                  ></textarea>
                </div>
              </div>

              <div className="mt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'اطلب عرض سعر الآن'}
                </motion.button>
              </div>

              <p className="text-sm text-gray-500 mt-4 text-center">
                بالضغط على زر الإرسال، أنت توافق على سياسة الخصوصية وشروط الاستخدام
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardDocumentIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                تم استلام طلبك بنجاح
              </h3>
              <p className="text-green-600">
                سنقوم بالتواصل معك في أقرب وقت ممكن مع عرض سعر مفصل
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
} 