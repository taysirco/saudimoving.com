'use client'

<<<<<<< HEAD
import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { cities, keywords } from '@/lib/utils/data'
import { toast } from 'react-hot-toast'
import dynamic from 'next/dynamic'
import { HexColorPicker } from 'react-colorful'

// استيراد المكونات بشكل ديناميكي
const DynamicPlanSelector = dynamic(
  () => import('./PlanSelector').then(mod => {
    const Component = mod.default
    return function DynamicPlanSelectorWrapper(props: any) {
      return <Component {...props} />
    }
  }),
  { 
    loading: () => <div className="h-48 bg-gray-200 rounded-lg animate-pulse" />,
    ssr: false
  }
)

const DynamicIconSelector = dynamic(
  () => import('./IconSelector').then(mod => {
    const Component = mod.default
    return function DynamicIconSelectorWrapper(props: any) {
      return <Component {...props} />
    }
  }),
  { 
    loading: () => <div className="h-24 bg-gray-200 rounded-lg animate-pulse" />,
    ssr: false
  }
)

const DynamicImageUpload = dynamic(
  () => import('./ImageUpload').then(mod => {
    const Component = mod.default
    return function DynamicImageUploadWrapper(props: any) {
      return <Component {...props} />
    }
  }),
  { 
    loading: () => <div className="h-32 bg-gray-200 rounded-lg animate-pulse" />,
    ssr: false
  }
)

interface Plan {
  _id: string
  name: string
  nameAr: string
  price: number
  duration: number
  features: string[]
  maxCities: number
  isFeatured: boolean
  maxImages: number
  totalPrice: number
}
=======
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { cities, keywords } from '@/lib/utils/data'
import { toast } from 'react-hot-toast'
import ImageUpload from './ImageUpload'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

interface AdFormData {
  companyName: string
  description: string
  phoneNumber: string
<<<<<<< HEAD
  whatsappNumber: string
  cities: string[]
  services: string[]
  backgroundColor: string
  startDate: string
  endDate: string
  featured: boolean
  priority: number
  active: boolean
  planId: string
  icons: Array<{ name: string, color: string }>
}

interface AdFormCompleteProps {
  onSubmit: (data: any) => Promise<void>
  isSubmitting?: boolean
  initialData?: any
}

