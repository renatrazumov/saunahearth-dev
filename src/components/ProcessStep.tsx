import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon: Icon, title, desc, isLast }) => {
  return (
    <div className="relative">
      <div className="bg-amber-50 rounded-lg p-8">
        <Icon className="w-10 h-10 text-amber-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
      {!isLast && (
        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-amber-600" />
      )}
    </div>
  );
};

export default ProcessStep;