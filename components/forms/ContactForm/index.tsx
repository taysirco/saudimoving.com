'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface ContactFormProps {
  city: string
  service: string
}

interface FormData {
  name: string
  phone: string
  email?: string
  message?: string
}

export default function ContactForm({ city, service }: ContactFormProps) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          city,
          service,
          userAgent: navigator.userAgent
        })
      })

      if (!response.ok) throw new Error('حدث خطأ في إرسال الطلب')

      setSuccess(true)
      reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'حدث خطأ في إرسال الطلب')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">احصل على عرض سعر</h2>
      
      {success && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
          تم إرسال طلبك بنجاح! سنتواصل معك قريباً
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">الاسم</label>
          <input
            type="text"
            {...register('name', { required: true })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">الاسم مطلوب</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-2">رقم الجوال</label>
          <input
            type="tel"
            {...register('phone', { required: true })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">رقم الجوال مطلوب</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-2">البريد الإلكتروني (اختياري)</label>
          <input
            type="email"
            {...register('email')}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">رسالتك (اختياري)</label>
          <textarea
            {...register('message')}
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-primary text-white py-3 rounded-lg ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-dark'
          }`}
        >
          {loading ? 'جاري الإرسال...' : 'إرسال الطلب'}
        </button>
      </form>
    </div>
  )
} 