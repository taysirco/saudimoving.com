'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SearchResults from '@/components/features/SearchResults'
import FAQ from '@/components/features/FAQ'
import RequestQuote from '@/components/features/RequestQuote'
import WhyChooseUs from '@/components/features/WhyChooseUs'
import EnhancedReviews from '@/components/features/EnhancedReviews'
import ServiceContent from '@/components/features/ServiceContent'
import ServiceFeatures from '@/components/features/ServiceFeatures'
import RelatedServices from '@/components/features/RelatedServices'
import ReviewsSection from '@/components/features/ReviewsSection'
import { getArabicText } from '@/lib/utils/text'

interface CityServiceClientProps {
<<<<<<< HEAD
  city: string;
  service: string;
  serviceData?: {
    title: string;
    titleWithCity: string;
    slug: string;
    arabicSlug: string;
    description: string;
    features: { title: string; description: string; }[];
    faqs: any[];
    relatedServices: any[];
    callToAction: any;
  };
}

export default function CityServiceClient({ city, service, serviceData }: CityServiceClientProps) {
=======
  city: string
  service: string
}

export default function CityServiceClient({ city, service }: CityServiceClientProps) {
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
  const cityName = getArabicText(city)
  const serviceName = getArabicText(service)

  // تحسين العناوين حسب نوع الخدمة
  const getTitleContent = () => {
    switch (service) {
      case 'moving-companies':
        return {
          title: `أفضل شركات نقل العفش في ${cityName} - مع الضمان وأرخص الأسعار 2025`,
          subtitle: `قارن بين أكثر من 10 شركات نقل عفش مرخصة في ${cityName} واحصل على أفضل الأسعار`
        }

      case 'best-moving-company':
        return {
          title: `افضل شركة نقل عفش في ${cityName} 2025 - تقييم ⭐️⭐️⭐️⭐️⭐️`,
          subtitle: `تعرف على أعلى شركات نقل العفش تقييماً في ${cityName} مع ضمان سلامة الأثاث وأفضل الأسعار`
        }

      case 'moving-prices':
        return {
          title: `اسعار نقل العفش في ${cityName} 2025 - مقارنة شاملة`,
          subtitle: `قائمة محدثة لأسعار شركات نقل العفش في ${cityName} مع عروض وخصومات حصرية`
        }

      case 'moving-with-installation':
        return {
          title: `نقل عفش مع الفك والتركيب في ${cityName} 2025 - خصم %20`,
          subtitle: `خدمة متكاملة للفك والتركيب والنقل مع ضمان الجودة وفنيين محترفين`
        }

      case 'moving-trucks':
        return {
          title: `سيارات نقل عفش في ${cityName} 2025 - خدمة 24 ساعة ✓`,
          subtitle: `سيارات مجهزة خصيصاً لنقل العفش مع سائقين محترفين وتغطية تأمينية شاملة`
        }

      case 'moving-with-packaging':
        return {
          title: `نقل عفش مع التغليف في ${cityName} 2025 - ضمان سلامة المنقولات`,
          subtitle: `خدمة احترافية في تغليف ونقل الأثاث مع مواد تغليف عالية الجودة وفريق متخصص`
        }

      default:
        return {
          title: `شركات نقل العفش في ${cityName} 2025 - أسعار وتقييمات حقيقية`,
          subtitle: `مقارنة شاملة لأفضل شركات نقل العفش في ${cityName} مع ضمان أفضل الأسعار`
        }
    }
  }

  const titleContent = getTitleContent()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-6">
              {titleContent.title}
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              {titleContent.subtitle}
            </p>
          </div>
        </div>

        {/* Search Results & Quote Form */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SearchResults city={city} service={service} />
            </div>
            <div className="lg:sticky lg:top-4">
              <RequestQuote city={city} service={service} />
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">مميزات خدمة {serviceName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM13 16h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">أسعار تنافسية</h3>
                <p className="text-gray-600">مقارنة شاملة لأسعار الشركات المعتمدة في {cityName}</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM13 16h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">تقييمات موثوقة</h3>
                <p className="text-gray-600">تقييمات حقيقية من عملاء سابقين للشركات</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM13 16h-2v2h2v-2zm0-6h-2v4h2v-4z"/>
                  </svg>
                </div>
                <h3 className="font-bold mb-2">شركات مرخصة</h3>
                <p className="text-gray-600">جميع الشركات مرخصة ومعتمدة رسمياً</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
<<<<<<< HEAD
            <ReviewsSection 
              city={city} 
              serviceType={service} 
            />
=======
            <ReviewsSection />
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ city={city} service={service} />

        {/* Related Services */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <RelatedServices city={city} currentService={service} />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">احصل على عروض أسعار مجانية</h2>
            <p className="text-xl mb-8">قارن بين أفضل شركات {serviceName} في {cityName}</p>
            <a
              href="#quote"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              اطلب عروض الأسعار
            </a>
          </div>
        </div>
      </main>
      <Footer currentCity={city} currentService={service} />
    </>
  )
} 