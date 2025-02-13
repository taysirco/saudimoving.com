import dynamic from 'next/dynamic'
import HomeFooter from '@/components/layout/HomeFooter'

// استيراد المكونات بشكل ديناميكي
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: true })

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 text-gray-900">عن المنصة</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                أكبر دليل متخصص في تقييم وتصنيف شركات نقل العفش في المملكة العربية السعودية
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          {/* من نحن */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">من نحن</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              نحن منصة متخصصة في تقييم وتصنيف شركات نقل العفش في المملكة العربية السعودية. نقدم دليلاً شاملاً وموثوقاً يساعد العملاء في اختيار أفضل شركات النقل بناءً على تقييمات حقيقية وتجارب واقعية.
            </p>
            <p className="text-gray-600 leading-relaxed">
              على مدار أكثر من 15 عاماً، قمنا بتطوير نظام تقييم دقيق يضمن تقديم معلومات موثوقة وشفافة عن كل شركة نقل عفش في المملكة، مما يساعد العملاء في اتخاذ قرارات مدروسة وآمنة.
            </p>
          </div>

          {/* رؤيتنا ورسالتنا */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون المنصة الأولى والأكثر موثوقية في تقييم وتصنيف خدمات نقل العفش في المملكة، ونساهم في رفع مستوى جودة الخدمات المقدمة في هذا القطاع.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">رسالتنا</h3>
              <p className="text-gray-600 leading-relaxed">
                تقديم تجربة مستخدم آمنة وموثوقة من خلال تقييمات حقيقية وشفافة لشركات نقل العفش، مع ضمان حصول العملاء على أفضل الخدمات بأنسب الأسعار.
              </p>
            </div>
          </div>

          {/* قيمنا */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">قيمنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">المصداقية</h3>
                <p className="text-gray-600">نقدم تقييمات حقيقية وموثوقة بناءً على تجارب واقعية للعملاء</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">الشفافية</h3>
                <p className="text-gray-600">نعرض المعلومات بشكل واضح وشفاف لمساعدة العملاء في اتخاذ القرار المناسب</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">الموثوقية</h3>
                <p className="text-gray-600">نضمن تقديم خدمات موثوقة من شركات معتمدة ومقيمة بشكل دقيق</p>
              </div>
            </div>
          </div>

          {/* إحصائيات */}
          <div className="bg-primary text-white rounded-2xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">+15</div>
                <div className="text-white/80">سنوات خبرة</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">+150K</div>
                <div className="text-white/80">عميل سعيد</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">+1.2K</div>
                <div className="text-white/80">شركة نقل</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">+250K</div>
                <div className="text-white/80">عملية نقل</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <HomeFooter />
    </>
  )
} 