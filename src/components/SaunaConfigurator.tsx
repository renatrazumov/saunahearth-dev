import React, { useState } from 'react';
import { Check } from 'lucide-react';

const SaunaConfigurator = () => {
  const [step, setStep] = useState(1);
  const [configuration, setConfiguration] = useState({
    size: '',
    wood: '',
    heater: '',
    extras: []
  });

  const sizes = [
    { id: 'small', name: '2-4 Person', dimensions: '6\' x 6\'', price: 8999 },
    { id: 'medium', name: '4-6 Person', dimensions: '8\' x 8\'', price: 11999 },
    { id: 'large', name: '6-8 Person', dimensions: '10\' x 10\'', price: 14999 }
  ];

  const woods = [
    { id: 'cedar', name: 'Western Red Cedar', price: 0 },
    { id: 'spruce', name: 'Nordic Spruce', price: -500 },
    { id: 'hemlock', name: 'Canadian Hemlock', price: -300 }
  ];

  const heaters = [
    { id: 'electric', name: 'Electric Heater', description: 'Traditional electric heating', price: 0 },
    { id: 'wood', name: 'Wood Burning', description: 'Authentic wood-burning experience', price: 300 },
    { id: 'infrared', name: 'Infrared System', description: 'Modern infrared technology', price: 800 }
  ];

  const extras = [
    { id: 'lights', name: 'LED Lighting System', price: 299 },
    { id: 'audio', name: 'Bluetooth Audio System', price: 399 },
    { id: 'shower', name: 'Outdoor Shower', price: 899 },
    { id: 'bench', name: 'Changing Room Bench', price: 249 }
  ];

  const handleSelect = (category: string, value: string) => {
    setConfiguration(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleToggleExtra = (extraId: string) => {
    setConfiguration(prev => ({
      ...prev,
      extras: prev.extras.includes(extraId)
        ? prev.extras.filter(id => id !== extraId)
        : [...prev.extras, extraId]
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    
    // Add base price from size
    const selectedSize = sizes.find(s => s.id === configuration.size);
    if (selectedSize) total += selectedSize.price;
    
    // Add wood type adjustment
    const selectedWood = woods.find(w => w.id === configuration.wood);
    if (selectedWood) total += selectedWood.price;
    
    // Add heater price
    const selectedHeater = heaters.find(h => h.id === configuration.heater);
    if (selectedHeater) total += selectedHeater.price;
    
    // Add extras
    configuration.extras.forEach(extraId => {
      const extra = extras.find(e => e.id === extraId);
      if (extra) total += extra.price;
    });
    
    return total;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Progress Steps */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`flex items-center ${s < 4 ? 'flex-1' : ''}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                s <= step ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {s < step ? <Check className="w-5 h-5" /> : s}
            </div>
            {s < 4 && (
              <div
                className={`flex-1 h-1 mx-2 ${
                  s < step ? 'bg-amber-600' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="mb-8">
        {step === 1 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Choose Your Size</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {sizes.map((size) => (
                <button
                  key={size.id}
                  className={`p-4 border rounded-lg text-left ${
                    configuration.size === size.id
                      ? 'border-amber-600 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-600'
                  }`}
                  onClick={() => handleSelect('size', size.id)}
                >
                  <h4 className="font-semibold">{size.name}</h4>
                  <p className="text-gray-600">{size.dimensions}</p>
                  <p className="text-amber-600 font-semibold mt-2">
                    ${size.price.toLocaleString()}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Select Wood Type</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {woods.map((wood) => (
                <button
                  key={wood.id}
                  className={`p-4 border rounded-lg text-left ${
                    configuration.wood === wood.id
                      ? 'border-amber-600 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-600'
                  }`}
                  onClick={() => handleSelect('wood', wood.id)}
                >
                  <h4 className="font-semibold">{wood.name}</h4>
                  <p className="text-amber-600 font-semibold mt-2">
                    {wood.price === 0
                      ? 'Included'
                      : wood.price > 0
                      ? `+$${wood.price}`
                      : `-$${Math.abs(wood.price)}`}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Choose Heater Type</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {heaters.map((heater) => (
                <button
                  key={heater.id}
                  className={`p-4 border rounded-lg text-left ${
                    configuration.heater === heater.id
                      ? 'border-amber-600 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-600'
                  }`}
                  onClick={() => handleSelect('heater', heater.id)}
                >
                  <h4 className="font-semibold">{heater.name}</h4>
                  <p className="text-gray-600">{heater.description}</p>
                  <p className="text-amber-600 font-semibold mt-2">
                    {heater.price === 0 ? 'Included' : `+$${heater.price}`}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Additional Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {extras.map((extra) => (
                <button
                  key={extra.id}
                  className={`p-4 border rounded-lg text-left ${
                    configuration.extras.includes(extra.id)
                      ? 'border-amber-600 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-600'
                  }`}
                  onClick={() => handleToggleExtra(extra.id)}
                >
                  <h4 className="font-semibold">{extra.name}</h4>
                  <p className="text-amber-600 font-semibold mt-2">
                    +${extra.price}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Navigation and Price */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => setStep(prev => Math.max(1, prev - 1))}
          className={`px-6 py-2 rounded-lg ${
            step === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          disabled={step === 1}
        >
          Previous
        </button>
        
        <div className="text-center">
          <p className="text-gray-600">Total Price</p>
          <p className="text-2xl font-bold text-amber-600">
            ${calculateTotal().toLocaleString()}
          </p>
        </div>

        {step < 4 ? (
          <button
            onClick={() => setStep(prev => Math.min(4, prev + 1))}
            className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => alert('Thank you for your configuration! Our team will contact you shortly.')}
            className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700"
          >
            Complete Order
          </button>
        )}
      </div>
    </div>
  );
};

export default SaunaConfigurator;