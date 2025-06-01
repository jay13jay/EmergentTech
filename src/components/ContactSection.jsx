import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgent: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  const services = [
    "Smart Lighting Systems",
    "Home Automation",
    "Business AV Systems",
    "IT Services & Support",
    "Security Systems",
    "Consultation & Planning",
    "Other"
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),      title: "Call Us",
      info: "(804) 601-6673",
      description: "Available for consultations"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      info: "info@emergenttech.com",
      description: "We respond within 2 hours"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      info: "123 Electric Ave, Springfield",
      description: "Mon-Fri 8AM-6PM"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-graphite-gray text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-gray to-graphite-gray/90"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-electric-blue/30 rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-soft-cyan/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-electric-blue/20 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-electric-blue">Touch</span>
          </h2>          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space with smart automation? Contact our certified integration specialists 
            for a free consultation and discover how we can enhance your home or business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 mb-2 font-medium">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2 font-medium">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 mb-2 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2 font-medium">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue"
                  >
                    <option value="" className="text-graphite-gray">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="text-graphite-gray">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/80 mb-2 font-medium">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 focus:border-electric-blue resize-none"
                  placeholder="Tell us about your smart home or automation needs..."
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="urgent"
                  id="urgent"
                  checked={formData.urgent}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-electric-blue bg-white/10 border-white/20 rounded focus:ring-electric-blue/50"
                />
                <label htmlFor="urgent" className="text-white/80">
                  This is an urgent electrical issue requiring immediate attention
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/25"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>              <p className="text-white/80 leading-relaxed">
                Our experienced integration specialists are ready to help with all your smart home and business automation needs. 
                Reach out today for professional service you can trust.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center text-electric-blue">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-electric-blue font-medium mb-1">{item.info}</p>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Banner */}
            <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h4 className="font-bold text-white">24/7 Emergency Service</h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Electrical emergencies don't wait for business hours. Our certified electricians 
                are available around the clock for urgent electrical issues.
              </p>
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300">
                Call Emergency Line
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
