import React from 'react';

interface ConfigStepProps {
  title: string;
  children: React.ReactNode;
}

const ConfigStep: React.FC<ConfigStepProps> = ({ title, children }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default ConfigStep;