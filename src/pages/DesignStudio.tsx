import React from 'react';
import { Compass, Palette, Ruler, Sparkles } from 'lucide-react';
import SaunaConfigurator from '../components/configurator/SaunaConfigurator';

const DesignStudio = () => {
  const features = [
    { icon: Compass, title: "Custom Design", desc: "Create your perfect sauna with our interactive design tool" },
    { icon: Palette, title: "Material Selection", desc: "Choose from premium wood types and finishes" },
    { icon: Ruler, title: "Size Options", desc: "Multiple size configurations to fit your space" },
    { icon: Sparkles, title: "Premium Features", desc: "Enhance your sauna with luxury additions" }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="py-12 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Design Your Perfect Sauna</h1>
          <p className="text-amber-100 text-lg">Create your custom outdoor sanctuary using our interactive design tool</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <feature.icon className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        <SaunaConfigurator />
      </div>
    </div>
  );
};

export default DesignStudio;