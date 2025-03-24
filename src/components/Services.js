import React from 'react';
import { FaSpa, FaHandHoldingHeart, FaRunning, FaLeaf, FaSyringe, FaBackspace } from 'react-icons/fa';

function Services() {
  const services = [
    { title: 'Thai Foot Massage', duration: '75 min', price: 'KShs 6,000', desc: 'A traditional Thai technique blending acupressure and stretching.', icon: <FaSpa /> },
    { title: 'Head, Neck, and Shoulder', duration: '30 min', price: 'KShs 2,000', desc: 'Targeted relief for tension and stress.', icon: <FaHandHoldingHeart /> },
    { title: 'Footloose', duration: '30 min', price: 'KShs 1,500', desc: 'A quick, invigorating foot massage.', icon: <FaRunning /> },
    { title: 'De-stress & Refresh', duration: '60 min', price: 'KShs 4,000', desc: 'A full-body relaxation session.', icon: <FaLeaf /> },
    { title: 'Sole Therapy', duration: '60 min', price: 'KShs 5,000', desc: 'Expert reflexology for holistic wellness.', icon: <FaSyringe /> },
    { title: 'Back Massage', duration: '30 min', price: 'KShs 3,500', desc: 'A soothing massage to ease back pain.', icon: <FaBackspace /> },
  ];

  return (
    <section id="services" className="py-20 text-center bg-custom-black" data-aos="fade-up">
      <h2 className="text-4xl md:text-5xl font-bold text-custom-silver mb-12 md:mb-16">Our Signature Services</h2>
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {services.map((service, index) => (
          <div key={index} className="bg-custom-black p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-custom-silver" data-aos="zoom-in" data-aos-delay={index * 200}>
            <div className="text-custom-silver text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl md:text-2xl font-bold text-custom-silver mb-3">{service.title}</h3>
            <p className="text-custom-silver mb-2 font-semibold">{service.duration} – {service.price}</p>
            <p className="text-custom-silver text-sm md:text-base">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;