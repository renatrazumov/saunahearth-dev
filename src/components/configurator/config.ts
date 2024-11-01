export const saunaConfig = {
  sizes: [
    { id: 'small', name: '2-4 Person', dimensions: '6\' x 6\'', price: 11999 },
    { id: 'medium', name: '4-6 Person', dimensions: '8\' x 8\'', price: 14999 },
    { id: 'large', name: '6-8 Person', dimensions: '10\' x 10\'', price: 19999 }
  ],

  woods: [
    { id: 'cedar', name: 'Western Red Cedar', price: 0 },
    { id: 'spruce', name: 'Nordic Spruce', price: -500 },
    { id: 'hemlock', name: 'Canadian Hemlock', price: -300 }
  ],

  heaters: [
    { id: 'electric', name: 'Electric Heater', description: 'Traditional electric heating', price: 0 },
    { id: 'wood', name: 'Wood Burning', description: 'Authentic wood-burning experience', price: 500 },
    { id: 'infrared', name: 'Infrared System', description: 'Modern infrared technology', price: 800 }
  ],

  extras: [
    { id: 'lights', name: 'LED Lighting System', price: 299 },
    { id: 'audio', name: 'Bluetooth Audio System', price: 399 },
    { id: 'shower', name: 'Outdoor Shower', price: 899 },
    { id: 'bench', name: 'Changing Room Bench', price: 249 }
  ]
};