import { Review } from '@/types/reviews'

// تقييمات خدمات جدة
export const jeddahReviews: Review[] = [
  // نقل العفش
  {
    id: 1,
    name: "محمد الغامدي",
    companyName: "شركة النخبة بجدة",
    rating: 5,
    date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "تجربة ممتازة مع شركة النخبة في جدة. الفريق محترف والخدمة سريعة والأسعار معقولة. أنصح بالتعامل معهم.",
    likes: 51,
    initialLikes: 51,
    repliesCount: 2,
    replies: [
      {
        _id: "j1",
        userName: "مندوب شركة النخبة",
        comment: "نشكر ثقتكم الغالية في خدماتنا بجدة",
        createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل عفش"
  },
  {
    id: 2,
    name: "سارة الزهراني",
    companyName: "شركة الأمانة بجدة",
    rating: 4,
    date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "خدمة جيدة جداً في جدة، العمال متعاونين والأسعار مناسبة. التعامل كان راقي والنتيجة ممتازة.",
    likes: 43,
    initialLikes: 43,
    repliesCount: 1,
    replies: [
      {
        _id: "j2",
        userName: "شركة الأمانة",
        comment: "سعداء بخدمتكم ونشكر ثقتكم",
        createdAt: new Date(Date.now() - 19 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل عفش"
  },

  // تنظيف المنازل
  {
    id: 3,
    name: "محمد الغامدي",
    companyName: "شركة النخبة بجدة",
    rating: 5,
    date: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "تجربة ممتازة مع شركة النخبة في جدة. الفريق محترف والخدمة سريعة والأسعار معقولة. أنصح بالتعامل معهم.",
    likes: 51,
    initialLikes: 51,
    repliesCount: 2,
    replies: [
      {
        _id: "j3",
        userName: "مندوب شركة النخبة",
        comment: "نشكر ثقتكم الغالية في خدماتنا بجدة",
        createdAt: new Date(Date.now() - 24 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "تنظيف منازل"
  },
  {
    id: 4,
    name: "سارة الزهراني",
    companyName: "شركة الأمانة بجدة",
    rating: 4,
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "خدمة جيدة جداً في جدة، العمال متعاونين والأسعار مناسبة. التعامل كان راقي والنتيجة ممتازة.",
    likes: 43,
    initialLikes: 43,
    repliesCount: 1,
    replies: [
      {
        _id: "j4",
        userName: "شركة الأمانة",
        comment: "سعداء بخدمتكم ونشكر ثقتكم",
        createdAt: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "تنظيف منازل"
  },

  // مكافحة الحشرات
  {
    id: 5,
    name: "محمد الغامدي",
    companyName: "شركة النخبة بجدة",
    rating: 5,
    date: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "تجربة ممتازة مع شركة النخبة في جدة. الفريق محترف والخدمة سريعة والأسعار معقولة. أنصح بالتعامل معهم.",
    likes: 51,
    initialLikes: 51,
    repliesCount: 2,
    replies: [
      {
        _id: "j5",
        userName: "مندوب شركة النخبة",
        comment: "نشكر ثقتكم الغالية في خدماتنا بجدة",
        createdAt: new Date(Date.now() - 34 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "مكافحة حشرات"
  },
  {
    id: 6,
    name: "سارة الزهراني",
    companyName: "شركة الأمانة بجدة",
    rating: 4,
    date: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "خدمة جيدة جداً في جدة، العمال متعاونين والأسعار مناسبة. التعامل كان راقي والنتيجة ممتازة.",
    likes: 43,
    initialLikes: 43,
    repliesCount: 1,
    replies: [
      {
        _id: "j6",
        userName: "شركة الأمانة",
        comment: "سعداء بخدمتكم ونشكر ثقتكم",
        createdAt: new Date(Date.now() - 39 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "مكافحة حشرات"
  },

  // تنظيف المكيفات
  {
    id: 7,
    name: "محمد الغامدي",
    companyName: "شركة النخبة بجدة",
    rating: 5,
    date: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "تجربة ممتازة مع شركة النخبة في جدة. الفريق محترف والخدمة سريعة والأسعار معقولة. أنصح بالتعامل معهم.",
    likes: 51,
    initialLikes: 51,
    repliesCount: 2,
    replies: [
      {
        _id: "j7",
        userName: "مندوب شركة النخبة",
        comment: "نشكر ثقتكم الغالية في خدماتنا بجدة",
        createdAt: new Date(Date.now() - 44 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "تنظيف مكيفات"
  },
  {
    id: 8,
    name: "سارة الزهراني",
    companyName: "شركة الأمانة بجدة",
    rating: 4,
    date: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "خدمة جيدة جداً في جدة، العمال متعاونين والأسعار مناسبة. التعامل كان راقي والنتيجة ممتازة.",
    likes: 43,
    initialLikes: 43,
    repliesCount: 1,
    replies: [
      {
        _id: "j8",
        userName: "شركة الأمانة",
        comment: "سعداء بخدمتكم ونشكر ثقتكم",
        createdAt: new Date(Date.now() - 49 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "تنظيف مكيفات"
  }
] 