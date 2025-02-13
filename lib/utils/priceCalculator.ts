interface PriceFactors {
  moveType: string
  propertyType: string
  fromCity: string
  toCity: string
  service: string
  distance: number
  floor: number
  hasElevator: boolean
  needStorage: boolean
  storageDays: number
}

// الأسعار الأساسية حسب نوع العقار
const basePrices = {
  'apartment': { 
    min: 800,   // شقة صغيرة
    max: 1500   // شقة كبيرة
  },
  'house': { 
    min: 1200,  // منزل صغير
    max: 2000   // منزل كبير
  },
  'smallVilla': { 
    min: 2000,  // فيلا صغيرة
    max: 3000
  },
  'largeVilla': { 
    min: 3000,  // فيلا كبيرة
    max: 5000
  },
  'store': { 
    min: 1500,  // محل تجاري
    max: 3000
  },
  'company': { 
    min: 2000,  // مكتب/شركة
    max: 4000
  },
  'specificItems': { 
    min: 500,   // قطع محددة
    max: 1000
  }
}

// معاملات المدن (تأثير على السعر)
const cityFactors = {
  'الرياض': 1.1,    // أعلى تكلفة
  'جدة': 1.1,
  'مكة المكرمة': 1.1,
  'المدينة المنورة': 1.05,
  'الدمام': 1,
  'الخبر': 1,
  'تبوك': 0.95,
  'default': 1
}

// معاملات نوع الخدمة
const serviceFactors = {
  'moving': 1,              // نقل فقط
  'movingAndPacking': 1.4,  // نقل وتغليف
  'movingAndStorage': 1.5,  // نقل وتخزين
  'fullService': 1.7        // خدمة متكاملة
}

export function calculatePrice(factors: PriceFactors) {
  // السعر الأساسي حسب نوع العقار
  const basePrice = basePrices[factors.propertyType as keyof typeof basePrices] || { min: 0, max: 0 }
  
  // معامل المدينة
  const cityFactor = factors.moveType === 'betweenCities'
    ? ((cityFactors[factors.fromCity as keyof typeof cityFactors] || 1) +
       (cityFactors[factors.toCity as keyof typeof cityFactors] || 1)) / 2
    : cityFactors[factors.fromCity as keyof typeof cityFactors] || cityFactors.default

  // معامل نوع الخدمة
  const serviceFactor = serviceFactors[factors.service as keyof typeof serviceFactors] || 1

  // تكلفة المسافة
  let distanceCost = 0
  if (factors.moveType === 'betweenCities') {
    // للنقل بين المدن: 2 ريال لكل كيلومتر
    distanceCost = factors.distance * 2
  } else {
    // داخل المدينة: 1 ريال لكل كيلومتر بعد 20 كم
    distanceCost = Math.max(0, factors.distance - 20) * 1
  }

  // تكلفة الأدوار
  const floorCost = factors.hasElevator
    ? factors.floor * 50   // 50 ريال للدور مع مصعد
    : factors.floor * 100  // 100 ريال للدور بدون مصعد

  // تكلفة التخزين
  const storageCost = factors.needStorage
    ? factors.storageDays * 100  // 100 ريال لليوم الواحد
    : 0

  // الحساب النهائي
  const minPrice = Math.round((basePrice.min * cityFactor * serviceFactor) + distanceCost + floorCost + storageCost)
  const maxPrice = Math.round((basePrice.max * cityFactor * serviceFactor) + distanceCost + floorCost + storageCost)

  return {
    min: minPrice,
    max: maxPrice
  }
} 