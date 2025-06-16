import React, { useState, useEffect } from 'react';
import BasicCalculator from './BasicCalculator';
import AdvancedCalculator from './AdvancedCalculator';
import LeadCaptureModal from './LeadCaptureModal';
import EstimateSummary from './EstimateSummary';
import TimelineVisualization from './TimelineVisualization';
import pricingConfig from '../config/pricingConfig.json';

export interface EstimateData {
  items: { [key: string]: number };
  totalHardwareCost: number;
  totalLaborCost: number;
  totalInstallationTime: number;
  estimateRange: { low: number; high: number };
}

export interface RoomConfig {
  id: string;
  type: string;
  size: 'small' | 'medium' | 'large';
  selectedItems: string[];
}

const PricingCalculator: React.FC = () => {
  const [calculatorMode, setCalculatorMode] = useState<'basic' | 'advanced'>('basic');
  const [rooms, setRooms] = useState<RoomConfig[]>([]);
  const [wholeHomeItems, setWholeHomeItems] = useState<{ [key: string]: number }>({});
  const [estimateData, setEstimateData] = useState<EstimateData | null>(null);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    // Initialize with one room for basic calculator
    if (calculatorMode === 'basic' && rooms.length === 0) {
      setRooms([{
        id: '1',
        type: 'livingRoom',
        size: 'medium',
        selectedItems: []
      }]);
    }
  }, [calculatorMode]);  const calculateEstimate = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for UX
    setTimeout(() => {
      const estimate = generateEstimate();
      setEstimateData(estimate);
      setIsCalculating(false);
    }, 1500);
  };

  const generateEstimate = (): EstimateData => {
    let totalHardwareCost = 0;
    let totalLaborTime = 0;
    const items: { [key: string]: number } = {};

    // Add whole-home items
    Object.entries(wholeHomeItems).forEach(([itemKey, quantity]) => {
      if (quantity > 0) {
        items[itemKey] = quantity;
        totalHardwareCost += pricingConfig.hardwareCosts[itemKey as keyof typeof pricingConfig.hardwareCosts] * quantity;
        totalLaborTime += pricingConfig.installationTimes[itemKey as keyof typeof pricingConfig.installationTimes] * quantity;
      }
    });

    // Add per-room items
    rooms.forEach((room) => {
      const sizeMultiplier = pricingConfig.roomSizeMultipliers[room.size];
      
      room.selectedItems.forEach((itemKey) => {
        const baseQuantity = Math.ceil(sizeMultiplier);
        items[itemKey] = (items[itemKey] || 0) + baseQuantity;
        totalHardwareCost += pricingConfig.hardwareCosts[itemKey as keyof typeof pricingConfig.hardwareCosts] * baseQuantity;
        totalLaborTime += pricingConfig.installationTimes[itemKey as keyof typeof pricingConfig.installationTimes] * baseQuantity;
      });
    });

    // Add buffer time
    const bufferedLaborTime = totalLaborTime * (1 + pricingConfig.bufferPercentage / 100);
    const totalLaborCost = bufferedLaborTime * pricingConfig.laborRate;
    const totalCost = totalHardwareCost + totalLaborCost;

    // Calculate range (±15% for basic, ±10% for advanced)
    const rangePercentage = calculatorMode === 'basic' ? 0.15 : 0.10;
    const estimateRange = {
      low: Math.round(totalCost * (1 - rangePercentage)),
      high: Math.round(totalCost * (1 + rangePercentage))
    };

    return {
      items,
      totalHardwareCost,
      totalLaborCost,
      totalInstallationTime: bufferedLaborTime,
      estimateRange
    };
  };

  const handleGetDetailedQuote = () => {
    setShowLeadCapture(true);
  };

  const resetCalculator = () => {
    setRooms([]);
    setWholeHomeItems({});
    setEstimateData(null);
    setShowTimeline(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cool-white to-soft-cyan/30 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-electric-blue/10 rounded-full text-electric-blue font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-electric-blue rounded-full mr-2"></span>
            Smart Home Calculator
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-graphite-gray mb-6">
            Get Your <span className="text-gradient">Smart Home</span> Estimate
          </h1>
          <p className="text-lg text-slate max-w-3xl mx-auto leading-relaxed">
            Calculate the cost of your smart home automation project with our intelligent 
            pricing calculator. Get instant estimates and timeline projections.
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg">            <button
              onClick={() => setCalculatorMode('basic')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                calculatorMode === 'basic'
                  ? 'bg-electric-blue text-white shadow-lg'
                  : 'text-graphite-gray hover:bg-gray-50'
              }`}
            >
              Basic Calculator
            </button>
            <button
              onClick={() => setCalculatorMode('advanced')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                calculatorMode === 'advanced'
                  ? 'bg-electric-blue text-white shadow-lg'
                  : 'text-graphite-gray hover:bg-gray-50'
              }`}
            >
              Advanced Calculator
            </button>
          </div>
        </div>

        {/* Calculator Content */}
        <div className="max-w-6xl mx-auto">
          {calculatorMode === 'basic' ? (
            <BasicCalculator
              rooms={rooms}
              setRooms={setRooms}
              onCalculate={calculateEstimate}
              isCalculating={isCalculating}
            />
          ) : (
            <AdvancedCalculator
              rooms={rooms}
              setRooms={setRooms}
              wholeHomeItems={wholeHomeItems}
              setWholeHomeItems={setWholeHomeItems}
              onCalculate={calculateEstimate}
              isCalculating={isCalculating}
            />
          )}

          {/* Results */}
          {estimateData && (
            <div className="mt-12 space-y-8">
              <EstimateSummary
                estimateData={estimateData}
                onGetDetailedQuote={handleGetDetailedQuote}
                onShowTimeline={() => setShowTimeline(true)}
                onReset={resetCalculator}
              />

              {showTimeline && (
                <TimelineVisualization
                  estimateData={estimateData}
                  onClose={() => setShowTimeline(false)}
                />
              )}
            </div>
          )}
        </div>

        {/* Lead Capture Modal */}
        {showLeadCapture && (
          <LeadCaptureModal
            estimateData={estimateData}
            onClose={() => setShowLeadCapture(false)}
          />
        )}
      </div>
    </div>
  );
};

export default PricingCalculator;
