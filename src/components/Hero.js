import React, { useState, useEffect, useCallback, useRef } from 'react';
import heroImage from '../assets/image2.jpg';
import heroImage2 from '../assets/image3.jpg';
import heroImage3 from '../assets/image2.jpg';

function Hero() {
  const images = [
    { src: heroImage, alt: "Foot reflexology session", position: "center" },
    { src: heroImage2, alt: "Relaxing foot massage", position: "center" },
    { src: heroImage3, alt: "Holistic healing therapy", position: "center" }
  ];
  
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const slideDuration = 8000; // 8 seconds per slide
  const transitionDuration = 1000; // 1 second transition

  // Handle slider navigation
  const goToSlide = useCallback((index) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentImage(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, transitionDuration);
  }, [isTransitioning]);

  // Navigate to next slide
  const nextSlide = useCallback(() => {
    goToSlide((currentImage + 1) % images.length);
  }, [currentImage, images.length, goToSlide]);

  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    goToSlide((currentImage - 1 + images.length) % images.length);
  }, [currentImage, images.length, goToSlide]);

  // Auto-advance slider
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, slideDuration);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide]);

  // Pause auto-advance on hover
  const pauseAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Resume auto-advance when no longer hovering
  const resumeAutoplay = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, slideDuration);
  };

  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center relative overflow-hidden"
      data-aos="fade-in"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Background image slider */}
      {images.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`} 
          style={{ 
            backgroundImage: `url(${image.src})`,
            backgroundPosition: image.position,
            zIndex: index === currentImage ? 1 : 0
          }}
          aria-hidden={index !== currentImage}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-custom-black/80 to-custom-black/50"></div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-custom-black/30 hover:bg-custom-black/60 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-custom-black/30 hover:bg-custom-black/60 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              index === currentImage ? 'w-8 bg-custom-silver' : 'w-2 bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentImage ? 'true' : 'false'}
          />
        ))}
      </div>

      {/* Content card */}
      <div 
        className="relative z-10 text-center max-w-4xl mx-6"
        data-aos="zoom-in" 
        data-aos-delay="300"
      >
        <div className="bg-custom-silver/95 p-6 md:p-12 rounded-xl border-2 border-custom-black shadow-2xl backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-custom-black">
            Welcome to <span className="relative inline-block">
              Foot Marma
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-custom-black/30 rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-custom-black/90 font-medium max-w-2xl mx-auto">
            Discover holistic healing through expert reflexology and restore your body's natural balance.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="group bg-custom-black text-custom-silver px-6 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:bg-custom-silver hover:text-custom-black border-2 border-custom-black transition-all duration-300 flex items-center justify-center"
            >
              <span>Book Your Session</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            <a 
              href="#services" 
              className="group bg-transparent border-2 border-custom-black text-custom-black px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-custom-black hover:text-custom-silver transition-all duration-300 flex items-center justify-center"
            >
              <span>Explore Services</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-custom-silver/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-custom-silver/20 rounded-full blur-3xl"></div>
    </section>
  );
}

export default Hero;