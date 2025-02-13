const arabicToEnglishMap: { [key: string]: string } = {
  // المدن
  'الرياض': 'riyadh',
  'جدة': 'jeddah',
  'مكة المكرمة': 'makkah',
  'المدينة المنورة': 'madinah',
  'الدمام': 'dammam',
  'الطائف': 'taif',
  'الخبر': 'khobar',
  'تبوك': 'tabuk',
  'بريدة': 'buraidah',
  'حائل': 'hail',
  'حفر الباطن': 'hafer-albatin',
  'الهفوف': 'hofuf',
  'الجبيل': 'jubail',
  'نجران': 'najran',
  'ينبع': 'yanbu',
  'عرعر': 'arar',
  'جازان': 'jazan',
  'سكاكا': 'sakaka',
  'القطيف': 'qatif',
  'الباحة': 'baha',
  'وادي الدواسر': 'wadi-aldawasir',
  'أبها': 'abha',
  'خميس مشيط': 'khamis-mushait',
  'القنفذة': 'qunfudhah',
  'الخرج': 'kharj',
  'عنيزة': 'unaizah',
  'الزلفي': 'zulfi',
  'الرس': 'rass',
  'سيهات': 'saihat',
  'بيشة': 'bisha',
  'القريات': 'qurayyat',
  'الأحساء': 'ahsa',
  'المجمعة': 'majmaah',
  'رابغ': 'rabigh',
  'شقراء': 'shaqra',
  'الدوادمي': 'dawadmi',
  'صبيا': 'sabya',
  'الليث': 'laith',
  'بلجرشي': 'baljurashi',
  'الخفجي': 'khafji',
  'طريف': 'turaif',
  'الوجه': 'wajh',
  'الأفلاج': 'aflaj',
  'رفحاء': 'rafha',
  'الشنان': 'shanan',
  'ضباء': 'duba',
  'تاروت': 'tarut',
  'الدرعية': 'diriyah',
  'بقيق': 'buqayq',
  'أملج': 'umluj',

  // الخدمات
  'نقل عفش': 'moving-furniture',
  'شركة نقل عفش': 'moving-company',
  'افضل شركة نقل عفش': 'best-moving-company',
  'نقل اثاث': 'furniture-moving',
  'ارخص شركة نقل عفش': 'cheap-moving-company',
  'شركات نقل العفش': 'moving-companies',
  'اسعار نقل العفش': 'moving-prices',
  'نقل عفش مع الفك والتركيب': 'moving-with-installation',
  'نقل عفش بالرياض': 'moving-in-riyadh',
  'نقل عفش مع التغليف': 'moving-with-packaging',
  'سيارات نقل العفش': 'moving-trucks',
  'نقل عفش فك وتركيب': 'moving-dismantling-installation',
  'نقل عفش مضمون': 'guaranteed-moving',
  'عمالة مدربة لنقل العفش': 'trained-movers',
  'دينا نقل عفش': 'pickup-moving',
  'نقل عفش مع الضمان': 'moving-with-warranty',
  'شركة تخزين اثاث': 'furniture-storage-company',
  'ونش رفع اثاث': 'furniture-lifting-crane',
  'نقل عفش عمالة فلبينية': 'filipino-movers',
  'شراء اثاث مستعمل': 'used-furniture-buying',
  'فني فك وتركيب اثاث ايكيا': 'ikea-furniture-technician',
  'اسعار شركات نقل العفش': 'moving-companies-prices',
  'نقل عفش من الباب للباب': 'door-to-door-moving',
  'تغليف الاثاث للنقل': 'furniture-packaging',
  'شركة نقل عفش عمالة فلبينية': 'filipino-moving-company',
  'تأمين الاثاث اثناء النقل': 'moving-insurance',
  'افضل شركات نقل العفش': 'best-moving-companies',
  'نقل عفش خارج المدينة': 'intercity-moving',
  'نجار فك وتركيب غرف نوم': 'bedroom-carpenter',
  'نقل عفش داخل المدينة': 'local-moving',
  'نقل عفش 24 ساعة': '24h-moving-service',
  'نقل عفش بدون خدش': 'safe-furniture-moving',
  'نقل عفش حراج': 'haraj-moving',
  'شركة نقل عفش مرخصة': 'licensed-moving-company',
  'نقل عفش سطحة': 'flatbed-moving',
  'اوناش لرفع الاثاث': 'furniture-cranes',
  'نقل عفش داخل وخارج المملكة': 'domestic-international-moving',
  'معدات حديثة لنقل الاثاث': 'modern-moving-equipment',
  'نقل عفش وتخزين اثاث': 'moving-and-storage',
  'نقل عفش منزلي ومكتبي': 'home-office-moving',
  'نقل عفش مع التركيب والترتيب': 'moving-installation-arrangement',
  'تركيب ستائر ومطابخ': 'curtains-kitchens-installation',
  'معلم تركيب اثاث ايكيا': 'ikea-furniture-expert',
  'نقل اثاث وعفش': 'furniture-moving-service',
  'نقل عفش مع الصيانة': 'moving-with-maintenance',
  'نقل عفش بكل احترافية': 'professional-moving',
  'نقل عفش مع التنظيف': 'moving-with-cleaning',
  'شركة نقل عفش عمالة باكستانية': 'pakistani-moving-company',
  'نقل عفش لجميع مدن المملكة': 'kingdom-wide-moving',
  'شركة تغليف اثاث للنقل': 'furniture-packaging-company',
  'نقل عفش عماير وفلل': 'buildings-villas-moving',
  'نقل عفش مكيفات وأجهزة كهربائية': 'ac-electronics-moving',
  'كراتين نقل العفش': 'moving-boxes',
  'نقل عفش مطابخ وغرف نوم': 'kitchens-bedrooms-moving',
  'اكياس تغليف الملابس للنقل': 'clothes-packaging-bags',
  'نقل عفش مكاتب وشركات': 'office-corporate-moving',
  'شركة متخصصة في نقل الاثاث': 'specialized-moving-company',
  'ارقام نقل عفش': 'moving-contact-numbers',
  'طرق نقل العفش بأمان': 'safe-moving-methods',
  'نقل بيوت شعر وخيام': 'tents-moving',
  'نقل اثاث فاخر وراقي': 'luxury-furniture-moving',
  'نقل عفش مع تخزين': 'moving-with-storage',
  'شركة نقل الاثاث المنزلي': 'home-furniture-moving-company',
  'نقل عفش القصور والفلل الفاخرة': 'luxury-villas-moving',
  'معدات نقل الاثاث الثقيل': 'heavy-furniture-equipment',
  'نقل الاثاث بسرعة ودقة': 'fast-precise-moving',
  'نقل العفش في عطلة نهاية الأسبوع': 'weekend-moving-service',
  'نقل عفش المستشفيات': 'hospital-moving',
  'شركة نقل اثاث VIP': 'vip-moving-service',
  'استشارات نقل العفش': 'moving-consultation'
}

