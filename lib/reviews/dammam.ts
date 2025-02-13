import { Review } from '@/types/reviews'

// تقييمات خدمة نقل العفش في الدمام
export const dammamReviews: Review[] = [
  {
    id: 1,
    name: "عبدالله السبيعي",
    companyName: "شركة النخبة للنقل بالدمام",
    rating: 5,
    date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "خدمة نقل العفش كانت ممتازة، العمال محترفين في فك وتركيب غرف النوم والمطابخ. التغليف احترافي والأسعار معقولة.",
    likes: 48,
    initialLikes: 48,
    repliesCount: 2,
    replies: [
      {
        _id: "d1",
        userName: "مندوب شركة النخبة",
        comment: "نشكر ثقتكم في خدمات نقل العفش لدينا",
        createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل عفش"
  },
  {
    id: 2,
    name: "نورة القحطاني",
    companyName: "شركة الأمانة للنقل بالدمام",
    rating: 4,
    date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "تجربة جيدة في نقل أثاث المنزل، الفريق متعاون والتغليف جيد. تأخروا قليلاً عن الموعد لكن العمل كان متقن.",
    likes: 39,
    initialLikes: 39,
    repliesCount: 1,
    replies: [
      {
        _id: "d2",
        userName: "شركة الأمانة للنقل",
        comment: "نشكر ملاحظاتكم ونعتذر عن التأخير",
        createdAt: new Date(Date.now() - 19 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل عفش"
  },
  {
    id: 3,
    name: "محمد العتيبي",
    companyName: "مؤسسة الإتقان للنقل بالدمام",
    rating: 3,
    date: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "الخدمة متوسطة، بعض الأثاث تعرض لخدوش بسيطة أثناء النقل. الأسعار مرتفعة مقارنة بالخدمة المقدمة.",
    likes: 28,
    initialLikes: 28,
    repliesCount: 1,
    replies: [
      {
        _id: "d3",
        userName: "مؤسسة الإتقان للنقل",
        comment: "نعتذر عن التجربة السيئة ونعدكم بتحسين خدماتنا",
        createdAt: new Date(Date.now() - 24 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل عفش"
  },
  {
    id: 4,
    name: "فهد الشمري",
    companyName: "شركة النخبة للنقل بالدمام",
    rating: 5,
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "تجربة رائعة في نقل أثاث الفيلا كاملة. فريق محترف في الفك والتركيب، والتغليف كان ممتاز. سعر مناسب جداً مقارنة بالخدمة.",
    likes: 55,
    initialLikes: 55,
    repliesCount: 2,
    replies: [
      {
        _id: "d4",
        userName: "مندوب شركة النخبة",
        comment: "نشكر ثقتكم في خدمات نقل العفش لدينا",
        createdAt: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل عفش"
  },
  {
    id: 5,
    name: "ريم الدوسري",
    companyName: "مؤسسة الإتقان للنقل بالدمام",
    rating: 2,
    date: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "تجربة سيئة، تأخروا كثيراً عن الموعد وتم كسر بعض قطع الأثاث. لا أنصح بالتعامل معهم.",
    likes: 15,
    initialLikes: 15,
    repliesCount: 1,
    replies: [
      {
        _id: "d5",
        userName: "مؤسسة الإتقان للنقل",
        comment: "نعتذر عن هذه التجربة السيئة ونرجو التواصل معنا لتعويضكم",
        createdAt: new Date(Date.now() - 34 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل عفش"
  },
  {
    id: 6,
    name: "عبدالرحمن العنزي",
    companyName: "شركة الأمانة للنقل بالدمام",
    rating: 4,
    date: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "خدمة جيدة في نقل الأثاث، العمال متعاونين والتغليف جيد. الأسعار مناسبة والعمل احترافي.",
    likes: 42,
    initialLikes: 42,
    repliesCount: 1,
    replies: [
      {
        _id: "d6",
        userName: "شركة الأمانة للنقل",
        comment: "نشكر ثقتكم ونسعد بخدمتكم دائماً",
        createdAt: new Date(Date.now() - 39 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل عفش"
  },
  {
    id: 7,
    name: "منيرة القحطاني",
    companyName: "شركة النخبة للنقل بالدمام",
    rating: 5,
    date: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "أفضل شركة نقل عفش في الدمام، الفريق محترف جداً في التعامل مع الأثاث الثمين. التغليف والفك والتركيب كان ممتاز.",
    likes: 63,
    initialLikes: 63,
    repliesCount: 2,
    replies: [
      {
        _id: "d7",
        userName: "مندوب شركة النخبة",
        comment: "نشكر لكم هذا التقييم الرائع ونسعد دائماً بخدمتكم",
        createdAt: new Date(Date.now() - 44 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل عفش"
  }
] 