import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      // Navigate to home page and then scroll
      window.location.href = `/#${sectionId}`;
    }
  };

  return (    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-lg backdrop-blur-sm'
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">          {/* Logo */}          
          <Link to="/" className="flex-shrink-0">
            <div className="text-2xl lg:text-3xl font-bold text-gradient">
              Emergent Tech
            </div>
          </Link>          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-graphite-gray hover:text-electric-blue transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-graphite-gray hover:text-electric-blue transition-colors duration-200 font-medium"
            >
              About
            </button>
            <Link
              to="/calculator"
              className="text-graphite-gray hover:text-electric-blue transition-colors duration-200 font-medium"
            >
              Pricing Calculator
            </Link>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-graphite-gray hover:text-electric-blue transition-colors duration-200 font-medium"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-graphite-gray hover:text-electric-blue transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </nav>{/* CTA Button - Desktop */}          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />            <a
              href="tel:+18046016673"
              className="text-electric-blue hover:text-blue-600 font-semibold transition-colors duration-200"
            >
              (804) 601-6673
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Get Quote
            </button>
          </div>          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-graphite-gray dark:text-gray-300 hover:text-electric-blue transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />                )}
              </svg>
            </button>
          </div>
        </div>        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-graphite-gray hover:text-electric-blue transition-colors duration-200 font-medium w-full text-left"
              >
                Services
              </button>              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-graphite-gray hover:text-electric-blue transition-colors duration-200 font-medium w-full text-left"
              >
                About
              </button>
              <Link
                to="/calculator"
                className="block px-3 py-2 text-graphite-gray hover:text-electric-blue transition-colors duration-200 font-medium w-full text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing Calculator
              </Link>
              <button
                onClick={() => scrollToSection('blog')}
                className="block px-3 py-2 text-graphite-gray hover:text-electric-blue transition-colors duration-200 font-medium w-full text-left"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-graphite-gray hover:text-electric-blue transition-colors duration-200 font-medium w-full text-left"
              >
                Contact
              </button>              <div className="px-3 py-2 border-t border-gray-200 dark:border-gray-700 mt-2">
                <a
                  href="tel:+18046016673"
                  className="block text-electric-blue hover:text-blue-600 font-semibold mb-2"
                >
                  (804) 601-6673
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary w-full justify-center"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
