'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  StarIcon, 
  TrophyIcon, 
  MapPinIcon, 
  PhoneIcon,
  PhoneArrowUpRightIcon, 
  ClockIcon, 
  ShieldCheckIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/solid'
import type { SearchResult } from '@/lib/utils/data'

interface CompanyCardProps {
  company: SearchResult
  rank: number
}

export default function CompanyCard({ company, rank }: CompanyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showPhone, setShowPhone] = useState(false)

  const features = [
    { icon: <ClockIcon className="w-5 h-5" />, text: 'خدمة 24 ساعة' },
    { icon: <ShieldCheckIcon className="w-5 h-5" />, text: 'ضمان الأثاث' },
    { icon: <CurrencyDollarIcon className="w-5 h-5" />, text: 'أسعار تنافسية' }
  ]

  const getRankColor = (rank: number) => {
    switch(rank) {
      case 1: return 'bg-gradient-to-r from-yellow-400 to-yellow-600'
      case 2: return 'bg-gradient-to-r from-gray-300 to-gray-500'
      case 3: return 'bg-gradient-to-r from-amber-500 to-amber-700'
      default: return 'bg-gradient-to-r from-primary to-primary-dark'
    }
  }

  // تنسيق رقم الهاتف
  const formatPhoneNumber = (phone: string) => {
    // إزالة أي رموز غير رقمية
    const cleaned = phone.replace(/\D/g, '')
    // تنسيق الرقم: 966-XX-XXX-XXXX
    const match = cleaned.match(/^(966|0)?(\d{2})(\d{3})(\d{4})$/)
    if (match) {
      return `${match[2]} ${match[3]} ${match[4]}`
    }
    return phone
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden relative"
    >
      {/* Rank Badge */}
      <div className={`absolute top-4 right-4 ${getRankColor(rank)} text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10`}>
        <div className="text-center">
          {rank <= 3 && <TrophyIcon className="w-6 h-6 mx-auto mb-0.5" />}
          <span className="text-sm font-bold">#{rank}</span>
        </div>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <BuildingOfficeIcon className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <MapPinIcon className="w-4 h-4" />
                  <span>{company.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rating Box */}
          {company.rating && (
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 px-4 py-2 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">{company.rating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(company.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-center text-sm text-gray-600 mt-1">
                {company.userRatingsTotal} تقييم
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-3 my-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg text-sm text-gray-700"
            >
              <span className="text-primary">{feature.icon}</span>
              {feature.text}
            </div>
          ))}
        </div>

        {/* Verification Badge */}
        {company.rating && company.rating >= 4.0 && (
          <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-2 rounded-lg mb-4">
            <CheckCircleIcon className="w-5 h-5" />
            <span className="text-sm font-medium">
              شركة موثوقة بتقييم {company.rating} من 5
            </span>
          </div>
        )}

        {/* Contact Section */}
        {company.phone && (
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">رقم الهاتف</div>
                  <div className="font-bold" dir="ltr">
                    {showPhone ? formatPhoneNumber(company.phone) : '*** *** ****'}
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPhone(!showPhone)}
                className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition"
              >
                {showPhone ? 'إخفاء الرقم' : 'إظهار الرقم'}
              </motion.button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${company.phone}`}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-3 rounded-xl hover:shadow-lg transition-shadow font-bold"
              >
                <PhoneArrowUpRightIcon className="w-5 h-5" />
                اتصال مباشر
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${company.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl hover:shadow-lg transition-shadow font-bold"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                واتساب
              </motion.a>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 border-2 border-primary text-primary px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 font-bold"
          >
            <span>{isExpanded ? 'عرض أقل' : 'عرض المزيد'}</span>
            <ChevronDownIcon 
              className={`w-5 h-5 transition-transform duration-300 ${
                isExpanded ? 'transform rotate-180' : ''
              }`}
            />
          </motion.button>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <ShieldCheckIcon className="w-5 h-5 text-primary" />
                    الخدمات المتوفرة
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      فك وتركيب الأثاث
                    </li>
                    <li className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      تغليف محترف
                    </li>
                    <li className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-green-500" />
                      نقل آمن وسريع
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-primary" />
                    معلومات إضافية
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                      <span className="text-gray-600">ساعات العمل:</span>
                      <span className="font-medium">24/7</span>
                    </li>
                    <li className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                      <span className="text-gray-600">خدمة العملاء:</span>
                      <span className="font-medium">متوفرة</span>
                    </li>
                    <li className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                      <span className="text-gray-600">الضمان:</span>
                      <span className="font-medium">شامل</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
} 