'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { cities } from '@/lib/utils/data'

export default function AdForm({ onSubmit, initialData = null }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleFormSubmit = async (data) => {
    setIsLoading(true)
    try {
      await onSubmit(data)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          صورة الإعلان
        </label>
        <input
          type="file"
          accept="image/*"
          {...register('image', { required: !initialData })}
          className="mt-1 block w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          اسم الشركة
        </label>
        <input
          type="text"
          {...register('companyName', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        />
      </div>

      {/* المزيد من حقول النموذج... */}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        {isLoading ? 'جاري الحفظ...' : 'حفظ الإعلان'}
      </button>
    </form>
  )
} 