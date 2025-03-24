import React from 'react';
import ownerImage from '../assets/hero.jpg'; // Replace with your actual owner image

function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-custom-black text-center">
      <h2 className="text-5xl font-bold text-custom-silver mb-16" data-aos="fade-down">About Foot Marma</h2>
      <div className="max-w-5xl mx-auto px-6">
        {/* Company Growth */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-custom-silver mb-6">Our Journey</h3>
          <p className="text-custom-silver text-lg mb-6">
            Foot Marma began as a small reflexology studio in Nairobi, Kenya, in 2020, driven by a passion for holistic wellness. What started with a single treatment room has grown into a beloved sanctuary for relaxation and healing. Over the years, we’ve expanded our offerings, trained a team of skilled therapists, and built a loyal community of clients who value our unique approach to foot reflexology and massage therapy. Today, we’re proud to be a leading name in Nairobi’s wellness scene, blending traditional techniques with modern care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-custom-silver">
            <div className="p-6 bg-custom-silver bg-opacity-10 rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="100">
              <p className="text-4xl font-bold text-custom-silver mb-2">5+</p>
              <p>Years of Growth</p>
            </div>
            <div className="p-6 bg-custom-silver bg-opacity-10 rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="200">
              <p className="text-4xl font-bold text-custom-silver mb-2">10+</p>
              <p>Expert Therapists</p>
            </div>
            <div className="p-6 bg-custom-silver bg-opacity-10 rounded-lg shadow-md" data-aos="zoom-in" data-aos-delay="300">
              <p className="text-4xl font-bold text-custom-silver mb-2">1000+</p>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Founder Story - Side by Side */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8" data-aos="fade-right">
          <div className="w-full md:w-1/2">
            <img src={ownerImage} alt="Foot Marma Owner" className="w-full h-80 object-cover rounded-xl shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-3xl font-bold text-custom-silver mb-6">Meet Our Founder</h3>
            <p className="text-custom-silver text-lg mb-4">
              Foot Marma was founded by Amina Njeri, a certified reflexologist with over a decade of experience in holistic therapies. Inspired by her travels across Thailand and India, where she studied ancient healing practices, Amina returned to Nairobi with a vision: to bring the transformative power of reflexology to her community. Her dedication to personalized care and her warm, hands-on approach have shaped Foot Marma into the thriving practice it is today.
            </p>
            <p className="text-custom-silver text-lg italic">
              “I believe every step should feel like a gift. That’s why I created Foot Marma—to help people find balance, one foot at a time.” — Amina Njeri
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;