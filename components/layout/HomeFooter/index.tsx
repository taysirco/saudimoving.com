import Link from 'next/link'

export default function HomeFooter() {
  return (
    <footer className="bg-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-600 hover:text-primary">
                  حاسبة التكلفة
                </Link>
              </li>
              <li>
                <Link href="/add-company" className="text-gray-600 hover:text-primary">
                  أضف شركتك
                </Link>
              </li>
            </ul>
          </div>

          {/* يمكن إضافة أقسام أخرى للفوتر هنا */}
        </div>

        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
} 