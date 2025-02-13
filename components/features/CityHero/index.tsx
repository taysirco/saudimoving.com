interface CityHeroProps {
  city: string
}

export default function CityHero({ city }: CityHeroProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          خدمات نقل العفش في {city}
        </h1>
        <p className="text-xl opacity-90">
          نقدم خدمات نقل عفش احترافية وآمنة في {city} مع ضمان سلامة منقولاتك
        </p>
      </div>
    </div>
  )
} 