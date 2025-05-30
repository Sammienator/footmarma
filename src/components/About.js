import React, { useState } from 'react';
import reflexologyImage from '../assets/image3.jpg';

function About() {
  const [openFaq, setOpenFaq] = useState(null);
  
  const testimonials = [
    { 
      name: 'Jane K.', 
      text: 'Foot Marma transformed my daily routine—pure relaxation!',
      rating: 5,
      service: 'Energy Balancing'
    },
    { 
      name: 'Peter M.', 
      text: 'The Sole Therapy session was a game-changer for my stress levels.',
      rating: 5,
      service: 'Sole Therapy'
    },
  ];
  
  const faqs = [
    { 
      q: 'What is reflexology?', 
      a: 'Reflexology is a therapeutic method of relieving pain by stimulating pressure points on the feet that correspond to different body organs and systems. This gentle, non-invasive technique promotes healing and relaxation throughout the entire body.' 
    },
    { 
      q: 'Do I need to undress?', 
      a: 'No, reflexology sessions are fully clothed, focusing only on your feet. We ensure your comfort throughout the session, only requiring you to remove your footwear.' 
    },
    {
      q: 'How long is a typical session?',
      a: 'Our standard reflexology sessions are 60 minutes long, though we also offer 30-minute express sessions and 90-minute deep wellness sessions depending on your needs and schedule.'
    },
    {
      q: 'Is reflexology painful?',
      a: 'Reflexology should not be painful, though you may experience moments of sensitivity when pressure is applied to congested areas. Our therapists are trained to work within your comfort level, ensuring a relaxing experience.'
    }
  ];

  const differences = [
    {
      title: "Focus Area",
      massage: "Works on soft tissues throughout the body",
      reflexology: "Concentrates on specific reflex points in the feet"
    },
    {
      title: "Clothing",
      massage: "Usually requires removal of clothing",
      reflexology: "Fully clothed session, only shoes removed"
    },
    {
      title: "Technique",
      massage: "Kneading, stretching, and stroking muscles",
      reflexology: "Precise pressure on specific reflex points"
    }
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 ${i < rating ? 'text-custom-silver' : 'text-custom-silver/30'}`} 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-custom-black to-custom-black/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-custom-silver/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-64 h-64 bg-custom-silver/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Main heading with accent */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Massage <span className="text-custom-silver">vs</span> Reflexology
          </h2>
          <div className="w-24 h-1 bg-custom-silver mx-auto"></div>
        </div>
        
        {/* Main image with enhanced presentation */}
        <div className="relative mb-16" data-aos="fade-up">
          <div className="absolute inset-0 bg-custom-silver/10 rounded-xl transform -rotate-1 scale-[1.02]"></div>
          <div className="relative">
            <img 
              src={reflexologyImage} 
              alt="Reflexology Session" 
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-custom-black/80 to-transparent rounded-xl"></div>
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Experience the Difference</h3>
              <p className="text-custom-silver/90 text-lg hidden md:block">Holistic healing focused on your body's natural energy pathways</p>
            </div>
          </div>
        </div>
        
        {/* Comparison table */}
        <div className="mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center mb-8">
            <span className="w-8 h-0.5 bg-custom-silver/50 mr-3 hidden md:block"></span>
            <h3 className="text-2xl md:text-3xl font-bold text-custom-silver">What's the Difference?</h3>
            <span className="w-8 h-0.5 bg-custom-silver/50 ml-3 hidden md:block"></span>
          </div>
          
          <p className="text-white text-lg mb-10 text-center max-w-3xl mx-auto" data-aos="fade-up">
            Unlike traditional massages, foot reflexology taps into the body's energy pathways, triggering 
            a holistic healing response. Our clients enjoy fully clothed sessions with a focus on deep 
            relaxation and balance.
          </p>
          
          <div className="bg-custom-silver/5 rounded-xl border border-custom-silver/10 p-3 sm:p-6 shadow-lg backdrop-blur-sm">
            {/* Table Header */}
            <div className="hidden sm:grid sm:grid-cols-7 gap-2 font-bold text-custom-silver mb-3 px-3 py-4 border-b border-custom-silver/10">
              <div className="col-span-3">Aspect</div>
              <div className="col-span-2">Massage</div>
              <div className="col-span-2">Reflexology</div>
            </div>
            
            {/* Table Rows */}
            {differences.map((diff, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col sm:grid sm:grid-cols-7 gap-2 px-3 py-3 sm:py-4 text-white ${idx !== differences.length - 1 ? 'border-b border-custom-silver/10' : ''}`}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="col-span-3 font-medium text-custom-silver sm:text-base text-sm">
                  <span className="sm:hidden font-bold">Aspect: </span>{diff.title}
                </div>
                <div className="col-span-2 sm:text-base text-sm">
                  <span className="sm:hidden font-bold">Massage: </span>{diff.massage}
                </div>
                <div className="col-span-2 sm:text-base text-sm">
                  <span className="sm:hidden font-bold">Reflexology: </span>{diff.reflexology}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Social CTA with animation */}
        <div className="mb-20 text-center" data-aos="fade-up">
          <a 
            href="https://www.instagram.com/footmarma" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group inline-flex items-center bg-custom-silver text-custom-black px-8 py-4 rounded-lg shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="font-medium">Follow Us @FootMarma</span>
          </a>
        </div>
        
        {/* Testimonials with enhanced presentation */}
        <div id='testimonials' className="mb-20" data-aos="fade-up">
          <div className="flex items-center justify-center mb-12">
            <span className="w-8 h-0.5 bg-custom-silver/50 mr-3 hidden md:block"></span>
            <h3 className="text-2xl md:text-3xl font-bold text-custom-silver">What Our Clients Say</h3>
            <span className="w-8 h-0.5 bg-custom-silver/50 ml-3 hidden md:block"></span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="bg-gradient-to-br from-custom-silver/15 to-custom-silver/5 p-6 md:p-8 rounded-xl shadow-lg border border-custom-silver/10 transform transition-all duration-300 hover:shadow-xl hover:border-custom-silver/20" 
                data-aos="fade-up" 
                data-aos-delay={idx * 200}
              >
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-white text-lg italic mb-4">"{testimonial.text}"</p>
                <div className="flex flex-col items-center">
                  <p className="text-custom-silver font-semibold">{testimonial.name}</p>
                  <p className="text-custom-silver/70 text-sm">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="#contact" className="text-custom-silver hover:text-white transition-colors duration-300 inline-flex items-center">
              <span>Share your experience</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* FAQ section with improved accordion */}
        <div className="mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center mb-12">
            <span className="w-8 h-0.5 bg-custom-silver/50 mr-3 hidden md:block"></span>
            <h3 className="text-2xl md:text-3xl font-bold text-custom-silver">Frequently Asked Questions</h3>
            <span className="w-8 h-0.5 bg-custom-silver/50 ml-3 hidden md:block"></span>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="mb-4" 
                data-aos="fade-up" 
                data-aos-delay={idx * 100}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
                  className="w-full text-white font-medium text-lg bg-gradient-to-r from-custom-silver/15 to-custom-silver/5 p-5 rounded-lg flex justify-between items-center hover:from-custom-silver/20 hover:to-custom-silver/10 transition-all duration-300 border border-custom-silver/10"
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-custom-silver/20 text-custom-silver transition-transform duration-300" style={{ transform: openFaq === idx ? 'rotate(45deg)' : 'rotate(0)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`mt-1 overflow-hidden transition-all duration-300 ${
                    openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 bg-custom-silver/5 rounded-lg border border-custom-silver/10 text-white">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <div className="inline-block p-0.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
            <a 
              href="#contact" 
              className="group bg-black hover:bg-transparent transition-colors duration-300 text-white px-8 py-3 rounded-lg inline-flex items-center space-x-2"
            >
              <span>Book Your Appointment</span>
              
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;