'use client'

import Link from 'next/link'
import { BuildingOffice2Icon } from '@heroicons/react/24/outline'
import { 
  FaFacebook, 
  FaXTwitter, 
  FaTiktok, 
  FaInstagram, 
  FaYoutube, 
  FaSnapchat 
} from 'react-icons/fa6'

export default function HomeFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* المدن */}
          <div>
            <h3 className="text-white font-bold mb-4">المدن</h3>
            <ul className="space-y-2">
              <li><Link href="/riyadh" className="hover:text-primary transition">الرياض</Link></li>
              <li><Link href="/jeddah" className="hover:text-primary transition">جدة</Link></li>
              <li><Link href="/makkah" className="hover:text-primary transition">مكة المكرمة</Link></li>
              <li><Link href="/madinah" className="hover:text-primary transition">المدينة المنورة</Link></li>
              <li><Link href="/dammam" className="hover:text-primary transition">الدمام</Link></li>
              <li><Link href="/cities" className="text-primary hover:text-primary-dark transition">كل المدن</Link></li>
            </ul>
          </div>

          {/* الخدمات */}
          <div>
            <h3 className="text-white font-bold mb-4">الخدمات</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-primary transition">نقل عفش</Link></li>
              <li><Link href="/services" className="hover:text-primary transition">فك وتركيب</Link></li>
              <li><Link href="/services" className="hover:text-primary transition">تغليف أثاث</Link></li>
              <li><Link href="/services" className="hover:text-primary transition">سيارات نقل</Link></li>
              <li><Link href="/services" className="hover:text-primary transition">تخزين أثاث</Link></li>
              <li><Link href="/services" className="text-primary hover:text-primary-dark transition">كل الخدمات</Link></li>
            </ul>
          </div>

          {/* روابط مهمة */}
          <div>
            <h3 className="text-white font-bold mb-4">روابط مهمة</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary transition">من نحن</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">اتصل بنا</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition">الشروط والأحكام</Link></li>
            </ul>
          </div>

          {/* وسائل التواصل */}
          <div>
            <h3 className="text-white font-bold mb-4">تابعنا على</h3>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://facebook.com/saudimoving" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition" 
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/saudimoving" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition" 
                aria-label="Twitter"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a 
                href="https://tiktok.com/@saudimoving" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition" 
                aria-label="TikTok"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/saudimoving" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition" 
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a 
                href="https://youtube.com/@saudimoving" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition" 
                aria-label="YouTube"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
              <a 
                href="https://snapchat.com/add/saudimoving" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition" 
                aria-label="Snapchat"
              >
                <FaSnapchat className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              © {new Date().getFullYear()} saudimoving.com جميع الحقوق محفوظة
            </div>
          </div>
        </div>

        {/* Add Company Button */}
        <div className="pt-4">
          <Link 
            href="/add-company"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
          >
            <BuildingOffice2Icon className="w-6 h-6" />
            <span className="font-medium">أضف شركتك للدليل</span>
          </Link>
        </div>
      </div>
    </footer>
  )
} 