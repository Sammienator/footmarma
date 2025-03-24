import React, { useState } from 'react';
import reflexologyImage from '../assets/image3.jpg';

function About() {
  const [openFaq, setOpenFaq] = useState(null);
  const testimonials = [
    { name: 'Jane K.', text: 'Foot Marma transformed my daily routine—pure relaxation!' },
    { name: 'Peter M.', text: 'The Sole Therapy session was a game-changer for my stress levels.' },
  ];
  const faqs = [
    { q: 'What is reflexology?', a: 'Reflexology is a therapeutic method of relieving pain by stimulating pressure points.' },
    { q: 'Do I need to undress?', a: 'No, reflexology sessions are fully clothed, focusing on your feet.' },
  ];

  return (
    <section id="about" className="py-20 bg-custom-black text-center" data-aos="fade-up">
      <h2 className="text-4xl md:text-5xl font-bold text-custom-silver mb-12 md:mb-16">Massage vs Reflexology</h2>
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <img src={reflexologyImage} alt="Reflexology Session" className="w-full h-64 md:h-80 object-cover rounded-xl mb-8 shadow-lg" data-aos="fade-up" />
        <h3 className="text-2xl md:text-3xl font-bold text-custom-silver mb-6">What's the Difference?</h3>
        <p className="text-custom-silver mb-8 text-base md:text-lg" data-aos="fade-up">
          Unlike traditional massages, foot reflexology taps into the body’s energy pathways, triggering a holistic healing response. Our clients enjoy fully clothed sessions with a focus on deep relaxation and balance.
        </p>
        <a href="https://www.instagram.com/footmarma" target="_blank" rel="noopener noreferrer" className="bg-custom-silver text-custom-black px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-custom-black hover:text-custom-silver transition-all shadow-md" data-aos="fade-up">
          Follow Us @FootMarma
        </a>

        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-custom-silver mb-8">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-custom-silver bg-opacity-10 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay={idx * 200}>
                <p className="text-custom-silver italic mb-4">"{testimonial.text}"</p>
                <p className="text-custom-silver font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-custom-silver mb-8">Frequently Asked Questions</h3>
          {faqs.map((faq, idx) => (
            <div key={idx} className="text-left mb-4" data-aos="fade-up" data-aos-delay={idx * 200}>
              <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full text-custom-silver font-semibold text-base md:text-lg bg-custom-silver bg-opacity-10 p-4 rounded-lg flex justify-between items-center hover:bg-opacity-20 transition">
                {faq.q}
                <span>{openFaq === idx ? '−' : '+'}</span>
              </button>
              {openFaq === idx && <p className="text-custom-silver mt-2 p-4 bg-custom-black rounded-lg">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;