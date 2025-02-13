'use client'

import { motion } from 'framer-motion'
import { ShieldCheckIcon, TruckIcon, StarIcon, CurrencyDollarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline'

interface ReviewsIntroProps {
  city?: string
  serviceType?: string
}

export default function ReviewsIntro({ city, serviceType }: ReviewsIntroProps) {
  // توليد عنوان ديناميكي
  const getTitle = () => {
    if (city && serviceType) {
      return `دليلك الشامل لخدمات ${serviceType} في ${city}`
    } else if (city) {
      return `دليلك لأفضل شركات نقل العفش في ${city}`
    } else if (serviceType) {
      return `كل ما تحتاج معرفته عن خدمات ${serviceType}`
    }
    return 'دليلك الشامل لاختيار أفضل شركات نقل العفش'
  }

  // توليد محتوى ديناميكي حسب نوع الخدمة
  const getServiceContent = () => {
    switch (serviceType) {
      case 'نقل عفش مع التركيب':
        return {
          description: `نقدم لكم دليلاً شاملاً عن خدمات نقل وتركيب الأثاث في ${city || 'المملكة'}. نساعدكم في العثور على أفضل شركات نقل العفش المتخصصة في خدمات الفك والتركيب، مع ضمان احترافية العمل وسلامة الأثاث. جميع الشركات المدرجة لدينا مرخصة ومعتمدة، مع فرق عمل متخصصة في التعامل مع جميع أنواع الأثاث.`,
          features: [
            {
              title: 'فريق نجارين محترف',
              description: 'نجارين ذوي خبرة في فك وتركيب جميع أنواع غرف النوم والمطابخ والأثاث المنزلي'
            },
            {
              title: 'معدات متخصصة',
              description: 'أحدث المعدات والأدوات المخصصة لفك وتركيب الأثاث بشكل آمن واحترافي'
            },
            {
              title: 'ضمان الخدمة',
              description: 'ضمان شامل على خدمات الفك والتركيب مع تعويض عن أي أضرار محتملة'
            }
          ]
        }
      case 'نقل مع تغليف':
        return {
          description: `خدمة متكاملة لنقل وتغليف الأثاث في ${city || 'المملكة'} بأعلى معايير الجودة والأمان. نوفر لكم أفضل مواد التغليف وفريق متخصص في تغليف وحماية جميع أنواع الأثاث والمقتنيات الثمينة أثناء النقل.`,
          features: [
            {
              title: 'مواد تغليف عالية الجودة',
              description: 'استخدام أفضل مواد التغليف المناسبة لكل نوع من الأثاث والمقتنيات'
            },
            {
              title: 'تغليف احترافي',
              description: 'فريق متخصص في تغليف الأثاث والتحف والمقتنيات الثمينة بعناية فائقة'
            },
            {
              title: 'حماية شاملة',
              description: 'تأمين كامل على الممتلكات مع ضمان سلامة المنقولات'
            }
          ]
        }
      case 'نقل دولي':
        return {
          description: `خدمات النقل الدولي من ${city || 'المملكة'} إلى جميع دول العالم. نقدم حلولاً متكاملة للشحن البري والبحري والجوي، مع ضمان سلامة الأثاث وسرعة التوصيل.`,
          features: [
            {
              title: 'شحن عالمي',
              description: 'خدمات شحن متكاملة تشمل النقل البري والبحري والجوي'
            },
            {
              title: 'تخليص جمركي',
              description: 'مساعدة في إجراءات التخليص الجمركي وإصدار المستندات اللازمة'
            },
            {
              title: 'تتبع الشحنات',
              description: 'نظام متطور لتتبع الشحنات ومعرفة موقعها لحظة بلحظة'
            }
          ]
        }
      case 'نقل وتركيب مكيفات':
        return {
          description: `خدمة متخصصة في نقل وتركيب وصيانة المكيفات في ${city || 'المملكة'}. فريق فني معتمد مع خبرة في التعامل مع جميع أنواع المكيفات السبليت والشباك والمركزية.`,
          features: [
            {
              title: 'فنيين معتمدين',
              description: 'فريق فني متخصص ومعتمد في صيانة وتركيب جميع أنواع المكيفات'
            },
            {
              title: 'خدمة شاملة',
              description: 'فك وتركيب وصيانة وتنظيف وشحن غاز المكيفات'
            },
            {
              title: 'قطع غيار أصلية',
              description: 'استخدام قطع غيار أصلية مع ضمان على التركيب والصيانة'
            }
          ]
        }
      case 'تخزين أثاث':
        return {
          description: `خدمة تخزين آمنة للأثاث في ${city || 'المملكة'} بأحدث المستودعات المجهزة. نوفر حلول تخزين مرنة مع أنظمة حماية ومراقبة على مدار الساعة لضمان سلامة ممتلكاتكم.`,
          features: [
            {
              title: 'مستودعات حديثة',
              description: 'مستودعات مكيفة ومؤمنة بأحدث أنظمة الحماية والمراقبة'
            },
            {
              title: 'تغليف وحماية',
              description: 'تغليف احترافي للأثاث قبل التخزين لحمايته من الغبار والرطوبة'
            },
            {
              title: 'خطط مرنة',
              description: 'خيارات تخزين متنوعة تناسب احتياجاتكم ومدة التخزين المطلوبة'
            }
          ]
        }
      default:
        return {
          description: `نقدم لكم دليلاً شاملاً لأفضل شركات نقل العفش ${city ? `في ${city}` : 'في المملكة'}. جميع الشركات مرخصة ومعتمدة رسمياً، مع خبرة طويلة في مجال نقل الأثاث والمقتنيات الثمينة. نساعدكم في اختيار الشركة المناسبة لاحتياجاتكم مع ضمان جودة الخدمة وسلامة منقولاتكم.`,
          features: [
            {
              title: 'خدمة متكاملة',
              description: 'خدمات شاملة تغطي الفك والتركيب والتغليف والنقل'
            },
            {
              title: 'شركات موثوقة',
              description: 'شركات مرخصة ومعتمدة مع تقييمات حقيقية من العملاء'
            },
            {
              title: 'أسعار شفافة',
              description: 'عروض أسعار واضحة وتنافسية مع ضمان جودة الخدمة'
            }
          ]
        }
    }
  }

  const content = getServiceContent()

  return (
    <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">{getTitle()}</h2>
      
      <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
        <p>{content.description}</p>

        <div className="grid md:grid-cols-3 gap-8 my-8">
          {content.features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <ShieldCheckIcon className="w-6 h-6 text-primary" />
                {feature.title}
              </h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 