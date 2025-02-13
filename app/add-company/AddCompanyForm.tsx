'use client'

import { useState } from 'react'
import { cities } from '@/lib/utils/data'

interface PlanOption {
  duration: string
  price: number
  originalPrice: number
  label: string
  discount: number
}

export default function AddCompanyForm() {
  const planOptions: PlanOption[] = [
    { 
      duration: '15_days', 
      price: 450, 
      originalPrice: 600,
      label: '١٥ يوم',
      discount: 25 // 25% خصم
    },
    { 
      duration: '1_month', 
      price: 750, 
      originalPrice: 1000,
      label: 'شهر',
      discount: 25 // 25% خصم
    },
    { 
      duration: '3_months', 
      price: 1800, 
      originalPrice: 3000,
      label: '٣ شهور',
      discount: 40 // 40% خصم
    },
    { 
      duration: '1_year', 
      price: 7000, 
      originalPrice: 12000,
      label: 'سنة',
      discount: 42 // 42% خصم
    },
  ]

  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    phone: '',
    whatsapp: '',
    website: '',
    cities: [] as string[],
    description: '',
    logo: null as File | null,
    plan: '' as string,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData(prev => ({ ...prev, logo: e.target.files![0] }))
    }
  }

  const handleMultiSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = Array.from(e.target.selectedOptions, option => option.value)
    setFormData(prev => ({ ...prev, [e.target.name]: values }))
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">سجل بيانات شركتك</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-2">اسم الشركة *</label>
          <input
            type="text"
            name="companyName"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">اسم المالك *</label>
          <input
            type="text"
            name="ownerName"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={formData.ownerName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">رقم الجوال *</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">رقم الواتساب</label>
          <input
            type="tel"
            name="whatsapp"
            className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={formData.whatsapp}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">الموقع الإلكتروني</label>
          <input
            type="url"
            name="website"
            className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">المدن *</label>
          <select
            name="cities"
            multiple
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={formData.cities}
            onChange={handleMultiSelect}
          >
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2">شعار الشركة</label>
          <input
            type="file"
            name="logo"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-2">وصف الشركة *</label>
          <textarea
            name="description"
            required
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-4">مدة الإعلان *</label>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {planOptions.map((plan) => (
              <div key={plan.duration} className="relative">
                <input
                  type="radio"
                  name="plan"
                  id={plan.duration}
                  value={plan.duration}
                  required
                  className="peer hidden"
                  onChange={handleChange}
                />
                <label
                  htmlFor={plan.duration}
                  className="block p-4 text-center border rounded-lg cursor-pointer transition-all
                    peer-checked:border-blue-500 peer-checked:bg-blue-50
                    hover:border-blue-300 relative overflow-hidden"
                >
                  <div className="absolute -right-12 top-2 bg-red-500 text-white py-1 px-12 transform rotate-45">
                    {plan.discount}% خصم
                  </div>

                  <div className="font-semibold text-lg mb-1">{plan.label}</div>
                  <div className="space-y-1">
                    <div className="text-gray-500 line-through text-sm">
                      {plan.originalPrice} ريال
                    </div>
                    <div className="text-blue-600 font-bold text-lg">
                      {plan.price} ريال
                    </div>
                  </div>
                  
                  {(plan.duration === '3_months' || plan.duration === '1_year') && (
                    <div className="mt-2 text-sm text-gray-500">
                      {Math.round(plan.price / (plan.duration === '3_months' ? 3 : 12))} ريال/شهرياً
                    </div>
                  )}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-200"
        >
          إرسال الطلب
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-500 text-center">
        * الحقول المطلوبة
      </p>
    </form>
  )
} 