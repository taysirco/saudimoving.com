import 'dotenv/config'
import { connectToDatabase } from '@/lib/mongodb'
import { Plan } from '@/lib/models/Plan'

const defaultPlans = [
  // الباقة الأساسية - 3 أشهر
  {
    name: 'Basic 3 Months',
    nameAr: 'الباقة الأساسية - 3 أشهر',
    price: 199,
    duration: 90, // 3 أشهر
    features: [
      'إدراج الشركة في مدينة واحدة',
      'صفحة تعريفية بسيطة',
      'ظهور في نتائج البحث العادية',
      '3 صور للمعرض',
      'استقبال التقييمات',
      'دعم فني عبر الواتساب'
    ],
    maxCities: 1,
    maxImages: 3,
    isFeatured: false,
    isPopular: false,
    totalPrice: 597
  },

  // الباقة الأساسية - 6 أشهر
  {
    name: 'Basic 6 Months',
    nameAr: 'الباقة الأساسية - 6 أشهر',
    price: 169,
    duration: 180, // 6 أشهر
    features: [
      'جميع مميزات الباقة الأساسية',
      'خصم 15% على السعر الشهري',
      '5 صور للمعرض',
      'تقرير شهري مبسط',
      'دعم فني على مدار الساعة'
    ],
    maxCities: 1,
    maxImages: 5,
    isFeatured: false,
    isPopular: false,
    totalPrice: 1014
  },

  // الباقة الأساسية - سنوي
  {
    name: 'Basic Yearly',
    nameAr: 'الباقة الأساسية - سنوي',
    price: 149,
    duration: 365, // سنة
    features: [
      'جميع مميزات الباقة الأساسية',
      'خصم 25% على السعر الشهري',
      'شهر مجاني',
      '10 صور للمعرض',
      'تقارير شهرية تفصيلية'
    ],
    maxCities: 1,
    maxImages: 10,
    isFeatured: false,
    isPopular: true,
    totalPrice: 1788
  },

  // الباقة المميزة - 3 أشهر
  {
    name: 'Premium 3 Months',
    nameAr: 'الباقة المميزة - 3 أشهر',
    price: 399,
    duration: 90,
    features: [
      'إدراج الشركة في 3 مدن',
      'صفحة تعريفية متقدمة',
      'ظهور مميز في نتائج البحث',
      'معرض صور وفيديو (حتى 15 صورة)',
      'إحصائيات متقدمة',
      'إدارة التقييمات والردود',
      'إعلان مميز لمدة أسبوع',
      'تقارير أسبوعية'
    ],
    maxCities: 3,
    maxImages: 15,
    isFeatured: true,
    isPopular: false,
    totalPrice: 1197
  },

  // الباقة المميزة - 6 أشهر
  {
    name: 'Premium 6 Months',
    nameAr: 'الباقة المميزة - 6 أشهر',
    price: 339,
    duration: 180,
    features: [
      'جميع مميزات الباقة المميزة',
      'خصم 15% على السعر الشهري',
      'معرض صور وفيديو (حتى 25 صورة)',
      'إعلان مميز شهري',
      'تسويق عبر السوشيال ميديا',
      'دعم فني متميز 24/7'
    ],
    maxCities: 3,
    maxImages: 25,
    isFeatured: true,
    isPopular: true,
    totalPrice: 2034
  },

  // الباقة المميزة - سنوي
  {
    name: 'Premium Yearly',
    nameAr: 'الباقة المميزة - سنوي',
    price: 299,
    duration: 365,
    features: [
      'جميع مميزات الباقة المميزة',
      'خصم 25% على السعر الشهري',
      'شهرين مجاناً',
      'معرض صور وفيديو غير محدود',
      'إعلانات شهرية مميزة',
      'مدير حساب مخصص'
    ],
    maxCities: 3,
    maxImages: -1,
    isFeatured: true,
    isPopular: false,
    totalPrice: 3588
  },

  // الباقة البلاتينية - 3 أشهر
  {
    name: 'Platinum 3 Months',
    nameAr: 'الباقة البلاتينية - 3 أشهر',
    price: 799,
    duration: 90,
    features: [
      'إدراج الشركة في جميع المدن',
      'الظهور في أعلى نتائج البحث',
      'صفحة تعريفية احترافية',
      'معرض صور وفيديوهات غير محدود',
      'إعلانات أسبوعية مميزة',
      'حملة تسويقية على جوجل',
      'تقارير يومية تفصيلية',
      'دعم فني VIP'
    ],
    maxCities: -1,
    maxImages: -1,
    isFeatured: true,
    isPopular: false,
    totalPrice: 2397
  },

  // الباقة البلاتينية - 6 أشهر
  {
    name: 'Platinum 6 Months',
    nameAr: 'الباقة البلاتينية - 6 أشهر',
    price: 679,
    duration: 180,
    features: [
      'جميع مميزات الباقة البلاتينية',
      'خصم 15% على السعر الشهري',
      'حملة إعلانية شهرية على جوجل',
      'تسويق شامل على السوشيال ميديا',
      'مدير حساب متخصص',
      'أولوية الظهور في جميع المدن'
    ],
    maxCities: -1,
    maxImages: -1,
    isFeatured: true,
    isPopular: true,
    totalPrice: 4074
  },

  // الباقة البلاتينية - سنوي
  {
    name: 'Platinum Yearly',
    nameAr: 'الباقة البلاتينية - سنوي',
    price: 599,
    duration: 365,
    features: [
      'جميع مميزات الباقة البلاتينية',
      'خصم 25% على السعر الشهري',
      'ثلاثة أشهر مجانية',
      'حملات إعلانية شهرية على جوجل',
      'تسويق شامل على جميع المنصات',
      'خدمة عملاء VIP على مدار الساعة',
      'تقارير تحليلية متقدمة أسبوعية'
    ],
    maxCities: -1,
    maxImages: -1,
    isFeatured: true,
    isPopular: false,
    totalPrice: 7188
  }
]

async function seedPlans() {
  try {
    console.log('جاري الاتصال بقاعدة البيانات...')
    await connectToDatabase()
    
    console.log('جاري حذف الباقات القديمة...')
    await Plan.deleteMany({})
    
    console.log('جاري إضافة الباقات الجديدة...')
    await Plan.insertMany(defaultPlans)
    
    console.log('تم إضافة الباقات بنجاح')
    process.exit(0)
  } catch (error) {
    console.error('خطأ في إضافة الباقات:', error)
    process.exit(1)
  }
}

seedPlans() 