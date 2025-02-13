import type { Review, Reply } from './types'

interface ReviewGroups {
  [key: string]: Review[]
}

// مجموعات مختلفة من التقييمات حسب المدينة والخدمة
const reviewGroups: ReviewGroups = {
  'الرياض-نقل-عفش': [
    {
      id: '1',
      userName: 'فيصل الحربي',
      rating: 5,
      comment: 'تجربة مميزة مع شركة النقل، تم نقل أثاث الفيلا كاملاً بدون أي مشاكل. العمال منظمين وملتزمين بالوقت.',
      date: '2024-02-01',
      companyName: 'شركة نقل عفش الرياض',
      verified: true,
      replies: []
    },
    // ... المزيد من التقييمات الخاصة بالرياض
  ],
  'جدة-نقل-عفش': [
    {
      id: '1',
      userName: 'عمر باحارث',
      rating: 5,
      comment: 'خدمة ممتازة في نقل أثاث شقتي، الفريق محترف في التعامل مع قطع الأثاث الثمينة.',
      date: '2024-01-25',
      companyName: 'مؤسسة نقل عفش جدة',
      verified: true,
      replies: []
    },
    // ... المزيد من التقييمات الخاصة بجدة
  ],
  'الدمام-نقل-عفش': [
    {
      id: '1',
      userName: 'علي البقمي',
      rating: 4,
      comment: 'سعر مناسب وخدمة جيدة، قاموا بنقل الأثاث من الدمام للخبر بكل عناية.',
      date: '2024-01-20',
      companyName: 'شركة نقل الشرقية',
      verified: true,
      replies: []
    },
    // ... المزيد من التقييمات الخاصة بالدمام
  ],
  // ... وهكذا لباقي المدن والخدمات
}

// دالة مساعدة لإنشاء مفتاح التقييم
const getReviewKey = (city: string, service: string): string => {
  return `${city}-${service}`.replace(/ /g, '-')
}

// دالة للحصول على التقييمات المناسبة
export const getReviewsByLocation = (city: string, service: string): Review[] => {
  const key = getReviewKey(city, service)
  return reviewGroups[key] || generateRandomReviews(city)
}

// دالة لإنشاء تقييمات عشوائية للمدن التي ليس لها تقييمات محددة
const generateRandomReviews = (city: string): Review[] => {
  const names = [
    'عبدالله', 'محمد', 'سعد', 'خالد', 'فهد', 'نورة', 'سارة', 'ريم', 'عبير', 'منال',
    'سلطان', 'ناصر', 'بندر', 'تركي', 'ماجد', 'لمى', 'دانة', 'هند', 'أمل', 'رنا'
  ]
  const lastNames = [
    'العتيبي', 'القحطاني', 'الغامدي', 'الدوسري', 'الشمري', 'المطيري', 'الحربي', 'السبيعي',
    'الزهراني', 'البلوي', 'المالكي', 'الشهري', 'العنزي', 'السهلي', 'الرشيدي'
  ]
  const companies = [
    `شركة نقل عفش ${city}`, `مؤسسة ${city} للنقل`, `شركة النقل السريع`,
    `مؤسسة نقل الأثاث المتحدة`, `شركة النقل المتميز`, `مؤسسة النقل الذهبي`
  ]
  const comments = [
    'خدمة ممتازة وفريق عمل محترف.',
    'تجربة إيجابية، الأسعار مناسبة والعمال متعاونين.',
    'سرعة في التنفيذ ودقة في العمل.',
    'تغليف ممتاز للأثاث وعناية في النقل.',
    'تعامل راقي وخدمة احترافية.',
    'من أفضل شركات النقل في المنطقة.',
    'عمال مدربين ويعرفون عملهم جيداً.',
    'التزام بالمواعيد وأسعار معقولة.',
    'تجربة مميزة من البداية للنهاية.',
    'خدمة سريعة وتعامل محترم.'
  ]

  return Array.from({ length: 10 }, (_, i) => ({
    id: (i + 1).toString(),
    userName: `${names[Math.floor(Math.random() * names.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
    rating: Math.floor(Math.random() * 2) + 4, // 4 أو 5 نجوم
    comment: comments[Math.floor(Math.random() * comments.length)],
    date: new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0],
    companyName: companies[Math.floor(Math.random() * companies.length)],
    verified: true,
    replies: []
  }))
} 