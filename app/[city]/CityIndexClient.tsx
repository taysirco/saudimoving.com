'use client'

import { useState } from 'react'
import Link from 'next/link'
import { keywords } from '@/lib/utils/data'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServiceCard from '@/components/common/ServiceCard'
import TopTenSection from '@/components/features/TopTenSection'
import ServiceFeatures from '@/components/features/ServiceFeatures'
import CustomerReviews from '@/components/features/CustomerReviews'
import { MapPinIcon, TruckIcon, StarIcon, PhoneIcon, CheckIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import QuoteForm from '@/components/features/QuoteForm'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'

interface CityIndexClientProps {
  city: string
}

export default function CityIndexClient({ city }: CityIndexClientProps) {
  const [selectedService, setSelectedService] = useState(keywords[0])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const cityInArabic = getArabicText(arabicToSlug(city))

  const categories = [
    { id: 'all', name: 'جميع الخدمات' },
    { id: 'moving', name: 'نقل العفش' },
    { id: 'packaging', name: 'تغليف الأثاث' },
    { id: 'storage', name: 'تخزين العفش' }
  ]

  const features = [
    {
      icon: <TruckIcon className="w-12 h-12 text-primary" />,
      title: 'خدمة سريعة',
      description: 'نقل عفش آمن وسريع في جميع أنحاء المدينة'
    },
    {
      icon: <StarIcon className="w-12 h-12 text-primary" />,
      title: 'شركات موثوقة',
      description: 'جميع الشركات مرخصة ومقيمة من العملاء'
    },
    {
      icon: <PhoneIcon className="w-12 h-12 text-primary" />,
      title: 'تواصل مباشر',
      description: 'اتصل مباشرة بالشركات أو اطلب عرض سعر'
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <MapPinIcon className="w-8 h-8 text-primary ml-2" />
              <h1 className="text-4xl font-bold text-center">
                أفضل شركات نقل العفش في {cityInArabic}
              </h1>
            </div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              قائمة محدثة لأفضل 10 شركات نقل عفش في {cityInArabic} مع التقييمات والأسعار وأرقام التواصل
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {features.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">
            خدمات نقل العفش المتوفرة في {cityInArabic}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keywords
              .filter(service => 
                selectedCategory === 'all' || 
                service.includes(categories.find(c => c.id === selectedCategory)?.name || '')
              )
              .slice(0, 6)
              .map((service) => (
                <ServiceCard
                  key={service}
                  service={service}
                  city={cityInArabic}
                  onClick={() => setSelectedService(service)}
                  isSelected={service === selectedService}
                />
              ))}
          </div>
        </div>

        {/* Top 10 Section */}
        <TopTenSection city={cityInArabic} service={selectedService} />

        {/* Service Features Section */}
        <ServiceFeatures city={cityInArabic} service={selectedService} />

        {/* Customer Reviews Section */}
        <CustomerReviews city={cityInArabic} service={selectedService} />

        {/* FAQ Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">الأسئلة الشائعة</h2>
            <p className="text-gray-600">إجابات على أهم الأسئلة المتعلقة بخدمات نقل العفش في {cityInArabic}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">1</span>
                كيف أختار شركة نقل عفش موثوقة في {cityInArabic}؟
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ابحث عن الشركات المرخصة التي تتميز بتقييمات عالية (4 نجوم وأكثر)، وتأكد من توفر شهادات الجودة والضمانات. 
                راجع تجارب العملاء السابقين واطلب معاينة مجانية قبل التعاقد.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">2</span>
                ما هي العوامل التي تحدد تكلفة نقل العفش في {cityInArabic}؟
              </h3>
              <p className="text-gray-600 leading-relaxed">
                تعتمد التكلفة على عدة عوامل: حجم العفش وكميته، المسافة بين الموقعين، الطابق والحاجة للرافعة،
                خدمات إضافية مثل الفك والتركيب والتغليف. نوفر تسعيرة شفافة وعروض تنافسية تناسب جميع الميزانيات.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">3</span>
                ما هي خدمات التغليف المتوفرة وأهميتها؟
              </h3>
              <p className="text-gray-600 leading-relaxed">
                نوفر خدمات تغليف احترافية تشمل: كراتين مقواة، فقاعات هوائية، أكياس محكمة، وأدوات تغليف متخصصة للأثاث الثمين.
                التغليف الاحترافي يضمن حماية قطع الأثاث من الخدوش والكسر أثناء النقل.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">4</span>
                هل تقدم الشركات خدمة النقل السريع في نفس اليوم؟
              </h3>
              <p className="text-gray-600 leading-relaxed">
                نعم، العديد من شركاتنا توفر خدمة النقل السريع في نفس اليوم مع فريق عمل جاهز على مدار الساعة.
                يمكن تنفيذ الطلبات العاجلة مع الحفاظ على نفس مستوى الجودة والاحترافية.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">5</span>
                ما هي إجراءات السلامة المتبعة أثناء نقل العفش؟
              </h3>
              <p className="text-gray-600 leading-relaxed">
                نتبع بروتوكولات سلامة صارمة تشمل: معدات رفع وتحميل آمنة، سيارات مجهزة، فريق مدرب على التعامل مع جميع أنواع الأثاث،
                وتأمين شامل ضد الأضرار. نضمن وصول عفشك بحالة ممتازة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">6</span>
                كيف يتم تنظيم وترتيب العفش في المنزل الجديد؟
              </h3>
              <p className="text-gray-600 leading-relaxed">
                يقوم فريق العمل بترتيب الأثاث حسب رغبتك في المنزل الجديد، مع إعادة تركيب جميع القطع باحترافية.
                نقدم نصائح لأفضل توزيع للأثاث وضمان سهولة الحركة في المساحات المتوفرة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">7</span>
                ما هي خيارات الدفع المتاحة وهل هناك عروض خاصة؟
              </h3>
              <p className="text-gray-600 leading-relaxed">
                نوفر خيارات دفع متعددة: نقدي، بطاقات ائتمان، تحويل بنكي. نقدم عروضاً موسمية وخصومات للطلبات المسبقة
                والمناطق المتقاربة. اسأل عن عروضنا الحالية للحصول على أفضل سعر.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">8</span>
                كيف يتم التعامل مع القطع الثمينة والحساسة؟
              </h3>
              <p className="text-gray-600 leading-relaxed">
                نستخدم تقنيات تغليف متخصصة للقطع الثمينة والإلكترونيات والتحف. يتم تخصيص صناديق وعبوات خاصة
                مع وضع علامات واضحة للتعامل بحذر. نوفر تأميناً إضافياً للقطع عالية القيمة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">9</span>
                هل تتوفر خدمة تخزين العفش المؤقت؟
              </h3>
              <p className="text-gray-600 leading-relaxed">
                نعم، نوفر مستودعات آمنة ومكيفة لتخزين العفش لفترات متفاوتة. المستودعات مؤمنة ضد الحرائق والسرقات،
                مع إمكانية زيارة وتفقد العفش في أي وقت.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">10</span>
                ما هي مدة صلاحية عرض السعر المقدم؟
              </h3>
              <p className="text-gray-600 leading-relaxed">
                عروض الأسعار صالحة عادةً لمدة أسبوع من تاريخ تقديمها. يمكن تثبيت السعر بدفع عربون بسيط،
                مع ضمان عدم وجود أي رسوم إضافية مفاجئة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">11</span>
                هل يمكن طلب معاينة قبل النقل؟
              </h3>
              <p className="text-gray-600 leading-relaxed">
                نعم، نوفر خدمة معاينة مجانية لتقييم حجم العفش وتحديد المتطلبات الخاصة والتكلفة بدقة.
                المعاينة تساعد في تخطيط عملية النقل بشكل أفضل وتجنب أي مفاجآت.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">12</span>
                ما هي الضمانات المقدمة بعد نقل العفش؟
              </h3>
              <p className="text-gray-600 leading-relaxed">
                نقدم ضماناً شاملاً على سلامة المنقولات وجودة التركيب. في حالة حدوث أي ضرر، نتحمل مسؤولية
                الإصلاح أو التعويض الفوري. خدمة ما بعد النقل متوفرة للتأكد من رضاك التام.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-primary">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm">13</span>
                كيف يمكنني تتبع حالة نقل العفش؟
              </h3>
              <p className="text-gray-600 leading-relaxed">
                نوفر خدمة تتبع مباشرة لشحنتك مع تحديثات منتظمة عبر الهاتف. يمكنك التواصل مع مشرف العملية
                في أي وقت للاطمئنان على سير عملية النقل.
              </p>
            </div>
          </div>
        </div>

        {/* Price Quote Section */}
        <div className="relative bg-gradient-to-r from-primary to-primary-dark py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-blob"></div>
            <div className="absolute right-20 top-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
            <div className="absolute left-1/2 bottom-10 w-36 h-36 bg-white/10 rounded-full blur-2xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                احصل على عرض سعر مجاني
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-10">
                تواصل معنا الآن للحصول على خدمة احترافية وأسعار تنافسية
              </p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.a
                  href="#quote-form"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group"
                >
                  <span>اطلب عرض سعر</span>
                  <svg 
                    className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>

                <motion.a
                  href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center gap-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>اتصل بنا مباشرة</span>
                </motion.a>
              </motion.div>

              {/* Features List */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-gray-800 font-medium">أسعار تنافسية</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <ClockIcon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-gray-800 font-medium">رد سريع خلال 24 ساعة</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShieldCheckIcon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-gray-800 font-medium">ضمان الخدمة</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Quote Form Section */}
        <QuoteForm city={cityInArabic} service={selectedService} />

        {/* Related Services */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">خدمات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {keywords.slice(6, 15).map((service) => (
                <Link
                  key={service}
                  href={`/${arabicToSlug(city)}/${arabicToSlug(service)}`}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group"
                >
                  <h3 className="font-medium group-hover:text-primary transition">
                    {service} في {cityInArabic}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
<<<<<<< HEAD
      <Footer 
        currentCity={cityInArabic} 
        currentService=""
      />
=======
      <Footer currentCity={cityInArabic} />
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

      {/* Add these styles to your global CSS */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  )
} 