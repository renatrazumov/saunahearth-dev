import React from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import Features from '../components/Features';
import Process from '../components/Process';
import DesignPreview from '../components/DesignPreview';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1551906993-c8b38a6ab201?q=80&w=3346&auto=format&fit=crop')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Crafting Your Perfect Outdoor Sanctuary
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Experience the warmth of tradition with our custom-built outdoor saunas
            </p>
            <Link
              to="/design-studio"
              className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              <Flame className="mr-2" />
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* Design Preview Section */}
      <DesignPreview />

      {/* Process Section */}
      <Process />
    </div>
  );
};

export default Home;