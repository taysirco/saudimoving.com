import { 
  WrenchScrewdriverIcon,
  Square3Stack3DIcon,
  TruckIcon,
  ArchiveBoxIcon
} from '@heroicons/react/24/outline'

interface ServicesProps {
  city?: string
  service?: string
}

export default function Services({ city, service }: ServicesProps) {
  const services = [
    {
      title: "فك وتركيب الأثاث",
      description: "فك وتركيب جميع أنواع الأثاث المنزلي والمكتبي بأيدي متخصصين",
      icon: <WrenchScrewdriverIcon className="h-16 w-16 text-blue-600 mb-4 mx-auto" />
    },
    {
      title: "التغليف الاحترافي",
      description: "تغليف محكم لجميع القطع باستخدام أفضل مواد التغليف",
      icon: <Square3Stack3DIcon className="h-16 w-16 text-blue-600 mb-4 mx-auto" />
    },
    {
      title: "نقل آمن",
      description: "نقل بسيارات مجهزة وسائقين محترفين",
      icon: <TruckIcon className="h-16 w-16 text-blue-600 mb-4 mx-auto" />
    },
    {
      title: "تخزين الأثاث",
      description: "مستودعات آمنة ومؤمنة لتخزين الأثاث",
      icon: <ArchiveBoxIcon className="h-16 w-16 text-blue-600 mb-4 mx-auto" />
    }
  ]

  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {city ? `خدمات ${service || 'نقل العفش'} في ${city}` : 'خدماتنا'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 rounded-lg">
              {service.icon}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 