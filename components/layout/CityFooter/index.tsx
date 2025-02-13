import React from 'react'
import Link from 'next/link'
import { cities } from '@/lib/utils/data'
import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { SITE_CONFIG } from '@/lib/utils/constants'

interface Props {
  currentCity: string
}

export default function CityFooter({ currentCity }: Props) {
  // Get nearby cities (excluding current city)
  const nearbyCities = cities
    .filter(city => city !== currentCity)
    .slice(0, 6) // Show only 6 nearby cities

  // Common moving services
  const commonServices = [
    'نقل أثاث',
    'نقل عفش',
    'تغليف أثاث',
    'فك وتركيب أثاث',
    'تخزين أثاث',
    'نقل مكاتب'
  ]

  // City-specific services
  const cityServices = [
    `نقل عفش ${currentCity}`,
    `شركة نقل عفش ${currentCity}`,
    `افضل شركة نقل اثاث ${currentCity}`,
    `نقل اثاث ${currentCity}`,
    `دليل شركات نقل العفش ${currentCity}`,
    `ارخص شركة نقل عفش ${currentCity}`
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6" dir="rtl">
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

          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">عن خدماتنا في {currentCity}</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              نقدم خدمات نقل العفش في {currentCity} بأعلى مستويات الجودة والأمان. نمتلك فريق متخصص وخبرة طويلة في مجال نقل الأثاث.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 ml-2" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-blue-400 transition duration-200">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 ml-2" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-blue-400 transition duration-200">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center">
                <MapIcon className="h-5 w-5 ml-2" />
                <span>{currentCity} - {SITE_CONFIG.address}</span>
              </div>
            </div>
          </div>

          {/* Services in Current City */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">خدماتنا في {currentCity}</h3>
            <ul className="space-y-2">
              {cityServices.map((service) => (
                <li key={service}>
                  <Link
                    href={`/${currentCity}/${encodeURIComponent(service)}`}
                    className="hover:text-blue-400 transition duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Common Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">خدمات نقل العفش</h3>
            <ul className="space-y-2">
              {commonServices.map((service) => (
                <li key={service}>
                  <Link
                    href={`/${currentCity}/${encodeURIComponent(service)}`}
                    className="hover:text-blue-400 transition duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links & Nearby Cities */}
          <div className="space-y-8">
            {/* Nearby Cities */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">مدن قريبة</h3>
              <ul className="space-y-2">
                {nearbyCities.map((city) => (
                  <li key={city}>
                    <Link
                      href={`/${city}/نقل-عفش`}
                      className="hover:text-blue-400 transition duration-200"
                    >
                      نقل عفش {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {SITE_CONFIG.name} - {currentCity} - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  )
} 