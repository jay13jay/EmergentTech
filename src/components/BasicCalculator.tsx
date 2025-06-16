import React, { useState } from 'react';
import type { RoomConfig } from './PricingCalculator';
import pricingConfig from '../config/pricingConfig.json';

interface BasicCalculatorProps {
  rooms: RoomConfig[];
  setRooms: (rooms: RoomConfig[]) => void;
  onCalculate: () => void;
  isCalculating: boolean;
}

const BasicCalculator: React.FC<BasicCalculatorProps> = ({
  rooms,
  setRooms,
  onCalculate,
  isCalculating
}) => {
  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const roomTypes = [
    { value: 'livingRoom', label: 'Living Room' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'kitchen', label: 'Kitchen' },
    { value: 'bathroom', label: 'Bathroom' },
    { value: 'office', label: 'Office' },
    { value: 'diningRoom', label: 'Dining Room' },
    { value: 'basement', label: 'Basement' },
    { value: 'garage', label: 'Garage' },
    { value: 'laundryRoom', label: 'Laundry Room' },
    { value: 'hallway', label: 'Hallway' }
  ];

  const roomSizes = [
    { value: 'small', label: 'Small (<150 sq ft)' },
    { value: 'medium', label: 'Medium (150-300 sq ft)' },
    { value: 'large', label: 'Large (>300 sq ft)' }
  ];

  const categories = [
    {
      id: 'lighting',
      name: 'Lighting Control',
      description: 'Smart switches, dimmers, LED strips, automated lighting scenes',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 'climate',
      name: 'Climate Control',
      description: 'Smart thermostats, temperature sensors, automated climate zones',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 'security',
      name: 'Security & Access',
      description: 'Smart locks, cameras, motion sensors, doorbell systems',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: 'entertainment',
      name: 'Entertainment',
      description: 'Smart speakers, TV integration, multi-room audio systems',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'windowTreatments',
      name: 'Window Treatments',
      description: 'Automated blinds, motorized curtains, smart window control',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 9l-3-3m3 3l3-3m-3 3V10" />
        </svg>
      )
    }
  ];

  const updateNumberOfRooms = (num: number) => {
    setNumberOfRooms(num);
    const newRooms: RoomConfig[] = Array.from({ length: num }, (_, index) => ({
      id: (index + 1).toString(),
      type: 'livingRoom',
      size: 'medium',
      selectedItems: []
    }));
    setRooms(newRooms);
  };

  const updateRoom = (index: number, field: keyof RoomConfig, value: any) => {
    const newRooms = [...rooms];
    newRooms[index] = { ...newRooms[index], [field]: value };
    setRooms(newRooms);
  };

  const toggleCategory = (categoryId: string) => {
    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    
    setSelectedCategories(newCategories);
    
    // Auto-populate room items based on selected categories
    const newRooms = rooms.map(room => {
      const categoryItems: string[] = [];
      newCategories.forEach(category => {
        if (pricingConfig.basicCalculatorDefaults[category as keyof typeof pricingConfig.basicCalculatorDefaults]) {
          categoryItems.push(...pricingConfig.basicCalculatorDefaults[category as keyof typeof pricingConfig.basicCalculatorDefaults].items);
        }
      });
      return { ...room, selectedItems: categoryItems };
    });
    setRooms(newRooms);
  };

  const handleCalculate = () => {
    if (selectedCategories.length === 0) {
      alert('Please select at least one category to get an estimate.');
      return;
    }
    onCalculate();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-graphite-gray mb-4">
          Quick Estimate Calculator
        </h2>
        <p className="text-slate">
          Get a rough estimate based on room count and broad automation categories
        </p>
      </div>

      <div className="space-y-8">
        {/* Number of Rooms */}
        <div>
          <label className="block text-sm font-medium text-graphite-gray mb-3">
            Number of Rooms
          </label>
          <select
            value={numberOfRooms}
            onChange={(e) => updateNumberOfRooms(parseInt(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Room' : 'Rooms'}
                {num === 10 && '+'}
              </option>
            ))}
          </select>
        </div>

        {/* Room Configuration */}
        <div>
          <h3 className="text-lg font-semibold text-graphite-gray mb-4">
            Room Details
          </h3>
          <div className="space-y-4">
            {rooms.map((room, index) => (
              <div key={room.id} className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-graphite-gray mb-2">
                    Room {index + 1} Type
                  </label>
                  <select
                    value={room.type}
                    onChange={(e) => updateRoom(index, 'type', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                  >
                    {roomTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-graphite-gray mb-2">
                    Room Size
                  </label>
                  <select
                    value={room.size}
                    onChange={(e) => updateRoom(index, 'size', e.target.value as 'small' | 'medium' | 'large')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                  >
                    {roomSizes.map(size => (
                      <option key={size.value} value={size.value}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-graphite-gray mb-4">
            Select Automation Categories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(category => (
              <div
                key={category.id}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedCategories.includes(category.id)
                    ? 'border-electric-blue bg-electric-blue/5 shadow-lg'
                    : 'border-gray-200 hover:border-electric-blue/50 hover:bg-gray-50'
                }`}
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center mb-3">
                  <div className={`p-2 rounded-lg mr-3 ${
                    selectedCategories.includes(category.id)
                      ? 'bg-electric-blue text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-graphite-gray">
                      {category.name}
                    </h4>
                    {selectedCategories.includes(category.id) && (
                      <div className="flex items-center mt-1">
                        <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-green-600 font-medium">Selected</span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-sm text-slate">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Calculate Button */}
        <div className="text-center pt-6 border-t border-gray-200">
          <button
            onClick={handleCalculate}
            disabled={isCalculating || selectedCategories.length === 0}
            className={`btn-primary px-8 py-4 text-lg font-semibold ${
              isCalculating ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isCalculating ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Calculating...
              </div>
            ) : (
              'Get My Estimate'
            )}
          </button>
          {selectedCategories.length === 0 && (
            <p className="text-sm text-red-500 mt-2">
              Please select at least one automation category
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicCalculator;
