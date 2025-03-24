import React from 'react';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-custom-black text-custom-silver py-12" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Foot Marma</h3>
          <p>© 2025 Foot Marma. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="flex items-center mb-2"><FaEnvelope className="mr-2" /> footmarma@gmail.com</p>
          <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Nairobi, Kenya</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
          <a href="https://www.instagram.com/footmarma" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-custom-silver mb-4">
            <FaInstagram className="mr-2" /> @footmarma
          </a>
          <form className="flex flex-col sm:flex-row">
            <input type="email" placeholder="Your email" className="p-2 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none bg-custom-black border border-custom-silver text-custom-silver w-full sm:w-auto" />
            <button type="submit" className="p-2 bg-custom-silver text-custom-black rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-custom-black hover:text-custom-silver transition">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;