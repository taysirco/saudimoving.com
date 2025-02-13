'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'
import { arabicToSlug } from '@/lib/utils/text'

interface CityReviewsProps {
  city: string
}

// بيانات افتراضية للتقييمات
const defaultReviews = [
  {
    id: '1',
    name: 'محمد العتيبي',
    rating: 5,
    comment: 'تجربة رائعة مع شركة نقل العفش. الفريق محترف والخدمة ممتازة. أنصح بالتعامل معهم.',
    date: '2024-03-15'
  },
  {
    id: '2',
    name: 'سارة القحطاني',
    rating: 4,
    comment: 'خدمة جيدة وأسعار معقولة. العمال متعاونين والتغليف كان ممتاز.',
    date: '2024-03-12'
  },
  {
    id: '3',
    name: 'عبدالله الشمري',
    rating: 5,
    comment: 'من أفضل شركات نقل العفش. التزام تام بالمواعيد وحرص على سلامة الأثاث.',
    date: '2024-03-10'
  }
]

export default function CityReviews({ city }: CityReviewsProps) {
  const [currentReview, setCurrentReview] = useState(0)
  const citySlug = arabicToSlug(city)

  // تغيير التقييم كل 5 ثواني
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % defaultReviews.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">آراء عملائنا في {city}</h2>
          <p className="text-gray-600 mb-12">
            تعرف على تجارب عملائنا مع خدمات نقل العفش في {city}
          </p>

          <div className="relative h-[300px]">
            {defaultReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: currentReview === index ? 1 : 0,
                  scale: currentReview === index ? 1 : 0.9,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0
                }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-6 h-6 ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-lg mb-6">"{review.comment}"</p>
                <div className="font-bold text-lg mb-1">{review.name}</div>
                <div className="text-gray-500 text-sm">
                  {new Date(review.date).toLocaleDateString('ar-SA')}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {defaultReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentReview === index ? 'bg-primary scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="mt-8">
            <a
              href={`/${citySlug}/نقل-عفش`}
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              عرض جميع التقييمات
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 