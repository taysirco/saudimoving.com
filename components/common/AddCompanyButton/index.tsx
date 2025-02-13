import Link from 'next/link'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

export default function AddCompanyButton() {
  return (
    <Link 
      href="/add-company"
      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full hover:scale-105 transform transition-all duration-300 animate-pulse hover:animate-none shadow-lg hover:shadow-blue-500/50"
    >
      <PlusCircleIcon className="h-5 w-5" />
      <span>أضف شركتك</span>
    </Link>
  )
} 