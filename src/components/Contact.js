import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Sanitize the form data
      const sanitizedData = {
        name: String(data.name || '').trim(),
        email: String(data.email || '').trim(),
        phone: String(data.phone || '').trim(),
        date: String(data.date || '').trim(),
        service: String(data.service || '').trim(),
        details: String(data.details || '').trim(),
      };

      console.log('Sanitized Form Data:', sanitizedData);

      // Send to EmailJS
      await emailjs.send('YOUR_SERVICE_ID', 'booking_request', sanitizedData);
      alert('Booking request sent successfully!');
      reset();
    } catch (err) {
      alert('Failed to send booking request: ' + (err.message || err.text || 'Unknown error'));
      console.error('EmailJS Error:', err);
    }
  };

  return (
    <section id="contact" className="py-16 text-center bg-custom-black">
      <h2 className="text-4xl font-bold text-custom-silver mb-12">Book Your Appointment</h2>
      <div className="max-w-lg mx-auto px-4">
        <p className="text-custom-silver mb-6" data-aos="fade-up">
          Ready to find harmony with every step? Schedule your session at Foot Marma today.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-aos="fade-up">
          <div>
            <label className="block text-sm font-medium text-custom-silver">Name</label>
            <input {...register('name', { required: true })} className="mt-1 block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver" />
          </div>
          <div>
            <label className="block text-sm font-medium text-custom-silver">Email</label>
            <input {...register('email', { required: true })} type="email" className="mt-1 block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver" />
          </div>
          <div>
            <label className="block text-sm font-medium text-custom-silver">Phone</label>
            <input {...register('phone', { required: true })} type="tel" className="mt-1 block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver" />
          </div>
          <div>
            <label className="block text-sm font-medium text-custom-silver">Preferred Date</label>
            <input {...register('date', { required: true })} type="date" className="mt-1 block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver" />
          </div>
          <div>
            <label className="block text-sm font-medium text-custom-silver">Service</label>
            <select {...register('service', { required: true })} className="mt-1 block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver">
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
              className="mt-1 block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver"
              rows="4"
            />
          </div>
          <button type="submit" className="w-full bg-custom-silver text-custom-black p-3 rounded-lg hover:bg-custom-black hover:text-custom-silver transition">Submit Booking</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;