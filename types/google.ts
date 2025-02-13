export interface Location {
  lat: number
  lng: number
}

export interface Geometry {
  location: Location
}

export interface SearchResult {
  place_id: string
  name: string
  formatted_address?: string
  rating?: number
  user_ratings_total?: number
  geometry: Geometry
  vicinity?: string
  photos?: Array<{
    photo_reference: string
    height: number
    width: number
  }>
  business_status?: string
  opening_hours?: {
    open_now: boolean
  }
  icon?: string
  types?: string[]
}

export interface Reply {
  id: string
  userName: string
  comment: string
  date: string
  isCompany: boolean
}

export interface Review {
  id: string
  userName: string
  rating: number
  comment: string
  date: string
  companyName: string
  verified: boolean
  replies: Reply[]
} 