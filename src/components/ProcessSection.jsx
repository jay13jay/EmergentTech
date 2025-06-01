import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call or Email Now",
      description: "Contact us for immediate assistance or schedule a convenient appointment. We respond quickly to all inquiries.",
      action: "Get Started"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 9l-3-3m3 3l3-3m-3 3V10" />
        </svg>
      ),
      title: "Book Services in Minutes",
      description: "Quick and easy scheduling that fits your timeline. Choose the time that works best for you.",
      action: "Schedule Now"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Our Team Gets Work Done",
      description: "Professional, licensed electricians complete your project safely and efficiently with guaranteed satisfaction.",
      action: "See Results"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            Simple Process
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
            How We Make Electrical Work
            <span className="text-gradient"> Simple & Fast</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Our streamlined process ensures you get professional electrical services 
            quickly and efficiently, from first contact to project completion.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-highlight/30 rounded-2xl p-8 card-hover h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-accent text-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-dark mb-4">
                  {step.title}
                </h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Action Button */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-accent hover:text-blue-600 font-semibold transition-colors duration-200 flex items-center justify-center mx-auto"
                >
                  {step.action}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 -right-6 lg:-right-12 w-12 lg:w-24 h-0.5 bg-accent/30"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-dark rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait for electrical problems to get worse. Contact us today for 
              professional service you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="btn-primary bg-accent hover:bg-blue-600"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Emergency Line
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary border-white text-white hover:bg-white hover:text-dark"
              >
                Request Free Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
