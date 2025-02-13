interface TestimonialsProps {
  city?: string
  service?: string
}

export default function Testimonials({ city, service }: TestimonialsProps) {
  const testimonials = [
    {
      name: "محمد أحمد",
      text: `خدمة ${service || 'نقل العفش'} ممتازة ومحترفة ${city ? `في ${city}` : ''}. الفريق متعاون والأسعار مناسبة جداً.`,
      rating: 5
    },
    {
      name: "عبدالله محمد",
      text: "سرعة في التنفيذ ودقة في العمل. أنصح بالتعامل معهم.",
      rating: 5
    },
    {
      name: "سارة علي",
      text: "تجربة رائعة من البداية للنهاية. شكراً لكم على الاحترافية.",
      rating: 5
    }
  ]

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">آراء عملائنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 