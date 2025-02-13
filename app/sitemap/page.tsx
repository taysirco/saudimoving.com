import { Metadata } from 'next'
import Link from 'next/link'
import { cities } from '@/lib/utils/data'

export const metadata: Metadata = {
  title: 'خريطة الموقع - دليل شركات نقل العفش',
  description: 'تصفح جميع صفحات موقع دليل شركات نقل العفش في المملكة العربية السعودية',
}

const services = [
  'نقل-عفش',
  'نقل-اثاث',
  'فك-وتركيب-اثاث',
  'تغليف-اثاث',
  'تخزين-اثاث'
]

export default function Sitemap() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">خريطة الموقع</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* الصفحات الرئيسية */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">الصفحات الرئيسية</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                الصفحة الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/add-company" className="text-gray-600 hover:text-blue-600">
                أضف شركتك
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                اتصل بنا
              </Link>
            </li>
          </ul>
        </div>

        {/* المدن الرئيسية */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">المدن الرئيسية</h2>
          <ul className="space-y-2">
            {cities.map((city) => (
              <li key={city}>
                <Link 
                  href={`/${city}`}
                  className="text-gray-600 hover:text-blue-600"
                >
                  نقل عفش في {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* الخدمات */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">الخدمات</h2>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service}>
                <Link 
                  href={`/خدمات/${service}`}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {service.replace(/-/g, ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* خدمات في المدن */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">خدمات نقل العفش في المدن</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cities.slice(0, 10).map((city) => (
              <div key={city}>
                <h3 className="font-medium mb-2">{city}</h3>
                <ul className="space-y-1">
                  {services.map((service) => (
                    <li key={`${city}-${service}`}>
                      <Link 
                        href={`/${city}/${service}`}
                        className="text-gray-600 hover:text-blue-600 text-sm"
                      >
                        {service.replace(/-/g, ' ')} في {city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* صفحات إضافية */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-600">معلومات إضافية</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600">
                سياسة الخصوصية
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600">
                الشروط والأحكام
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">
                من نحن
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 