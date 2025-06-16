import React from 'react';

const Footer = () => {  const quickLinks = [
    { name: "Smart Lighting Systems", href: "#services" },
    { name: "Home Automation", href: "#services" },
    { name: "Business AV Systems", href: "#services" },
    { name: "IT Services", href: "#contact" },
    { name: "Free Consultation", href: "#contact" }
  ];

  const company = [
    { name: "About Us", href: "#about" },
    { name: "Our Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog & Tips", href: "#blog" },
    { name: "Careers", href: "#" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Licensing", href: "#" },
    { name: "Insurance", href: "#" },
    { name: "Warranty", href: "#" }
  ];
  const certifications = [
    "Licensed & Insured",
    "Control4 Certified",
    "Lutron Certified",
    "Crestron Authorized",
    "IT Security Compliant"
  ];

  return (
    <footer className="bg-graphite-gray text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 border border-electric-blue rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-soft-cyan rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-electric-blue/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-electric-blue rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-white">Emergent Tech</span>
            </div>
              <p className="text-white/80 leading-relaxed mb-6">
              Your trusted smart home and automation experts serving the community with integrated 
              solutions for lighting, security, AV systems, and IT infrastructure for over 15 years.
            </p>

            {/* Certifications */}
            <div className="space-y-2">
              <h4 className="font-semibold text-electric-blue mb-3">Certifications & Memberships</h4>
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-white/70">
                  <svg className="w-4 h-4 text-electric-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-electric-blue transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 text-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-electric-blue transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 text-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-electric-blue">Get in Touch</h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>                <div>
                  <p className="text-white font-medium">(804) 601-6673</p>
                  <p className="text-white/60 text-sm">24/7 Emergency</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">info@emergenttech.com</p>
                  <p className="text-white/60 text-sm">Quick Response</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Springfield Area</p>
                  <p className="text-white/60 text-sm">Serving 50+ Mile Radius</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { name: 'Facebook', icon: 'M18.77 7.46H15.5v-1.9c0-.9.6-1.1 1-1.1h2.2V2.5h-3c-3.44 0-4.2 2.58-4.2 4.24v1.72H9v2.42h2.5v8.12h3.5v-8.12h2.77l.5-2.42z' },
                  { name: 'Twitter', icon: 'M23.32 4.56c-.9.4-1.9.67-2.94.8 1.06-.63 1.87-1.63 2.26-2.83-.99.59-2.1 1.02-3.26 1.25-.94-1-2.28-1.62-3.76-1.62-2.84 0-5.15 2.3-5.15 5.15 0 .4.05.8.13 1.18-4.28-.22-8.08-2.27-10.62-5.39-.44.76-.7 1.64-.7 2.58 0 1.78.91 3.35 2.29 4.27-.84-.03-1.64-.26-2.33-.65v.07c0 2.49 1.77 4.57 4.12 5.04-.43.12-.88.18-1.35.18-.33 0-.65-.03-.96-.09.65 2.03 2.53 3.51 4.77 3.55-1.75 1.37-3.96 2.19-6.36 2.19-.41 0-.82-.02-1.22-.07 2.27 1.45 4.97 2.3 7.88 2.3' },
                  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/10 hover:bg-electric-blue rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2025 Teague Electric. All rights reserved. | Licensed, Bonded & Insured
            </div>
            
            <div className="flex flex-wrap gap-6">
              {legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <div className="text-center text-white/50 text-sm">
              <p className="mb-2">
                Professional electrical services with over 15 years of experience. 
                Serving Springfield and surrounding areas with 24/7 emergency support.
              </p>
              <p>
                License #EL123456 | Fully Insured | NECA Member | Better Business Bureau A+ Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
