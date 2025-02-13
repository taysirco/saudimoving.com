'use client'
import React, { useState } from 'react'

interface InquiryFormProps {
  city: string
  service: string
}

interface FormData {
  name: string
  phone: string
  message: string
}

export default function InquiryForm({ city, service }: InquiryFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          city,
          service
        }),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ name: '', phone: '', message: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">طلب عرض سعر</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">الاسم</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">رقم الجوال</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">تفاصيل الطلب</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-2 border rounded-md"
            rows={4}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'جاري الإرسال...' : 'إرسال الطلب'}
        </button>

        {success && (
          <div className="text-green-600 text-center">
            تم إرسال طلبك بنجاح! سنتواصل معك قريباً
          </div>
        )}
      </div>
    </form>
  )
} 