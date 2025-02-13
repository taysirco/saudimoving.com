'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import ReviewsIntro from './ReviewsIntro'
import { 
  StarIcon,
  HandThumbUpIcon,
  ChatBubbleLeftIcon,
  FlagIcon,
  UserCircleIcon,
  CheckBadgeIcon,
  PaperAirplaneIcon,
  XMarkIcon
} from '@heroicons/react/24/solid'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'
import { initialReviews } from '@/lib/initialData'
import { riyadhReviews } from '@/lib/reviews/riyadh'
import { jeddahReviews } from '@/lib/reviews/jeddah'
import { dammamReviews } from '@/lib/reviews/dammam'
import { arabicToSlug } from '@/lib/utils/text'

interface Reply {
  _id: string
  userName: string
  comment: string
  createdAt: string
}

interface Review {
  id: number
  name: string
  companyName: string
  rating: number
  date: string
  comment: string
  likes: number
  repliesCount: number
  replies: Reply[]
  verified: boolean
  serviceType: string
  initialLikes: number
}

interface UserData {
  id: string
  name: string
  email: string
  picture: string
  accessToken: string
}

const GoogleIcon = () => (
  <svg 
    className="w-5 h-5" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
)

const STORAGE_KEYS = {
  REVIEWS: 'movers_reviews',
  LIKES: 'movers_likes',
  REPLIES: 'movers_replies',
  AUTH: 'movers_auth',
  USER_DATA: 'movers_user_data'
}

const loadStoredData = () => {
  try {
    const storedReviews = localStorage.getItem(STORAGE_KEYS.REVIEWS)
    const storedLikes = localStorage.getItem(STORAGE_KEYS.LIKES)
    
    return {
      reviews: storedReviews ? JSON.parse(storedReviews) : initialReviews,
      likes: storedLikes ? JSON.parse(storedLikes) : {},
    }
  } catch (error) {
    console.error('Error loading stored data:', error)
    return { reviews: initialReviews, likes: {} }
  }
}

// تحديث دالة حساب المتوسط
const calculateAverageRating = (reviews: Review[]) => {
  if (!reviews?.length) return 0
  const sum = reviews.reduce((acc: number, review: Review) => acc + review.rating, 0)
  return Math.round((sum / reviews.length) * 10) / 10
}

interface ReviewsSectionProps {
  city: string
  serviceType: string
}