export default function AdFormComplete({ onSubmit, isSubmitting, initialData }: AdFormCompleteProps) {
  const [mounted, setMounted] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [plans, setPlans] = useState<Plan[]>([])
  const [icons, setIcons] = useState<Array<{ name: string, color: string }>>(initialData?.icons || [])

  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<AdFormData>({
    defaultValues: {
      companyName: initialData?.companyName || '',
      description: initialData?.description || '',
      phoneNumber: initialData?.phoneNumber || '',
      whatsappNumber: initialData?.whatsappNumber || '',
      cities: initialData?.cities || [],
      services: initialData?.services || [],
      backgroundColor: initialData?.backgroundColor || '#ffffff',
      startDate: initialData?.startDate ? new Date(initialData.startDate).toISOString().split('T')[0] : '',
      endDate: initialData?.endDate ? new Date(initialData.endDate).toISOString().split('T')[0] : '',
      featured: initialData?.featured || false,
      priority: initialData?.priority || 1,
      active: initialData?.active ?? true,
      planId: initialData?.planId || '',
      icons: initialData?.icons || []
    }
  })

  useEffect(() => {
    setMounted(true)
    fetchPlans()
  }, [])

  const fetchPlans = async () => {
    try {
      const response = await fetch('/api/plans')
      if (!response.ok) throw new Error('Failed to fetch plans')
      const data = await response.json()
      setPlans(data)
    } catch (error) {
      console.error('Error fetching plans:', error)
      toast.error('فشل في تحميل الباقات')
    }
  }

  const handleFormSubmit = async (data: AdFormData) => {
    if (!imageUrl) {
      toast.error('يرجى رفع صورة للإعلان')
      return
    }

    if (!data.planId) {
      toast.error('يرجى اختيار باقة')
      return
    }

    const selectedPlan = plans.find(plan => plan._id === data.planId)
    if (!selectedPlan) {
      toast.error('الباقة المختارة غير صالحة')
      return
    }

    if (data.cities.length > selectedPlan.maxCities && selectedPlan.maxCities !== -1) {
      toast.error(`هذه الباقة تسمح باختيار ${selectedPlan.maxCities} مدن كحد أقصى`)
      return
    }

    const formData = {
      ...data,
      imageUrl,
      planDetails: {
        name: selectedPlan.name,
        nameAr: selectedPlan.nameAr,
        price: selectedPlan.price,
        duration: selectedPlan.duration,
        features: selectedPlan.features,
        maxCities: selectedPlan.maxCities,
        isFeatured: selectedPlan.isFeatured,
        maxImages: selectedPlan.maxImages
      }
    }

    await onSubmit(formData)
  }

  if (!mounted) {
    return <div className="animate-pulse space-y-4">
      <div className="h-48 bg-gray-200 rounded-lg" />
      <div className="h-32 bg-gray-200 rounded-lg" />
      <div className="h-24 bg-gray-200 rounded-lg" />
    </div>
=======
  whatsappNumber?: string
  website?: string
  cities: string[]
  services: string[]
  imageUrl: string
}

export default function AdFormComplete({ onSubmit, isSubmitting }: { 
  onSubmit: (data: any) => void
  isSubmitting?: boolean 
}) {
  const [selectedCities, setSelectedCities] = useState<string[]>([])
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [imageUrl, setImageUrl] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<AdFormData>()

  const handleFormSubmit = async (data: AdFormData) => {
    try {
      if (!imageUrl) {
        toast.error('الرجاء رفع صورة')
        return
      }

      if (selectedCities.length === 0) {
        toast.error('الرجاء اختيار مدينة واحدة على الأقل')
        return
      }

      if (selectedServices.length === 0) {
        toast.error('الرجاء اختيار خدمة واحدة على الأقل')
        return
      }

      const formData = {
        ...data,
        imageUrl,
        cities: selectedCities,
        services: selectedServices
      }

      const response = await fetch('/api/ads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('فشل في إضافة الإعلان')
      }

      toast.success('تم إضافة الإعلان بنجاح')
      onSubmit(formData)
    } catch (error) {
      toast.error('حدث خطأ أثناء إضافة الإعلان')
      console.error(error)
    }
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
<<<<<<< HEAD
      {/* اختيار الباقة */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">اختر باقة الإعلان</h2>
        <DynamicPlanSelector
          plans={plans}
          selectedPlan={watch('planId')}
          onSelect={(planId) => setValue('planId', planId)}
        />
        {errors.planId && (
          <p className="mt-1 text-sm text-red-600">يرجى اختيار باقة</p>
        )}
      </div>

      {/* صورة الإعلان */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          صورة الإعلان
        </label>
        <DynamicImageUpload
          onUpload={setImageUrl}
          defaultImage={imageUrl}
        />
      </div>

      {/* اسم الشركة */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
=======
      <div>
        <label className="block text-sm font-medium text-gray-700">
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
          اسم الشركة
        </label>
        <input
          type="text"
<<<<<<< HEAD
          {...register('companyName', { required: 'اسم الشركة مطلوب' })}
          className="w-full p-2 border rounded-lg"
=======
          {...register('companyName', { required: 'هذا الحقل مطلوب' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
        />
        {errors.companyName && (
          <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
        )}
      </div>

<<<<<<< HEAD
      {/* الوصف */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          وصف الشركة
        </label>
        <textarea
          {...register('description', { required: 'الوصف مطلوب' })}
          rows={4}
          className="w-full p-2 border rounded-lg"
=======
      <div>
        <label className="block text-sm font-medium text-gray-700">
          وصف الشركة
        </label>
        <textarea
          {...register('description', { required: 'هذا الحقل مطلوب' })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

<<<<<<< HEAD
      {/* رقم الهاتف */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          رقم الهاتف
        </label>
        <input
          type="tel"
          {...register('phoneNumber', { required: 'رقم الهاتف مطلوب' })}
          className="w-full p-2 border rounded-lg"
=======
      <div>
        <label className="block text-sm font-medium text-gray-700">
          رقم الجوال
        </label>
        <input
          type="tel"
          {...register('phoneNumber', { required: 'هذا الحقل مطلوب' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
          dir="ltr"
        />
        {errors.phoneNumber && (
          <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
        )}
      </div>

<<<<<<< HEAD
      {/* رقم الواتساب */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          رقم الواتساب
=======
      <div>
        <label className="block text-sm font-medium text-gray-700">
          رقم الواتساب (اختياري)
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
        </label>
        <input
          type="tel"
          {...register('whatsappNumber')}
<<<<<<< HEAD
          className="w-full p-2 border rounded-lg"
=======
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
          dir="ltr"
        />
      </div>

<<<<<<< HEAD
      {/* المدن */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          المدن
        </label>
        <Controller
          name="cities"
          control={control}
          rules={{ required: 'اختر مدينة واحدة على الأقل' }}
          render={({ field }) => (
            <select
              multiple
              {...field}
              className="w-full p-2 border rounded-lg"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          )}
        />
        {errors.cities && (
          <p className="mt-1 text-sm text-red-600">{errors.cities.message}</p>
        )}
      </div>

      {/* الخدمات */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          الخدمات
        </label>
        <Controller
          name="services"
          control={control}
          rules={{ required: 'اختر خدمة واحدة على الأقل' }}
          render={({ field }) => (
            <select
              multiple
              {...field}
              className="w-full p-2 border rounded-lg"
            >
              {keywords.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          )}
        />
        {errors.services && (
          <p className="mt-1 text-sm text-red-600">{errors.services.message}</p>
        )}
      </div>

      {/* تاريخ البداية */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          تاريخ بداية الإعلان
        </label>
        <input
          type="date"
          {...register('startDate', { required: 'تاريخ البداية مطلوب' })}
          className="w-full p-2 border rounded-lg"
        />
        {errors.startDate && (
          <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
        )}
      </div>

      {/* تاريخ النهاية */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          تاريخ نهاية الإعلان
        </label>
        <input
          type="date"
          {...register('endDate', { required: 'تاريخ النهاية مطلوب' })}
          className="w-full p-2 border rounded-lg"
        />
        {errors.endDate && (
          <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>
        )}
      </div>

      {/* إعلان مميز */}
      <div>
        <label className="flex items-center space-x-2 rtl:space-x-reverse">
          <input
            type="checkbox"
            {...register('featured')}
            className="rounded text-primary focus:ring-primary"
          />
          <span className="text-sm text-gray-700">إعلان مميز</span>
        </label>
      </div>

      {/* الأولوية */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          الأولوية
        </label>
        <input
          type="number"
          {...register('priority', { min: 1, max: 10 })}
          className="w-full p-2 border rounded-lg"
          min="1"
          max="10"
        />
      </div>

      {/* لون الخلفية */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          لون الخلفية
        </label>
        <div className="relative">
          <input
            type="text"
            {...register('backgroundColor')}
            className="w-full p-2 border rounded-lg"
            onClick={() => setShowColorPicker(true)}
          />
          {showColorPicker && (
            <div className="absolute z-10 mt-2">
              <div className="fixed inset-0" onClick={() => setShowColorPicker(false)} />
              <Controller
                name="backgroundColor"
                control={control}
                render={({ field }) => (
                  <HexColorPicker color={field.value} onChange={field.onChange} />
                )}
              />
            </div>
          )}
        </div>
      </div>

      {/* أيقونات الإعلان */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          أيقونات الإعلان
        </label>
        <DynamicIconSelector
          icons={icons}
          onAddIcon={(icon) => {
            const newIcons = [...icons, icon]
            setIcons(newIcons)
            setValue('icons', newIcons)
          }}
          onRemoveIcon={(index) => {
            const newIcons = icons.filter((_, i) => i !== index)
            setIcons(newIcons)
            setValue('icons', newIcons)
          }}
        />
      </div>

      {/* زر الإرسال */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'جاري الحفظ...' : (initialData ? 'تحديث الإعلان' : 'إضافة الإعلان')}
=======
      <div>
        <label className="block text-sm font-medium text-gray-700">
          الموقع الإلكتروني (اختياري)
        </label>
        <input
          type="url"
          {...register('website')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          dir="ltr"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          صورة الشركة
        </label>
        <ImageUpload onUpload={setImageUrl} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">المدن</label>
        <div className="mt-2 space-y-2">
          {cities.map((city) => (
            <label key={city} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                value={city}
                checked={selectedCities.includes(city)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCities([...selectedCities, city])
                  } else {
                    setSelectedCities(selectedCities.filter(c => c !== city))
                  }
                }}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="mr-2">{city}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">الخدمات</label>
        <div className="mt-2 space-y-2">
          {keywords.map((service) => (
            <label key={service} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                value={service}
                checked={selectedServices.includes(service)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedServices([...selectedServices, service])
                  } else {
                    setSelectedServices(selectedServices.filter(s => s !== service))
                  }
                }}
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="mr-2">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'جاري الإضافة...' : 'إضافة الإعلان'}
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
      </button>
    </form>
  )
} 