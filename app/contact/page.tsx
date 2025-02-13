'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import HomeFooter from '@/components/layout/HomeFooter'

interface FormData {
  name: string
  phone: string
  email: string
  city: string
  service: string
  message: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold mb-4 text-gray-900">تواصل معنا</h1>
              <p className="text-lg max-w-2xl mx-auto text-gray-600">
                نحن هنا لمساعدتك في جميع خدمات نقل العفش والأثاث. فريقنا جاهز للرد على استفساراتك
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 -mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* نموذج الاتصال */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-8">نموذج الاتصال</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      required
                      className="peer w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="الاسم"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <label className="absolute right-2 -top-2.5 bg-white px-2 text-sm text-gray-600">الاسم</label>
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      required
                      className="peer w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="رقم الجوال"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    <label className="absolute right-2 -top-2.5 bg-white px-2 text-sm text-gray-600">رقم الجوال</label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    required
                    className="peer w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="البريد الإلكتروني"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <label className="absolute right-2 -top-2.5 bg-white px-2 text-sm text-gray-600">البريد الإلكتروني</label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      className="peer w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="المدينة"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                    <label className="absolute right-2 -top-2.5 bg-white px-2 text-sm text-gray-600">المدينة</label>
                  </div>

                  <select
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">اختر الخدمة</option>
                    <option value="نقل عفش">نقل عفش</option>
                    <option value="نقل اثاث">نقل اثاث</option>
                    <option value="فك وتركيب">فك وتركيب</option>
                    <option value="تغليف">تغليف</option>
                  </select>
                </div>

                <div className="relative">
                  <textarea
                    required
                    rows={4}
                    className="peer w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="الرسالة"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                  <label className="absolute right-2 -top-2.5 bg-white px-2 text-sm text-gray-600">الرسالة</label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full p-4 rounded-lg font-bold
                    relative overflow-hidden
                    transform transition-all duration-300
                    ${isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#1F3E99] hover:bg-[#162B6F]'
                    }
                    shadow-lg hover:shadow-xl
                    group
                    border-2 border-white/10
                    text-white
                    text-lg
                  `}
                >
                  <span className={`
                    inline-flex items-center justify-center gap-2
                    transition-all duration-300
                    ${isSubmitting ? 'opacity-0' : 'opacity-100'}
                    drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]
                  `}>
                    <span>إرسال الرسالة</span>
                    <svg 
                      className="w-5 h-5 transform transition-transform group-hover:translate-x-1 rtl:rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                  
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}

                  {/* تأثير الموجة عند النقر */}
                  <span className="absolute inset-0 h-full w-full bg-white/25 transform scale-0 opacity-0 origin-center group-active:scale-100 group-active:opacity-100 transition-all duration-300 rounded-lg"></span>
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-600 rounded-lg text-center">
                    تم إرسال رسالتك بنجاح! سنتواصل معك قريباً
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-lg text-center">
                    حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى
                  </div>
                )}
              </form>
            </motion.div>

            {/* معلومات الاتصال */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-8">معلومات التواصل</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">اتصل بنا</h3>
                    <p className="text-gray-600">0500000000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">البريد الإلكتروني</h3>
                    <p className="text-gray-600">info@example.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">العنوان</h3>
                    <p className="text-gray-600">المملكة العربية السعودية</p>
                  </div>
                </div>

                <div className="pt-8 border-t">
                  <h3 className="font-semibold text-lg mb-4">ساعات العمل</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">السبت - الخميس</span>
                      <span className="text-primary font-medium">8:00 صباحاً - 8:00 مساءً</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">الجمعة</span>
                      <span className="text-primary font-medium">مغلق</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* قسم الخريطة */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold mb-8 text-center">موقعنا على الخريطة</h2>
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7249.504499556513!2d46.680808!3d24.701042!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f033b6b026437%3A0xa912ef63d592ccdb!2sSilverShadow%20Media%20Production!5e0!3m2!1sen!2seg!4v1739046288926!5m2!1sen!2seg" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* قسم الأسئلة الشائعة */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-semibold mb-8 text-center">الأسئلة الشائعة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">ما هي ساعات العمل؟</h3>
                <p className="text-gray-600">نعمل من السبت إلى الخميس من 8 صباحاً حتى 8 مساءً. الجمعة إجازة.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">كيف يمكنني حجز خدمة؟</h3>
                <p className="text-gray-600">يمكنك التواصل معنا عبر النموذج أعلاه أو الاتصال مباشرة على أرقامنا.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">هل تقدمون خدمات خارج المدينة؟</h3>
                <p className="text-gray-600">نعم، نقدم خدمات النقل بين جميع مدن المملكة.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-lg mb-2">كم تستغرق عملية النقل؟</h3>
                <p className="text-gray-600">تختلف المدة حسب حجم العفش والمسافة، سنخبرك بالتفاصيل عند التواصل.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <HomeFooter />
    </>
  )
} 