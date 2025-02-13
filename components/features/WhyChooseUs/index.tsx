import { 
  ClockIcon, 
  CurrencyDollarIcon, 
  ShieldCheckIcon,
  TruckIcon,
  UserGroupIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

interface WhyChooseUsProps {
  city?: string
  service?: string
}

export default function WhyChooseUs({ city, service }: WhyChooseUsProps) {
  const features = [
    {
      title: "خبرة واسعة",
      description: `نمتلك خبرة تزيد عن 15 عاماً في مجال ${service || 'نقل العفش'} ${city ? `في ${city}` : 'في المملكة'} مع فريق متخصص ومدرب`,
      icon: <UserGroupIcon className="h-12 w-12 text-blue-600 mb-4" />
    },
    {
      title: "خدمة سريعة",
      description: "نصل إليك في أسرع وقت ممكن مع ضمان الجودة",
      icon: <ClockIcon className="h-12 w-12 text-blue-600 mb-4" />
    },
    {
      title: "أسعار تنافسية",
      description: "نقدم أفضل الأسعار في السوق مع ضمان جودة الخدمة",
      icon: <CurrencyDollarIcon className="h-12 w-12 text-blue-600 mb-4" />
    },
    {
      title: "معدات حديثة",
      description: "نستخدم أحدث المعدات والتقنيات لضمان سلامة منقولاتك",
      icon: <TruckIcon className="h-12 w-12 text-blue-600 mb-4" />
    },
    {
      title: "ضمان شامل",
      description: "نقدم ضمان شامل على جميع خدماتنا",
      icon: <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
    },
    {
      title: "دعم متواصل",
      description: "فريق خدمة العملاء متاح 24/7 للرد على استفساراتك",
      icon: <PhoneIcon className="h-12 w-12 text-blue-600 mb-4" />
    }
  ]

  return (
    <section className="py-16 bg-gray-50" id="why-choose-us">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          لماذا تختار خدمات نقل العفش لدينا؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 