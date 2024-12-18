import React from 'react';

const pricingItems = [
  {
    category: 'Shirts & Tops',
    items: [
      { name: 'Dress Shirt', price: 6.99 },
      { name: 'Blouse', price: 7.99 },
      { name: 'T-Shirt', price: 4.99 },
    ],
  },
  {
    category: 'Pants & Bottoms',
    items: [
      { name: 'Dress Pants', price: 8.99 },
      { name: 'Jeans', price: 7.99 },
      { name: 'Skirt', price: 8.99 },
    ],
  },
  {
    category: 'Outerwear',
    items: [
      { name: 'Suit Jacket', price: 14.99 },
      { name: 'Coat', price: 19.99 },
      { name: 'Sweater', price: 9.99 },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Transparent pricing for all your cleaning needs
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingItems.map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-600">{item.name}</span>
                      <span className="text-gray-900 font-semibold">
                        ${item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}