'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { 
  BuildingOffice2Icon, 
  UserIcon, 
  PhoneIcon, 
  MapPinIcon,
  TruckIcon,
  GlobeAltIcon,
  UsersIcon, 
  BuildingStorefrontIcon,
  MapIcon,
  ChartBarIcon,
  MegaphoneIcon,
  StarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { FaWhatsapp } from 'react-icons/fa6'
import { cities } from '@/lib/utils/data'
import Header from '@/components/layout/Header'
import HomeFooter from '@/components/layout/HomeFooter'

// تعريف الانيميشن للصفحة
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.3 }
  }
}

// تحسين انيميشن البطاقات
const cardVariants = {
  initial: { 
    scale: 1,
    y: 0,
    opacity: 0.9,
    background: "linear-gradient(145deg, #ffffff, #f5f5f5)"
  },
  hover: { 
    scale: 1.03,
    y: -4,
    opacity: 1,
    background: "linear-gradient(145deg, #ffffff, #ffffff)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98,
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
    transition: { 
      duration: 0.2,
      ease: "easeIn"
    }
  }
}

// انيميشن للعناصر الفردية
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3
    }
  })
}

const services = [
  'نقل عفش مع التركيب',
  'نقل مع تغليف',
  'نقل وتركيب مكيفات',
  'تخزين أثاث',
  'نقل دولي'
]

