import React from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

interface FAQProps {
  city: string
  service: string
  className?: string
}

export default function FAQ({ city, service, className = '' }: FAQProps) {
  const faqs = [
    {
      question: 'كيف يمكنني اختيار شركة نقل عفش موثوقة؟',
      answer: 'يمكنك اختيار شركة نقل عفش موثوقة من خلال مراجعة تقييمات العملاء السابقين، والتأكد من ترخيص الشركة، وطلب عرض سعر مفصل قبل التعاقد.'
    },
    {
      question: 'ما هي تكلفة نقل العفش؟',
      answer: 'تختلف تكلفة نقل العفش حسب عدة عوامل منها: المسافة، كمية الأثاث، الخدمات الإضافية مثل الفك والتركيب والتغليف.'
    },
    {
      question: 'هل يشمل السعر خدمة الفك والتركيب؟',
      answer: 'يختلف ذلك حسب الشركة، بعض الشركات تقدم خدمة شاملة تتضمن الفك والتركيب، وأخرى تقدمها كخدمة إضافية.'
    },
    {
      question: 'كم من الوقت تستغرق عملية نقل العفش؟',
      answer: 'يعتمد الوقت على حجم الأثاث والمسافة، لكن معظم عمليات النقل داخل المدينة تتم خلال يوم واحد.'
    }
  ]

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">الأسئلة الشائعة</h2>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 