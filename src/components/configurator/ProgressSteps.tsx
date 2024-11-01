import React from 'react';
import { Check } from 'lucide-react';

interface ProgressStepsProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-between mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div
          key={step}
          className={`flex items-center ${step < totalSteps ? 'flex-1' : ''}`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step <= currentStep ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            {step < currentStep ? <Check className="w-5 h-5" /> : step}
          </div>
          {step < totalSteps && (
            <div
              className={`flex-1 h-1 mx-2 ${
                step < currentStep ? 'bg-amber-600' : 'bg-gray-200'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;