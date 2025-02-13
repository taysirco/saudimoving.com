'use client'

import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { getRandomReviews } from '@/lib/utils/reviewGenerator'
import type { Review } from '@/types/reviews'

interface ReviewFormData {
  userName: string
  companyName: string
  comment: string
}

interface ReviewsProps {
  city: string
  service: string
  initialReviews?: Review[]
}

export default function Reviews({ city, service, initialReviews }: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews || [])
  const [loading, setLoading] = useState(!initialReviews)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [showAllReviews, setShowAllReviews] = useState(false)
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [newReview, setNewReview] = useState<ReviewFormData>({
    userName: '',
    companyName: '',
    comment: ''
  })

  useEffect(() => {
    if (!initialReviews) {
      const fetchReviews = async () => {
        try {
          const loadedReviews = await getRandomReviews(city, service, 5)
          setReviews(loadedReviews)
        } catch (error) {
          console.error('Error loading reviews:', error)
        } finally {
          setLoading(false)
        }
      }
      fetchReviews()
    }
  }, [city, service, initialReviews])

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (rating === 0) {
      alert('الرجاء اختيار التقييم')
      return
    }

    const review: Review = {
      id: Date.now().toString(),
      name: newReview.userName || 'زائر',
      rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
      city,
      service,
      companyName: newReview.companyName
    }

    setReviews(prev => [review, ...prev])
    setShowReviewForm(false)
    setRating(0)
    setNewReview({ userName: '', companyName: '', comment: '' })
  }

  if (loading) {
    return (
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-100 p-6 rounded-lg">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mt-4"></div>
                  <div className="h-20 bg-gray-200 rounded mt-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">آراء العملاء</h2>
        <p className="text-gray-600 text-center mb-12">
          تجارب حقيقية من عملائنا في {city}
        </p>

        <div className="space-y-6">
          {/* Add Review Button */}
          {!showReviewForm && (
            <button
              onClick={() => setShowReviewForm(true)}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition duration-200 w-full md:w-auto"
            >
              أضف تقييمك
            </button>
          )}

          {/* Review Form */}
          {showReviewForm && (
            <form onSubmit={handleSubmitReview} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">إضافة تقييم جديد</h3>
                <button
                  type="button"
                  onClick={() => setShowReviewForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className="focus:outline-none"
                  >
                    <StarIcon
                      className={`h-8 w-8 ${
                        star <= (hover || rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">الاسم</label>
                  <input
                    type="text"
                    value={newReview.userName}
                    onChange={(e) => setNewReview(prev => ({ ...prev, userName: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
                    placeholder="اسمك (اختياري)"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">اسم الشركة</label>
                  <input
                    type="text"
                    value={newReview.companyName}
                    onChange={(e) => setNewReview(prev => ({ ...prev, companyName: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
                    placeholder="اسم الشركة التي تعاملت معها"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">تقييمك</label>
                  <textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
                    rows={4}
                    placeholder="اكتب تجربتك مع الشركة..."
                    required
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition duration-200"
                  >
                    نشر التقييم
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-md hover:bg-gray-200 transition duration-200"
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllReviews ? reviews : reviews.slice(0, 6)).map((review) => (
              <div key={review.id} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-semibold text-lg">{review.name}</h4>
                    {review.companyName && (
                      <p className="text-gray-500 text-sm">{review.companyName}</p>
                    )}
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{review.comment}</p>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {reviews.length > 6 && !showAllReviews && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllReviews(true)}
                className="text-primary hover:text-primary-dark font-medium"
              >
                عرض المزيد من التقييمات
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 