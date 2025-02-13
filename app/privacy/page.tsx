import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HomeFooter from '@/components/layout/HomeFooter'

export default function PrivacyPage(): React.ReactElement {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">سياسة الخصوصية</h1>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">مقدمة</h2>
              <p className="text-gray-600 leading-relaxed">
                نحن نقدر خصوصية زوار موقعنا ونلتزم بحماية معلوماتهم الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات الشخصية التي يتم جمعها من خلال موقعنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">جمع المعلومات</h2>
              <p className="text-gray-600 mb-4">نقوم بجمع المعلومات التالية:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>الاسم الكامل</li>
                <li>رقم الهاتف</li>
                <li>البريد الإلكتروني</li>
                <li>العنوان</li>
                <li>معلومات الموقع</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">استخدام المعلومات</h2>
              <p className="text-gray-600 mb-4">نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>تقديم خدمات نقل العفش والأثاث</li>
                <li>التواصل مع العملاء</li>
                <li>تحسين خدماتنا</li>
                <li>إرسال تحديثات وعروض خاصة (في حال موافقة العميل)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">حماية المعلومات</h2>
              <p className="text-gray-600 leading-relaxed">
                نحن نتخذ جميع الإجراءات الأمنية اللازمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">مشاركة المعلومات</h2>
              <p className="text-gray-600 leading-relaxed">
                لا نقوم ببيع أو تأجير أو مشاركة معلوماتك الشخصية مع أي طرف ثالث، إلا في الحالات التالية:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>بموافقتك الصريحة</li>
                <li>عندما يكون ذلك مطلوباً بموجب القانون</li>
                <li>لحماية حقوقنا القانونية</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
<<<<<<< HEAD
      <Footer currentCity="" currentService="" />
=======
      <Footer />
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
      <HomeFooter />
    </>
  )
} 