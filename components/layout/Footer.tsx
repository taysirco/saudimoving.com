'use client'

import Link from 'next/link'
import { cities, keywords } from '@/lib/utils/data'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'
import { 
  FaFacebook, 
  FaXTwitter, 
  FaTiktok, 
  FaInstagram, 
  FaYoutube, 
  FaSnapchat 
} from 'react-icons/fa6'

// المدن الرئيسية
const mainCities = [
  'الرياض',
  'جدة',
  'مكة المكرمة',
  'المدينة المنورة',
  'الدمام',
  'الطائف',
  'الخبر',
  'تبوك',
  'بريدة',
  'حائل',
  'الجبيل'
]

interface FooterProps {
<<<<<<< HEAD
  currentCity: string;
  currentService: string;
}

export default function Footer({ currentCity, currentService }: FooterProps) {
=======
  currentCity: string
}

export default function Footer({ currentCity }: FooterProps) {
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  const cityInArabic = getArabicText(arabicToSlug(currentCity))
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* المدن */}
          <div>
            <h3 className="font-bold text-lg mb-4">المدن</h3>
            <div className="flex flex-col gap-2">
              {mainCities.map(city => (
                <Link
                  key={city}
                  href={`/${arabicToSlug(city)}`}
                  className="hover:text-primary transition"
                >
                  نقل عفش {getArabicText(arabicToSlug(city))}
                </Link>
              ))}
            </div>
          </div>

          {/* الخدمات */}
          <div>
            <h3 className="font-bold text-lg mb-4">الخدمات</h3>
            <div className="flex flex-col gap-2">
              {keywords.slice(0, 10).map(service => (
                <Link
                  key={service}
                  href={`/${arabicToSlug(currentCity)}/${arabicToSlug(service)}`}
                  className="hover:text-primary transition"
                >
                  {service} في {cityInArabic}
                </Link>
              ))}
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="hover:text-primary transition">
                من نحن
              </Link>
              <Link href="/contact" className="hover:text-primary transition">
                اتصل بنا
              </Link>
              <Link href="/privacy" className="hover:text-primary transition">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="hover:text-primary transition">
                الشروط والأحكام
              </Link>
            </div>
          </div>

          {/* معلومات الاتصال */}
          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <div className="flex flex-col gap-2">
              <a 
                href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                className="hover:text-primary transition"
              >
                {process.env.NEXT_PUBLIC_CONTACT_PHONE}
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className="hover:text-primary transition"
              >
                {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} جميع الحقوق محفوظة
        </div>

        {/* إضافة وسائل التواصل الاجتماعي */}
        <div className="flex justify-center gap-4 mt-6 border-t pt-6">
          <a 
            href="https://facebook.com/saudimoving" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition" 
            aria-label="Facebook"
          >
            <FaFacebook className="w-5 h-5" />
          </a>
          <a 
            href="https://twitter.com/saudimoving" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition" 
            aria-label="Twitter"
          >
            <FaXTwitter className="w-5 h-5" />
          </a>
          <a 
            href="https://tiktok.com/@saudimoving" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition" 
            aria-label="TikTok"
          >
            <FaTiktok className="w-5 h-5" />
          </a>
          <a 
            href="https://instagram.com/saudimoving" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition" 
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a 
            href="https://youtube.com/@saudimoving" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition" 
            aria-label="YouTube"
          >
            <FaYoutube className="w-5 h-5" />
          </a>
          <a 
            href="https://snapchat.com/add/saudimoving" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition" 
            aria-label="Snapchat"
          >
            <FaSnapchat className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
} 