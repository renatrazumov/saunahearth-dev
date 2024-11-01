import React, { useState } from 'react';
import ProgressSteps from './ProgressSteps';
import ConfigStep from './ConfigStep';
import ConfigOption from './ConfigOption';
import { saunaConfig } from './config';

interface Configuration {
  size: string;
  wood: string;
  heater: string;
  extras: string[];
}

const SaunaConfigurator = () => {
  const [step, setStep] = useState(1);
  const [configuration, setConfiguration] = useState<Configuration>({
    size: '',
    wood: '',
    heater: '',
    extras: []
  });

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
    
    const selectedSize = saunaConfig.sizes.find(s => s.id === configuration.size);
    if (selectedSize) total += selectedSize.price;
    
    const selectedWood = saunaConfig.woods.find(w => w.id === configuration.wood);
    if (selectedWood) total += selectedWood.price;
    
    const selectedHeater = saunaConfig.heaters.find(h => h.id === configuration.heater);
    if (selectedHeater) total += selectedHeater.price;
    
    configuration.extras.forEach(extraId => {
      const extra = saunaConfig.extras.find(e => e.id === extraId);
      if (extra) total += extra.price;
    });
    
    return total;
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <ConfigStep title="Choose Your Size">
            <div className="grid md:grid-cols-3 gap-4">
              {saunaConfig.sizes.map((size) => (
                <ConfigOption
                  key={size.id}
                  {...size}
                  isSelected={configuration.size === size.id}
                  onClick={() => handleSelect('size', size.id)}
                />
              ))}
            </div>
          </ConfigStep>
        );
      case 2:
        return (
          <ConfigStep title="Select Wood Type">
            <div className="grid md:grid-cols-3 gap-4">
              {saunaConfig.woods.map((wood) => (
                <ConfigOption
                  key={wood.id}
                  {...wood}
                  isSelected={configuration.wood === wood.id}
                  onClick={() => handleSelect('wood', wood.id)}
                />
              ))}
            </div>
          </ConfigStep>
        );
      case 3:
        return (
          <ConfigStep title="Choose Heater Type">
            <div className="grid md:grid-cols-3 gap-4">
              {saunaConfig.heaters.map((heater) => (
                <ConfigOption
                  key={heater.id}
                  {...heater}
                  isSelected={configuration.heater === heater.id}
                  onClick={() => handleSelect('heater', heater.id)}
                />
              ))}
            </div>
          </ConfigStep>
        );
      case 4:
        return (
          <ConfigStep title="Additional Features">
            <div className="grid md:grid-cols-2 gap-4">
              {saunaConfig.extras.map((extra) => (
                <ConfigOption
                  key={extra.id}
                  {...extra}
                  isSelected={configuration.extras.includes(extra.id)}
                  onClick={() => handleToggleExtra(extra.id)}
                  showAsExtra
                />
              ))}
            </div>
          </ConfigStep>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <ProgressSteps currentStep={step} totalSteps={4} />

      <div className="mb-8">
        {renderStepContent()}
      </div>

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