import React from 'react';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-custom-black text-custom-silver py-8">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>© 2025 Foot Marma. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/footmarma" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-custom-black">
            <FaInstagram className="mr-1" /> @footmarma
          </a>
          <a href="mailto:footmarma@gmail.com" className="flex items-center hover:text-custom-black">
            <FaEnvelope className="mr-1" /> footmarma@gmail.com
          </a>
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-1" /> Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;