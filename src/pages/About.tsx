import React from 'react';
import { Award, Clock, Users, Leaf } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, value: "Since 1985", label: "Years of Excellence" },
    { icon: Users, value: "5000+", label: "Happy Customers" },
    { icon: Award, value: "50+", label: "Design Awards" },
    { icon: Leaf, value: "100%", label: "Sustainable Materials" }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="py-12 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">About SaunaHearth</h1>
          <p className="text-amber-100 text-lg">Crafting perfect outdoor sanctuaries since 1985</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              For over three decades, SaunaHearth has been at the forefront of outdoor sauna design and craftsmanship. 
              What began as a small family workshop has grown into a leading manufacturer of premium custom saunas, 
              while maintaining our commitment to quality and personal service.
            </p>
            <p className="text-gray-600">
              We believe in the transformative power of traditional sauna culture, combined with modern innovation 
              and sustainable practices. Every sauna we create is a testament to our dedication to excellence and 
              our respect for this time-honored wellness tradition.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?auto=format&fit=crop&q=80&w=1200"
              alt="Crafting saunas"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Our Commitment to Sustainability</h2>
          <p className="text-gray-600 mb-4">
            We're dedicated to environmental stewardship through sustainable forestry practices, 
            energy-efficient manufacturing, and eco-friendly materials. Every sauna we create is 
            built with respect for nature and future generations.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Responsibly sourced Nordic woods</li>
            <li>Energy-efficient production processes</li>
            <li>Minimal waste manufacturing</li>
            <li>Long-lasting, sustainable products</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;