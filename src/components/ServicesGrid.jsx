import React from 'react';
import { Link } from 'react-router-dom';

const ServicesGrid = () => {  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Smart Lighting Systems",
      description: "Professional smart lighting design and installation with Control4, Lutron, and wireless solutions. Transform your space with automated lighting control.",
      features: ["Lutron/Caséta Integration", "Scene Programming", "Voice Control", "Energy Monitoring"],
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v0a2 2 0 002-2h14a2 2 0 012 2v2" />
        </svg>
      ),
      title: "Home Automation",
      description: "Complete home automation systems integrating security, climate, entertainment, and smart devices for seamless control from anywhere.",
      features: ["Whole-home Integration", "Security Systems", "Climate Control", "Mobile App Control"],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Business Automation",
      description: "Professional office and commercial automation systems including conference rooms, access control, and operational efficiency solutions.",
      features: ["Conference Room Tech", "Access Control", "Energy Management", "Remote Monitoring"],
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Audio/Visual Systems",
      description: "Professional AV installations for home theaters, conference rooms, smart boards, and entertainment systems with seamless integration.",
      features: ["Home Theaters", "Conference Rooms", "Smart Boards", "Multi-room Audio"],
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "IT Services",
      description: "Comprehensive on-premises and cloud IT services including network setup, server management, and cybersecurity solutions.",
      features: ["Network Infrastructure", "Cloud Solutions", "Server Management", "Cybersecurity"],
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Ongoing Support",
      description: "Subscription-based monitoring and maintenance services to keep your smart systems running optimally with remote diagnostics.",
      features: ["Monthly Monitoring", "Remote Diagnostics", "Priority Support", "System Updates"],
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-primary" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            Our Services
          </div>          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
            Smart Integration Solutions
            <span className="text-gradient"> for Modern Living</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            From smart lighting and home automation to business AV systems and IT infrastructure,
            we provide comprehensive integrated solutions for residential and commercial properties.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-2xl p-8 card-hover h-full group cursor-pointer`}
              onClick={() => scrollToSection('contact')}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${service.iconColor} bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-dark mb-4">
                {service.title}
              </h3>
              <p className="text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-secondary">
                    <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center text-accent hover:text-blue-600 font-semibold transition-colors duration-200 group-hover:translate-x-2">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">            <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-4">
              Need a Custom Integration Solution?
            </h3>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Every space is unique. Contact us to discuss your smart home, business automation, 
              or IT infrastructure needs and get a personalized solution that fits your lifestyle and budget.
            </p>            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/calculator"
                className="btn-primary"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Get Instant Estimate
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Get Free Consultation
              </button><a
                href="tel:+18046016673"
                className="btn-secondary"
              >
                Call for Project Planning
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
