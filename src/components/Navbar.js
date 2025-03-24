import React, { useState } from 'react';
import logo from '../assets/Marma.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-custom-black text-white p-4 fixed w-full top-0 z-20 shadow-md" data-aos="fade-down">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Foot Marma Logo" className="h-12 mr-2" />
          <span className="text-xl font-bold">Foot Marma</span>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-custom-silver focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap ELISA="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div className={`md:flex space-x-6 ${isOpen ? 'block absolute top-16 left-0 w-full bg-custom-black p-4' : 'hidden md:block'}`}>
          <a href="#home" className="block hover:text-custom-silver py-2 md:py-0">Home</a>
          <a href="#services" className="block hover:text-custom-silver py-2 md:py-0">Services</a>
          <a href="#about" className="block hover:text-custom-silver py-2 md:py-0">About</a>
          <a href="#contact" className="block hover:text-custom-silver py-2 md:py-0">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;