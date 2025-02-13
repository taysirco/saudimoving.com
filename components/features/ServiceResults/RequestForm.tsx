'use client'

import { useState } from 'react'
import { PhoneIcon, UserIcon, MapPinIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'

export default function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // إرسال النموذج
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <div className="absolute right-3 top-3 text-gray-400">
          <UserIcon className="h-6 w-6" />
        </div>
        <input
          type="text"
          name="name"
          placeholder="الاسم"
          required
          className="w-full p-3 pr-12 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="relative">
        <div className="absolute right-3 top-3 text-gray-400">
          <PhoneIcon className="h-6 w-6" />
        </div>
        <input
          type="tel"
          name="phone"
          placeholder="رقم الجوال"
          required
          className="w-full p-3 pr-12 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div className="relative">
        <div className="absolute right-3 top-3 text-gray-400">
          <MapPinIcon className="h-6 w-6" />
        </div>
        <input
          type="text"
          name="location"
          placeholder="الموقع"
          required
          className="w-full p-3 pr-12 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
      </div>

      <div className="relative">
        <div className="absolute right-3 top-3 text-gray-400">
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
        </div>
        <textarea
          name="message"
          placeholder="تفاصيل الطلب"
          rows={4}
          className="w-full p-3 pr-12 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200"
      >
        إرسال الطلب
      </button>
    </form>
  )
} 