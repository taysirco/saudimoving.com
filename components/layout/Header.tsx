'use client'

import Link from 'next/link'
import { useState } from 'react'
import { cities } from '@/lib/utils/data'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'
import { Bars3Icon, XMarkIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-primary">
            نقل عفش
          </Link>

          {/* Add Company Button */}
          <Link 
            href="/add-company" 
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
          >
            <BuildingOffice2Icon className="w-5 h-5" />
            <span>أضف شركتك</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/services" className="hover:text-primary transition">
              جميع الخدمات
            </Link>
            <div className="relative group">
              <button className="hover:text-primary transition">
                اختر المدينة
              </button>
              <div className="absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block">
                {cities.map((city) => {
                  const cityInArabic = getArabicText(arabicToSlug(city))
                  return (
                    <Link
                      key={city}
                      href={`/${arabicToSlug(city)}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {cityInArabic}
                    </Link>
                  )
                })}
              </div>
            </div>
            <Link href="/about" className="hover:text-primary transition">
              من نحن
            </Link>
            <Link href="/contact" className="hover:text-primary transition">
              اتصل بنا
            </Link>
            <Link 
              href="/calculator"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              حاسبة التكلفة
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="/services"
                className="hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                جميع الخدمات
              </Link>
              <div className="space-y-2">
                <div className="font-medium">اختر المدينة</div>
                <div className="grid grid-cols-2 gap-2">
                  {cities.map((city) => {
                    const cityInArabic = getArabicText(arabicToSlug(city))
                    return (
                      <Link
                        key={city}
                        href={`/${arabicToSlug(city)}`}
                        className="block px-4 py-2 hover:bg-gray-100 rounded"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {cityInArabic}
                      </Link>
                    )
                  })}
                </div>
              </div>
              <Link
                href="/about"
                className="hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary transition"
                onClick={() => setIsMenuOpen(false)}
              >
                اتصل بنا
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
} 