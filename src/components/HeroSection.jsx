import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Certified Smart Home & Automation Specialists
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your{' '}
              <span className="text-gradient">Space</span>
              <br />
              <span className="text-dark">With Smart Automation</span>
              <br />
              <span className="text-secondary text-3xl sm:text-4xl lg:text-5xl">
                & Integrated Solutions
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg lg:text-xl text-secondary leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              From smart lighting and home automation to business AV systems and IT services, 
              we create integrated solutions that enhance your lifestyle and productivity.
            </p>            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                to="/calculator"
                className="btn-primary text-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Get Instant Estimate
              </Link>
              <a
                href="tel:+18046016673"
                className="btn-secondary text-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now: (804) 601-6673
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary text-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3a4 4 0 118 0v4m-4 9l-3-3m3 3l3-3m-3 3V10"
                  />
                </svg>
                Book Online
              </button>
            </div>            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-secondary">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Certified Integrators
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Ongoing Support Plans
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free Consultations
              </div>
            </div>
          </div>

          {/* Visual/Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 card-hover">              <div className="text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m13 0h-13m11-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">Integrated Solutions</h3>
                <p className="text-secondary mb-6">
                  Certified specialists in smart home automation, AV systems, and IT infrastructure.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent">15+</div>
                    <div className="text-sm text-secondary">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">500+</div>
                    <div className="text-sm text-secondary">Smart Homes Installed</div>
                  </div>
                </div>
              </div>
            </div>
              {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
              <div className="text-sm font-semibold">Smart Solutions</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">Free Consultations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
