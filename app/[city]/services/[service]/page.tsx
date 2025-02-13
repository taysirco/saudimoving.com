import ServiceContent from '@/components/features/ServiceContent'

interface ServicePageProps {
  params: {
    city: string
    service: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const { city, service } = params
  
  return (
    <main className="container mx-auto px-4 py-8">
      <ServiceContent 
        service={service}
        city={city}
      />
    </main>
  )
} 