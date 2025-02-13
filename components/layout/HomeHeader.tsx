'use client'

import Link from 'next/link'
import { majorCities } from '@/lib/utils/data'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'

export default function HomeHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-primary">
            نقل عفش
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/services" className="hover:text-primary transition">
              جميع الخدمات
            </Link>
            
            {/* Cities Dropdown */}
            <div className="relative group">
              <button className="hover:text-primary transition">
                اختر المدينة
              </button>
              <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block">
                {majorCities.map((city) => {
                  const cityInArabic = getArabicText(arabicToSlug(city))
                  return (
                    <Link
                      key={city}
                      href={`/${arabicToSlug(city)}/moving-furniture`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {cityInArabic}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <Link href="/riyadh/moving-furniture" className="hover:text-primary transition">
              نقل عفش الرياض
            </Link>
            <Link href="/jeddah/moving-furniture" className="hover:text-primary transition">
              نقل عفش جدة
            </Link>
            <Link href="/dammam/moving-furniture" className="hover:text-primary transition">
              نقل عفش الدمام
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
} 