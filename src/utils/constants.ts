// Services
export const SERVICES = [
  {
    id: 'dry-cleaning',
    title: 'Dry Cleaning',
    description: 'Professional dry cleaning for your delicate garments',
    price: 'from $6.99',
    turnaround: '48 hours',
    icon: 'Shirt'
  },
  {
    id: 'wash-fold',
    title: 'Wash & Fold',
    description: 'Complete laundry service with perfect folding',
    price: 'from $2.99/lb',
    turnaround: '24 hours',
    icon: 'Wind'
  },
  {
    id: 'express',
    title: 'Express Service',
    description: 'Same-day service for urgent requirements',
    price: '+50% regular rate',
    turnaround: '8 hours',
    icon: 'Clock'
  },
  {
    id: 'special-care',
    title: 'Special Care',
    description: 'Special treatment for designer and luxury items',
    price: 'Custom quote',
    turnaround: '72 hours',
    icon: 'Sparkles'
  }
] as const;

// Business Hours
export const BUSINESS_HOURS = {
  weekdays: '7:00 AM - 8:00 PM',
  saturday: '8:00 AM - 6:00 PM',
  sunday: '9:00 AM - 5:00 PM'
} as const;

// Contact Information
export const CONTACT_INFO = {
  phone: '(123) 456-7890',
  email: 'info@washingninja.com',
  address: '123 Cleaning Street',
  city: 'New York, NY 10001'
} as const;

// Delivery Zones
export const DELIVERY_ZONES = [
  'Manhattan',
  'Brooklyn',
  'Queens',
  'Bronx',
  'Staten Island'
] as const;