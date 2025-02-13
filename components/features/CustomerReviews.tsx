'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { StarIcon, UserCircleIcon, CheckBadgeIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'
import { getArabicText, arabicToSlug } from '@/lib/utils/text'

// إضافة وظيفة لتنسيق التاريخ
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    calendar: 'gregory' // استخدام التقويم الميلادي
  })
}

interface Review {
  id: string
  userName: string
  companyName: string
  rating: number
  comment: string
  date: string
  isVerified: boolean
  service: string
}

interface CustomerReviewsProps {
  city: string
  service: string
}

export default function CustomerReviews({ city, service }: CustomerReviewsProps) {
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoveredStar, setHoveredStar] = useState(0)
  
  const cityInArabic = getArabicText(arabicToSlug(city))
  const serviceInArabic = getArabicText(arabicToSlug(service))
  
  // نموذج بيانات للمراجعات
  const reviews: Review[] = [
    {
      id: '1',
      userName: 'محمد أحمد',
      companyName: 'شركة النقل السريع',
      rating: 5,
      comment: 'خدمة ممتازة وفريق عمل محترف. تم نقل الأثاث بعناية فائقة وبدون أي خدوش. أنصح بالتعامل معهم.',
      date: '2024-03-15',
      isVerified: true,
      service: 'نقل عفش'
    },
    // يمكن إضافة المزيد من المراجعات هنا
  ]

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // هنا يتم إرسال المراجعة إلى API
    setShowReviewForm(false)
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          آراء العملاء عن خدمة {serviceInArabic} في {cityInArabic}
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          تعرف على تجارب عملائنا مع خدمات {serviceInArabic} في {cityInArabic}
        </p>

        {/* إحصائيات التقييمات */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.8</div>
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <div className="text-gray-600">متوسط التقييم</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">127</div>
              <div className="text-gray-600">تقييم موثق</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">نسبة رضا العملاء</div>
            </div>
          </div>
        </div>

        {/* زر إضافة مراجعة */}
        <motion.div
          className="text-center mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={() => setShowReviewForm(true)}
            className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-colors inline-flex items-center gap-2"
          >
            <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />
            شارك تجربتك
          </button>
        </motion.div>

        {/* نموذج إضافة مراجعة */}
        <AnimatePresence>
          {showReviewForm && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="bg-white rounded-2xl p-8 max-w-2xl w-full"
              >
                <h3 className="text-2xl font-bold mb-6">شارك تجربتك</h3>
                <form onSubmit={handleSubmitReview}>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">تقييمك</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          onClick={() => setRating(star)}
                          className="transition-transform hover:scale-110"
                        >
                          {star <= (hoveredStar || rating) ? (
                            <StarIcon className="w-8 h-8 text-yellow-400" />
                          ) : (
                            <StarOutline className="w-8 h-8 text-gray-300" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">اسم الشركة</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="اكتب اسم الشركة التي تعاملت معها"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">تعليقك</label>
                    <textarea
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition h-32 resize-none"
                      placeholder="شارك تجربتك مع الشركة..."
                    ></textarea>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors"
                    >
                      نشر التقييم
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowReviewForm(false)}
                      className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                    >
                      إلغاء
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* قائمة المراجعات */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserCircleIcon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold flex items-center gap-2">
                      {review.userName}
                      {review.isVerified && (
                        <CheckBadgeIcon className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                    <div className="text-sm text-gray-500">{review.companyName}</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-3">{review.comment}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div>{review.service}</div>
                <div>{formatDate(review.date)}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* زر تحميل المزيد */}
        <div className="text-center mt-8">
          <button className="text-primary font-medium hover:text-primary-dark transition-colors">
            عرض المزيد من التقييمات
          </button>
        </div>
      </div>
    </div>
  )
} 