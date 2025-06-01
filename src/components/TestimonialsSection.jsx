import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown Metro",
      rating: 5,
      text: "ElectricPro saved the day when our main panel failed during a storm. They responded within an hour and had us back up and running the same day. Professional, knowledgeable, and fairly priced.",
      service: "Emergency Panel Repair"
    },
    {
      name: "Mike Chen",
      location: "Westside Business District",
      rating: 5,
      text: "Outstanding work on our office renovation. The team was punctual, clean, and completed the project ahead of schedule. Our new lighting system looks amazing and has reduced our energy costs significantly.",
      service: "Commercial Lighting Installation"
    },
    {
      name: "Jennifer Martinez",
      location: "Suburban Heights",
      rating: 5,
      text: "I called ElectricPro for a home automation consultation and ended up getting a complete smart home system. The installation was flawless and the team took time to explain everything. Love controlling my house from my phone!",
      service: "Smart Home Automation"
    },
    {
      name: "Robert Thompson",
      location: "Historic District",
      rating: 5,
      text: "Needed electrical work for my 1920s home renovation. ElectricPro handled the complex wiring challenges perfectly while preserving the home's character. Their expertise with older homes is impressive.",
      service: "Historic Home Rewiring"
    },
    {
      name: "Lisa Wang",
      location: "Tech Corridor",
      rating: 5,
      text: "Fast, reliable service for our startup office. They installed our server room electrical infrastructure and set up our security system. Professional team that understands business needs.",
      service: "Commercial Installation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-primary" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            Customer Reviews
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
            What Our Customers
            <span className="text-gradient"> Say About Us</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our electrical services.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L4.414 9H17a1 1 0 100-2H4.414l1.879-1.879z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <div className="flex mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                
                <blockquote className="text-lg lg:text-xl text-dark leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-dark">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-secondary text-sm">
                      {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-accent font-medium text-sm">
                      {testimonials[currentTestimonial].service}
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Avatar Placeholder */}
              <div className="text-center lg:text-right">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto lg:mx-0 lg:ml-auto mb-4">
                  <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-accent">{testimonials[currentTestimonial].rating}.0</div>
                <div className="text-sm text-secondary">out of 5 stars</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center text-accent transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial ? 'bg-accent' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center text-accent transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Review Summary */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">4.9</div>
            <div className="flex justify-center mb-2">
              {renderStars(5)}
            </div>
            <div className="text-secondary text-sm">Average Rating</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-dark font-semibold mb-2">Happy Customers</div>
            <div className="text-secondary text-sm">Served Since 2008</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-dark font-semibold mb-2">Satisfaction Rate</div>
            <div className="text-secondary text-sm">Guaranteed Quality</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-dark mb-4">Ready to Join Our Happy Customers?</h3>
          <p className="text-secondary mb-8 max-w-2xl mx-auto">
            Experience the same quality service that our customers rave about. 
            Contact us today for your electrical needs.
          </p>
          <button className="btn-primary">
            Get Your Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
