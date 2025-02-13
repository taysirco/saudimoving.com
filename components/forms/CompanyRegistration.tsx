'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'

export default function CompanyRegistration() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    city: '',
    phone: '',
    email: '',
    services: [],
    description: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/company/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'حدث خطأ في التسجيل')
      }

      toast.success('تم تسجيل الشركة بنجاح وسيتم مراجعة الطلب')
      // إعادة تعيين النموذج
      setFormData({
        companyName: '',
        city: '',
        phone: '',
        email: '',
        services: [],
        description: ''
      })

    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'حدث خطأ في التسجيل')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">اسم الشركة *</label>
        <input
          type="text"
          required
          value={formData.companyName}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            companyName: e.target.value
          }))}
          className="w-full p-3 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">المدينة *</label>
        <input
          type="text"
          required
          value={formData.city}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            city: e.target.value
          }))}
          className="w-full p-3 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">رقم الجوال *</label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            phone: e.target.value
          }))}
          className="w-full p-3 border rounded-lg"
          dir="ltr"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            email: e.target.value
          }))}
          className="w-full p-3 border rounded-lg"
          dir="ltr"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">وصف الخدمات</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            description: e.target.value
          }))}
          className="w-full p-3 border rounded-lg"
          rows={4}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors
          ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'جاري التسجيل...' : 'تسجيل الشركة'}
      </button>
    </form>
  )
} 