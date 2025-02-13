import { Review } from '@/types/reviews'
import { generateRealisticDate } from '@/lib/utils/date'

export const riyadhReviews: Review[] = [
  {
    id: 1,
    name: "فهد العتيبي",
    companyName: "شركة النخبة للنقل",
    rating: 5,
    date: generateRealisticDate(15), // قبل 15 يوم
    comment: "تجربة ممتازة مع شركة النخبة. العمال محترفين جداً في فك وتركيب الأثاث. التغليف كان ممتاز والأسعار معقولة. أنصح بالتعامل معهم بشدة.",
    likes: 42,
    repliesCount: 2,
    replies: [
      {
        _id: "r1",
        userName: "شركة النخبة للنقل",
        comment: "نشكر لك ثقتك الغالية ونسعد دائماً بخدمتكم",
        createdAt: generateRealisticDate(14)
      },
      {
        _id: "r2",
        userName: "سلطان الحربي",
        comment: "فعلاً شركة محترمة وخدمتهم ممتازة",
        createdAt: generateRealisticDate(13)
      }
    ],
    verified: true,
    serviceType: "نقل عفش مع التركيب",
    initialLikes: 42
  },
  {
    id: 2,
    name: "محمد القحطاني",
    companyName: "شركة النخبة للنقل",
    rating: 5,
    date: generateRealisticDate(10),
    comment: "خدمة احترافية من الدرجة الأولى. فريق العمل متعاون جداً والأسعار معقولة. قاموا بفك وتركيب جميع الأثاث باحترافية عالية.",
    likes: 38,
    repliesCount: 1,
    replies: [
      {
        _id: "r3",
        userName: "شركة النخبة للنقل",
        comment: "شكراً لثقتكم الغالية",
        createdAt: generateRealisticDate(9)
      }
    ],
    verified: true,
    serviceType: "نقل عفش مع التركيب",
    initialLikes: 38
  },
  {
    id: 3,
    name: "سارة الدوسري",
    companyName: "مؤسسة الأمانة",
    rating: 4,
    date: generateRealisticDate(12),
    comment: "تجربة جيدة بشكل عام. التغليف كان ممتاز والعمال محترمين. السعر مناسب مقارنة بالخدمة المقدمة.",
    likes: 25,
    repliesCount: 2,
    replies: [
      {
        _id: "r4",
        userName: "مؤسسة الأمانة",
        comment: "نشكر لك تقييمك ونعدك بتقديم الأفضل دائماً",
        createdAt: generateRealisticDate(11)
      }
    ],
    verified: true,
    serviceType: "نقل مع تغليف",
    initialLikes: 25
  },
  {
    id: 4,
    name: "عبدالله العتيبي",
    companyName: "شركة الصفوة",
    rating: 5,
    date: generateRealisticDate(8),
    comment: "من أفضل شركات نقل العفش في الرياض. تعاملت معهم أكثر من مرة وفي كل مرة نفس المستوى من الاحترافية والدقة في العمل.",
    likes: 45,
    repliesCount: 3,
    replies: [
      {
        _id: "r5",
        userName: "شركة الصفوة",
        comment: "نسعد دائماً بخدمتكم ونشكر ثقتكم الغالية",
        createdAt: generateRealisticDate(7)
      },
      {
        _id: "r6",
        userName: "خالد السبيعي",
        comment: "صحيح كلامك، تعاملت معهم وكانوا ممتازين",
        createdAt: generateRealisticDate(6)
      }
    ],
    verified: true,
    serviceType: "نقل عفش مع التركيب",
    initialLikes: 45
  },
  {
    id: 5,
    name: "نورة الحربي",
    companyName: "مؤسسة الأمانة للنقل بالرياض",
    rating: 4,
    date: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "خدمة جيدة جداً في الرياض، العمال متعاونين والتغليف ممتاز. الأسعار مناسبة للخدمة المقدمة.",
    likes: 32,
    initialLikes: 32,
    repliesCount: 2,
    replies: [
      {
        _id: "r2",
        userName: "مؤسسة الأمانة للنقل",
        comment: "نشكر ثقتكم، نسعد بخدمة أهالي الرياض دائماً",
        createdAt: new Date(Date.now() - 19 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل مع التغليف"
  },
  {
    id: 6,
    name: "عبدالرحمن الشمري",
    companyName: "شركة الصقر لنقل العفش بالرياض",
    rating: 4,
    date: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "خدمة جيدة جداً والعمال متعاونين. التغليف كان ممتاز والنقل تم بعناية. أسعارهم مناسبة.",
    likes: 28,
    initialLikes: 28,
    repliesCount: 2,
    replies: [
      {
        _id: "r8",
        userName: "شركة الصقر للنقل",
        comment: "سعداء بخدمتكم ونشكر ثقتكم",
        createdAt: new Date(Date.now() - 39 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل مع التغليف"
  },
  {
    id: 7,
    name: "منيرة السبيعي",
    companyName: "شركة الإتقان",
    rating: 3,
    date: generateRealisticDate(18),
    comment: "الخدمة متوسطة. العمال متعاونين لكن كان هناك تأخير في الموعد. التغليف جيد لكن الأسعار مرتفعة نسبياً.",
    likes: 15,
    repliesCount: 2,
    replies: [
      {
        _id: "r9",
        userName: "شركة الإتقان",
        comment: "نعتذر عن التأخير ونعدكم بتحسين خدماتنا",
        createdAt: generateRealisticDate(17)
      }
    ],
    verified: true,
    serviceType: "نقل مع تغليف",
    initialLikes: 15
  },
  {
    id: 8,
    name: "فيصل الدوسري",
    companyName: "شركة النخبة للنقل",
    rating: 5,
    date: generateRealisticDate(5),
    comment: "تجربة رائعة في نقل المكيفات. فريق محترف في الفك والتركيب، وتم تنظيف المكيفات بشكل ممتاز.",
    likes: 52,
    repliesCount: 3,
    replies: [
      {
        _id: "r10",
        userName: "شركة النخبة للنقل",
        comment: "سعداء بخدمتكم ونشكر ثقتكم الغالية",
        createdAt: generateRealisticDate(4)
      },
      {
        _id: "r11",
        userName: "محمد العنزي",
        comment: "نفس تجربتي معهم في نقل المكيفات",
        createdAt: generateRealisticDate(3)
      }
    ],
    verified: true,
    serviceType: "نقل وتركيب مكيفات",
    initialLikes: 52
  },
  {
    id: 9,
    name: "لمى الشهري",
    companyName: "مؤسسة الأمانة",
    rating: 4,
    date: generateRealisticDate(22),
    comment: "خدمة جيدة في تخزين الأثاث. المستودع نظيف وآمن، والتغليف احترافي. السعر مناسب للخدمة.",
    likes: 28,
    repliesCount: 1,
    replies: [
      {
        _id: "r12",
        userName: "مؤسسة الأمانة",
        comment: "نشكر ثقتكم في خدمات التخزين لدينا",
        createdAt: generateRealisticDate(21)
      }
    ],
    verified: true,
    serviceType: "تخزين أثاث",
    initialLikes: 28
  },
  {
    id: 10,
    name: "عبدالعزيز المالكي",
    companyName: "شركة النخبة لنقل العفش بالرياض",
    rating: 5,
    date: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "تجربة لا تُنسى مع شركة النخبة. فريق العمل محترف جداً، والتعامل مع الأثاث كان بعناية فائقة. الأسعار مناسبة جداً مقارنة بالخدمة الممتازة.",
    likes: 73,
    initialLikes: 73,
    repliesCount: 3,
    replies: [
      {
        _id: "r13",
        userName: "مندوب شركة النخبة",
        comment: "نشكر لكم هذا التقييم الرائع ونسعد دائماً بخدمتكم",
        createdAt: new Date(Date.now() - 59 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        _id: "r14",
        userName: "سلمان الحربي",
        comment: "أؤيد كلامك، تعاملت معهم مرتين وكانوا ممتازين",
        createdAt: new Date(Date.now() - 58 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل مع الفك والتركيب والتغليف"
  },
  {
    id: 11,
    name: "لمياء الشمري",
    companyName: "مؤسسة الإتقان للنقل بالرياض",
    rating: 1,
    date: new Date(Date.now() - 65 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "تجربة سيئة للغاية. تأخروا ساعات عن الموعد، وتم كسر بعض الأثاث أثناء النقل. لا أنصح بالتعامل معهم نهائياً.",
    likes: 19,
    initialLikes: 19,
    repliesCount: 2,
    replies: [
      {
        _id: "r15",
        userName: "مؤسسة الإتقان للنقل",
        comment: "نعتذر بشدة عن هذه التجربة السيئة. نرجو التواصل معنا لتعويضكم عن جميع الأضرار",
        createdAt: new Date(Date.now() - 64 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل كامل"
  },
  {
    id: 12,
    name: "تركي السبيعي",
    companyName: "شركة الصقر لنقل العفش بالرياض",
    rating: 4,
    date: new Date(Date.now() - 70 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "خدمة جيدة جداً وفريق عمل محترف. التغليف والفك والتركيب تم بشكل ممتاز. الأسعار في المتوسط.",
    likes: 34,
    initialLikes: 34,
    repliesCount: 2,
    replies: [
      {
        _id: "r16",
        userName: "شركة الصقر للنقل",
        comment: "نشكر لكم ثقتكم ونسعد دائماً بخدمتكم",
        createdAt: new Date(Date.now() - 69 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل مع فك وتركيب"
  },
  {
    id: 13,
    name: "أحمد العنزي",
    companyName: "شركة النخبة لنقل العفش بالرياض",
    rating: 5,
    date: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000).toISOString(),
    comment: "أفضل شركة نقل عفش في الرياض بدون منازع. العمال محترفين جداً والأسعار معقولة. التغليف ممتاز والفك والتركيب احترافي.",
    likes: 88,
    initialLikes: 88,
    repliesCount: 3,
    replies: [
      {
        _id: "r17",
        userName: "مندوب شركة النخبة",
        comment: "نشكر لكم هذا التقييم الرائع ونسعد دائماً بخدمتكم",
        createdAt: new Date(Date.now() - 74 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        _id: "r18",
        userName: "فهد الدوسري",
        comment: "كلام صحيح 100%، أفضل شركة نقل عفش",
        createdAt: new Date(Date.now() - 73 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    verified: true,
    serviceType: "نقل مع الفك والتركيب والتغليف"
  },
  {
    id: 14,
    name: "نواف القحطاني",
    companyName: "شركة النخبة للنقل",
    rating: 5,
    date: generateRealisticDate(25),
    comment: "خدمة نقل المكيفات كانت ممتازة. فريق محترف في الفك والتركيب والتنظيف. سعر معقول مقابل الخدمة الاحترافية.",
    likes: 48,
    repliesCount: 2,
    replies: [
      {
        _id: "r17",
        userName: "شركة النخبة للنقل",
        comment: "نشكر ثقتكم الغالية ونسعد بخدمتكم دائماً",
        createdAt: generateRealisticDate(24)
      },
      {
        _id: "r18",
        userName: "فهد العنزي",
        comment: "أفضل شركة في نقل وتركيب المكيفات",
        createdAt: generateRealisticDate(23)
      }
    ],
    verified: true,
    serviceType: "نقل وتركيب مكيفات",
    initialLikes: 48
  },
  {
    id: 15,
    name: "ريم العتيبي",
    companyName: "مؤسسة الأمانة",
    rating: 5,
    date: generateRealisticDate(16),
    comment: "تجربة رائعة في تخزين الأثاث. المستودعات نظيفة وآمنة، والتغليف ممتاز. أسعار معقولة جداً.",
    likes: 39,
    repliesCount: 1,
    replies: [
      {
        _id: "r19",
        userName: "مؤسسة الأمانة",
        comment: "سعداء بثقتكم في خدمات التخزين لدينا",
        createdAt: generateRealisticDate(15)
      }
    ],
    verified: true,
    serviceType: "تخزين أثاث",
    initialLikes: 39
  },
  {
    id: 16,
    name: "سلطان الشمري",
    companyName: "شركة الصفوة",
    rating: 2,
    date: generateRealisticDate(30),
    comment: "تجربة غير جيدة. تأخروا عن الموعد المحدد، والتغليف كان سيئ. بعض الأثاث تعرض للخدوش.",
    likes: 23,
    repliesCount: 2,
    replies: [
      {
        _id: "r20",
        userName: "شركة الصفوة",
        comment: "نعتذر عن هذه التجربة السيئة ونرجو التواصل معنا للتعويض",
        createdAt: generateRealisticDate(29)
      }
    ],
    verified: true,
    serviceType: "نقل عفش مع التركيب",
    initialLikes: 23
  },
  {
    id: 17,
    name: "عبدالله المطيري",
    companyName: "شركة النخبة للنقل",
    rating: 5,
    date: generateRealisticDate(9),
    comment: "خدمة النقل الدولي كانت ممتازة. تم تغليف كل شيء باحترافية عالية، والشحن وصل في الموعد المحدد بدون أي أضرار.",
    likes: 67,
    repliesCount: 3,
    replies: [
      {
        _id: "r21",
        userName: "شركة النخبة للنقل",
        comment: "نشكر ثقتكم في خدمات النقل الدولي لدينا",
        createdAt: generateRealisticDate(8)
      },
      {
        _id: "r22",
        userName: "خالد الدوسري",
        comment: "أفضل شركة في النقل الدولي بدون منازع",
        createdAt: generateRealisticDate(7)
      }
    ],
    verified: true,
    serviceType: "نقل دولي",
    initialLikes: 67
  }
  // ... سأكمل إضافة المزيد من التقييمات
] 