import React, { useState, useEffect } from 'react';
import heroImage from '../assets/image2.jpg';
import heroImage2 from '../assets/image3.jpg';
import heroImage3 from '../assets/image2.jpg';

function Hero() {
  const images = [heroImage, heroImage2, heroImage3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden" data-aos="fade-in">
      <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out" style={{ backgroundImage: `url(${images[currentImage]})` }}>
        <div className="absolute inset-0 bg-custom-black bg-opacity-70"></div>
      </div>
      <div className="relative z-10 text-center bg-custom-silver bg-opacity-95 p-6 md:p-12 rounded-xl border-4 border-custom-black shadow-2xl" data-aos="zoom-in" data-aos-delay="300">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-custom-black drop-shadow-lg">Welcome to Foot Marma</h1>
        <p className="text-xl md:text-3xl mb-8 text-custom-black font-medium">Discover holistic healing through expert reflexology.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#contact" className="bg-custom-black text-custom-silver px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:bg-custom-silver hover:text-custom-black transition-all duration-300">Book Your Session</a>
          <a href="#services" className="bg-transparent border-2 border-custom-black text-custom-black px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-custom-black hover:text-custom-silver transition-all duration-300">Explore Services</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;