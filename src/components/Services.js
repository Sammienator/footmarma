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

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col items-center justify-center" data-aos="fade-up" data-aos-duration="1500">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Signature Services</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Experience the art of relaxation and rejuvenation with our carefully curated spa treatments
          </p>
        </div>
        
        {/* Service Items */}
        <div className="grid grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-delay={index * 200} // Stagger animations
            >
              <div className="max-w-md text-center">
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                
                <div className="flex items-center gap-3 mb-1 justify-center">
                  <span className="bg-gray-700 text-gray-200 text-sm font-medium px-2 py-1 rounded-full">
                    {service.duration}
                  </span>
                  <span className="text-purple-400 text-xl font-bold">{service.price}</span>
                </div>
                
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;