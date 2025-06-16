import React, { useState } from 'react';
import type { RoomConfig } from './PricingCalculator';

interface AdvancedCalculatorProps {
  rooms: RoomConfig[];
  setRooms: (rooms: RoomConfig[]) => void;
  wholeHomeItems: { [key: string]: number };
  setWholeHomeItems: (items: { [key: string]: number }) => void;
  onCalculate: () => void;
  isCalculating: boolean;
}

const AdvancedCalculator: React.FC<AdvancedCalculatorProps> = ({
  rooms,
  setRooms,
  wholeHomeItems,
  setWholeHomeItems,
  onCalculate,
  isCalculating
}) => {
  const [activeTab, setActiveTab] = useState<'rooms' | 'wholeHome'>('rooms');

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

  const wholeHomeItemsConfig = [
    {
      category: 'Core Systems',
      items: [
        { id: 'smartHub', name: 'Smart Hub/Controller', description: 'Central control system for all smart devices' },
        { id: 'networkSetup', name: 'Network Infrastructure', description: 'Professional networking setup and configuration' },
        { id: 'thermostat', name: 'Smart Thermostat', description: 'Whole-home climate control system' },
        { id: 'securitySystemController', name: 'Security System Controller', description: 'Central security monitoring and control' },
        { id: 'cameraSystemController', name: 'Camera System Controller', description: 'Video surveillance management system' },
        { id: 'wholeHomeAudio', name: 'Whole-Home Audio System', description: 'Multi-room audio distribution' }
      ]
    },
    {
      category: 'Storage Solutions',
      items: [
        { id: 'cloudServer1TB', name: 'Personal Cloud Server (1TB)', description: 'Local data storage and backup' },
        { id: 'cloudServer2TB', name: 'Personal Cloud Server (2TB)', description: 'Enhanced local storage capacity' },
        { id: 'cloudServer4TB', name: 'Personal Cloud Server (4TB)', description: 'Large capacity local storage' },
        { id: 'cloudServer8TB', name: 'Personal Cloud Server (8TB)', description: 'Enterprise-level local storage' },
        { id: 'cloudServer16TB', name: 'Personal Cloud Server (16TB+)', description: 'Maximum capacity local storage' }
      ]
    }
  ];

  const perRoomItemsConfig = [
    {
      category: 'Lighting',
      items: [
        { id: 'smartSwitch', name: 'Smart Switches', description: 'Replace standard wall switches' },
        { id: 'smartDimmer', name: 'Smart Dimmers', description: 'Adjustable lighting control' },
        { id: 'ledStrip', name: 'LED Light Strips', description: 'Accent and ambient lighting' },
        { id: 'smartBulb', name: 'Smart Bulbs', description: 'Color-changing intelligent bulbs' }
      ]
    },
    {
      category: 'Control',
      items: [
        { id: 'touchPanel', name: 'Touch Control Panels', description: 'Wall-mounted control interfaces' },
        { id: 'voiceAssistant', name: 'Voice Assistants', description: 'Voice control integration' }
      ]
    },
    {
      category: 'Sensors',
      items: [
        { id: 'motionSensor', name: 'Motion Sensors', description: 'Occupancy and movement detection' },
        { id: 'doorWindowSensor', name: 'Door/Window Sensors', description: 'Entry point monitoring' },
        { id: 'temperatureSensor', name: 'Temperature Sensors', description: 'Climate monitoring' },
        { id: 'humiditySensor', name: 'Humidity Sensors', description: 'Moisture level monitoring' }
      ]
    },
    {
      category: 'Security',
      items: [
        { id: 'securityCamera', name: 'Security Cameras', description: 'Video surveillance' },
        { id: 'glassBreakSensor', name: 'Glass Break Sensors', description: 'Window break detection' }
      ]
    },
    {
      category: 'Entertainment',
      items: [
        { id: 'inWallSpeaker', name: 'In-Wall Speakers', description: 'Built-in audio systems' },
        { id: 'tvMount', name: 'TV Mounts with Automation', description: 'Motorized TV mounting systems' }
      ]
    },
    {
      category: 'Window Treatments',
      items: [
        { id: 'motorizedBlind', name: 'Motorized Blinds/Curtains', description: 'Automated window coverings' }
      ]
    }
  ];

  const addRoom = () => {
    const newRoom: RoomConfig = {
      id: Date.now().toString(),
      type: 'livingRoom',
      size: 'medium',
      selectedItems: []
    };
    setRooms([...rooms, newRoom]);
  };

  const removeRoom = (roomId: string) => {
    setRooms(rooms.filter(room => room.id !== roomId));
  };

  const updateRoom = (roomId: string, field: keyof RoomConfig, value: any) => {
    setRooms(rooms.map(room => 
      room.id === roomId ? { ...room, [field]: value } : room
    ));
  };

  const toggleRoomItem = (roomId: string, itemId: string) => {
    setRooms(rooms.map(room => {
      if (room.id === roomId) {
        const selectedItems = room.selectedItems.includes(itemId)
          ? room.selectedItems.filter(id => id !== itemId)
          : [...room.selectedItems, itemId];
        return { ...room, selectedItems };
      }
      return room;
    }));
  };

  const updateWholeHomeItem = (itemId: string, quantity: number) => {
    setWholeHomeItems({
      ...wholeHomeItems,
      [itemId]: Math.max(0, quantity)
    });
  };

  const handleCalculate = () => {
    if (rooms.length === 0) {
      alert('Please add at least one room to get an estimate.');
      return;
    }
    onCalculate();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="text-center p-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-graphite-gray mb-4">
          Advanced Configuration Calculator
        </h2>
        <p className="text-slate">
          Customize every aspect of your smart home installation for precise estimates
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('rooms')}
          className={`flex-1 py-4 px-6 font-semibold transition-colors duration-300 ${
            activeTab === 'rooms'
              ? 'bg-electric-blue text-white'
              : 'text-graphite-gray hover:bg-gray-50'
          }`}
        >
          Room Configuration ({rooms.length})
        </button>
        <button
          onClick={() => setActiveTab('wholeHome')}
          className={`flex-1 py-4 px-6 font-semibold transition-colors duration-300 ${
            activeTab === 'wholeHome'
              ? 'bg-electric-blue text-white'
              : 'text-graphite-gray hover:bg-gray-50'
          }`}
        >
          Whole-Home Systems
        </button>
      </div>

      <div className="p-8">
        {activeTab === 'rooms' ? (
          <div className="space-y-8">
            {/* Room Management */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-graphite-gray">
                Configure Individual Rooms
              </h3>
              <button
                onClick={addRoom}
                className="btn-primary"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Room
              </button>
            </div>

            {rooms.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-gray-500 text-lg">No rooms configured yet</p>
                <p className="text-gray-400">Add a room to start configuring your smart home</p>
              </div>
            ) : (
              <div className="space-y-6">                {rooms.map((room) => (
                  <div key={room.id} className="border border-gray-200 rounded-lg p-6">
                    {/* Room Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex-1 grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-graphite-gray mb-2">
                            Room Type
                          </label>
                          <select
                            value={room.type}
                            onChange={(e) => updateRoom(room.id, 'type', e.target.value)}
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
                            onChange={(e) => updateRoom(room.id, 'size', e.target.value as 'small' | 'medium' | 'large')}
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
                      <button
                        onClick={() => removeRoom(room.id)}
                        className="ml-4 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>

                    {/* Room Items */}
                    <div className="space-y-6">
                      {perRoomItemsConfig.map(category => (
                        <div key={category.category}>
                          <h4 className="font-semibold text-graphite-gray mb-3">
                            {category.category}
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {category.items.map(item => (
                              <label
                                key={item.id}
                                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                                  room.selectedItems.includes(item.id)
                                    ? 'border-electric-blue bg-electric-blue/5'
                                    : 'border-gray-200 hover:border-electric-blue/50'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={room.selectedItems.includes(item.id)}
                                  onChange={() => toggleRoomItem(room.id, item.id)}
                                  className="sr-only"
                                />
                                <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                                  room.selectedItems.includes(item.id)
                                    ? 'bg-electric-blue border-electric-blue'
                                    : 'border-gray-300'
                                }`}>
                                  {room.selectedItems.includes(item.id) && (
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium text-graphite-gray">
                                    {item.name}
                                  </div>
                                  <div className="text-sm text-slate">
                                    {item.description}
                                  </div>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            <h3 className="text-lg font-semibold text-graphite-gray">
              Whole-Home Systems & Infrastructure
            </h3>
            
            {wholeHomeItemsConfig.map(category => (
              <div key={category.category}>
                <h4 className="font-semibold text-graphite-gray mb-4">
                  {category.category}
                </h4>
                <div className="space-y-3">
                  {category.items.map(item => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex-1">
                        <h5 className="font-medium text-graphite-gray">
                          {item.name}
                        </h5>
                        <p className="text-sm text-slate">
                          {item.description}
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateWholeHomeItem(item.id, (wholeHomeItems[item.id] || 0) - 1)}
                            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="w-12 text-center font-medium">
                            {wholeHomeItems[item.id] || 0}
                          </span>
                          <button
                            onClick={() => updateWholeHomeItem(item.id, (wholeHomeItems[item.id] || 0) + 1)}
                            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Calculate Button */}
        <div className="text-center pt-8 border-t border-gray-200">
          <button
            onClick={handleCalculate}
            disabled={isCalculating || rooms.length === 0}
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
              'Calculate Detailed Estimate'
            )}
          </button>
          {rooms.length === 0 && (
            <p className="text-sm text-red-500 mt-2">
              Please add at least one room to calculate
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedCalculator;
