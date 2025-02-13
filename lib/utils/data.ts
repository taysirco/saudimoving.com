// Remove numbers and dots from city names in the CSV
const cleanCityName = (city: string) => {
  return city.replace(/^\d+\.\s*/, '').trim()
}

export const cities = [
  'الرياض',
  'جدة',
  'مكة المكرمة',
  'المدينة المنورة',
  'الدمام',
  'الطائف',
  'الخبر',
  'تبوك',
  'بريدة',
  'حائل',
  'حفر الباطن',
  'الهفوف',
  'الجبيل',
  'نجران',
  'ينبع',
  'عرعر',
  'جازان',
  'سكاكا',
  'القطيف',
  'الباحة',
  'وادي الدواسر',
  'أبها',
  'خميس مشيط',
  'القنفذة',
  'الخرج',
  'عنيزة',
  'الزلفي',
  'الرس',
  'سيهات',
  'بيشة',
  'القريات',
  'الأحساء',
  'المجمعة',
  'رابغ',
  'شقراء',
  'الدوادمي',
  'صبيا',
  'الليث',
  'بلجرشي',
  'الخفجي',
  'طريف',
  'الوجه',
  'الأفلاج',
  'رفحاء',
  'الشنان',
  'ضباء',
  'تاروت',
  'الدرعية',
  'بقيق',
  'أملج'
].map(cleanCityName)

// Group cities by region for better organization
export const cityRegions = {
  central: [
    'الرياض',
    'الخرج',
    'المجمعة',
    'الزلفي',
    'الدرعية',
    'شقراء',
    'الدوادمي',
    'الأفلاج'
  ],
  western: [
    'جدة',
    'مكة المكرمة',
    'المدينة المنورة',
    'الطائف',
    'ينبع',
    'رابغ',
    'القنفذة',
    'الليث'
  ],
  eastern: [
    'الدمام',
    'الخبر',
    'الجبيل',
    'الأحساء',
    'القطيف',
    'حفر الباطن',
    'الخفجي',
    'بقيق',
    'سيهات',
    'تاروت'
  ],
  northern: [
    'تبوك',
    'حائل',
    'عرعر',
    'سكاكا',
    'القريات',
    'طريف',
    'رفحاء',
    'الوجه',
    'ضباء',
    'أملج'
  ],
  southern: [
    'أبها',
    'خميس مشيط',
    'نجران',
    'جازان',
    'الباحة',
    'بيشة',
    'صبيا',
    'بلجرشي'
  ],
  qassim: [
    'بريدة',
    'عنيزة',
    'الرس',
    'الشنان'
  ]
}

// Get nearby cities based on region
export const getNearbyCities = (cityName: string, limit: number = 6): string[] => {
  // Find the region that contains the city
  const region = Object.entries(cityRegions).find(([_, cities]) => 
    cities.includes(cityName)
  )?.[0]

  if (!region) return cities.filter(c => c !== cityName).slice(0, limit)

  // Get cities from the same region, excluding the current city
  const regionCities = cityRegions[region as keyof typeof cityRegions]
    .filter(city => city !== cityName)

  // If we need more cities, get them from other regions
  if (regionCities.length < limit) {
    const otherCities = cities
      .filter(city => !regionCities.includes(city) && city !== cityName)
      .slice(0, limit - regionCities.length)
    
    return [...regionCities, ...otherCities]
  }

  return regionCities.slice(0, limit)
}

// Major cities that should be featured prominently
export const majorCities = [
  'الرياض',
  'جدة',
  'مكة المكرمة',
  'المدينة المنورة',
  'الدمام',
  'الطائف',
  'الخبر',
  'تبوك'
]

export const keywords = [
  'نقل عفش',
  'شركة نقل عفش',
  'افضل شركة نقل عفش',
  'نقل اثاث',
  'ارخص شركة نقل عفش',
  'شركات نقل العفش',
  'اسعار نقل العفش',
  'نقل عفش مع الفك والتركيب',
  'نقل عفش مع التغليف',
  'سيارات نقل العفش'
]

export interface SearchResult {
  id: string;  // Required field
  name: string;
  address: string;
  rating?: number;
  userRatingsTotal?: number;
  phone?: string;
  website?: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    }
  };
}

export function generateMetaTitle(city: string, service?: string): string {
  if (service) {
    return `${service} في ${city} - افضل شركات نقل العفش`
  }
  return `خدمات نقل العفش في ${city} - شركات نقل الاثاث المعتمدة`
}

export function generateMetaDescription(city: string, service?: string): string {
  if (service) {
    return `افضل شركات ${service} في ${city} ✓ خدمة 24 ساعة ✓ اسعار تنافسية ✓ عمالة مدربة ✓ ضمان سلامة الاثاث ✓ اتصل الآن`
  }
  return `شركات نقل العفش في ${city} ✓ خدمة 24 ساعة ✓ فك وتركيب ✓ تغليف ✓ نقل آمن ✓ اسعار مناسبة ✓ اتصل الآن`
}

export function generateSearchQuery(city: string, service: string): string {
  return `${service} ${city}`
}

export const ITEMS_PER_PAGE = 10

// Utility functions
export const citySlugMap: { [key: string]: string } = {
  'الرياض': 'riyadh',
  'جدة': 'jeddah',
  'مكة المكرمة': 'makkah',
  'المدينة المنورة': 'madinah',
  // ... باقي المدن
}

// خريطة عكسية للتحويل من slug إلى الاسم العربي
export const reverseSlugMap: { [key: string]: string } = Object.entries(citySlugMap)
  .reduce((acc, [arabic, english]) => ({
    ...acc,
    [english]: arabic
  }), {})

export function arabicToSlug(arabicName: string): string {
  return citySlugMap[arabicName] || arabicName.toLowerCase().replace(/\s+/g, '-')
}

export function slugToArabic(slug: string): string {
  return reverseSlugMap[slug] || slug.replace(/-/g, ' ')
}

export function getArabicText(slug: string): string {
  // أولاً نحاول العثور على الاسم العربي من الخريطة العكسية
  const arabicName = reverseSlugMap[slug]
  if (arabicName) return arabicName

  // إذا لم نجد الاسم في الخريطة، نقوم بتحويل الـ slug إلى نص عربي
  return slug
    .replace(/-/g, ' ')  // استبدال كل الشرطات بمسافة
    .replace(/\s+/g, ' ') // استبدال المسافات المتعددة بمسافة واحدة
    .trim() // إزالة المسافات من البداية والنهاية
}

export const mainCities = [
  'الرياض',
  'جدة',
  'مكة المكرمة',
  'المدينة المنورة',
  'الدمام',
  'الطائف',
  'الخبر',
  'تبوك',
  'بريدة',
  'حائل',
  'الجبيل'
] 