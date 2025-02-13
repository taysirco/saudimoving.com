interface SiteConfig {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  workingHours: string;
  social: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: 'سعودي موفينج',
  description: 'منصة للإعلانات المبوبة',
  phone: '+966500000000',
  email: 'contact@saudimoving.com',
  address: 'الرياض، المملكة العربية السعودية',
  workingHours: '24/7',
  social: {
    twitter: 'https://twitter.com/saudimoving',
    facebook: 'https://facebook.com/saudimoving',
    instagram: 'https://instagram.com/saudimoving'
  }
} 