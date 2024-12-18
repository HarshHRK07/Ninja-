import React from 'react';
import { Shirt, Wind, Clock, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Dry Cleaning',
    description: 'Professional dry cleaning for your delicate garments',
    icon: Shirt,
  },
  {
    title: 'Wash & Fold',
    description: 'Complete laundry service with perfect folding',
    icon: Wind,
  },
  {
    title: 'Express Service',
    description: 'Same-day service for urgent requirements',
    icon: Clock,
  },
  {
    title: 'Special Care',
    description: 'Special treatment for designer and luxury items',
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Professional care for all your garment needs
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                  <service.icon className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href="#" className="focus:outline-none">
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}