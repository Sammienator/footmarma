import React, { useState } from 'react';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaFacebookF, FaTwitter, FaHome, FaInfoCircle, FaCommentAlt, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log('Subscribed with:', email);
    setSubscribed(true);
    setError('');
    setEmail('');
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-16" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Top section with logo and main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and about section */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">Foot Marma</h2>
            <p className="mb-6 text-gray-400">Specialized foot therapy based on ancient techniques to promote wellness and balance in your life.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/footmarma" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://facebook.com/footmarma" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com/footmarma" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#b" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"><FaHome className="mr-2" size={14} /> Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"><FaInfoCircle className="mr-2" size={14} /> Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"><FaInfoCircle className="mr-2" size={14} /> About Us</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"><FaCommentAlt className="mr-2" size={14} /> Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"><FaPhoneAlt className="mr-2" size={14} /> Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-3 text-gray-400 flex-shrink-0 mt-1" size={18} />
                <p>123 Wellness Street<br />Nairobi, Kenya</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-gray-400 flex-shrink-0" size={18} />
                <a href="mailto:footmarma@gmail.com" className="hover:text-white transition-colors duration-300">footmarma@gmail.com</a>
              </div>
            </div>
          </div>
          
          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest services and offers.</p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full p-3 pl-4 pr-12 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaPaperPlane size={16} />
              </button>
            </form>
            {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
            {subscribed && <p className="mt-2 text-green-400 text-sm">Thank you for subscribing!</p>}
          </div>
        </div>
        
        {/* Bottom section with copyright and terms */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Foot Marma. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;