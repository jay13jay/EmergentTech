import React from 'react';
import type { EstimateData } from './PricingCalculator';

interface TimelineVisualizationProps {
  estimateData: EstimateData;
  onClose: () => void;
}

const TimelineVisualization: React.FC<TimelineVisualizationProps> = ({
  estimateData,
  onClose
}) => {
  const formatDuration = (hours: number) => {
    const days = Math.ceil(hours / 8); // 8 hour work days
    return `${days} ${days === 1 ? 'day' : 'days'}`;
  };

  // Generate installation phases based on the items
  const generatePhases = () => {
    const phases = [
      {
        id: 'planning',
        name: 'Planning & Design',
        description: 'Site survey, system design, and project planning',
        duration: 1,
        color: 'bg-blue-500',
        items: ['Site survey', 'System design', 'Permits & approvals']
      },
      {
        id: 'infrastructure',
        name: 'Infrastructure Setup',
        description: 'Network setup, central hub installation, and core systems',
        duration: 2,
        color: 'bg-purple-500',
        items: []
      },
      {
        id: 'wiring',
        name: 'Electrical & Wiring',
        description: 'Installing switches, outlets, and low-voltage wiring',
        duration: 0,
        color: 'bg-yellow-500',
        items: []
      },
      {
        id: 'devices',
        name: 'Device Installation',
        description: 'Installing sensors, cameras, and smart devices',
        duration: 0,
        color: 'bg-green-500',
        items: []
      },
      {
        id: 'integration',
        name: 'System Integration',
        description: 'Connecting devices, programming scenes, and testing',
        duration: 1,
        color: 'bg-red-500',
        items: ['Device pairing', 'Scene programming', 'System testing']
      },
      {
        id: 'training',
        name: 'Training & Handover',
        description: 'User training, documentation, and final walkthrough',
        duration: 0.5,
        color: 'bg-indigo-500',
        items: ['User training', 'Documentation', 'Final walkthrough']
      }
    ];

    // Calculate duration for each phase based on installed items
    Object.entries(estimateData.items).forEach(([itemKey, quantity]) => {
      if (quantity > 0) {
        // Infrastructure items
        if (['smartHub', 'networkSetup', 'thermostat'].includes(itemKey)) {
          phases[1].items.push(`${itemKey} (${quantity})`);
          phases[1].duration += quantity * 0.5;
        }
        // Wiring items
        else if (['smartSwitch', 'smartDimmer', 'touchPanel'].includes(itemKey)) {
          phases[2].items.push(`${itemKey} (${quantity})`);
          phases[2].duration += quantity * 0.3;
        }
        // Device items
        else if (['motionSensor', 'securityCamera', 'smartSpeaker', 'motorizedBlind'].includes(itemKey)) {
          phases[3].items.push(`${itemKey} (${quantity})`);
          phases[3].duration += quantity * 0.2;
        }
      }
    });

    // Ensure minimum durations
    phases[2].duration = Math.max(phases[2].duration, 1);
    phases[3].duration = Math.max(phases[3].duration, 1);

    return phases;
  };

  const phases = generatePhases();
  const totalDays = phases.reduce((sum, phase) => sum + phase.duration, 0);
  const maxWidth = 100;

  let currentDay = 0;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-graphite-gray">Installation Timeline</h2>
            <p className="text-slate">Estimated completion: {formatDuration(estimateData.totalInstallationTime)}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Timeline */}
        <div className="p-6">
          {/* Timeline Header */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-slate mb-2">
              <span>Day 1</span>
              <span>Day {Math.ceil(totalDays)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-electric-blue rounded-full h-2 transition-all duration-1000"
                style={{ width: `${maxWidth}%` }}
              ></div>
            </div>
          </div>

          {/* Phase Details */}
          <div className="space-y-6">
            {phases.map((phase, index) => {
              const phaseStart = currentDay;
              currentDay += phase.duration;
              const phaseEnd = currentDay;
              
              return (
                <div key={phase.id} className="relative">
                  {/* Phase Header */}
                  <div className="flex items-start">
                    <div className={`w-12 h-12 ${phase.color} rounded-lg flex items-center justify-center text-white font-bold mr-4 flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-graphite-gray">
                            {phase.name}
                          </h3>
                          <p className="text-slate text-sm">
                            {phase.description}
                          </p>
                        </div>
                        <div className="text-right text-sm text-slate">
                          <div>Day {Math.ceil(phaseStart + 1)} - {Math.ceil(phaseEnd)}</div>
                          <div className="font-medium">{formatDuration(phase.duration * 8)}</div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className={`${phase.color} rounded-full h-3 transition-all duration-1000`}
                            style={{ 
                              width: `${(phase.duration / totalDays) * 100}%`,
                              marginLeft: `${(phaseStart / totalDays) * 100}%`
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Phase Items */}
                      {phase.items.length > 0 && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-medium text-graphite-gray mb-2">Tasks & Items:</h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {phase.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-center text-sm text-slate">
                                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-300"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Timeline Notes */}
          <div className="mt-8 p-4 bg-soft-cyan/20 rounded-lg">
            <h4 className="font-semibold text-graphite-gray mb-2">Timeline Notes:</h4>
            <ul className="text-sm text-slate space-y-1">
              <li>• Timeline may vary based on project complexity and site conditions</li>
              <li>• Installation typically occurs during business hours (8 AM - 5 PM)</li>
              <li>• Weather conditions may affect outdoor equipment installation</li>
              <li>• Final testing and training can be scheduled at your convenience</li>
              <li>• Emergency support available during installation period</li>
            </ul>
          </div>

          {/* Milestones */}
          <div className="mt-6">
            <h4 className="font-semibold text-graphite-gray mb-4">Key Milestones:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="font-medium text-graphite-gray">25% Complete</div>
                <div className="text-sm text-slate">Infrastructure Ready</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="font-medium text-graphite-gray">75% Complete</div>
                <div className="text-sm text-slate">Devices Operational</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="font-medium text-graphite-gray">100% Complete</div>
                <div className="text-sm text-slate">Ready to Enjoy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineVisualization;
