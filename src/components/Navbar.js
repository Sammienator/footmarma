import React, { useState, useEffect } from 'react';
import logo from '../assets/Marma.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scrolling effects
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow and background opacity when scrolled
      setScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.navbar-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-20 transition-all duration-300 ${
        scrolled 
          ? 'bg-custom-black/95 shadow-lg py-2' 
          : 'bg-custom-black py-3 sm:py-4'
      }`} 
      data-aos="fade-down"
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 sm:px-6 navbar-container">
        <a href="#home" className="flex items-center group" onClick={() => handleNavClick('home')}>
          <img 
            src={logo} 
            alt="Foot Marma Logo" 
            className="h-10 sm:h-12 mr-2 transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="text-lg sm:text-xl font-bold text-white">
            <span className="font-normal">foot</span>
            <span className="text-custom-silver"> MARMA</span>
          </span>
        </a>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-custom-silver/50 rounded"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Navigation */}
        <div className={`md:flex items-center md:space-x-8 ${
          isOpen 
            ? 'fixed top-14 left-0 w-full h-[calc(100vh-56px)] bg-custom-black/95 flex flex-col items-center justify-center space-y-4 py-6'
            : 'hidden md:flex'
        }`}>
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={() => handleNavClick(link.id)}
              className={`relative px-4 py-2 text-center text-base sm:text-lg transition-colors duration-300 ${
                activeSection === link.id 
                  ? 'text-custom-silver font-medium' 
                  : 'text-white hover:text-custom-silver'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-custom-silver rounded-full transform origin-left"></span>
              )}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mt-4 md:mt-0 px-6 py-2 bg-custom-silver text-custom-black rounded-full font-medium text-base sm:text-lg transition-all duration-300 hover:bg-white hover:shadow-md text-center"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;