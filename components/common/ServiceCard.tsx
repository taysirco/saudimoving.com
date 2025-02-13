'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'

interface ServiceCardProps {
  service: string
  city: string
  onClick: () => void
  isSelected: boolean
  isLink?: boolean
}

export default function ServiceCard({ service, city, onClick, isSelected, isLink = false }: ServiceCardProps) {
  const cityInArabic = getArabicText(arabicToSlug(city))
  const serviceInArabic = getArabicText(arabicToSlug(service))

  const content = (
    <div
      className={`p-6 rounded-xl ${
        isLink ? 'hover:shadow-md transition-shadow' : ''
      } ${isSelected ? 'bg-primary text-white' : 'bg-white'}`}
      onClick={onClick}
    >
      <h3 className="text-lg font-medium mb-2">
        {serviceInArabic} في {cityInArabic}
      </h3>
      <p className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-600'}`}>
        اكتشف أفضل شركات {serviceInArabic} في {cityInArabic} مع التقييمات والأسعار
      </p>
    </div>
  )

  if (isLink) {
    return (
      <Link 
        href={`/${arabicToSlug(city)}/${arabicToSlug(service)}`}
        className="block"
      >
        {content}
      </Link>
    )
  }

  return (
    <motion.div onClick={onClick} whileHover={{ scale: 1.02 }}>
      {content}
    </motion.div>
  )
} 