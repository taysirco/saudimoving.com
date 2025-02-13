import Link from 'next/link'
import { ChevronLeftIcon, HomeIcon } from '@heroicons/react/24/solid'

interface BreadcrumbsProps {
  city: string
  service: string
}

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumbs({ city, service }: BreadcrumbsProps) {
  const items: BreadcrumbItem[] = [
    {
      label: 'الرئيسية',
      href: '/'
    },
    {
      label: city,
      href: `/${city}`
    },
    {
      label: service
    }
  ]

  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 space-x-reverse">
        <li className="inline-flex items-center">
          <Link 
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <HomeIcon className="w-4 h-4 ml-2" />
            الرئيسية
          </Link>
        </li>

        {items.slice(1).map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronLeftIcon className="h-5 w-5 text-gray-400 ml-4" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-sm font-medium text-gray-500">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
} 