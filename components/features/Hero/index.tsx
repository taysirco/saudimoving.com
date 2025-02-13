import React from 'react'
import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle: string
  city?: string
  service?: string
}

export default function Hero({ title, subtitle, city, service }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="hero-title mb-6">{title}</h1>
          <p className="font-tajawal text-xl md:text-2xl opacity-90">{subtitle}</p>
          {city && service && (
            <div className="text-lg">
              <p>نقدم خدمات {service} في {city} بأعلى جودة وأفضل الأسعار</p>
            </div>
          )}
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-8">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">+100</div>
              <div className="text-sm text-blue-100">شركة معتمدة</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-blue-100">خدمة متواصلة</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-blue-100">ضمان الخدمة</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">+1000</div>
              <div className="text-sm text-blue-100">عميل سعيد</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 