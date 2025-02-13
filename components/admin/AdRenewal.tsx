'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface RenewalFormData {
  duration: string
}

interface AdRenewalProps {
  adId: string
  onRenew: () => void
  onClose: () => void
}

export default function AdRenewal({ adId, onRenew, onClose }: AdRenewalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<RenewalFormData>()

  const handleRenewal = async (data: RenewalFormData) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/ads/${adId}/renew`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to renew ad')

      onRenew()
      onClose()
    } catch (error) {
      console.error('Error renewing ad:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h3 className="text-lg font-medium mb-4">تجديد الإعلان</h3>
        
        <form onSubmit={handleSubmit(handleRenewal)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              مدة التجديد
            </label>
            <select
              {...register('duration', { required: true })}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">اختر المدة</option>
              <option value="daily">يوم واحد</option>
              <option value="monthly">شهر</option>
              <option value="3months">3 أشهر</option>
              <option value="6months">6 أشهر</option>
              <option value="1year">سنة</option>
            </select>
            {errors.duration && (
              <p className="mt-1 text-sm text-red-600">يرجى اختيار المدة</p>
            )}
          </div>

          <div className="flex justify-end space-x-2 rtl:space-x-reverse">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
              disabled={isLoading}
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'جاري التجديد...' : 'تجديد'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 