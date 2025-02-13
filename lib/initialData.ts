import { Review } from '@/types/reviews'

export const initialReviews: Review[] = [
  // التقييمات السابقة تبقى...
  {
    id: 8,
    name: "فيصل العتيبي",
    companyName: "شركة الصقر لنقل العفش",
    rating: 5,
    date: new Date(Date.now() - 55 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "تجربة رائعة مع شركة الصقر. العمال محترفين جداً والأسعار معقولة. التغليف كان ممتاز والفك والتركيب احترافي.",
    likes: 38,
    initialLikes: 38,
    repliesCount: 2,
    replies: [
      {
        _id: "19",
        userName: "شركة الصقر لنقل العفش",
        comment: "نشكر ثقتكم الغالية ونسعد دائماً بخدمتكم",
        createdAt: new Date(Date.now() - 54 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل مع الفك والتركيب والتغليف"
  },
  {
    id: 9,
    name: "منيرة السبيعي",
    companyName: "مؤسسة الإتقان للنقل",
    rating: 3,
    date: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "الخدمة متوسطة، كان هناك تأخير في الموعد وبعض الأغراض تعرضت لخدوش بسيطة. لكن الأسعار مناسبة.",
    likes: 15,
    initialLikes: 15,
    repliesCount: 2,
    replies: [
      {
        _id: "20",
        userName: "مؤسسة الإتقان للنقل",
        comment: "نعتذر عن التأخير والأضرار، نعمل على تحسين خدماتنا باستمرار",
        createdAt: new Date(Date.now() - 59 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل مع التغليف"
  },
  {
    id: 10,
    name: "عبدالرحمن الدوسري",
    companyName: "شركة النخبة لنقل العفش",
    rating: 5,
    date: new Date(Date.now() - 65 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "من أفضل شركات النقل في المنطقة. تعاملت معهم أكثر من مرة وفي كل مرة يثبتون احترافيتهم. العمال مدربين والأسعار منافسة.",
    likes: 52,
    initialLikes: 52,
    repliesCount: 3,
    replies: [
      {
        _id: "21",
        userName: "مندوب شركة النخبة",
        comment: "نشكر لكم ثقتكم المتكررة، ونسعد دائماً بخدمتكم",
        createdAt: new Date(Date.now() - 64 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        _id: "22",
        userName: "سلطان العنزي",
        comment: "صحيح كلامك، أنا أيضاً تعاملت معهم وكانوا ممتازين",
        createdAt: new Date(Date.now() - 63 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل مع الفك والتركيب والتغليف"
  },
  {
    id: 11,
    name: "نوف القحطاني",
    companyName: "مؤسسة الأمانة للنقل",
    rating: 2,
    date: new Date(Date.now() - 70 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "تجربة غير جيدة. تأخروا كثيراً عن الموعد وبعض الأثاث تعرض للكسر. الأسعار مرتفعة مقارنة بالخدمة المقدمة.",
    likes: 8,
    initialLikes: 8,
    repliesCount: 2,
    replies: [
      {
        _id: "23",
        userName: "مؤسسة الأمانة للنقل",
        comment: "نعتذر بشدة عن هذه التجربة السيئة. نرجو التواصل معنا لتعويضكم عن الأضرار",
        createdAt: new Date(Date.now() - 69 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل كامل"
  },
  {
    id: 12,
    name: "محمد العمري",
    companyName: "شركة الصقر لنقل العفش",
    rating: 4,
    date: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "خدمة جيدة جداً والعمال محترفين في الفك والتركيب. التغليف كان ممتاز والأسعار معقولة. أنصح بالتعامل معهم.",
    likes: 29,
    initialLikes: 29,
    repliesCount: 2,
    replies: [
      {
        _id: "24",
        userName: "شركة الصقر لنقل العفش",
        comment: "شكراً لثقتكم، نسعد دائماً بخدمتكم",
        createdAt: new Date(Date.now() - 74 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل مع فك وتركيب"
  }
  // ... هل أكمل إضافة المزيد من التقييمات؟
] 