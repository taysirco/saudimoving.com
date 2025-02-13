'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cities } from '@/lib/utils/data'
import { calculatePrice } from '@/lib/utils/priceCalculator'
import { 
  HomeIcon, 
  BuildingOfficeIcon, 
  BuildingStorefrontIcon,
  CubeIcon,
  HomeModernIcon
} from '@heroicons/react/24/outline'

interface FormData {
  moveType: string
  propertyType: string
  fromCity: string
  toCity: string
  service: string
  specificItems?: string[]
  distance: number
  floor: number
  hasElevator: boolean
  needStorage: boolean
  storageDays: number
}

const initialFormData: FormData = {
  moveType: '',
  propertyType: '',
  fromCity: '',
  toCity: '',
  service: 'نقل عفش',
  distance: 0,
  floor: 0,
  hasElevator: false,
  needStorage: false,
  storageDays: 0
}

const serviceTypes = [
  {
    id: 'moving',
    title: 'نقل فقط',
    description: 'خدمة النقل الأساسية',
    price: 1
  },
  {
    id: 'movingAndPacking',
    title: 'نقل وتغليف',
    description: 'نقل مع خدمة التغليف الاحترافي',
    price: 1.3
  },
  {
    id: 'movingAndStorage',
    title: 'نقل وتخزين',
    description: 'نقل مع إمكانية التخزين المؤقت',
    price: 1.4
  },
  {
    id: 'fullService',
    title: 'نقل وتغليف وتخزين',
    description: 'خدمة متكاملة تشمل النقل والتغليف والتخزين',
    price: 1.6
  }
]

