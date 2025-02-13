export interface SearchResult {
  id: string
  name: string
  address: string
  rating?: number
  reviewCount?: number
  userRatingsTotal?: number
  phone?: string
  website?: string
}

export interface LayoutProps {
  children: React.ReactNode
}

export interface MetaData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
} 