const englishToArabicMap: { [key: string]: string } = Object.entries(arabicToEnglishMap)
  .reduce((acc, [ar, en]) => ({ ...acc, [en]: ar }), {})

/**
 * تحويل النص العربي إلى slug إنجليزي
 */
export function arabicToSlug(text: string): string {
  // التأكد من أن النص موجود
  if (!text) return ''
  
  // البحث عن الترجمة في القاموس
  const slug = arabicToEnglishMap[text]
  if (slug) return slug

  // إذا لم يوجد ترجمة، نقوم بتحويل النص إلى slug
  return text
    .toString()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')     // تحويل المسافات والشرطات السفلية إلى شرطات
    .replace(/[^\w\-]+/g, '')    // إزالة الأحرف الخاصة
    .replace(/\-\-+/g, '-')      // إزالة الشرطات المتكررة
    .replace(/^-+/, '')          // إزالة الشرطات من البداية
    .replace(/-+$/, '')          // إزالة الشرطات من النهاية
}

/**
 * تحويل الslug الإنجليزي إلى نص عربي
 */
export function slugToArabic(slug: string): string {
  // التأكد من أن النص موجود
  if (!slug) return ''
  
  // البحث عن الترجمة في القاموس
  const arabic = englishToArabicMap[slug]
  if (arabic) return arabic

  // إذا لم يوجد ترجمة، نعيد النص كما هو
  return slug
}

/**
 * تحويل النص المشفر URL إلى نص عربي
 */
export function decodeArabicText(text: string): string {
  try {
    if (!text) return ''
    return decodeURIComponent(text)
  } catch (error) {
    console.error('Error decoding text:', error)
    return text || ''
  }
}

/**
 * تحويل النص العربي إلى نص مشفر URL
 */
export function encodeArabicText(text: string): string {
  try {
    if (!text) return ''
    // تحويل النص إلى slug إنجليزي أولاً
    const slug = arabicToSlug(text)
    return encodeURIComponent(slug)
  } catch (error) {
    console.error('Error encoding text:', error)
    return text || ''
  }
}

/**
 * الحصول على النص العربي المقابل للslug
 */
export function getArabicText(slug: string): string {
  // التأكد من أن النص موجود
  if (!slug) return ''
  
  // البحث عن الترجمة في القاموس العكسي
  const arabic = englishToArabicMap[slug]
  if (arabic) return arabic

  // إذا لم يوجد ترجمة، نعيد النص كما هو
  return slug
}

// قاموس تحويل أسماء المدن من العربية للإنجليزية
const cityDictionary: { [key: string]: string } = {
  'الرياض': 'riyadh',
  'جدة': 'jeddah',
  'مكة': 'makkah',
  'المدينة': 'madinah',
  'الدمام': 'dammam',
  'الطائف': 'taif',
  'تبوك': 'tabuk',
  'خميس مشيط': 'khamis-mushait',
  'الخبر': 'khobar',
  'القصيم': 'qassim',
  'حائل': 'hail',
  'أبها': 'abha'
}

// دالة تحويل اسم المدينة من العربية للإنجليزية
export function arabicToEnglishCity(arabicCity: string): string {
  return cityDictionary[arabicCity] || arabicToSlug(arabicCity)
}

// دالة تحويل اسم المدينة من الإنجليزية للعربية
export function englishToArabicCity(englishCity: string): string {
  const arabicCity = Object.entries(cityDictionary).find(
    ([_, value]) => value === englishCity
  )?.[0]
  return arabicCity || getArabicText(englishCity)
} 