export default function PriceCalculator() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [currentStep, setCurrentStep] = useState(1)
  const [price, setPrice] = useState<{ min: number; max: number } | null>(null)

  const propertyTypes = [
    {
      id: 'apartment',
      title: 'شقة',
      icon: HomeIcon,
      description: 'نقل محتويات شقة سكنية'
    },
    {
      id: 'house',
      title: 'منزل',
      icon: HomeIcon,
      description: 'نقل محتويات منزل'
    },
    {
      id: 'smallVilla',
      title: 'فيلا صغيرة',
      icon: HomeModernIcon,
      description: 'نقل محتويات فيلا صغيرة'
    },
    {
      id: 'largeVilla',
      title: 'فيلا كبيرة',
      icon: HomeModernIcon,
      description: 'نقل محتويات فيلا كبيرة'
    },
    {
      id: 'store',
      title: 'محل تجاري',
      icon: BuildingStorefrontIcon,
      description: 'نقل محتويات محل'
    },
    {
      id: 'company',
      title: 'شركة/مكتب',
      icon: BuildingOfficeIcon,
      description: 'نقل محتويات شركة أو مكتب'
    },
    {
      id: 'specificItems',
      title: 'أغراض محددة',
      icon: CubeIcon,
      description: 'نقل قطع محددة من الأثاث'
    }
  ]

  const steps = {
    1: {
      title: 'نوع العقار',
      description: 'اختر نوع العقار'
    },
    2: {
      title: 'تفاصيل المكان',
      description: 'حدد المدينة وتفاصيل الموقع'
    },
    3: {
      title: 'تفاصيل الخدمة',
      description: 'اختر الخدمات الإضافية والتفاصيل'
    },
    4: {
      title: 'معلومات إضافية',
      description: 'أضف أي معلومات إضافية مطلوبة'
    }
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const calculatedPrice = calculatePrice(formData)
    setPrice(calculatedPrice)
  }

  const renderPropertyTypeStep = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {propertyTypes.map((type) => (
          <motion.div
            key={type.id}
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-xl border-2 cursor-pointer ${
              formData.propertyType === type.id
                ? 'border-primary bg-primary/5'
                : 'border-gray-200'
            }`}
            onClick={() => setFormData({ ...formData, propertyType: type.id })}
          >
            <type.icon className="w-8 h-8 mb-4 text-primary" />
            <h3 className="font-bold mb-2">{type.title}</h3>
            <p className="text-sm text-gray-600">{type.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  const renderServiceTypeStep = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {serviceTypes.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-xl border-2 cursor-pointer ${
              formData.service === service.id
                ? 'border-primary bg-primary/5'
                : 'border-gray-200'
            }`}
            onClick={() => setFormData({ ...formData, service: service.id })}
          >
            <h3 className="font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h4 className="font-bold mb-4">معلومات إضافية</h4>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="text-gray-700">هل يوجد مصعد؟</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="hasElevator"
                  checked={formData.hasElevator}
                  onChange={() => setFormData({ ...formData, hasElevator: true })}
                  className="text-primary"
                />
                <span>نعم</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="hasElevator"
                  checked={!formData.hasElevator}
                  onChange={() => setFormData({ ...formData, hasElevator: false })}
                  className="text-primary"
                />
                <span>لا</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">الدور</label>
            <input
              type="number"
              min="0"
              value={formData.floor}
              onChange={(e) => setFormData({ ...formData, floor: Number(e.target.value) })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>
      </div>
    </motion.div>
  )

  const renderLocationStep = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`p-6 rounded-xl border-2 cursor-pointer ${
            formData.moveType === 'sameCity'
              ? 'border-primary bg-primary/5'
              : 'border-gray-200'
          }`}
          onClick={() => setFormData({ ...formData, moveType: 'sameCity', toCity: '' })}
        >
          <h3 className="font-bold mb-2">نقل داخل المدينة</h3>
          <p className="text-sm text-gray-600">نقل في نفس المدينة</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`p-6 rounded-xl border-2 cursor-pointer ${
            formData.moveType === 'betweenCities'
              ? 'border-primary bg-primary/5'
              : 'border-gray-200'
          }`}
          onClick={() => setFormData({ ...formData, moveType: 'betweenCities' })}
        >
          <h3 className="font-bold mb-2">نقل بين المدن</h3>
          <p className="text-sm text-gray-600">نقل من مدينة إلى أخرى</p>
        </motion.div>
      </div>

      {formData.moveType === 'betweenCities' ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">من مدينة</label>
              <select
                value={formData.fromCity}
                onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">اختر المدينة</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">إلى مدينة</label>
              <select
                value={formData.toCity}
                onChange={(e) => setFormData({ ...formData, toCity: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">اختر المدينة</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">المسافة التقريبية (كم)</label>
            <input
              type="number"
              min="0"
              value={formData.distance}
              onChange={(e) => setFormData({ ...formData, distance: Number(e.target.value) })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
              placeholder="أدخل المسافة التقريبية بين المدينتين"
              required
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <label className="block text-gray-700 mb-2">المدينة</label>
            <select
              value={formData.fromCity}
              onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">اختر المدينة</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">المسافة داخل المدينة (كم)</label>
            <input
              type="number"
              min="0"
              value={formData.distance}
              onChange={(e) => setFormData({ ...formData, distance: Number(e.target.value) })}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary"
              placeholder="أدخل المسافة التقريبية داخل المدينة"
              required
            />
          </div>
        </>
      )}

      {formData.moveType === 'betweenCities' && (
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-600">
            * النقل بين المدن يتطلب تكلفة إضافية تعتمد على المسافة بين المدينتين
          </p>
        </div>
      )}
    </motion.div>
  )

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {Object.entries(steps).map(([step, { title }]) => (
            <div
              key={step}
              className={`flex items-center ${
                Number(step) < currentStep
                  ? 'text-primary'
                  : Number(step) === currentStep
                  ? 'text-primary font-bold'
                  : 'text-gray-400'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  Number(step) <= currentStep
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-300'
                }`}
              >
                {step}
              </div>
              <span className="mr-2 hidden sm:block">{title}</span>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold">{steps[currentStep as keyof typeof steps].title}</h2>
          <p className="text-gray-600">{steps[currentStep as keyof typeof steps].description}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {currentStep === 1 && renderPropertyTypeStep()}
        {currentStep === 2 && renderLocationStep()}
        {currentStep === 3 && renderServiceTypeStep()}

        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              السابق
            </button>
          )}
          {currentStep < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark mr-auto"
            >
              التالي
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark mr-auto"
            >
              احسب التكلفة
            </button>
          )}
        </div>
      </form>

      <AnimatePresence>
        {price && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 p-6 bg-gray-50 rounded-lg"
          >
            <h3 className="text-xl font-bold text-center mb-4">التكلفة التقريبية</h3>
            <div className="text-center space-y-4">
              <p className="text-3xl font-bold text-primary">
                {price.min} - {price.max} ريال
              </p>
              <div className="text-gray-600 space-y-2 text-sm">
                <p>* هذه التكلفة تقريبية وقد تختلف بناءً على:</p>
                <ul className="list-disc list-inside">
                  <li>كمية وحجم الأثاث بالتفصيل</li>
                  <li>صعوبة الفك والتركيب</li>
                  <li>الحاجة لمعدات خاصة</li>
                  <li>وقت وتاريخ النقل</li>
                  <li>عوامل أخرى قد تظهر عند المعاينة</li>
                </ul>
                <p className="mt-4 font-medium">
                  للحصول على السعر النهائي الدقيق، نرجو التواصل مع الشركات مباشرة
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 