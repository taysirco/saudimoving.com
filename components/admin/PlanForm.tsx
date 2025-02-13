'use client'

import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface PlanFormProps {
  initialData?: any
  onSubmit: (data: any) => void
  onCancel: () => void
}

export default function PlanForm({ initialData, onSubmit, onCancel }: PlanFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    nameAr: initialData?.nameAr || '',
    price: initialData?.price || 0,
    duration: initialData?.duration || 30,
    features: initialData?.features || [''],
    maxCities: initialData?.maxCities || 1,
    isFeatured: initialData?.isFeatured || false,
    maxImages: initialData?.maxImages || 3,
    isPopular: initialData?.isPopular || false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, '']
    })
  }

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index)
    })
  }

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...formData.features]
    newFeatures[index] = value
    setFormData({
      ...formData,
      features: newFeatures
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            اسم الباقة (عربي)
          </label>
          <input
            type="text"
            value={formData.nameAr}
            onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            اسم الباقة (إنجليزي)
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            السعر
          </label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            المدة (بالأيام)
          </label>
          <input
            type="number"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          المميزات
        </label>
        <div className="space-y-2">
          {formData.features.map((feature, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={feature}
                onChange={(e) => updateFeature(index, e.target.value)}
                className="flex-1 p-2 border rounded-lg"
                placeholder="أدخل ميزة"
                required
              />
              <button
                type="button"
                onClick={() => removeFeature(index)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addFeature}
            className="text-primary hover:text-primary-dark text-sm"
          >
            + إضافة ميزة
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            عدد المدن
          </label>
          <input
            type="number"
            value={formData.maxCities}
            onChange={(e) => setFormData({ ...formData, maxCities: Number(e.target.value) })}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            عدد الصور
          </label>
          <input
            type="number"
            value={formData.maxImages}
            onChange={(e) => setFormData({ ...formData, maxImages: Number(e.target.value) })}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.isFeatured}
            onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
          />
          <span className="text-sm">إعلان مميز</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.isPopular}
            onChange={(e) => setFormData({ ...formData, isPopular: e.target.checked })}
          />
          <span className="text-sm">الأكثر طلباً</span>
        </label>
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          إلغاء
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
        >
          حفظ
        </button>
      </div>
    </form>
  )
} 