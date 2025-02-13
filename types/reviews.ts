export interface Reply {
  _id: string
  userName: string
  comment: string
  createdAt: string
}

export interface Review {
  id: number
  name: string
  companyName: string
  rating: number
  date: string
  comment: string
  likes: number
  repliesCount: number
  replies: Reply[]
  verified: boolean
  serviceType: string
  initialLikes: number
} 