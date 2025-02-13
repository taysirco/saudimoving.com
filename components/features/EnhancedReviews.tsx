'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  StarIcon, 
  UserCircleIcon, 
  CheckBadgeIcon, 
  HandThumbUpIcon,
  ChatBubbleLeftIcon,
  FunnelIcon,
  ArrowsUpDownIcon
} from '@heroicons/react/24/solid'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'

interface Reply {
  id: string
  userName: string
  comment: string
  date: string
  likes: number
}

interface Review {
  id: string
  userName: string
  companyName: string
  rating: number
  comment: string
  date: string
  isVerified: boolean
  likes: number
  replies: Reply[]
  service: string
  city: string
}

interface EnhancedReviewsProps {
  city: string
  service: string
}

// دالة مساعدة لتنسيق التاريخ
function formatDate(dateString: string): string {
  // استخدام تنسيق موحد للتاريخ
  const date = new Date(dateString)
  return date.toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    calendar: 'gregory' // استخدام التقويم الميلادي دائماً
  })
}

interface ReviewFormData {
  userName: string
  companyName: string
  rating: number
  comment: string
}

// إضافة مصفوفة من الردود العشوائية
const sampleReplies: Reply[] = [
  {
    id: '1',
    userName: 'خدمة العملاء',
    comment: 'شكراً جزيلاً على تقييمك الإيجابي. نحن سعداء بأن الخدمة نالت رضاكم ونتطلع لخدمتكم مرة أخرى.',
    date: '2024-03-16',
    likes: 8
  },
  {
    id: '2',
    userName: 'مدير الخدمة',
    comment: 'نشكر ثقتكم الغالية. سعداء جداً بتجربتكم الإيجابية معنا.',
    date: '2024-03-15',
    likes: 5
  },
  {
    id: '3',
    userName: 'أحمد العمري',
    comment: 'أؤيد كلامك، تجربتي معهم كانت ممتازة أيضاً.',
    date: '2024-03-14',
    likes: 12
  },
  {
    id: '4',
    userName: 'خدمة العملاء',
    comment: 'نعتذر عن التأخير في الموعد. نقدر ملاحظاتكم ونعمل على تحسين خدماتنا باستمرار.',
    date: '2024-03-13',
    likes: 3
  },
  {
    id: '5',
    userName: 'سارة الشمري',
    comment: 'نفس تجربتي معهم. خدمة ممتازة وأسعار معقولة.',
    date: '2024-03-12',
    likes: 7
  }
]

