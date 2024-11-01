import React from 'react';
import { Pencil, Hammer, Heart } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Pencil,
      title: "Design",
      description: "Work with our experts to create your perfect sauna"
    },
    {
      icon: Hammer,
      title: "Craft",
      description: "Skilled artisans build your sauna with precision"
    },
    {
      icon: Heart,
      title: "Enjoy",
      description: "Experience the luxury of your custom sanctuary"
    }
  ];

  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Process
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-8 h-full">
                <step.icon className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-amber-600" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;