const plans = [
  // الباقات الأساسية
  {
    id: 'basic-3',
    name: 'الباقة الأساسية - 3 أشهر',
    price: '199',
    duration: 'شهرياً',
    totalPrice: '597',
    period: '3 أشهر',
    cities: 'مدينة واحدة',
    position: 'عادي',
    features: [
      'إدراج الشركة في مدينة واحدة',
      'صفحة تعريفية بسيطة',
      'ظهور في نتائج البحث العادية',
      '3 صور للمعرض',
      'استقبال التقييمات',
      'دعم فني عبر الواتساب'
    ]
  },
  {
    id: 'basic-6',
    name: 'الباقة الأساسية - 6 أشهر',
    price: '169',
    duration: 'شهرياً',
    totalPrice: '1,014',
    period: '6 أشهر',
    cities: 'مدينة واحدة',
    position: 'عادي',
    features: [
      'جميع مميزات الباقة الأساسية',
      'خصم 15% على السعر الشهري',
      '5 صور للمعرض',
      'تقرير شهري مبسط',
      'دعم فني على مدار الساعة'
    ]
  },
  {
    id: 'basic-12',
    name: 'الباقة الأساسية - سنوي',
    price: '149',
    duration: 'شهرياً',
    totalPrice: '1,788',
    period: '12 شهر',
    cities: 'مدينة واحدة',
    position: 'عادي',
    features: [
      'جميع مميزات الباقة الأساسية',
      'خصم 25% على السعر الشهري',
      'شهر مجاني',
      '10 صور للمعرض',
      'تقارير شهرية تفصيلية'
    ]
  },

  // الباقات المميزة
  {
    id: 'pro-3',
    name: 'الباقة المميزة - 3 أشهر',
    price: '399',
    duration: 'شهرياً',
    totalPrice: '1,197',
    period: '3 أشهر',
    cities: '3 مدن',
    position: 'مميز',
    features: [
      'إدراج الشركة في 3 مدن',
      'صفحة تعريفية متقدمة',
      'ظهور مميز في نتائج البحث',
      'معرض صور وفيديو (حتى 15 صورة)',
      'إحصائيات متقدمة',
      'إدارة التقييمات والردود',
      'إعلان مميز لمدة أسبوع',
      'تقارير أسبوعية'
    ]
  },
  {
    id: 'pro-6',
    name: 'الباقة المميزة - 6 أشهر',
    price: '339',
    duration: 'شهرياً',
    totalPrice: '2,034',
    period: '6 أشهر',
    cities: '3 مدن',
    position: 'مميز',
    features: [
      'جميع مميزات الباقة المميزة',
      'خصم 15% على السعر الشهري',
      'معرض صور وفيديو (حتى 25 صورة)',
      'إعلان مميز شهري',
      'تسويق عبر السوشيال ميديا',
      'دعم فني متميز 24/7'
    ]
  },
  {
    id: 'pro-12',
    name: 'الباقة المميزة - سنوي',
    price: '299',
    duration: 'شهرياً',
    totalPrice: '3,588',
    period: '12 شهر',
    cities: '3 مدن',
    position: 'مميز',
    features: [
      'جميع مميزات الباقة المميزة',
      'خصم 25% على السعر الشهري',
      'شهرين مجاناً',
      'معرض صور وفيديو غير محدود',
      'إعلانات شهرية مميزة',
      'مدير حساب مخصص'
    ]
  },

  // الباقات البلاتينية
  {
    id: 'platinum-3',
    name: 'الباقة البلاتينية - 3 أشهر',
    price: '799',
    duration: 'شهرياً',
    totalPrice: '2,397',
    period: '3 أشهر',
    cities: 'جميع المدن',
    position: 'أعلى النتائج',
    features: [
      'إدراج الشركة في جميع المدن',
      'الظهور في أعلى نتائج البحث',
      'صفحة تعريفية احترافية',
      'معرض صور وفيديوهات غير محدود',
      'إعلانات أسبوعية مميزة',
      'حملة تسويقية على جوجل',
      'تقارير يومية تفصيلية',
      'دعم فني VIP'
    ]
  },
  {
    id: 'platinum-6',
    name: 'الباقة البلاتينية - 6 أشهر',
    price: '679',
    duration: 'شهرياً',
    totalPrice: '4,074',
    period: '6 أشهر',
    cities: 'جميع المدن',
    position: 'أعلى النتائج',
    features: [
      'جميع مميزات الباقة البلاتينية',
      'خصم 15% على السعر الشهري',
      'حملة إعلانية شهرية على جوجل',
      'تسويق شامل على السوشيال ميديا',
      'مدير حساب متخصص',
      'أولوية الظهور في جميع المدن'
    ]
  },
  {
    id: 'platinum-12',
    name: 'الباقة البلاتينية - سنوي',
    price: '599',
    duration: 'شهرياً',
    totalPrice: '7,188',
    period: '12 شهر',
    cities: 'جميع المدن',
    position: 'أعلى النتائج',
    features: [
      'جميع مميزات الباقة البلاتينية',
      'خصم 25% على السعر الشهري',
      'ثلاثة أشهر مجانية',
      'حملات إعلانية شهرية على جوجل',
      'تسويق شامل على جميع المنصات',
      'خدمة عملاء VIP على مدار الساعة',
      'تقارير تحليلية متقدمة أسبوعية'
    ]
  }
]

// دالة تحويل الأرقام العربية إلى إنجليزية
const convertArabicToEnglish = (str: string) => {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
  return str.replace(/[٠-٩]/g, match => arabicNumbers.indexOf(match).toString())
}

// دالة تنظيف الرقم من أي شيء غير الأرقام
const cleanPhoneNumber = (number: string) => {
  return convertArabicToEnglish(number).replace(/[^\d]/g, '')
}

// إضافة مكون لعرض الأرقام المتحركة
const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [number, setNumber] = useState(0)
  const finalNumber = parseInt(value.replace(/\D/g, ''))

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // مدة الانيميشن بالمللي ثانية
      const steps = 60 // عدد خطوات العد
      const increment = finalNumber / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= finalNumber) {
          setNumber(finalNumber)
          clearInterval(timer)
        } else {
          setNumber(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, finalNumber])

  return (
    <div ref={ref} className="text-2xl font-bold text-gray-800">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {number.toLocaleString()}
          {value.includes('+') ? '+' : ''}
        </motion.span>
      ) : null}
    </div>
  )
}

