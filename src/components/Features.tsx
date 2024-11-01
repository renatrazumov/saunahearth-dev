import React from 'react';
import { Leaf, ShieldCheck, Thermometer } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Leaf,
      title: "Sustainable Materials",
      description: "Ethically sourced Nordic spruce and cedar wood"
    },
    {
      icon: ShieldCheck,
      title: "Built to Last",
      description: "Weather-resistant construction with 10-year warranty"
    },
    {
      icon: Thermometer,
      title: "Perfect Climate",
      description: "Advanced heating technology for optimal experience"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Custom Saunas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <feature.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;