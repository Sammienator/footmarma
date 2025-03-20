import React from 'react';
import logo from '../assets/Marma.png';

function Navbar() {
  return (
    <nav className="bg-custom-black text-white p-4 fixed w-full top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Foot Marma Logo" className="h-12 mr-2" />
          <span className="text-xl font-bold">Foot Marma</span>
        </div>
        <div className="space-x-4">
          <a href="#home" className="hover:text-custom-silver">Home</a>
          <a href="#services" className="hover:text-custom-silver">Services</a>
          <a href="#about" className="hover:text-custom-silver">About</a>
          <a href="#contact" className="hover:text-custom-silver">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;