export default function EnhancedReviews({ city, service }: EnhancedReviewsProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const [sortBy, setSortBy] = useState<'recent' | 'rating' | 'helpful'>('recent')
  const [filterRating, setFilterRating] = useState<number | null>(null)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [selectedRating, setSelectedRating] = useState(0)
  const [reviewForm, setReviewForm] = useState<ReviewFormData>({
    userName: '',
    companyName: '',
    rating: 0,
    comment: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [showReplyForm, setShowReplyForm] = useState<string | null>(null)
  const [replyText, setReplyText] = useState('')
  const [isSubmittingReply, setIsSubmittingReply] = useState(false)

  // تحديث التقييمات الافتراضية لتشمل الردود
  const initialReviews = [
    {
      id: '1',
      userName: 'محمد السيد',
      companyName: 'شركة النقل السريع',
      rating: 5,
      comment: 'خدمة ممتازة وفريق عمل محترف. تم نقل الأثاث بعناية فائقة وبدون أي خدوش. أنصح بالتعامل معهم وسأتعامل معهم مرة أخرى.',
      date: '2024-03-15',
      isVerified: true,
      likes: 24,
      replies: [sampleReplies[0], sampleReplies[2]],
      service,
      city
    },
    {
      id: '2',
      userName: 'عبدالله العتيبي',
      companyName: 'مؤسسة النقل الأمين',
      rating: 5,
      comment: 'تجربة رائعة من البداية للنهاية. الفريق متعاون جداً والأسعار معقولة. قاموا بفك وتركيب جميع الأثاث باحترافية.',
      date: '2024-03-14',
      isVerified: true,
      likes: 18,
      replies: [sampleReplies[1]],
      service,
      city
    },
    {
      id: '3',
      userName: 'سارة الغامدي',
      companyName: 'شركة النقل المتميز',
      rating: 4,
      comment: 'خدمة جيدة بشكل عام. العمال محترفين في التعامل مع الأثاث. التأخر قليلاً في الموعد المحدد هو السبب الوحيد لتقييمي 4 نجوم.',
      date: '2024-03-12',
      isVerified: true,
      likes: 15,
      replies: [sampleReplies[3]],
      service,
      city
    },
    {
      id: '4',
      userName: 'فهد القحطاني',
      companyName: 'شركة النقل السريع',
      rating: 5,
      comment: 'أفضل شركة نقل عفش تعاملت معها. الأسعار منافسة والخدمة ممتازة. قاموا بتغليف كل قطعة بعناية فائقة.',
      date: '2024-03-10',
      isVerified: true,
      likes: 21,
      replies: [sampleReplies[4], sampleReplies[1]],
      service,
      city
    },
    {
      id: '5',
      userName: 'نورة الشمري',
      companyName: 'مؤسسة النقل الموثوق',
      rating: 5,
      comment: 'تعاملهم راقي جداً وملتزمين بالمواعيد. سعر مناسب وخدمة احترافية. سعيدة جداً بالتجربة.',
      date: '2024-03-08',
      isVerified: true,
      likes: 16,
      replies: [],
      service,
      city
    },
    {
      id: '6',
      userName: 'خالد الدوسري',
      companyName: 'شركة النقل المتميز',
      rating: 4,
      comment: 'خدمة جيدة وفريق عمل محترف. التغليف كان ممتاز والفك والتركيب تم بشكل احترافي.',
      date: '2024-03-06',
      isVerified: true,
      likes: 12,
      replies: [],
      service,
      city
    },
    {
      id: '7',
      userName: 'ريم السبيعي',
      companyName: 'شركة النقل الأمين',
      rating: 5,
      comment: 'تجربة مميزة جداً. العمال متعاونين والأسعار معقولة. حريصين على سلامة الأثاث.',
      date: '2024-03-04',
      isVerified: true,
      likes: 19,
      replies: [sampleReplies[2], sampleReplies[0]],
      service,
      city
    },
    {
      id: '8',
      userName: 'سلطان المالكي',
      companyName: 'مؤسسة النقل السريع',
      rating: 5,
      comment: 'من أفضل شركات النقل. التزام تام بالمواعيد وأسعار منافسة. الفك والتركيب تم باحترافية عالية.',
      date: '2024-03-02',
      isVerified: true,
      likes: 14,
      replies: [],
      service,
      city
    },
    {
      id: '9',
      userName: 'منال الحربي',
      companyName: 'شركة النقل الموثوق',
      rating: 4,
      comment: 'خدمة جيدة وأسعار معقولة. العمال متعاونين جداً. أنصح بالتعامل معهم.',
      date: '2024-02-29',
      isVerified: true,
      likes: 11,
      replies: [],
      service,
      city
    },
    {
      id: '10',
      userName: 'عمر الزهراني',
      companyName: 'مؤسسة النقل المتميز',
      rating: 5,
      comment: 'تجربة رائعة من جميع النواحي. الفريق محترف والأسعار تنافسية. سرعة في التنفيذ مع الحفاظ على جودة العمل.',
      date: '2024-02-27',
      isVerified: true,
      likes: 17,
      replies: [sampleReplies[1], sampleReplies[4]],
      service,
      city
    },
    {
      id: '11',
      userName: 'عبدالرحمن الشهري',
      companyName: 'شركة النقل السريع',
      rating: 5,
      comment: 'خدمة متميزة وسرعة في الأداء. الفريق محترف جداً في التعامل مع الأثاث.',
      date: '2024-02-25',
      isVerified: true,
      likes: 13,
      replies: [],
      service,
      city
    },
    {
      id: '12',
      userName: 'لمى البلوي',
      companyName: 'مؤسسة النقل الأمين',
      rating: 4,
      comment: 'تجربة جيدة في المجمل. الأسعار مناسبة والخدمة جيدة.',
      date: '2024-02-23',
      isVerified: true,
      likes: 9,
      replies: [],
      service,
      city
    },
    {
      id: '13',
      userName: 'بندر العنزي',
      companyName: 'شركة النقل المتميز',
      rating: 5,
      comment: 'ممتازين من كل النواحي. التزام بالمواعيد وجودة في العمل.',
      date: '2024-02-21',
      isVerified: true,
      likes: 15,
      replies: [sampleReplies[0]],
      service,
      city
    },
    {
      id: '14',
      userName: 'فيصل الحربي',
      companyName: 'شركة النقل السريع',
      rating: 5,
      comment: 'تجربة لا تُنسى. فريق العمل متميز والخدمة فائقة الجودة. سعر معقول مقابل خدمة احترافية.',
      date: '2024-02-19',
      isVerified: true,
      likes: 18,
      replies: [],
      service,
      city
    },
    {
      id: '15',
      userName: 'هيفاء المطيري',
      companyName: 'مؤسسة النقل الموثوق',
      rating: 4,
      comment: 'خدمة جيدة وتعامل محترف. التغليف والفك والتركيب تم بشكل ممتاز. أسعارهم مناسبة جداً.',
      date: '2024-02-17',
      isVerified: true,
      likes: 12,
      replies: [],
      service,
      city
    },
    {
      id: '16',
      userName: 'ماجد القرني',
      companyName: 'شركة النقل المتميز',
      rating: 5,
      comment: 'أفضل شركة نقل عفش تعاملت معها. العمال محترفين والأسعار معقولة. سرعة في التنفيذ مع الحفاظ على الجودة.',
      date: '2024-02-15',
      isVerified: true,
      likes: 21,
      replies: [sampleReplies[2], sampleReplies[1]],
      service,
      city
    },
    {
      id: '17',
      userName: 'غادة السحيمي',
      companyName: 'مؤسسة النقل الأمين',
      rating: 5,
      comment: 'تجربة رائعة من البداية للنهاية. فريق عمل محترف وخدمة ممتازة. أنصح بالتعامل معهم.',
      date: '2024-02-13',
      isVerified: true,
      likes: 16,
      replies: [],
      service,
      city
    },
    {
      id: '18',
      userName: 'تركي العتيبي',
      companyName: 'شركة النقل السريع',
      rating: 4,
      comment: 'خدمة احترافية وتعامل راقي. العمال متعاونين والأسعار مناسبة. تأخروا قليلاً عن الموعد لكن العمل كان ممتاز.',
      date: '2024-02-11',
      isVerified: true,
      likes: 14,
      replies: [],
      service,
      city
    },
    {
      id: '19',
      userName: 'نوف الغامدي',
      companyName: 'مؤسسة النقل الموثوق',
      rating: 5,
      comment: 'تجربة مميزة جداً. الفك والتركيب تم باحترافية عالية. الأسعار معقولة مقارنة بالخدمة المقدمة.',
      date: '2024-02-09',
      isVerified: true,
      likes: 19,
      replies: [sampleReplies[0], sampleReplies[4]],
      service,
      city
    },
    {
      id: '20',
      userName: 'عبدالعزيز السبيعي',
      companyName: 'شركة النقل المتميز',
      rating: 5,
      comment: 'خدمة ممتازة وفريق عمل محترف. التغليف والنقل تم بعناية فائقة. سعر مناسب مقابل خدمة راقية.',
      date: '2024-02-07',
      isVerified: true,
      likes: 23,
      replies: [],
      service,
      city
    }
  ]

  // تحميل التقييمات من localStorage عند بداية تحميل المكون
  const loadStoredReviews = () => {
    if (typeof window !== 'undefined') {
      const storedReviews = localStorage.getItem(`reviews-${city}-${service}`)
      if (storedReviews) {
        return JSON.parse(storedReviews)
      }
    }
    return initialReviews
  }

  const [allReviews, setAllReviews] = useState<Review[]>(loadStoredReviews())
  const [visibleReviews, setVisibleReviews] = useState(13)

  // حساب الإحصائيات الفعلية من التقييمات
  const calculateStats = () => {
    const total = allReviews.length
    const distribution = {
      5: allReviews.filter(r => r.rating === 5).length,
      4: allReviews.filter(r => r.rating === 4).length,
      3: allReviews.filter(r => r.rating === 3).length,
      2: allReviews.filter(r => r.rating === 2).length,
      1: allReviews.filter(r => r.rating === 1).length
    }
    
    const totalRating = allReviews.reduce((acc, review) => acc + review.rating, 0)
    const average = Number((totalRating / total).toFixed(1))

    return {
      average,
      total,
      distribution
    }
  }

  const stats = calculateStats()

  // ترتيب التقييمات حسب الاختيار
  const sortedReviews = [...allReviews].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'rating':
        return b.rating - a.rating
      case 'helpful':
        return b.likes - a.likes
      default:
        return 0
    }
  })

  // تصفية التقييمات حسب عدد النجوم
  const filteredReviews = filterRating 
    ? sortedReviews.filter(review => review.rating === filterRating)
    : sortedReviews

  const displayedReviews = filteredReviews.slice(0, visibleReviews)
  const hasMoreReviews = filteredReviews.length > visibleReviews

  const handleLoadMore = () => {
    setVisibleReviews(prev => Math.min(prev + 13, filteredReviews.length))
  }

  // حفظ التقييمات في localStorage عند تحديثها
  const saveReviews = (reviews: Review[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(`reviews-${city}-${service}`, JSON.stringify(reviews))
    }
  }

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowReviewForm(false)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newReview: Review = {
        id: `${Date.now()}`,
        userName: reviewForm.userName,
        companyName: reviewForm.companyName,
        rating: reviewForm.rating,
        comment: reviewForm.comment,
        date: new Date().toISOString(),
        isVerified: true,
        likes: 0,
        replies: [],
        service,
        city
      }

      // تحديث التقييمات وحفظها في localStorage
      setAllReviews(prevReviews => {
        const updatedReviews = [newReview, ...prevReviews]
        saveReviews(updatedReviews) // حفظ التقييمات المحدثة
        setVisibleReviews(prev => Math.min(prev + 1, updatedReviews.length))
        return updatedReviews
      })
      
      setSubmitSuccess(true)
      setReviewForm({
        userName: '',
        companyName: '',
        rating: 0,
        comment: ''
      })

      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      console.error('Error submitting review:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAddReply = async (reviewId: string) => {
    if (!replyText.trim()) return

    setIsSubmittingReply(true)
    try {
      const newReply: Reply = {
        id: `${Date.now()}`,
        userName: 'زائر', // يمكن تغييره لاسم المستخدم الحالي
        comment: replyText,
        date: new Date().toISOString(),
        likes: 0
      }

      setAllReviews(prevReviews => {
        const updatedReviews = prevReviews.map(review => {
          if (review.id === reviewId) {
            return {
              ...review,
              replies: Array.isArray(review.replies) 
                ? [...review.replies, newReply]
                : [newReply]
            }
          }
          return review
        })
        
        // حفظ في localStorage
        saveReviews(updatedReviews)
        return updatedReviews
      })

      setReplyText('')
      setShowReplyForm(null)
    } finally {
      setIsSubmittingReply(false)
    }
  }

  // إضافة دالة للتفاعل مع التقييم
  const handleLikeReview = (reviewId: string) => {
    setAllReviews(prevReviews => {
      const updatedReviews = prevReviews.map(review => {
        if (review.id === reviewId) {
          // التحقق من التفاعل السابق
          const hasLiked = localStorage.getItem(`like-${reviewId}`)
          if (hasLiked) {
            // إذا كان المستخدم قد تفاعل سابقاً، نقوم بإزالة الإعجاب
            localStorage.removeItem(`like-${reviewId}`)
            return { ...review, likes: review.likes - 1 }
          } else {
            // إذا لم يكن قد تفاعل، نضيف الإعجاب
            localStorage.setItem(`like-${reviewId}`, 'true')
            return { ...review, likes: review.likes + 1 }
          }
        }
        return review
      })
      
      // حفظ التقييمات المحدثة
      saveReviews(updatedReviews)
      return updatedReviews
    })
  }

  // تعديل دالة handleLikeReply
  const handleLikeReply = (reviewId: string, replyId: string) => {
    setAllReviews(prevReviews => {
      const updatedReviews = prevReviews.map(review => {
        if (review.id === reviewId) {
          const updatedReplies = review.replies.map(reply => {
            if (reply.id === replyId) {
              const hasLiked = localStorage.getItem(`like-reply-${replyId}`)
              const currentLikes = reply.likes || 0 // التأكد من أن القيمة الأولية ليست undefined
              
              if (hasLiked) {
                localStorage.removeItem(`like-reply-${replyId}`)
                return { 
                  ...reply, 
                  likes: Math.max(0, currentLikes - 1) // منع القيم السالبة
                }
              } else {
                localStorage.setItem(`like-reply-${replyId}`, 'true')
                return { 
                  ...reply, 
                  likes: currentLikes + 1 
                }
              }
            }
            return reply
          })
          return { ...review, replies: updatedReplies }
        }
        return review
      })
      
      saveReviews(updatedReviews)
      return updatedReviews
    })
  }

  // تحديث عرض زر "مفيد" في التقييم
  const isReviewLiked = (reviewId: string) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(`like-${reviewId}`) === 'true'
    }
    return false
  }

  // تحديث عرض زر "مفيد" في الرد
  const isReplyLiked = (replyId: string) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(`like-reply-${replyId}`) === 'true'
    }
    return false
  }

  if (!isClient) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">تقييمات العملاء</h2>
              <div className="animate-pulse bg-gray-200 h-8 w-32 mx-auto rounded"></div>
            </div>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
                  <div className="h-24 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* رأس القسم */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">تقييمات العملاء</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="text-4xl font-bold text-primary">{stats.average}</div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.floor(stats.average)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-500" suppressHydrationWarning>
                  من {stats.total} تقييم
                </div>
              </div>
            </div>
          </div>

          {/* توزيع التقييمات */}
          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4">توزيع التقييمات</h3>
                {Object.entries(stats.distribution)
                  .reverse()
                  .map(([rating, count]) => (
                    <div key={rating} className="flex items-center gap-2 mb-2">
                      <div className="w-12 text-sm">{rating} نجوم</div>
                      <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ 
                            width: `${(count / stats.total) * 100}%` 
                          }}
                          className="h-full bg-primary"
                        />
                      </div>
                      <div className="w-12 text-sm text-gray-500" suppressHydrationWarning>
                        {Math.round((count / stats.total) * 100)}%
                      </div>
                    </div>
                  ))}
              </div>
              
              {/* أدوات التصفية والترتيب */}
              <div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold mb-2">ترتيب حسب</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSortBy('recent')}
                        className={`px-4 py-2 rounded-lg transition ${
                          sortBy === 'recent'
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        الأحدث
                      </button>
                      <button
                        onClick={() => setSortBy('rating')}
                        className={`px-4 py-2 rounded-lg transition ${
                          sortBy === 'rating'
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        الأعلى تقييماً
                      </button>
                      <button
                        onClick={() => setSortBy('helpful')}
                        className={`px-4 py-2 rounded-lg transition ${
                          sortBy === 'helpful'
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        الأكثر فائدة
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold mb-2">تصفية حسب التقييم</h3>
                    <div className="flex gap-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <button
                          key={rating}
                          onClick={() => setFilterRating(filterRating === rating ? null : rating)}
                          className={`px-4 py-2 rounded-lg transition flex items-center gap-1 ${
                            filterRating === rating
                              ? 'bg-primary text-white'
                              : 'bg-gray-100 hover:bg-gray-200'
                          }`}
                        >
                          {rating}
                          <StarIcon className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* قائمة التقييمات */}
          <div className="space-y-6">
            {displayedReviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

                <p className="text-gray-600 mb-4">{review.comment}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => handleLikeReview(review.id)}
                      className={`flex items-center gap-1 transition ${
                        isReviewLiked(review.id) ? 'text-primary' : 'text-gray-500 hover:text-primary'
                      }`}
                    >
                      <HandThumbUpIcon className="w-5 h-5" />
                      <span suppressHydrationWarning>مفيد ({review.likes})</span>
                    </button>
                    <button 
                      onClick={() => setShowReplyForm(showReplyForm === review.id ? null : review.id)}
                      className="flex items-center gap-1 hover:text-primary transition"
                    >
                      <ChatBubbleLeftIcon className="w-5 h-5" />
                      <span suppressHydrationWarning>
                        رد ({Array.isArray(review.replies) ? review.replies.length : 0})
                      </span>
                    </button>
                  </div>
                  <div suppressHydrationWarning>
                    {formatDate(review.date)}
                  </div>
                </div>

                {/* قسم الردود */}
                {Array.isArray(review.replies) && review.replies.length > 0 && (
                  <div className="mt-4 space-y-4 pr-12 border-r-2 border-gray-100">
                    {review.replies.map((reply) => (
                      <motion.div
                        key={reply.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium">{reply.userName}</div>
                          <div className="text-sm text-gray-500" suppressHydrationWarning>
                            {formatDate(reply.date)}
                          </div>
                        </div>
                        <p className="text-gray-600">{reply.comment}</p>
                        <button 
                          onClick={() => handleLikeReply(review.id, reply.id)}
                          className={`text-sm transition flex items-center gap-1 ${
                            isReplyLiked(reply.id) ? 'text-primary' : 'text-gray-500 hover:text-primary'
                          }`}
                        >
                          <HandThumbUpIcon className="w-4 h-4" />
                          <span suppressHydrationWarning>مفيد ({reply.likes})</span>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* نموذج إضافة رد */}
                {showReplyForm === review.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 pr-12"
                  >
                    <div className="bg-gray-50 rounded-lg p-4">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="اكتب ردك هنا..."
                        rows={3}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary mb-2"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setShowReplyForm(null)}
                          className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg transition"
                        >
                          إلغاء
                        </button>
                        <button
                          onClick={() => handleAddReply(review.id)}
                          disabled={isSubmittingReply || !replyText.trim()}
                          className={`px-4 py-2 bg-primary text-white rounded-lg transition ${
                            isSubmittingReply || !replyText.trim()
                              ? 'opacity-50 cursor-not-allowed'
                              : 'hover:bg-primary-dark'
                          }`}
                        >
                          {isSubmittingReply ? 'جاري الإرسال...' : 'إرسال'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* زر عرض المزيد */}
            {hasMoreReviews && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-8"
              >
                <button
                  onClick={handleLoadMore}
                  className="flex items-center gap-2 mx-auto px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary/5 transition group"
                >
                  <span>عرض المزيد من التقييمات</span>
                  <svg 
                    className="w-5 h-5 transform transition group-hover:translate-y-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </button>
                <div className="text-sm text-gray-500 mt-2" suppressHydrationWarning>
                  {filteredReviews.length - visibleReviews} تقييم إضافي
                </div>
              </motion.div>
            )}
          </div>

          {/* زر إضافة تقييم */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowReviewForm(true)}
              className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition"
            >
              أضف تقييمك
            </button>
          </motion.div>
        </div>
      </div>

      {/* نموذج إضافة تقييم */}
      <AnimatePresence>
        {showReviewForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-lg w-full"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">إضافة تقييم جديد</h3>
                <button
                  onClick={() => setShowReviewForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    الاسم
                  </label>
                  <input
                    type="text"
                    required
                    value={reviewForm.userName}
                    onChange={(e) => setReviewForm({ ...reviewForm, userName: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    اسم الشركة
                  </label>
                  <input
                    type="text"
                    required
                    value={reviewForm.companyName}
                    onChange={(e) => setReviewForm({ ...reviewForm, companyName: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    التقييم
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="text-2xl"
                      >
                        <StarIcon
                          className={`w-8 h-8 ${
                            star <= (hoveredRating || reviewForm.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    التعليق
                  </label>
                  <textarea
                    required
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || reviewForm.rating === 0}
                  className={`w-full bg-primary text-white py-3 rounded-lg font-bold ${
                    isSubmitting || reviewForm.rating === 0
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-primary-dark'
                  }`}
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال التقييم'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* رسالة نجاح إرسال التقييم */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 left-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            تم إرسال تقييمك بنجاح!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// دالة مساعدة لحساب المتوسط الجديد
function calculateNewAverage(): number {
  const totalRatings = Object.entries(stats.distribution).reduce(
    (acc, [rating, count]) => acc + (Number(rating) * count), 
    0
  )
  return Number((totalRatings / stats.total).toFixed(1))
} 