import { Review } from '@/types/reviews'

const names = [
  'محمد', 'أحمد', 'عبدالله', 'فهد', 'سعد', 'خالد', 'عمر', 'سلطان',
  'نورة', 'سارة', 'ريم', 'منال', 'هند', 'عبير', 'لمى', 'دانة'
]

const lastNames = [
  'العتيبي', 'القحطاني', 'الغامدي', 'الدوسري', 'الشمري', 'المطيري',
  'الحربي', 'السبيعي', 'الزهراني', 'البلوي', 'المالكي', 'الشهري'
]

const positiveComments = [
  'خدمة ممتازة وفريق عمل محترف',
  'تجربة رائعة وأسعار مناسبة جداً',
  'التزام بالمواعيد ودقة في العمل',
  'أمانة في التعامل وجودة في الخدمة',
  'فريق عمل متعاون ومحترف',
  'سرعة في التنفيذ وإتقان في العمل',
  'تغليف ممتاز وعناية فائقة بالأثاث',
  'شركة موثوقة وخدمة احترافية',
  'تجربة مميزة من البداية للنهاية',
  'أنصح بالتعامل معهم بشدة',
  'عمالة مدربة وخدمة راقية',
  'تعامل راقي واحترافية في العمل'
]

const companies = [
  'شركة النقل السريع',
  'مؤسسة النقل المتميز',
  'شركة النقل الذهبي',
  'مؤسسة النقل الأمين',
  'شركة النقل المحترف',
  'مؤسسة النقل الموثوق'
]

export async function getRandomReviews(city: string, service: string, count: number = 5): Promise<Review[]> {
  // توليد مراجعات عشوائية
  const reviews: Review[] = Array.from({ length: count }, (_, i) => ({
    id: `review-${i + 1}`,
    name: `عميل ${i + 1}`,
    rating: Math.floor(Math.random() * 2) + 4, // تقييم بين 4 و 5
    comment: getRandomComment(),
    date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    city,
    service,
    companyName: getRandomCompanyName()
  }))

  return reviews
}

function getRandomComment(): string {
  const comments = [
    'خدمة ممتازة وسعر مناسب',
    'عمال محترفين وخدمة سريعة',
    'تجربة رائعة وتعامل احترافي',
    'سعر معقول وخدمة ممتازة',
    'فريق عمل متعاون ومحترف',
    'خدمة سريعة وآمنة',
    'تجربة إيجابية وأنصح بالتعامل معهم',
    'عمل احترافي ودقيق',
    'خدمة متميزة وأسعار معقولة',
    'تعامل راقي وخدمة محترمة'
  ]
  return comments[Math.floor(Math.random() * comments.length)]
}

function getRandomCompanyName(): string {
  const companies = [
    'شركة النخبة',
    'مؤسسة الأمانة',
    'شركة الصفوة',
    'مؤسسة الإتقان',
    'شركة الخبراء',
    'مؤسسة التميز',
    'شركة الاحتراف',
    'مؤسسة الجودة',
    'شركة الريادة',
    'مؤسسة الإنجاز'
  ]
  return companies[Math.floor(Math.random() * companies.length)]
} 