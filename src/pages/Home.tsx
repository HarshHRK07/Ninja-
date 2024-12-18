import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import OrderForm from '../components/OrderForm';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <section id="order" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Schedule a Pickup
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                Book your laundry pickup in just a few steps
              </p>
            </div>
            <OrderForm />
          </div>
        </section>
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}