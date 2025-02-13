import React from 'react'
import Link from 'next/link'
import { cities, keywords } from '@/lib/utils/data'
import { 
  PhoneIcon, 
  MapPinIcon,
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline'
import { SITE_CONFIG } from '@/lib/utils/constants'
import AddCompanyButton from '@/components/common/AddCompanyButton'

interface FooterProps {
  currentCity?: string
  currentService?: string
}

export default function Footer({ currentCity, currentService }: FooterProps) {
  const socialLinks = [
    {
      name: 'YouTube',
      icon: 'youtube',
      url: '#',
      className: 'text-[#FF0000] hover:opacity-80'
    },
    {
      name: 'Facebook',
      icon: 'facebook',
      url: '#',
      className: 'text-[#1877F2] hover:opacity-80'
    },
    {
      name: 'Instagram',
      icon: 'instagram',
      url: '#',
      className: 'text-[#E4405F] hover:opacity-80'
    },
    {
      name: 'Snapchat',
      icon: 'snapchat',
      url: '#',
      className: 'text-[#FFFC00] hover:opacity-80'
    },
    {
      name: 'TikTok',
      icon: 'tiktok',
      url: '#',
      className: 'text-[#000000] hover:opacity-80'
    },
    {
      name: 'Twitter',
      icon: 'twitter',
      url: '#',
      className: 'text-[#1DA1F2] hover:opacity-80'
    }
  ]

  // قائمة المدن المجاورة - 11 مدينة
  const nearbyLinks = [
    { city: 'الرياض', service: currentService },
    { city: 'جدة', service: currentService },
    { city: 'الدمام', service: currentService },
    { city: 'مكة المكرمة', service: currentService },
    { city: 'المدينة المنورة', service: currentService },
    { city: 'الطائف', service: currentService },
    { city: 'تبوك', service: currentService },
    { city: 'الخبر', service: currentService },
    { city: 'بريدة', service: currentService },
    { city: 'حائل', service: currentService },
    { city: 'الجبيل', service: currentService }
  ].filter(link => link.city !== currentCity)

  // الخدمات ذات الصلة - 11 خدمة
  const relatedServices = [
    'نقل عفش',
    'نقل اثاث',
    'شركة نقل عفش',
    'نقل عفش مع الفك والتركيب',
    'نقل عفش مع التغليف',
    'ارخص شركة نقل عفش',
    'افضل شركة نقل عفش',
    'شركات نقل العفش',
    'اسعار نقل العفش',
    'سيارات نقل العفش',
    'دينا نقل عفش'
  ].filter(service => service !== currentService)

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-primary">
                  حاسبة التكلفة
                </Link>
              </li>
              <li>
                <Link href="/add-company" className="hover:text-primary">
                  أضف شركتك
                </Link>
              </li>
            </ul>
          </div>

          {/* خدمات في مدن مجاورة */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              خدمات {currentService} في مدن قريبة
            </h3>
            <ul className="space-y-2">
              {nearbyLinks.slice(0, 11).map((link) => (
                <li key={link.city}>
                  <Link 
                    href={`/${encodeURIComponent(link.city)}/${encodeURIComponent(link.service || '')}`}
                    className="hover:text-primary text-sm"
                  >
                    {link.service} في {link.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* خدمات ذات صلة */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              خدمات ذات صلة في {currentCity}
            </h3>
            <ul className="space-y-2">
              {relatedServices.slice(0, 11).map((service) => (
                <li key={service}>
                  <Link 
                    href={`/${encodeURIComponent(currentCity || 'الرياض')}/${encodeURIComponent(service)}`}
                    className="hover:text-primary text-sm"
                  >
                    {service} في {currentCity || 'الرياض'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
} 