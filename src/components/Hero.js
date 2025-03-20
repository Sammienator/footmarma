import React, { useState, useEffect } from 'react';
import heroImage from '../assets/image2.jpg';
import heroImage2 from '../assets/image3.jpg'; // Add more images as needed
import heroImage3 from '../assets/image2.jpg'; // Add more images as needed

function Hero() {
  const images = [heroImage, heroImage2, heroImage3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 15000); // 15 seconds interval
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-cover bg-center transition-opacity duration-3000 ease-in-out" style={{ backgroundImage: `url(${images[currentImage]})`, opacity: 1 }}>
        <div className="absolute inset-0 bg-custom-black bg-opacity-80"></div> {/* Darker overlay for contrast */}
      </div>
      <div className="relative z-10 text-center bg-custom-silver bg-opacity-90 p-12 rounded-lg border-2 border-custom-black" data-aos="fade-up">
        <h1 className="text-6xl font-extrabold mb-6 text-custom-black text-shadow-lg">Welcome to Foot Marma</h1>
        <p className="text-3xl mb-8 text-custom-black">Find harmony with every step!</p>
        <a href="#contact" className="bg-custom-black text-custom-silver px-8 py-4 rounded-lg shadow-lg hover:bg-custom-silver hover:text-custom-black transition-all duration-300">Book Now</a>
      </div>
    </section>
  );
}

export default Hero;