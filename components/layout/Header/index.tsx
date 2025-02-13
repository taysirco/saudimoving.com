'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { cities } from '@/lib/utils/data'
import { SITE_CONFIG } from '@/lib/utils/constants'
import AddCompanyButton from '@/components/common/AddCompanyButton'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCitiesDropdownOpen, setIsCitiesDropdownOpen] = useState(false)

  const closeDropdowns = () => {
    setIsMenuOpen(false)
    setIsCitiesDropdownOpen(false)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" dir="rtl">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition duration-200">
              الرئيسية
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsCitiesDropdownOpen(!isCitiesDropdownOpen)}
                onBlur={() => setTimeout(() => setIsCitiesDropdownOpen(false), 200)}
                className="text-gray-700 hover:text-blue-600 transition duration-200"
              >
                المدن
              </button>
              
              {isCitiesDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                  {cities.slice(0, 10).map((city) => (
                    <Link
                      key={city}
                      href={`/${encodeURIComponent(city)}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition duration-200"
                      onClick={closeDropdowns}
                    >
                      نقل عفش {city}
                    </Link>
                  ))}
                  <Link
                    href="/cities"
                    className="block px-4 py-2 text-blue-600 hover:bg-blue-50 transition duration-200 border-t"
                    onClick={closeDropdowns}
                  >
                    عرض كل المدن
                  </Link>
                </div>
              )}
            </div>

            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition duration-200">
              خدماتنا
            </Link>
            
            <Link 
              href={`tel:${SITE_CONFIG.phone}`} 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              اتصل بنا
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 transition duration-200"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          <AddCompanyButton />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-600 transition duration-200"
              onClick={closeDropdowns}
            >
              الرئيسية
            </Link>
            <Link
              href="/cities"
              className="block py-2 text-gray-700 hover:text-blue-600 transition duration-200"
              onClick={closeDropdowns}
            >
              المدن
            </Link>
            <Link
              href="/services"
              className="block py-2 text-gray-700 hover:text-blue-600 transition duration-200"
              onClick={closeDropdowns}
            >
              خدماتنا
            </Link>
            <Link
              href={`tel:${SITE_CONFIG.phone}`}
              className="block py-2 text-blue-600 hover:text-blue-700 transition duration-200"
              onClick={closeDropdowns}
            >
              اتصل بنا
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
} 