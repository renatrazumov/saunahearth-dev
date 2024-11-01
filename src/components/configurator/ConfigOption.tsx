import React from 'react';

interface ConfigOptionProps {
  id: string;
  name: string;
  description?: string;
  price: number;
  isSelected: boolean;
  onClick: () => void;
  dimensions?: string;
  showAsExtra?: boolean;
}

const ConfigOption: React.FC<ConfigOptionProps> = ({
  name,
  description,
  price,
  isSelected,
  onClick,
  dimensions,
  showAsExtra
}) => {
  const formatPrice = (price: number) => {
    if (showAsExtra) return `+$${price}`;
    if (price === 0) return 'Included';
    return price > 0 ? `+$${price}` : `-$${Math.abs(price)}`;
  };

  return (
    <button
      className={`p-4 border rounded-lg text-left ${
        isSelected ? 'border-amber-600 bg-amber-50' : 'border-gray-200 hover:border-amber-600'
      }`}
      onClick={onClick}
    >
      <h4 className="font-semibold">{name}</h4>
      {dimensions && <p className="text-gray-600">{dimensions}</p>}
      {description && <p className="text-gray-600">{description}</p>}
      <p className="text-amber-600 font-semibold mt-2">
        {formatPrice(price)}
      </p>
    </button>
  );
};

export default ConfigOption;