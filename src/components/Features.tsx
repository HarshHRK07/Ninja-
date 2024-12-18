import React from 'react';
import { Shield, Truck, Clock, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Premium Care',
    description: 'Expert handling of all fabric types with eco-friendly cleaning solutions'
  },
  {
    icon: Truck,
    title: 'Free Pickup & Delivery',
    description: 'Convenient doorstep service within our service area'
  },
  {
    icon: Clock,
    title: 'Express Service',
    description: 'Same-day and next-day options available'
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: '100% satisfaction guarantee on all our services'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Washing Ninja?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the difference with our premium laundry services
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="flex justify-center">
                <feature.icon className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}