<<<<<<< HEAD
import ReviewsSection from './ReviewsSection'
=======
'use client'

import ReviewsSection from '@/components/features/ReviewsSection'
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)

interface ServiceContentProps {
  city: string
  service: string
}

export default function ServiceContent({ city, service }: ServiceContentProps) {
  // تحديد نوع المحتوى حسب الخدمة
  const getServiceSpecificContent = () => {
    switch (service) {
      case 'moving-with-installation':
        return {
          title: `خدمات نقل العفش مع الفك والتركيب في ${city}`,
          description: `دليل شامل لأفضل شركات نقل العفش مع خدمات الفك والتركيب في ${city}. نقدم لك مقارنة دقيقة بين الشركات المتخصصة في فك وتركيب الأثاث.`,
          features: [
            'فنيين متخصصين في فك وتركيب جميع أنواع الأثاث',
            'أدوات ومعدات حديثة للفك والتركيب',
            'ضمان سلامة القطع أثناء الفك والتركيب'
          ]
        }

      case 'moving-companies':
        return {
          title: `شركات نقل العفش في ${city}`,
          description: `دليل شامل لأفضل شركات نقل العفش في ${city}. نساعدك في اختيار الشركة المناسبة من خلال تقييمات حقيقية ومقارنة شاملة للخدمات والأسعار.`,
          features: [
            'مقارنة شاملة بين الشركات المعتمدة',
            'تقييمات موثقة من عملاء سابقين',
            'معلومات محدثة عن الأسعار والخدمات'
          ]
        }

      case 'moving-prices':
        return {
          title: `أسعار نقل العفش في ${city}`,
          description: `دليل تفصيلي لأسعار نقل العفش في ${city}. نقدم لك مقارنة شفافة للأسعار بين مختلف الشركات مع تفاصيل التكاليف.`,
          features: [
            'مقارنة أسعار شاملة بين الشركات',
            'تفاصيل تكاليف الخدمات الإضافية',
            'نصائح لتوفير تكاليف النقل'
          ]
        }

      case 'moving-trucks':
        return {
          title: `سيارات نقل العفش في ${city}`,
          description: `دليل شامل لشركات وسيارات نقل العفش في ${city}. نساعدك في العثور على أفضل سيارات النقل المجهزة والمؤمنة.`,
          features: [
            'سيارات حديثة ومجهزة خصيصاً لنقل العفش',
            'سائقين محترفين ومرخصين',
            'تغطية تأمينية شاملة'
          ]
        }

      case 'best-moving-company':
        return {
          title: `أفضل شركات نقل العفش في ${city}`,
          description: `دليل اختيار أفضل شركة نقل عفش في ${city}. نقدم تقييماً شاملاً لأعلى الشركات تقييماً مع مقارنة تفصيلية للخدمات.`,
          features: [
            'تصنيف الشركات حسب تقييمات العملاء',
            'مقارنة تفصيلية للخدمات والمميزات',
            'معايير اختيار أفضل شركة'
          ]
        }

      case 'moving-with-packaging':
        return {
          title: `خدمات نقل وتغليف العفش في ${city}`,
          description: `دليل شامل لشركات نقل العفش مع خدمات التغليف في ${city}. نقدم مقارنة لأفضل شركات التغليف المتخصصة مع ضمان سلامة المنقولات.`,
          features: [
            'مواد تغليف عالية الجودة',
            'فريق متخصص في تغليف الأثاث الحساس',
            'ضمان حماية كاملة للمقتنيات'
          ]
        }

      case 'furniture-storage':
        return {
          title: `تخزين الأثاث في ${city}`,
          description: `دليل مستودعات وشركات تخزين الأثاث في ${city}. نساعدك في اختيار أفضل مستودعات التخزين الآمنة والمؤمنة.`,
          features: [
            'مستودعات مؤمنة ومكيفة',
            'أنظمة حماية ومراقبة 24/7',
            'خدمات تغليف وحفظ طويل المدى'
          ]
        }

      case 'international-moving':
        return {
          title: `شركات النقل الدولي في ${city}`,
          description: `دليل شركات نقل الأثاث الدولي من ${city}. نقدم مقارنة شاملة لأفضل شركات الشحن الدولي مع ضمان سلامة الشحنات.`,
          features: [
            'خدمات شحن بحري وجوي',
            'تخليص جمركي متكامل',
            'تتبع الشحنات مباشرة'
          ]
        }

      case 'villa-moving':
        return {
          title: `نقل أثاث الفلل في ${city}`,
          description: `دليل متخصص لشركات نقل أثاث الفلل في ${city}. نقدم مقارنة للشركات المتخصصة في نقل الأثاث الفاخر والتحف.`,
          features: [
            'خبرة في نقل الأثاث الفاخر',
            'معدات خاصة للقطع الثمينة',
            'تأمين شامل على المنقولات'
          ]
        }

      case 'office-moving':
        return {
          title: `نقل المكاتب والشركات في ${city}`,
          description: `دليل شركات نقل المكاتب والأثاث المكتبي في ${city}. نساعدك في اختيار أفضل الشركات المتخصصة في نقل المكاتب.`,
          features: [
            'خطة نقل تضمن استمرارية العمل',
            'فريق متخصص في فك وتركيب الأثاث المكتبي',
            'نقل الأجهزة والمعدات المكتبية باحترافية'
          ]
        }

      case 'student-moving':
        return {
          title: `نقل أثاث الطلاب في ${city}`,
          description: `دليل خدمات نقل أثاث الطلاب في ${city}. نقدم حلول نقل اقتصادية ومناسبة للطلاب مع ضمان الجودة.`,
          features: [
            'أسعار خاصة للطلاب',
            'خدمات نقل سريعة وآمنة',
            'تغطية جميع المناطق الجامعية'
          ]
        }

      default:
        return {
          title: `دليل شركات نقل العفش في ${city}`,
          description: `دليل شامل لخدمات نقل العفش في ${city}. نساعدك في اختيار أفضل الشركات المرخصة والموثوقة.`,
          features: [
            'مقارنة شاملة للخدمات والأسعار',
            'تقييمات حقيقية من العملاء',
            'معلومات موثقة عن الشركات'
          ]
        }
    }
  }

  const content = getServiceSpecificContent()

  return (
    <article className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold mb-8">{content.title}</h2>
      
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">كيف يساعدك دليلنا؟</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          {content.description}
        </p>
        <ul className="space-y-3">
          {content.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-primary">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">ما يميز دليلنا</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold mb-2">حيادية تامة</h4>
            <p className="text-gray-600">نقدم تقييمات محايدة وشفافة لجميع الشركات دون تحيز</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold mb-2">تحديث مستمر</h4>
            <p className="text-gray-600">نحدث معلومات الشركات والأسعار بشكل دوري</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-bold mb-2">تقييمات موثقة</h4>
            <p className="text-gray-600">نتحقق من جميع التقييمات للتأكد من مصداقيتها</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">كيف نختار الشركات؟</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">1</div>
            <div>
              <h4 className="font-bold mb-1">التحقق من التراخيص</h4>
              <p className="text-gray-600">نتأكد من امتلاك الشركة لجميع التراخيص الرسمية اللازمة</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">2</div>
            <div>
              <h4 className="font-bold mb-1">تقييم الخدمات</h4>
              <p className="text-gray-600">نقيم جودة الخدمات وتنوعها ومدى تلبيتها لاحتياجات العملاء</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">3</div>
            <div>
              <h4 className="font-bold mb-1">مراجعة تقييمات العملاء</h4>
              <p className="text-gray-600">نجمع ونتحقق من تقييمات العملاء السابقين</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-12">
        <h3 className="text-2xl font-semibold mb-4">نصائح اختيار شركة نقل عفش</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-primary">•</span>
            <span>تأكد من وجود ترخيص رسمي للشركة</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary">•</span>
            <span>اطلب عرض سعر تفصيلي وواضح</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary">•</span>
            <span>اسأل عن تفاصيل الضمان المقدم</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary">•</span>
            <span>راجع تقييمات العملاء السابقين</span>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        {console.log('Service:', service)}
        {console.log('City:', city)}
<<<<<<< HEAD
        <ReviewsSection 
          city={city} 
          serviceType={service} 
        />
=======
        <ReviewsSection city={city} serviceType={service} />
>>>>>>> 837b09b (Initial commit: Project setup with Next.js and MongoDB)
      </div>
    </article>
  )
} 