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