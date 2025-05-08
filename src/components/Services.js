import React, { useState, useEffect } from 'react';
import { FaSpa, FaHandHoldingHeart, FaRunning, FaLeaf, FaSyringe, FaBackspace, FaUserMd, FaFlushed } from 'react-icons/fa';
import Hero from "../assets/hero.jpg";
import Marma from "../assets/Marma.png";
import image2 from "../assets/image2.jpg";

function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const services = [
    { 
      title: 'FOOT REFLEXOLOGY', 
      duration: '60 min', 
      price: 'KShs 5,000', 
      desc: 'Acupressure on major reflex points of the feet to release tension, sleep disorders, hormonal imbalances and digestive disorders, this gentle therapy encourages the body to work naturally to restore its own healthy balance.', 
      icon: <FaSpa className="text-4xl md:text-5xl" />,
      image: Hero
    },
    { 
      title: 'TOP TO TOE REBOOT', 
      duration: '60 min', 
      price: 'KShs 5,000', 
      desc: 'Your feet are the foundation of your health, so this sole to soul transformation starts with 30 minute pressure point reflex to fire up your energy channels. Destress further with a 30 minute traditional indian head massage with warm blended coconut oil infused with rosemary.', 
      icon: <FaHandHoldingHeart className="text-4xl md:text-5xl" />,
      image: Hero
    },
    { 
      title: 'ROOT BALANCE', 
      duration: '30 min', 
      price: 'KShs 2,000', 
      desc: 'An invigorating 10 minute organic foot scrub followed by 20 minute energetic lower leg and foot massage to stimulate circulation and lymphatic system to leave hard working feet walking on air.', 
      icon: <FaRunning className="text-4xl md:text-5xl" />,
      image: Hero
    },
    { 
      title: 'TOUCH OF MARMA', 
      duration: '60 min', 
      price: 'KShs 5,000', 
      desc: 'A restorative back and shoulder massage targets to loosen your knots, tension, and back pain, clears the mind and promotes balance.', 
      icon: <FaLeaf className="text-4xl md:text-5xl" />,
      image: Hero
    },
    { 
      title: 'TOTOK WAJAH FACIAL', 
      duration: '30 min', 
      price: 'KShs 2,500', 
      desc: 'Relieve sinus congestion, boost your complexion, banish fine lines and improve blood circulation with Gua Sha stone face massage that targets facial pressure points, finish with a hydrating mask for maximum impact.', 
      icon: <FaFlushed className="text-4xl md:text-5xl" />,
      image: Marma
    },
    { 
      title: 'EXPRESS MASSAGE', 
      duration: '30 min', 
      price: 'KShs 2,000', 
      desc: 'For those of you on a tight schedule this short but effective massage focusing on the head, neck and shoulders will help to relieve tension and stress.', 
      icon: <FaUserMd className="text-4xl md:text-5xl" />,
      image: Marma
    },
    { 
      title: 'FOOT RITUAL', 
      duration: '60 min', 
      price: 'KShs 3,500', 
      desc: 'This therapy promotes holistic balance as you immerse your feet in warm aroma detox foot bath-peppermint foot scrub-choice of relaxing 20 minute foot reflex or massage.', 
      icon: <FaSyringe className="text-4xl md:text-5xl" />,
      image: image2
    },
    { 
      title: 'JEWELS OF THE NILE', 
      duration: '50 min', 
      price: 'KShs 6,000', 
      desc: 'Based on two people. Submerge your soles into 15 minute Aroma foot detox as your feet are cleansed and detoxed, fall into a 15 minute tranquil state of luxury as your neck and shoulders are carefully massaged wind up good gossip moment with a 20 minute relaxing foot massage.', 
      icon: <FaBackspace className="text-4xl md:text-5xl" />,
      image: image2
    },
  ];

  // Auto-rotate through services
  useEffect(() => {
    const rotationTimer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveService((prev) => (prev + 1) % services.length);
        setIsAnimating(false);
      }, 500);
    }, 20000);
    
    return () => clearTimeout(rotationTimer);
  }, [activeService, services.length]);

  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black text-center overflow-hidden" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">Our Signature Services</h2>
        <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-12 lg:mb-16 max-w-2xl mx-auto">
          Experience the art of relaxation and rejuvenation with our carefully curated spa treatments
        </p>
        
        {/* Service Navigation - Scrollable on mobile */}
        <div className="flex overflow-x-auto pb-4 hide-scrollbar mb-8 md:mb-12 justify-start md:justify-center md:flex-wrap md:gap-3">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`px-3 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 mx-1 md:mx-0 ${
                activeService === index 
                  ? 'bg-white text-gray-900 shadow-lg scale-105' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Featured Service - Adaptive height */}
        <div className="relative min-h-[550px] sm:min-h-[500px] md:min-h-[450px] lg:min-h-[400px] mb-8 md:mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`absolute w-full h-full transition-all duration-500 ${
                activeService === index 
                  ? 'opacity-100 translate-x-0' 
                  : index < activeService 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              } ${isAnimating ? 'scale-95' : 'scale-100'}`}
            >
              <div className="relative rounded-2xl p-6 sm:p-8 shadow-xl h-full flex flex-col md:flex-row items-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-50" />
                  <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
                <div className="relative z-10 w-full flex flex-col md:flex-row items-center">
                  {/* Icon container - smaller on mobile */}
                  <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-5 md:p-8 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  {/* Text content - Optimized for small screens */}
                  <div className="md:w-2/3 md:pl-6 lg:pl-8 text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{service.title}</h3>
                    <div className="flex items-center mb-3">
                      <span className="bg-white/30 rounded-full px-3 py-1 text-xs md:text-sm font-medium">{service.duration}</span>
                      <span className="ml-3 text-lg md:text-xl font-bold">{service.price}</span>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg overflow-y-auto max-h-64 md:max-h-full">{service.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add custom CSS for hiding scrollbar but keeping functionality */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
      `}</style>
    </section>
  );
}

export default Services;