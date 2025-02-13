import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
}

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link 
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
} 