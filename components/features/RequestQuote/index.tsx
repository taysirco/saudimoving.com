'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface RequestQuoteProps {
  city: string
  service: string
}

interface FormData {
  name: string
  phone: string
  fromLocation: string
  toLocation: string
  moveDate: string
  details: string
}

export default function RequestQuote({ city, service }: RequestQuoteProps) {
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  useEffect(() => {
    setMounted(true)
  }, [])

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // هنا يتم إرسال البيانات إلى API
      const response = await fetch('/api/quote-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          city,
          service,
          requestDate: new Date().toISOString()
        }),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        reset()
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted) {
    return <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6 text-center">احصل على عرض سعر مجاني</h3>
      
      {submitSuccess ? (
        <div className="text-center text-green-600 p-4">
          <p className="font-semibold mb-2">تم استلام طلبك بنجاح!</p>
          <p>سنقوم بالتواصل معك في أقرب وقت ممكن.</p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="mt-4 text-blue-600 hover:text-blue-700"
          >
            طلب عرض سعر آخر
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">الاسم</label>
            <input
              type="text"
              {...register('name', { required: 'الاسم مطلوب' })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="الاسم الكامل"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">رقم الجوال</label>
            <input
              type="tel"
              {...register('phone', { 
                required: 'رقم الجوال مطلوب',
                pattern: {
                  value: /^05\d{8}$/,
                  message: 'يجب إدخال رقم جوال سعودي صحيح'
                }
              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="05xxxxxxxx"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone.message}</span>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">النقل من</label>
            <input
              type="text"
              {...register('fromLocation', { required: 'موقع النقل مطلوب' })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="الحي / المدينة"
            />
            {errors.fromLocation && (
              <span className="text-red-500 text-sm">{errors.fromLocation.message}</span>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">النقل إلى</label>
            <input
              type="text"
              {...register('toLocation', { required: 'موقع النقل مطلوب' })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="الحي / المدينة"
            />
            {errors.toLocation && (
              <span className="text-red-500 text-sm">{errors.toLocation.message}</span>
            )}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">تاريخ النقل المفضل</label>
            <input
              type="date"
              {...register('moveDate')}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">تفاصيل إضافية</label>
            <textarea
              {...register('details')}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="اكتب أي تفاصيل إضافية تريد إضافتها..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200 disabled:bg-blue-400"
          >
            {isSubmitting ? 'جاري الإرسال...' : 'احصل على عرض سعر مجاني'}
          </button>
        </form>
      )}
    </div>
  )
} 