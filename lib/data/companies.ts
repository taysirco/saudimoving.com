export interface Company {
  id: string
  name: string
  city: string
  services: string[]
  phone: string
  rating: number
  reviewsCount: number
  description: string
  features: string[]
}

export const companies: Company[] = [
  {
    id: '1',
    name: 'شركة النخبة للنقل',
    city: 'الرياض',
    services: ['نقل عفش', 'فك وتركيب', 'تغليف'],
    phone: '0500000001',
    rating: 4.8,
    reviewsCount: 150,
    description: 'خدمات نقل عفش احترافية مع ضمان سلامة الأثاث',
    features: ['فريق محترف', 'سيارات مجهزة', 'ضمان شامل']
  },
  {
    id: '2',
    name: 'شركة الصفوة',
    city: 'جدة',
    services: ['نقل عفش', 'تخزين', 'تغليف'],
    phone: '0500000002',
    rating: 4.7,
    reviewsCount: 120,
    description: 'خدمات نقل وتخزين آمنة وموثوقة',
    features: ['مستودعات آمنة', 'تغليف احترافي', 'أسعار تنافسية']
  },
  // يمكنك إضافة المزيد من الشركات هنا
]

export function getCompaniesByFilter(city: string, service: string): Company[] {
  return companies
    .filter(company => 
      company.city.includes(city) && 
      company.services.includes(service)
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3) // نأخذ أفضل 3 شركات فقط
} 