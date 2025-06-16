import React, { useState } from 'react';
import jsPDF from 'jspdf';
import type { EstimateData } from './PricingCalculator';

interface LeadCaptureModalProps {
  estimateData: EstimateData | null;
  onClose: () => void;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  estimateData,
  onClose
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeline: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Generate and download PDF
      generatePDF();
    }, 2000);
  };
  const generatePDF = () => {
    // Create PDF with jsPDF
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let yPosition = 20;

    // Header
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('SMART HOME ESTIMATE', pageWidth / 2, yPosition, { align: 'center' });
    
    yPosition += 15;
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, pageWidth / 2, yPosition, { align: 'center' });
    
    yPosition += 20;

    // Customer Information
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Customer Information:', 20, yPosition);
    yPosition += 10;
    
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Name: ${formData.name}`, 20, yPosition);
    yPosition += 7;
    pdf.text(`Email: ${formData.email}`, 20, yPosition);
    yPosition += 7;
    pdf.text(`Phone: ${formData.phone}`, 20, yPosition);
    yPosition += 7;
    if (formData.timeline) {
      pdf.text(`Project Timeline: ${formData.timeline}`, 20, yPosition);
      yPosition += 7;
    }

    yPosition += 10;

    // Estimate Summary
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Estimate Summary:', 20, yPosition);
    yPosition += 10;

    if (estimateData) {
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text(`Total Estimate Range: ${formatCurrency(estimateData.estimateRange.low)} - ${formatCurrency(estimateData.estimateRange.high)}`, 20, yPosition);
      yPosition += 10;
      
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.text(`Hardware Cost: ${formatCurrency(estimateData.totalHardwareCost)}`, 30, yPosition);
      yPosition += 7;
      pdf.text(`Installation Cost: ${formatCurrency(estimateData.totalLaborCost)}`, 30, yPosition);
      yPosition += 7;
      pdf.text(`Installation Time: ${Math.round(estimateData.totalInstallationTime)} hours`, 30, yPosition);
      yPosition += 15;
    }

    // What's Included
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('What\'s Included:', 20, yPosition);
    yPosition += 10;

    const included = [
      'Professional installation & setup',
      'System configuration & testing',
      'Mobile app setup & training',
      '1-year warranty on installation',
      'Ongoing technical support',
      'Free consultation & design'
    ];

    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    included.forEach(item => {
      pdf.text(`• ${item}`, 30, yPosition);
      yPosition += 7;
    });

    yPosition += 10;

    // Next Steps
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Next Steps:', 20, yPosition);
    yPosition += 10;

    const nextSteps = [
      'Schedule your free consultation',
      'Site survey and design review',
      'Project planning and scheduling',
      'Professional installation'
    ];

    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    nextSteps.forEach((step, index) => {
      pdf.text(`${index + 1}. ${step}`, 30, yPosition);
      yPosition += 7;
    });

    yPosition += 15;

    // Contact Information
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Contact Information:', 20, yPosition);
    yPosition += 10;

    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.text('Emergent Tech', 30, yPosition);
    yPosition += 7;
    pdf.text('Phone: (804) 601-6673', 30, yPosition);
    yPosition += 7;
    pdf.text('Email: info@emergenttech.com', 30, yPosition);
    yPosition += 15;

    // Footer
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'italic');
    pdf.text('This estimate is valid for 30 days and subject to site survey confirmation.', pageWidth / 2, pageHeight - 20, { align: 'center' });

    // Save the PDF
    pdf.save(`smart-home-estimate-${formData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`);
  };

  const handleSkip = () => {
    onClose();
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-graphite-gray mb-4">
            Thank You!
          </h2>
          <p className="text-slate mb-6">
            Your estimate has been generated and downloaded. Our team will contact you within 24 hours to schedule your free consultation.
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-soft-cyan/20 rounded-lg text-sm">
              <strong>Next Steps:</strong><br />
              1. Review your downloaded estimate<br />
              2. Expect a call from our team<br />
              3. Schedule your free consultation
            </div>
            <button
              onClick={onClose}
              className="btn-primary w-full"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-graphite-gray">Get Your Detailed Quote</h2>
            <p className="text-slate">Receive a personalized PDF estimate and schedule your free consultation</p>
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

        {/* Estimate Preview */}
        {estimateData && (
          <div className="p-6 bg-gradient-to-r from-electric-blue/5 to-blue-50 border-b border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-blue mb-2">
                {formatCurrency(estimateData.estimateRange.low)} - {formatCurrency(estimateData.estimateRange.high)}
              </div>
              <div className="text-slate">
                Your Smart Home Estimate Range
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-graphite-gray mb-4">
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-graphite-gray mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-graphite-gray mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            {/* Contact Preferences */}
            <div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-graphite-gray mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-graphite-gray mb-2">
                    Project Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">ASAP (Within 2 weeks)</option>
                    <option value="month">Within 1 month</option>
                    <option value="quarter">Within 3 months</option>
                    <option value="planning">Still planning (6+ months)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium text-graphite-gray mb-2">
                Additional Notes or Questions
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                placeholder="Tell us about any specific requirements, questions, or preferences for your smart home project..."
              />
            </div>

            {/* Benefits */}
            <div className="bg-soft-cyan/20 rounded-lg p-4">
              <h4 className="font-semibold text-graphite-gray mb-3">What You'll Receive:</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Detailed PDF estimate with itemized breakdown</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Free consultation within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Custom design recommendations</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">No obligation, no pressure</span>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="text-xs text-slate">
              <p>
                By submitting this form, you agree to be contacted by Emergent Tech regarding your smart home project. 
                We respect your privacy and will never share your information with third parties. 
                You can unsubscribe at any time.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary flex-1 py-3 text-lg font-semibold ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Quote...
                  </div>
                ) : (
                  'Get My Detailed Quote'
                )}
              </button>
              <button
                type="button"
                onClick={handleSkip}
                className="btn-secondary flex-1 py-3 text-lg font-semibold"
              >
                Skip for Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadCaptureModal;
