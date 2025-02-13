'use client'

import { motion } from 'framer-motion'
import { 
  TrophyIcon, 
  ChartBarIcon, 
  StarIcon, 
  ArrowTrendingUpIcon,
  ClockIcon, 
  ClipboardDocumentIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/solid'
import { arabicToSlug, getArabicText } from '@/lib/utils/text'
import Link from 'next/link'

interface TopTenHeaderProps {
  city: string
  service: string
}

export default function TopTenHeader({ city, service }: TopTenHeaderProps) {
  const currentYear = new Date().getFullYear()
  const cityInArabic = getArabicText(arabicToSlug(city))
  const serviceInArabic = getArabicText(arabicToSlug(service))

  const generateTitles = (cityName: string, serviceName: string) => [
    {
      main: `أفضل 10 شركات ${serviceName} في ${cityName}`,
      sub: `قائمة محدثة لعام ${currentYear}`
    },
    {
      main: `دليل شركات ${serviceName} في ${cityName}`,
      sub: `قائمة موثوقة ومحدثة`
    }
  ]

  const titles = generateTitles(cityInArabic, serviceInArabic)
  const randomTitle = titles[Math.floor(Math.random() * titles.length)]

  const features = [
    {
      icon: <TrophyIcon className="w-6 h-6" />,
      title: 'الأعلى تقييماً',
      description: 'شركات مختارة بدقة بناءً على التقييمات وعدد المراجعات وجودة الخدمة لضمان رضا العملاء.'
    },
    {
      icon: <ChartBarIcon className="w-6 h-6" />,
      title: 'مراجعات حقيقية',
      description: 'نعتمد على آراء العملاء الفعلية لتقديم رؤية واضحة حول مدى احترافية وتجربة كل شركة.'
    },
    {
      icon: <StarIcon className="w-6 h-6" />,
      title: 'خدمة متميزة',
      description: 'تتمتع الشركات بخبرة طويلة وأسعار تنافسية مع ضمان الحفاظ على سلامة الممتلكات.'
    },
    {
      icon: <ArrowTrendingUpIcon className="w-6 h-6" />,
      title: 'تحديث مستمر',
      description: 'نقوم بتحديث القائمة بشكل دوري لإضافة خدمات جديدة وإزالة الشركات ضعيفة الأداء.'
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: 'توفير الوقت والجهد',
      description: 'نوفر عليك عناء البحث والمقارنة من خلال عرض أفضل الخيارات الملائمة لاحتياجاتك.'
    },
    {
      icon: <ClipboardDocumentIcon className="w-6 h-6" />,
      title: 'خطط وأسعار متنوعة',
      description: 'اختر من بين عدة باقات وخدمات مخصصة، مما يتيح لك حرية اختيار الأنسب لميزانيتك.'
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: 'ضمان شامل',
      description: 'جميع الشركات توفر ضمانات شاملة على الخدمات المقدمة لحماية ممتلكاتك.'
    },
    {
      icon: <TruckIcon className="w-6 h-6" />,
      title: 'خدمة سريعة',
      description: 'تنفيذ الخدمات في الوقت المحدد مع الحفاظ على أعلى معايير الجودة.'
    },
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      title: 'فريق محترف',
      description: 'فرق عمل مدربة ومؤهلة لتنفيذ المهام بكفاءة واحترافية عالية.'
    },
    {
      icon: <CurrencyDollarIcon className="w-6 h-6" />,
      title: 'أسعار تنافسية وشفافة',
      description: 'نقدم أفضل الأسعار في السوق مع ضمان جودة الخدمة. تُحسب الأسعار بناءً على تحليل دقيق للسوق وتُحدّث بانتظام لضمان حصولك على قيمة ممتازة مقابل الأموال المدفوعة. لا توجد رسوم خفية، مما يتيح لك الاستفادة من عروض أسعار متميزة وخيارات دفع مرنة تتناسب مع ميزانيتك.'
    }
  ]

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            {randomTitle.sub}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            {randomTitle.main}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم لكم قائمة شاملة ومحدثة لأفضل شركات {serviceInArabic} في {cityInArabic} مع التقييمات والمراجعات،
            لضمان تجربة مميزة وموثوقة في نقل عفشكم أو خدماتكم الأخرى.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            تقييمات جوجل
          </div>
          <div className="flex items-center gap-2">
            <TrophyIcon className="w-5 h-5 text-primary" />
            أفضل 10 شركات
          </div>
          <div className="flex items-center gap-2">
            <ChartBarIcon className="w-5 h-5 text-green-500" />
            مراجعات موثقة
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href={`/${arabicToSlug(city)}/${arabicToSlug(service)}`}
            className="text-primary hover:text-primary-dark transition-colors"
          >
            {serviceInArabic} في {cityInArabic}
          </Link>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">أفضل الخدمات المتاحة</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/riyadh/moving-furniture">نقل عفش الرياض</Link>
            <Link href="/jeddah/moving-furniture">نقل عفش جدة</Link>
            <Link href="/dammam/moving-furniture">نقل عفش الدمام</Link>
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
  )
} 