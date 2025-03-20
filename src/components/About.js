import React from 'react';
import reflexologyImage from '../assets/image3.jpg';

function About() {
  return (
    <section id="about" className="py-16 bg-custom-black text-center">
      <h2 className="text-4xl font-bold text-custom-silver mb-12">Massage vs Reflexology</h2>
      <div className="max-w-4xl mx-auto px-4">
        <img src={reflexologyImage} alt="Reflexology Session" className="w-full h-64 object-cover rounded-lg mb-6" data-aos="fade-up" />
        <h3 className="text-2xl font-bold text-custom-silver mb-4">What's the Difference?</h3>
        <p className="text-custom-silver mb-6" data-aos="fade-up">
          Foot reflexology has far-reaching benefits compared to foot massages, as it triggers a holistic healing response in the body. Our clients remain fully clothed during reflexology sessions unlike with massages!
        </p>
        <a href="https://www.instagram.com/footmarma" target="_blank" rel="noopener noreferrer" className="bg-custom-silver text-custom-black px-6 py-3 rounded-lg hover:bg-custom-black hover:text-custom-silver transition" data-aos="fade-up">
          Want to Learn More? Follow Us @FootMarma
        </a>
      </div>
    </section>
  );
}

export default About;