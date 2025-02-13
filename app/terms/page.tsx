import React from 'react'
import Header from '@/components/layout/Header'
import HomeFooter from '@/components/layout/HomeFooter'

export default function TermsPage(): React.ReactElement {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">اتفاقية الاستخدام</h1>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">مقدمة</h2>
              <p className="text-gray-600 leading-relaxed">
                تحدد هذه الاتفاقية الشروط والأحكام التي تحكم استخدام خدماتنا. باستخدامك لموقعنا وخدماتنا، فإنك توافق على الالتزام بهذه الشروط.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">الخدمات المقدمة</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>خدمات نقل العفش والأثاث</li>
                <li>خدمات الفك والتركيب</li>
                <li>خدمات التغليف</li>
                <li>خدمات النقل بين المدن</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">حقوق والتزامات العميل</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>تقديم معلومات صحيحة ودقيقة</li>
                <li>الالتزام بمواعيد النقل المتفق عليها</li>
                <li>دفع الرسوم المتفق عليها في الوقت المحدد</li>
                <li>إخطارنا بأي متطلبات خاصة قبل موعد النقل</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">التزاماتنا</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>تقديم الخدمة بجودة عالية</li>
                <li>الالتزام بالمواعيد المتفق عليها</li>
                <li>المحافظة على سلامة المنقولات</li>
                <li>توفير عمالة مدربة ومحترفة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">الرسوم والمدفوعات</h2>
              <p className="text-gray-600 leading-relaxed">
                يتم تحديد الرسوم بناءً على:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>حجم ونوع العفش المراد نقله</li>
                <li>المسافة بين موقع النقل والوجهة</li>
                <li>الخدمات الإضافية المطلوبة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">الضمانات</h2>
              <p className="text-gray-600 leading-relaxed">
                نقدم ضمان على سلامة المنقولات خلال عملية النقل وفقاً للشروط التالية:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>تغطية الأضرار الناتجة عن سوء التعامل</li>
                <li>تعويض العميل عن أي خسائر مباشرة</li>
                <li>توفير تأمين على المنقولات القيّمة</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <HomeFooter />
    </>
  )
} 