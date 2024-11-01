import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, desc }) => {
  return (
    <div className="text-center">
      <Icon className="w-12 h-12 mx-auto mb-4 text-amber-600" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default FeatureCard;