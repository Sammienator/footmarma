import React from 'react';

function Services() {
  const services = [
    {
      title: 'Thai Foot Massage',
      duration: '75 min',
      price: 'KShs 6,000',
      desc: 'A traditional Thai massage focusing on the feet to promote relaxation and balance.',
    },
    {
      title: 'Head, Neck, and Shoulder',
      duration: '30 min',
      price: 'KShs 2,000',
      desc: 'Relieve tension in your head, neck, and shoulders with this targeted massage.',
    },
    {
      title: 'Footloose',
      duration: '30 min',
      price: 'KShs 1,500',
      desc: 'A quick and refreshing foot massage to rejuvenate your feet.',
    },
    {
      title: 'De-stress & Refresh',
      duration: '60 min',
      price: 'KShs 4,000',
      desc: 'A relaxing session to de-stress and refresh your mind and body.',
    },
    {
      title: 'Sole Therapy',
      duration: '60 min',
      price: 'KShs 5,000',
      desc: 'A therapeutic foot reflexology session to promote holistic healing.',
    },
    {
      title: 'Back Massage',
      duration: '30 min',
      price: 'KShs 3,500',
      desc: 'Ease back tension with a soothing back massage.',
    },
  ];

  return (
    <section id="services" className="py-16 text-center bg-custom-black">
      <h2 className="text-4xl font-bold text-custom-silver mb-12">Our Services at Foot Marma</h2>
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-custom-black p-6 rounded-lg shadow-lg hover:shadow-xl transition border border-custom-silver" data-aos="zoom-in" data-aos-delay={index * 200}>
            <h3 className="text-2xl font-bold text-custom-silver mb-2">{service.title}</h3>
            <p className="text-custom-silver mb-2">{service.duration} – {service.price}</p>
            <p className="text-custom-silver">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;