// تحديث مكون الإحصائيات
const StatsAndFeatures = () => {
  const stats = [
    {
      icon: BuildingStorefrontIcon,
      number: "1200+",
      label: "شركة نقل",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: UsersIcon,
      number: "150000+",
      label: "عميل سعيد",
      color: "from-green-500 to-green-600"
    },
    {
      icon: TruckIcon,
      number: "250000+",
      label: "عملية نقل",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MapIcon,
      number: "40+",
      label: "مدينة",
      color: "from-red-500 to-red-600"
    },
    {
      icon: StarIcon,
      number: "15+",
      label: "سنوات خبرة",
      color: "from-amber-500 to-amber-600"
    }
  ]

  const features = [
    {
      icon: ChartBarIcon,
      title: "زيادة العملاء",
      description: "احصل على المزيد من العملاء من خلال تواجدك في أكبر دليل متخصص"
    },
    {
      icon: MegaphoneIcon,
      title: "تسويق فعال",
      description: "استفد من حملاتنا التسويقية وظهورك في محركات البحث"
    },
    {
      icon: StarIcon,
      title: "تقييمات موثوقة",
      description: "اكسب ثقة العملاء من خلال نظام تقييمات شفاف وموثوق"
    },
    {
      icon: ShieldCheckIcon,
      title: "مصداقية عالية",
      description: "كن جزءاً من منصة معتمدة وموثوقة في مجال نقل العفش"
    }
  ]

  return (
    <div className="mb-16 space-y-16">
      {/* الإحصائيات */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-5 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg relative overflow-hidden group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10 
              group-hover:opacity-20 transition-opacity duration-300`} />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-center space-y-2"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <stat.icon className="w-8 h-8 mx-auto text-primary" />
              </motion.div>
              <AnimatedNumber value={stat.number} />
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.1 }}
                className="text-sm text-gray-600"
              >
                {stat.label}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* المميزات */}
      <div className="space-y-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-center text-gray-800"
        >
          لماذا تنضم إلى دليل نقل عفش؟
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center space-y-4 bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800">
          ابدأ رحلة نجاحك اليوم
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          انضم إلى مئات الشركات الناجحة في دليل نقل عفش واستفد من فرص النمو والتوسع في السوق السعودي
        </p>
      </motion.div>
    </div>
  )
}

export default function AddCompany() {
  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    phone: '',
    whatsapp: '',
    service: '',
    mainCity: '',
    additionalCities: [] as string[],
    selectedPlan: ''
  })

  const [step, setStep] = useState(1)
  const totalSteps = 3

  const [errors, setErrors] = useState<Record<string, string>>({})

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null,
    message: string
  }>({ type: null, message: '' })

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (currentStep) {
      case 1:
        if (!formData.companyName.trim()) {
          newErrors.companyName = 'يرجى إدخال اسم الشركة'
        }
        if (!formData.ownerName.trim()) {
          newErrors.ownerName = 'يرجى إدخال اسم المسؤول'
        }
        
        const cleanedPhone = cleanPhoneNumber(formData.phone)
        if (!cleanedPhone) {
          newErrors.phone = 'يرجى إدخال رقم الهاتف'
        } else if (!/^05\d{8}$/.test(cleanedPhone)) {
          newErrors.phone = 'يرجى إدخال رقم هاتف صحيح يبدأ بـ 05'
        }
        
        const cleanedWhatsapp = cleanPhoneNumber(formData.whatsapp)
        if (!cleanedWhatsapp) {
          newErrors.whatsapp = 'يرجى إدخال رقم الواتساب'
        } else if (!/^966\d{9}$/.test(cleanedWhatsapp)) {
          newErrors.whatsapp = 'يرجى إدخال رقم واتساب صحيح يبدأ بـ 966'
        }
        break

      case 2:
        if (!formData.service) {
          newErrors.service = 'يرجى اختيار نوع الخدمة'
        }
        if (!formData.mainCity) {
          newErrors.mainCity = 'يرجى اختيار المدينة الرئيسية'
        }
        break

      case 3:
        if (!formData.selectedPlan) {
          newErrors.selectedPlan = 'يرجى اختيار خطة الإعلان'
        }
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateStep(step)) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    // تجهيز البيانات للإرسال
    const formattedData = {
      company_name: formData.companyName,
      owner_name: formData.ownerName,
      phone: formData.phone,
      whatsapp: formData.whatsapp,
      service_type: formData.service,
      main_city: formData.mainCity,
      additional_cities: formData.additionalCities.join(', '),
      selected_plan: plans.find(p => p.id === formData.selectedPlan)?.name || '',
      submission_date: new Date().toISOString(),
      status: 'pending'
    }

    try {
      const response = await fetch('https://sheetdb.io/api/v1/1fmqq4xa0cggv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: [formattedData]
        })
      })

      if (!response.ok) {
        throw new Error('حدث خطأ أثناء إرسال البيانات')
      }

      setSubmitStatus({
        type: 'success',
        message: 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً'
      })

      // إعادة تعيين النموذج
      setFormData({
        companyName: '',
        ownerName: '',
        phone: '',
        whatsapp: '',
        service: '',
        mainCity: '',
        additionalCities: [],
        selectedPlan: ''
      })
      setStep(1)

    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        type: 'error',
        message: 'حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">معلومات الشركة</h3>
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-sm font-medium mb-2">اسم الشركة</label>
                <div className="relative">
                  <BuildingOffice2Icon className="w-5 h-5 text-gray-400 absolute right-3 top-3" />
                  <input
                    type="text"
                    className={`w-full pr-10 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                      errors.companyName ? 'border-red-500' : ''
                    }`}
                    value={formData.companyName}
                    onChange={(e) => {
                      setFormData({...formData, companyName: e.target.value})
                      if (errors.companyName) {
                        setErrors({...errors, companyName: ''})
                      }
                    }}
                    placeholder="أدخل اسم الشركة"
                  />
                </div>
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                )}
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium mb-2">اسم المسؤول</label>
                <div className="relative">
                  <UserIcon className="w-5 h-5 text-gray-400 absolute right-3 top-3" />
                  <input
                    type="text"
                    className={`w-full pr-10 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                      errors.ownerName ? 'border-red-500' : ''
                    }`}
                    value={formData.ownerName}
                    onChange={(e) => {
                      setFormData({...formData, ownerName: e.target.value})
                      if (errors.ownerName) {
                        setErrors({...errors, ownerName: ''})
                      }
                    }}
                    placeholder="أدخل اسم المسؤول"
                  />
                </div>
                {errors.ownerName && (
                  <p className="text-red-500 text-sm mt-1">{errors.ownerName}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
                  <div className="relative">
                    <PhoneIcon className="w-5 h-5 text-gray-400 absolute right-3 top-3" />
                    <input
                      type="tel"
                      className={`w-full pr-10 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.phone ? 'border-red-500' : ''
                      }`}
                      value={formData.phone}
                      onChange={(e) => {
                        const cleaned = cleanPhoneNumber(e.target.value)
                        if (cleaned.length <= 10) { // للتأكد من عدم تجاوز الحد الأقصى
                          setFormData({...formData, phone: cleaned})
                          if (errors.phone) {
                            setErrors({...errors, phone: ''})
                          }
                        }
                      }}
                      placeholder="05xxxxxxxx"
                      dir="ltr"
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium mb-2">رقم الواتساب</label>
                  <div className="relative">
                    <FaWhatsapp className="w-5 h-5 text-gray-400 absolute right-3 top-3" />
                    <input
                      type="tel"
                      className={`w-full pr-10 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary ${
                        errors.whatsapp ? 'border-red-500' : ''
                      }`}
                      value={formData.whatsapp}
                      onChange={(e) => {
                        const cleaned = cleanPhoneNumber(e.target.value)
                        if (cleaned.length <= 12) { // للتأكد من عدم تجاوز الحد الأقصى
                          setFormData({...formData, whatsapp: cleaned})
                          if (errors.whatsapp) {
                            setErrors({...errors, whatsapp: ''})
                          }
                        }
                      }}
                      placeholder="966xxxxxxxxx"
                      dir="ltr"
                    />
                  </div>
                  {errors.whatsapp && (
                    <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">نطاق الخدمة</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">نوع الخدمة</label>
                <div className="relative">
                  <TruckIcon className="w-5 h-5 text-gray-400 absolute right-3 top-3" />
                  <select
                    className={`w-full pr-10 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary appearance-none ${
                      errors.service ? 'border-red-500' : ''
                    }`}
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({...formData, service: e.target.value})
                      if (errors.service) {
                        setErrors({...errors, service: ''})
                      }
                    }}
                  >
                    <option value="">اختر نوع الخدمة</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                )}
            </div>
            
              <div>
                <label className="block text-sm font-medium mb-2">المدينة الرئيسية</label>
                <div className="relative">
                  <MapPinIcon className="w-5 h-5 text-gray-400 absolute right-3 top-3" />
                  <select
                    className={`w-full pr-10 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary appearance-none ${
                      errors.mainCity ? 'border-red-500' : ''
                    }`}
                    value={formData.mainCity}
                    onChange={(e) => {
                      setFormData({...formData, mainCity: e.target.value})
                      if (errors.mainCity) {
                        setErrors({...errors, mainCity: ''})
                      }
                    }}
                  >
                    <option value="">اختر المدينة الرئيسية</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                {errors.mainCity && (
                  <p className="text-red-500 text-sm mt-1">{errors.mainCity}</p>
                )}
            </div>
            
              <div>
                <label className="block text-sm font-medium mb-2">مدن إضافية</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {cities.map(city => (
                    <label key={city} className="flex items-center space-x-2 space-x-reverse">
                      <input
                        type="checkbox"
                        className="rounded text-primary focus:ring-primary"
                        checked={formData.additionalCities.includes(city)}
                        onChange={(e) => {
                          const newCities = e.target.checked
                            ? [...formData.additionalCities, city]
                            : formData.additionalCities.filter(c => c !== city)
                          setFormData({...formData, additionalCities: newCities})
                        }}
                      />
                      <span className="text-sm">{city}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">اختر خطة الإعلان</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map(renderPlanCard)}
            </div>
          </motion.div>
        )
    }
  }

  const renderPlanCard = (plan: any) => (
    <motion.label
      key={plan.id}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className={`relative block p-6 rounded-xl border-2 cursor-pointer 
        transition-all ${
          formData.selectedPlan === plan.id
            ? 'border-primary shadow-md bg-primary/5'
            : 'border-gray-200 hover:border-gray-300'
        }`}
    >
      <input
        type="radio"
        name="plan"
        value={plan.id}
        checked={formData.selectedPlan === plan.id}
        onChange={(e) => setFormData({...formData, selectedPlan: e.target.value})}
        className="sr-only"
      />
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-800">{plan.name}</h4>
        <div className="text-2xl font-bold text-primary">
          {plan.price} <span className="text-sm text-gray-500">ريال/{plan.duration}</span>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
          <p>إجمالي: {plan.totalPrice} ريال / {plan.period}</p>
          <p>التغطية: {plan.cities}</p>
          <p>موضع الظهور: {plan.position}</p>
        </div>
        <ul className="space-y-2 text-sm text-gray-700 mt-4">
          {plan.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-primary shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* زر اختيار الخطة المحسن */}
        <motion.div 
          className="mt-6 pt-4 border-t border-gray-100 text-center"
          whileHover={{ scale: 1.02 }}
        >
          <div className={`
            inline-flex items-center gap-2 px-8 py-3 rounded-lg
            transition-all duration-300 transform
            ${formData.selectedPlan === plan.id 
              ? 'bg-gradient-to-r from-primary to-primary-dark text-white font-medium shadow-lg shadow-primary/20' 
              : 'bg-gradient-to-r from-primary/10 to-primary/20 text-primary hover:from-primary/20 hover:to-primary/30 hover:shadow-md'
            }
          `}>
            {formData.selectedPlan === plan.id ? (
              <>
                <CheckCircleIcon className="w-6 h-6" />
                <span className="font-medium">تم اختيار الخطة</span>
              </>
            ) : (
              <>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2}
                  stroke="currentColor" 
                  className="w-6 h-6"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 15, -15, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                </motion.svg>
                <span className="font-medium">اختر هذه الخطة</span>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </motion.label>
  )

  // إضافة مكون لعرض حالة الإرسال
  const SubmitStatus = () => {
    if (!submitStatus.type) return null

    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-4 rounded-lg text-center mb-6 ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 text-green-800'
            : 'bg-red-50 text-red-800'
        }`}
      >
        {submitStatus.type === 'success' && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center justify-center gap-2"
          >
            <CheckCircleIcon className="w-5 h-5 text-green-500" />
            <span>{submitStatus.message}</span>
          </motion.div>
        )}
        {submitStatus.type === 'error' && (
          <div className="flex items-center justify-center gap-2">
            <XCircleIcon className="w-5 h-5 text-red-500" />
            <span>{submitStatus.message}</span>
          </div>
        )}
      </motion.div>
    )
  }

  return (
    <>
      <Header />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* عنوان الصفحة */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                أضف شركتك إلى دليل نقل عفش
              </h1>
              <p className="text-gray-600">
                انضم إلى أكبر دليل لشركات نقل العفش في المملكة واحصل على المزيد من العملاء
              </p>
            </motion.div>

            {/* إضافة الإحصائيات والمميزات */}
            <StatsAndFeatures />

            {/* شريط التقدم محسن */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between mb-4 relative">
                {[1, 2, 3].map((stepNumber) => (
                  <motion.div
                    key={stepNumber}
                    initial={{ scale: 0.8 }}
                    animate={{ 
                      scale: step >= stepNumber ? 1 : 0.9,
                      background: step >= stepNumber ? 'var(--primary-color)' : '#e5e7eb'
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center 
                      shadow-lg backdrop-blur-sm
                      ${step >= stepNumber 
                        ? 'bg-primary text-white ring-4 ring-primary/20' 
                        : 'bg-gray-200 text-gray-600'
                      }`}
                  >
                    {stepNumber}
                  </motion.div>
                ))}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10" />
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${((step - 1) / (totalSteps - 1)) * 100}%` 
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>

            {/* النموذج المحسن */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl backdrop-blur-sm 
                bg-opacity-90 p-8 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SubmitStatus />
              {renderStep()}
              
              <motion.div className="flex justify-between mt-8 pt-6 border-t">
                {step > 1 && (
                  <motion.button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-2 border rounded-lg hover:bg-gray-50 
                      transition-all duration-300 hover:shadow-md
                      bg-white text-gray-700"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    السابق
                  </motion.button>
                )}
                {step < totalSteps ? (
                  <motion.button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2 bg-gradient-to-r from-primary to-primary-dark 
                      text-white rounded-lg hover:shadow-lg transition-all duration-300
                      mr-auto"
                    whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    التالي
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-gradient-to-r from-primary to-primary-dark
                      text-white rounded-lg transition-all duration-300
                      mr-auto font-medium flex items-center gap-2
                      ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-lg'}`}
                    whileHover={isSubmitting ? {} : { scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                    whileTap={isSubmitting ? {} : { scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>جاري الإرسال...</span>
                      </>
                    ) : (
                      <span>إرسال الطلب</span>
                    )}
                  </motion.button>
                )}
              </motion.div>
            </motion.form>
          </div>
        </div>
      </motion.div>
      <HomeFooter />
    </>
  )
} 