import React from 'react';

function Services() {
  const services = [
    { 
      title: 'FOOT REFLEXOLOGY', 
      duration: '60 min', 
      price: 'KShs 5,000', 
      desc: 'Acupressure on major reflex points of the feet to release tension, sleep disorders, hormonal imbalances and digestive disorders, this gentle therapy encourages the body to work naturally to restore its own healthy balance.'
    },
    { 
      title: 'TOP TO TOE REBOOT', 
      duration: '60 min', 
      price: 'KShs 5,000', 
      desc: 'Your feet are the foundation of your health, so this sole to soul transformation starts with 30 minute pressure point reflex to fire up your energy channels. Destress further with a 30 minute traditional indian head massage with warm blended coconut oil infused with rosemary.'
    },
    { 
      title: 'ROOT BALANCE', 
      duration: '30 min', 
      price: 'KShs 2,000', 
      desc: 'An invigorating 10 minute organic foot scrub followed by 20 minute energetic lower leg and foot massage to stimulate circulation and lymphatic system to leave hard working feet walking on air.'
    },
    { 
      title: 'TOUCH OF MARMA', 
      duration: '60 min', 
      price: 'KShs 5,000', 
      desc: 'A restorative back and shoulder massage targets to loosen your knots, tension, and back pain, clears the mind and promotes balance.'
    },
    { 
      title: 'TOTOK WAJAH FACIAL', 
      duration: '30 min', 
      price: 'KShs 2,500', 
      desc: 'Relieve sinus congestion, boost your complexion, banish fine lines and improve blood circulation with Gua Sha stone face massage that targets facial pressure points, finish with a hydrating mask for maximum impact.'
    },
    { 
      title: 'EXPRESS MASSAGE', 
      duration: '30 min', 
      price: 'KShs 2,000', 
      desc: 'For those of you on a tight schedule this short but effective massage focusing on the head, neck and shoulders will help to relieve tension and stress.'
    },
    { 
      title: 'FOOT RITUAL', 
      duration: '60 min', 
      price: 'KShs 3,500', 
      desc: 'This therapy promotes holistic balance as you immerse your feet in warm aroma detox foot bath-peppermint foot scrub-choice of relaxing 20 minute foot reflex or massage.'
    },
    { 
      title: 'JEWELS OF THE NILE', 
      duration: '50 min', 
      price: 'KShs 6,000', 
      desc: 'Based on two people. Submerge your soles into 15 minute Aroma foot detox as your feet are cleansed and detoxed, fall into a 15 minute tranquil state of luxury as your neck and shoulders are carefully massaged wind up good gossip moment with a 20 minute relaxing foot massage.'
    },
  ];

  // Placeholder image URLs - replace these with your actual images
  const featuredImageSrc = "/api/placeholder/800/400";
  
  return (
    <section 
      id="services" 
      className="py-20 bg-gradient-to-b from-custom-black via-gray-900 to-black min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
      data-aos="fade-up" 
      data-aos-duration="1500"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm uppercase tracking-wider font-semibold mb-2 inline-block">Treatments & Therapies</span>
          <h2 className="text-5xl font-bold text-white mb-6">Our Signature Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience the art of relaxation and rejuvenation with our carefully curated spa treatments
          </p>
        </div>
        
        {/* Service Items - First 3 services */}
        <div className="grid grid-cols-1 gap-12 mb-24">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={service.title}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay={index * 100}
            >
              <div className="max-w-md group">
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">{service.title}</h3>
                
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gray-200 text-sm font-medium px-2 py-0.5 rounded-full border border-purple-500/30">
                    {service.duration}
                  </span>
                  <span className="text-purple-400 text-xl font-bold">{service.price}</span>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Image - After first 3 services */}
        <div className="mb-24 relative overflow-hidden rounded-2xl" data-aos="zoom-in" data-aos-duration="1200">
          <div className="relative aspect-video">
            <img 
              src={featuredImageSrc} 
              alt="Foot Marma Signature Treatment" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-black/40 flex items-center justify-center">
              <div className="text-center px-6">
                <span className="bg-purple-500/20 text-white backdrop-blur-sm py-2 px-4 rounded-full text-sm uppercase tracking-wider border border-purple-500/30">Featured</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-2">Experience True Relaxation</h3>
                <p className="text-gray-200 max-w-lg mx-auto">Our holistic treatments combine ancient wisdom with modern techniques to restore balance to your body and mind.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Items - Remaining services */}
        <div className="grid grid-cols-1 gap-12">
          {services.slice(3).map((service, index) => (
            <div
              key={service.title}
              className={`flex ${(index + 3) % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              data-aos={(index + 3) % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-delay={index * 100}
            >
              <div className="max-w-md group">
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">{service.title}</h3>
                
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-gray-200 text-sm font-medium px-2 py-0.5 rounded-full border border-purple-500/30">
                    {service.duration}
                  </span>
                  <span className="text-purple-400 text-xl font-bold">{service.price}</span>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <div className="inline-block p-0.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
            <a 
              href="#contact" 
              className="group bg-black hover:bg-transparent transition-colors duration-300 text-white px-8 py-3 rounded-lg inline-flex items-center space-x-2"
            >
              <span>Book Your Appointment</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;