<<<<<<< HEAD
const ReviewsSection = ({ city, serviceType }: ReviewsSectionProps) => {
=======
export default function ReviewsSection({ city, serviceType }: { city?: string, serviceType?: string }) {
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  const { data: session } = useSession()
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState<'date' | 'rating'>('date')
  const [filterRating, setFilterRating] = useState<number | null>(null)
  const [visibleReviews, setVisibleReviews] = useState(5)
  const [replyText, setReplyText] = useState('')
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [likedReviews, setLikedReviews] = useState<Set<number>>(new Set())
  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: '',
    companyName: ''
  })
  const [showReviewForm, setShowReviewForm] = useState(false)

  // Calculate review statistics
  const stats = {
    totalReviews: reviews.length,
    averageRating: calculateAverageRating(reviews),
    distribution: {
      5: reviews.filter(r => r.rating === 5).length,
      4: reviews.filter(r => r.rating === 4).length,
      3: reviews.filter(r => r.rating === 3).length,
      2: reviews.filter(r => r.rating === 2).length,
      1: reviews.filter(r => r.rating === 1).length,
    }
  }

  useEffect(() => {
    // Load reviews based on city
    let cityReviews: Review[] = []
    
    if (!city) {
      setReviews(initialReviews)
      setLoading(false)
      return
    }

    const citySlug = arabicToSlug(city)
    
    switch (citySlug) {
      case 'riyadh':
        cityReviews = riyadhReviews
        break
      case 'jeddah':
        cityReviews = jeddahReviews
        break
      case 'dammam':
        cityReviews = dammamReviews
        break
      default:
        cityReviews = initialReviews
    }

    // Filter by service type if provided
    if (serviceType) {
      cityReviews = cityReviews.filter(review => review.serviceType === serviceType)
    }

    setReviews(cityReviews)
    setLoading(false)
  }, [city, serviceType])

  // Load liked reviews from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') { // Check if we're on client-side
      const storedLikes = localStorage.getItem(STORAGE_KEYS.LIKES)
      if (storedLikes) {
        // Parse the JSON array and create a new Set
        const likesArray = JSON.parse(storedLikes)
        setLikedReviews(new Set(Array.isArray(likesArray) ? likesArray : []))
      }
    }
  }, [])

  // Filter and sort reviews
  const filteredReviews = reviews
    .filter(review => filterRating ? review.rating === filterRating : true)
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return b.rating - a.rating
    })

  const handleLike = async (reviewId: number) => {
    if (likedReviews.has(reviewId)) {
      // Unlike
      const newLikedReviews = new Set(likedReviews)
      newLikedReviews.delete(reviewId)
      setLikedReviews(newLikedReviews)
      setReviews(reviews.map(review => 
        review.id === reviewId 
          ? { ...review, likes: review.likes - 1 }
          : review
      ))
      // Convert Set to Array before storing in localStorage
      localStorage.setItem(STORAGE_KEYS.LIKES, JSON.stringify(Array.from(newLikedReviews)))
    } else {
      // Like
      const newLikedReviews = new Set([...likedReviews, reviewId])
      setLikedReviews(newLikedReviews)
      setReviews(reviews.map(review => 
        review.id === reviewId 
          ? { ...review, likes: review.likes + 1 }
          : review
      ))
      // Convert Set to Array before storing in localStorage
      localStorage.setItem(STORAGE_KEYS.LIKES, JSON.stringify(Array.from(newLikedReviews)))
    }
  }

  const toggleReply = (reviewId: number) => {
    setReplyingTo(replyingTo === reviewId ? null : reviewId)
    setReplyText('')
  }

  // Handle reply
  const handleReply = async (reviewId: number) => {
    if (!replyText.trim()) return

    const newReply = {
      _id: Date.now().toString(),
      userName: 'زائر',
      comment: replyText,
      createdAt: new Date().toISOString()
    }

    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { 
            ...review, 
            replies: [...review.replies, newReply],
            repliesCount: review.repliesCount + 1
          }
        : review
    ))

    setReplyText('')
    setReplyingTo(null)

    // Store replies in localStorage
    const storedReplies = JSON.parse(localStorage.getItem(STORAGE_KEYS.REPLIES) || '{}')
    storedReplies[reviewId] = storedReplies[reviewId] || []
    storedReplies[reviewId].push(newReply)
    localStorage.setItem(STORAGE_KEYS.REPLIES, JSON.stringify(storedReplies))
  }

  // Handle new review submission
  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!session) {
      signIn('google')
      return
    }

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: session.user.id,
          userName: session.user.name,
          ...newReview,
          city,
          serviceType
        })
      })

      if (response.ok) {
        const newReviewData = await response.json()
        setReviews([newReviewData, ...reviews])
        setNewReview({ rating: 0, comment: '', companyName: '' })
        setShowReviewForm(false)
      }
    } catch (error) {
      console.error('Error submitting review:', error)
    }
  }

  if (loading) {
    return <div className="text-center py-8">جاري تحميل التقييمات...</div>
  }

  return (
    <div className="space-y-8">
      {/* New Reviews Intro Component */}
      <ReviewsIntro />

      {/* Reviews Summary */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">تقييم العملاء</h3>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold">{stats.averageRating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(stats.averageRating)
                        ? 'text-yellow-400'
                        : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-500">
                ({stats.totalReviews} تقييم)
              </span>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map(rating => (
              <div key={rating} className="flex items-center gap-2">
                <div className="flex items-center gap-1 w-16">
                  <span>{rating}</span>
                  <StarIcon className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="w-48 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{
                      width: `${(stats.distribution[rating] / stats.totalReviews) * 100}%`
                    }}
                  />
                </div>
                <span className="text-sm text-gray-500">
                  {stats.distribution[rating]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2">
            {[5, 4, 3, 2, 1].map(rating => (
              <button
                key={rating}
                onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                className={`flex items-center gap-1 px-3 py-1 rounded-full transition ${
                  filterRating === rating 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <StarIcon className="w-4 h-4" />
                <span>{rating}</span>
              </button>
            ))}
          </div>
          
<<<<<<< HEAD
          <select
=======
          <select 
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'date' | 'rating')}
            className="bg-white border rounded-lg px-3 py-1"
          >
            <option value="date">الأحدث</option>
            <option value="rating">الأعلى تقييماً</option>
          </select>
        </div>
      </div>

      {/* Add Review Button */}
<<<<<<< HEAD
      <div className="text-center">
=======
            <div className="text-center">
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
        <button
          onClick={() => session ? setShowReviewForm(true) : signIn('google')}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
        >
          أضف تقييمك
        </button>
      </div>

      {/* Review Form */}
      <AnimatePresence>
        {showReviewForm && (
          <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmitReview}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            {/* ... review form fields ... */}
          </motion.form>
        )}
      </AnimatePresence>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.slice(0, visibleReviews).map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <UserCircleIcon className="w-8 h-8 text-gray-400" />
                </div>
<<<<<<< HEAD
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{review.name}</h3>
                    {review.verified && (
                      <CheckBadgeIcon className="w-5 h-5 text-primary" />
                    )}
=======
              <div>
                <div className="flex items-center gap-2">
                    <h3 className="font-medium">{review.name}</h3>
                  {review.verified && (
                      <CheckBadgeIcon className="w-5 h-5 text-primary" />
                  )}
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
                  </div>
                  <p className="text-sm text-gray-500">{review.companyName}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
<<<<<<< HEAD
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-200'
                    }`}
                  />
                ))}
=======
                  {[...Array(5)].map((_, i) => (
                  <StarIcon
                      key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-200'
                    }`}
                    />
                  ))}
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
              </div>
            </div>

            <p className="text-gray-700 mb-4">{review.comment}</p>

            {/* Actions */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => handleLike(review.id)}
                  className={`flex items-center gap-1 transition ${
                    likedReviews.has(review.id) 
                      ? 'text-primary font-medium' 
                      : 'hover:text-primary'
                  }`}
                >
                  <HandThumbUpIcon className={`w-5 h-5 ${
                    likedReviews.has(review.id) ? 'fill-primary' : ''
                  }`} />
                  <span>{review.likes}</span>
<<<<<<< HEAD
                </button>
=======
              </button>
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
                <button 
                  onClick={() => toggleReply(review.id)}
                  className={`flex items-center gap-1 transition ${
                    replyingTo === review.id 
                      ? 'text-primary font-medium' 
                      : 'hover:text-primary'
                  }`}
                >
                  <ChatBubbleLeftIcon className="w-5 h-5" />
                  <span>{review.repliesCount}</span>
<<<<<<< HEAD
                </button>
=======
              </button>
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
              </div>
              <time dateTime={review.date}>
                {new Date(review.date).toLocaleDateString('ar-SA')}
              </time>
            </div>

            {/* Replies */}
            <AnimatePresence>
              {(replyingTo === review.id || review.replies.length > 0) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t space-y-3"
                >
                  {review.replies.map(reply => (
                    <div key={reply._id} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{reply.userName}</span>
                        <time className="text-sm text-gray-500">
                          {new Date(reply.createdAt).toLocaleDateString('ar-SA')}
                        </time>
                      </div>
                      <p className="text-gray-600">{reply.comment}</p>
                    </div>
                  ))}

                  {replyingTo === review.id && (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="اكتب ردك هنا..."
                        className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                      <button
                        onClick={() => handleReply(review.id)}
                        disabled={!replyText.trim()}
                        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition disabled:opacity-50"
                      >
                        <PaperAirplaneIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setReplyingTo(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <XMarkIcon className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleReviews < filteredReviews.length && (
        <div className="text-center">
          <button
            onClick={() => setVisibleReviews(prev => prev + 5)}
            className="bg-white px-6 py-2 rounded-lg border hover:bg-gray-50 transition"
          >
<<<<<<< HEAD
            عرض المزيد من التقييمات
          </button>
        </div>
      )}
    </div>
  )
}

export default ReviewsSection 
=======
          عرض المزيد من التقييمات
        </button>
      </div>
      )}
    </div>
  )
} 
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
