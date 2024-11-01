import React from 'react';
import { Link } from 'react-router-dom';

const DesignPreview = () => {
  const sizes = [
    { name: '2-4 Person', dimensions: '6\' x 6\'', price: 11999 },
    { name: '4-6 Person', dimensions: '8\' x 8\'', price: 14999 },
    { name: '6-8 Person', dimensions: '10\' x 10\'', price: 19999 }
  ];

  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Design Your Custom Sauna
        </h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-8">
            <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center">
              1
            </div>
            <div className="flex-1 h-1 mx-4 bg-gray-200">
              <div className="w-1/4 h-full bg-amber-600"></div>
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              2
            </div>
            <div className="flex-1 h-1 mx-4 bg-gray-200"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              3
            </div>
            <div className="flex-1 h-1 mx-4 bg-gray-200"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              4
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-6">Choose Your Size</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {sizes.map((size, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:border-amber-600 transition-colors"
              >
                <h4 className="font-semibold mb-2">{size.name}</h4>
                <p className="text-gray-600 mb-4">{size.dimensions}</p>
                <p className="text-amber-600 font-semibold">
                  +${size.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              className="px-6 py-2 bg-gray-100 text-gray-400 rounded-lg cursor-not-allowed"
              disabled
            >
              Previous
            </button>
            <div className="text-center">
              <p className="text-gray-600">Total Price</p>
              <p className="text-2xl font-bold text-amber-600">$0</p>
            </div>
            <Link
              to="/design-studio"
              className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Continue Design
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPreview;