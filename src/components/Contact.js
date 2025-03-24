import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const sanitizedData = {
        name: String(data.name || '').trim(),
        email: String(data.email || '').trim(),
        phone: String(data.phone || '').trim(),
        date: String(data.date || '').trim(),
        time: String(data.time || '').trim(),
        service: String(data.service || '').trim(),
        details: String(data.details || '').trim(),
      };
      await emailjs.send('service_nifoi1v', 'template_klulzoq', sanitizedData);
      alert('Booking request sent successfully!');
      reset();
    } catch (err) {
      alert('Failed to send booking request: ' + (err.message || err.text || 'Unknown error'));
      console.error('EmailJS Error:', err);
    }
  };

  const timeSlots = ['08:00 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM'];

  return (
    <section id="contact" className="py-20 text-center bg-custom-black" data-aos="fade-up">
      <h2 className="text-4xl md:text-5xl font-bold text-custom-silver mb-12 md:mb-16">Book Your Appointment</h2>
      <div className="max-w-lg mx-auto px-4 md:px-6">
        <p className="text-custom-silver mb-8 text-base md:text-lg" data-aos="fade-up">
          Step into relaxation and wellness—schedule your Foot Marma session today!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-custom-silver bg-opacity-10 p-6 md:p-8 rounded-xl shadow-lg" data-aos="zoom-in" data-aos-delay="200">
          <div>
            <label className="block text-sm font-medium text-custom-silver">Name</label>
            <input {...register('name', { required: true })} className="mt-1 block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver focus:ring-2 focus:ring-custom-silver" />
          </div>
          <div>
            <label className="block text-sm font-medium text-custom-silver">Email</label>
            <input {...register('email', { required: true })} type="email" className="mt-1 block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver focus:ring-2 focus:ring-custom-silver" />
          </div>
          <div>
            <label className="block text-sm font-medium text-custom-silver">Phone</label>
            <input {...register('phone', { required: true })} type="tel" className="mt-1 block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver focus:ring-2 focus:ring-custom-silver" />
          </div>
          <div>
            <label className="block text-sm font-medium text-custom-silver">Preferred Date</label>
            <input {...register('date', { required: true })} type="date" className="mt-1 block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver focus:ring-2 focus:ring-custom-silver" />
          </div>
          <div>
            <label className="block text-sm font-medium text-custom-silver">Preferred Time</label>
            <select {...register('time', { required: true })} className="mt-1 block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver focus:ring-2 focus:ring-custom-silver">
              <option value="" disabled>Select a time</option>
              {timeSlots.map((slot, idx) => (
                <option key={idx} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-custom-silver">Service</label>
            <select {...register('service', { required: true })} className="mt-1 block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver focus:ring-2 focus:ring-custom-silver">
              <option value="Thai Foot Massage">Thai Foot Massage</option>
              <option value="Head, Neck, and Shoulder">Head, Neck, and Shoulder</option>
              <option value="Footloose">Footloose</option>
              <option value="De-stress & Refresh">De-stress & Refresh</option>
              <option value="Sole Therapy">Sole Therapy</option>
              <option value="Back Massage">Back Massage</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-custom-silver">Additional Details</label>
            <textarea
              {...register('details')}
              placeholder="E.g., I’d like a relaxing session with extra focus on my soles."
              className="mt-1 block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver focus:ring-2 focus:ring-custom-silver"
              rows="4"
            />
          </div>
          <button type="submit" className="w-full bg-custom-silver text-custom-black p-3 md:p-4 rounded-lg hover:bg-custom-black hover:text-custom-silver transition-all shadow-md">Submit Booking</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;