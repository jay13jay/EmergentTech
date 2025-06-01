import React from 'react';

const AboutSection = () => {  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Certified Integrators",
      description: "Control4, Crestron, and Lutron certified with expertise in multiple smart home platforms."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Ongoing Support Plans",
      description: "Subscription-based monitoring and maintenance to keep your systems running optimally."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Complete Integration",
      description: "End-to-end solutions combining lighting, security, AV, and IT into unified systems."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Transparent Pricing",
      description: "Project-based fees with recurring service options and no hidden costs."
    }
  ];
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Smart Homes Installed" },
    { number: "200+", label: "Business Integrations" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              About Emergent Tech
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Your Trusted
              <span className="text-gradient"> Integration Partner</span>
              <br />
              Since 2008
            </h2>
            
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              For over 15 years, Emergent Tech has been the premier smart home and automation 
              service provider in the metro area. Our certified team specializes in integrated 
              solutions that combine smart lighting, home automation, AV systems, and IT infrastructure.
            </p>
            
            <p className="text-secondary mb-8 leading-relaxed">
              We understand that technology should simplify your life, not complicate it. That's why 
              we focus on seamless integration, ongoing support, and solutions that grow with your needs. 
              From smart lighting upgrades to complete home automation systems, we deliver excellence.
              project with the same level of professionalism and attention to detail.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mr-4 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">{feature.title}</h3>
                    <p className="text-sm text-secondary">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+18046016673" className="btn-primary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <button className="btn-secondary">
                View Our Work
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main Image Placeholder */}
            <div className="bg-highlight rounded-2xl p-8 mb-8">
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">Expert Team</h3>
                <p className="text-secondary">Licensed professionals with years of experience</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-dark text-white rounded-xl p-6 text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">Fully Licensed</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-dark mb-4">Why Choose ElectricPro?</h3>
            <p className="text-secondary max-w-2xl mx-auto">
              We're not just electricians – we're your neighbors, committed to providing 
              exceptional service to our local community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-dark mb-2">Safety First</h4>
              <p className="text-secondary text-sm">All work performed to the highest safety standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-dark mb-2">Fast Response</h4>
              <p className="text-secondary text-sm">Quick response times for all service calls</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-dark mb-2">Customer Focused</h4>
              <p className="text-secondary text-sm">Your satisfaction is our top priority</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
