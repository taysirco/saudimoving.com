interface ContentSectionProps {
  city: string
  service: string
  className?: string
}

export default function ContentSection({ city, service, className = '' }: ContentSectionProps) {
  return (
    <section className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
      <h2 className="text-2xl font-bold mb-6">
        {`افضل شركات ${service} في ${city}`}
      </h2>

      {/* المقدمة */}
      <div className="prose prose-lg max-w-none mb-8">
        <p>
          نقدم لك دليلاً شاملاً لأفضل شركات {service} في {city}، حيث نضمن لك خدمة احترافية وأسعار تنافسية. 
          جميع الشركات المدرجة لدينا معتمدة ومرخصة، وتتميز بالخبرة الطويلة في مجال {service}.
        </p>
      </div>

      {/* مميزات الخدمة */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">مميزات خدمات {service}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">أسعار تنافسية</h4>
              <p className="text-gray-600">نضمن لك أفضل الأسعار في السوق</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">خدمة احترافية</h4>
              <p className="text-gray-600">فريق عمل مدرب ومحترف</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">ضمان سلامة المنقولات</h4>
              <p className="text-gray-600">تغليف وتعبئة احترافية</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 space-x-reverse">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">سرعة في التنفيذ</h4>
              <p className="text-gray-600">التزام بالمواعيد المحددة</p>
            </div>
          </div>
        </div>
      </div>

      {/* نصائح مهمة */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">نصائح مهمة قبل اختيار شركة {service}</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>تأكد من أن الشركة مرخصة ومعتمدة</li>
          <li>اطلب عرض سعر مفصل وواضح</li>
          <li>اسأل عن خدمات التغليف والتعبئة</li>
          <li>تحقق من تقييمات العملاء السابقين</li>
          <li>اسأل عن الضمانات المقدمة</li>
        </ul>
      </div>

      {/* خدمات إضافية */}
      <div>
        <h3 className="text-xl font-semibold mb-4">خدمات إضافية</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-medium mb-2">خدمة التغليف</h4>
            <p className="text-gray-600">تغليف احترافي لجميع المنقولات</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-medium mb-2">فك وتركيب</h4>
            <p className="text-gray-600">فك وتركيب جميع أنواع الأثاث</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-medium mb-2">تخزين آمن</h4>
            <p className="text-gray-600">مستودعات آمنة ومؤمنة</p>
          </div>
        </div>
      </div>
    </section>
  )
} 