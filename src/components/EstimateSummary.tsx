import React from 'react';
import type { EstimateData } from './PricingCalculator';

interface EstimateSummaryProps {
  estimateData: EstimateData;
  onGetDetailedQuote: () => void;
  onShowTimeline: () => void;
  onReset: () => void;
}

const EstimateSummary: React.FC<EstimateSummaryProps> = ({
  estimateData,
  onGetDetailedQuote,
  onShowTimeline,
  onReset
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDuration = (hours: number) => {
    if (hours < 24) {
      return `${Math.round(hours)} hours`;
    }
    const days = Math.round(hours / 8); // 8 hour work days
    return `${days} ${days === 1 ? 'day' : 'days'}`;
  };

  const totalItems = Object.values(estimateData.items).reduce((sum, count) => sum + count, 0);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-electric-blue to-blue-600 text-white p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Your Smart Home Estimate</h2>
          <div className="text-6xl font-bold mb-2">
            {formatCurrency(estimateData.estimateRange.low)}
          </div>
          <div className="text-xl opacity-90 mb-4">
            Starting price - Full range: {formatCurrency(estimateData.estimateRange.low)} - {formatCurrency(estimateData.estimateRange.high)}
          </div>
          <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Estimated installation: {formatDuration(estimateData.totalInstallationTime)}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-electric-blue mb-2">
              {totalItems}
            </div>
            <div className="text-sm text-graphite-gray font-medium">
              Smart Devices
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-electric-blue mb-2">
              {formatCurrency(estimateData.totalHardwareCost)}
            </div>
            <div className="text-sm text-graphite-gray font-medium">
              Hardware Cost
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-electric-blue mb-2">
              {formatCurrency(estimateData.totalLaborCost)}
            </div>
            <div className="text-sm text-graphite-gray font-medium">
              Professional Installation
            </div>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-graphite-gray mb-4">Price Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-graphite-gray">Hardware & Equipment</span>
              <span className="font-semibold">{formatCurrency(estimateData.totalHardwareCost)}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-graphite-gray">Professional Installation</span>
              <span className="font-semibold">{formatCurrency(estimateData.totalLaborCost)}</span>
            </div>
            <div className="flex justify-between items-center py-3 text-lg font-bold">
              <span>Total Estimate Range</span>
              <span className="text-electric-blue">
                {formatCurrency(estimateData.estimateRange.low)} - {formatCurrency(estimateData.estimateRange.high)}
              </span>
            </div>
          </div>
        </div>

        {/* Features Included */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-graphite-gray mb-4">What's Included</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Professional installation & setup</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>System configuration & testing</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Mobile app setup & training</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>1-year warranty on installation</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Ongoing technical support</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free consultation & design</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-graphite-gray mb-2">
              Ready to Transform Your Home?
            </h3>
            <p className="text-slate">
              Get a detailed quote and schedule your free consultation with our smart home experts.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onGetDetailedQuote}
              className="btn-primary text-lg px-8 py-3"
            >
              Get Detailed Quote
            </button>
            <button
              onClick={onShowTimeline}
              className="btn-secondary text-lg px-8 py-3"
            >
              View Installation Timeline
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            <button
              onClick={onReset}
              className="text-slate hover:text-graphite-gray transition-colors duration-200"
            >
              Start Over
            </button>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-8 p-4 bg-soft-cyan/20 rounded-lg">
          <h4 className="font-semibold text-graphite-gray mb-2">Important Notes:</h4>
          <ul className="text-sm text-slate space-y-1">
            <li>• Estimates include 20% buffer time for unforeseen installation challenges</li>
            <li>• Final pricing may vary based on site survey and specific requirements</li>
            <li>• All work performed by licensed and insured professionals</li>
            <li>• Financing options available for qualified customers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EstimateSummary;
