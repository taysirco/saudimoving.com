'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  name: string
  phone: string
  fromLocation: string
  toLocation: string
  date: string
  details: string
  city: string
  service: string
}

interface Props {
  city: string
  service: string
}

export default function ContactForm({ city, service }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          city,
          service,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer
        }),
      })

      if (!response.ok) {
        throw new Error('حدث خطأ في إرسال الطلب')
      }

      setSubmitSuccess(true)
      reset()
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'حدث خطأ في إرسال الطلب'
      setError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-2">الاسم</label>
        <input
          type="text"
          {...register('name', { required: true })}
          className="w-full p-2 border rounded-md"
          placeholder="الاسم الكامل"
        />
        {errors.name && <span className="text-red-500">هذا الحقل مطلوب</span>}
      </div>

      <div>
        <label className="block text-gray-700 mb-2">رقم الجوال</label>
        <input
          type="tel"
          {...register('phone', { required: true })}
          className="w-full p-2 border rounded-md"
          placeholder="05xxxxxxxx"
        />
        {errors.phone && <span className="text-red-500">هذا الحقل مطلوب</span>}
      </div>

      <div>
        <label className="block text-gray-700 mb-2">موقع النقل من</label>
        <input
          type="text"
          {...register('fromLocation')}
          className="w-full p-2 border rounded-md"
          placeholder="الحي / المنطقة"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">موقع النقل إلى</label>
        <input
          type="text"
          {...register('toLocation')}
          className="w-full p-2 border rounded-md"
          placeholder="الحي / المنطقة"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">تاريخ النقل المفضل</label>
        <input
          type="date"
          {...register('date')}
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">تفاصيل إضافية</label>
        <textarea
          {...register('details')}
          className="w-full p-2 border rounded-md"
          rows={4}
          placeholder="اكتب أي تفاصيل إضافية هنا..."
        />
      </div>

      {error && (
        <div className="text-red-500 text-center p-2 bg-red-50 rounded-md">
          {error}
        </div>
      )}

      {submitSuccess && (
        <div className="text-green-500 text-center p-2 bg-green-50 rounded-md">
          تم إرسال طلبك بنجاح! سنتواصل معك قريباً
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
      </button>
    </form>
  )
} 