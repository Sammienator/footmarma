import React from 'react';


function AboutUs() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-custom-black to-custom-black/95 text-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-custom-silver/30 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-custom-silver/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-custom-silver/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section heading with accent */}
        <div className="mb-16 relative inline-block" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-custom-silver">foot MARMA</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Our Journey Section */}
        <div className="mb-20" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-custom-silver mb-6 flex items-center justify-center">
            <span className="w-8 h-0.5 bg-custom-silver/50 mr-3 hidden md:block"></span>
            Our Story
            <span className="w-8 h-0.5 bg-custom-silver/50 ml-3 hidden md:block"></span>
          </h3>
          
          <p className="text-white text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
           
            At foot MARMA we believe that everyone deserves an overall sense of wellbeing through our therapeutic treatment's,
            our amenities are carefully curated to provide an instant shot of relaxation but we've also spent time creating 
            the very best treatments to recharge your batteries.
          </p>
          
          <p className="text-custom-silver text-lg font-medium italic mb-12">
            <span className="inline-flex items-center">
              Find harmony with every step!
              <span className="ml-1">👣</span>
            </span>
          </p>
          
          {/* Stats with hover effects */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {[
              { value: "5+", label: "Years of Growth", delay: 100 },
              { value: "10+", label: "Expert Therapists", delay: 200 },
              { value: "1000+", label: "Happy Clients", delay: 300 }
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-8 bg-gradient-to-br from-custom-silver/15 to-custom-silver/5 rounded-xl shadow-lg backdrop-blur-sm border border-custom-silver/10 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group" 
                data-aos="zoom-in" 
                data-aos-delay={stat.delay}
              >
                <div className="mb-1 relative">
                  <p className="text-4xl md:text-5xl font-bold text-custom-silver mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                  <div className="w-12 h-0.5 bg-custom-silver/30 mx-auto"></div>
                </div>
                <p className="text-white text-lg mt-3">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Founder Story - Enhanced Layout */}
        <div 
          className="flex flex-col lg:flex-row items-stretch gap-12 bg-custom-black/20 rounded-2xl p-4 md:p-8 border border-custom-silver/10 shadow-xl backdrop-blur-sm" 
          data-aos="fade-up"
        >
         
          
        
        </div>
        
        {/* Values or Philosophy Section */}
        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-custom-silver mb-8 flex items-center justify-center">
            <span className="w-8 h-0.5 bg-custom-silver/50 mr-3 hidden md:block"></span>
            Our Philosophy
            <span className="w-8 h-0.5 bg-custom-silver/50 ml-3 hidden md:block"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Holistic Care",
                description: "We treat the whole person, not just symptoms, focusing on restoring your body's natural balance.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-custom-silver mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: "Expert Technique",
                description: "Our therapists blend ancient wisdom with modern practice for the most effective treatments.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-custom-silver mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Personalized Journey",
                description: "Every treatment is tailored to your unique needs, ensuring the best results for your body.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4 text-custom-silver mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="p-6 bg-custom-silver/5 rounded-xl border border-custom-silver/10 transition-all duration-300 hover:bg-custom-silver/10 hover:shadow-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {value.icon}
                <h4 className="text-xl font-bold text-custom-silver mb-3">{value.title}</h4>
                <p className="text-white">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;