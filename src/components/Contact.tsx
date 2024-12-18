import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            We're here to help with all your cleaning needs
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Location & Hours</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <p className="text-gray-900">123 Cleaning Street</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <p className="text-gray-900">Monday - Friday: 7am - 8pm</p>
                  <p className="text-gray-900">Saturday: 8am - 6pm</p>
                  <p className="text-gray-900">Sunday: 9am - 5pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-600" />
                <a href="tel:+1234567890" className="ml-4 text-gray-900">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-600" />
                <a
                  href="mailto:info@washingninja.com"
                  className="ml-4 text-gray-900"
                >
                  info@washingninja.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}