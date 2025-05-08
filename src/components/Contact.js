import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone, FaSpa, FaInfoCircle } from 'react-icons/fa';

function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [formStatus, setFormStatus] = useState({ message: '', isError: false, isSuccess: false });
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Updated services from your spa menu
  const services = [
    "FOOT REFLEXOLOGY",
    "TOP TO TOE REBOOT",
    "root BALANCE",
    "TOUCH OF MARMA",
    "TOTOK WAJAH FACIAL",
    "Express massage",
    "FOOT RITUAL",
    "JEWELS OF THE NILE"
  ];

  // More comprehensive time slots
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '01:00 PM', '02:00 PM', 
    '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ];

  const onSubmit = async (data) => {
    setFormStatus({ message: '', isError: false, isSuccess: false });

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

      // Calculate estimated price based on selected service
      let estimatedPrice = '2,000 - 6,000 KSh';
      if (data.service === 'FOOT REFLEXOLOGY' || data.service === 'TOP TO TOE REBOOT' || data.service === 'TOUCH OF MARMA') {
        estimatedPrice = '5,000 KSh';
      } else if (data.service === 'JEWELS OF THE NILE') {
        estimatedPrice = '6,000 KSh';
      } else if (data.service === 'FOOT RITUAL') {
        estimatedPrice = '3,500 KSh';
      } else if (data.service === 'root BALANCE' || data.service === 'Express massage') {
        estimatedPrice = '2,000 KSh';
      } else if (data.service === 'TOTOK WAJAH FACIAL') {
        estimatedPrice = '2,500 KSh';
      }

      sanitizedData.estimatedPrice = estimatedPrice;
      
      await emailjs.send('service_nifoi1v', 'template_klulzoq', sanitizedData);
      
      setFormStatus({
        message: 'Your booking request has been successfully sent! We will contact you shortly to confirm your appointment.',
        isError: false,
        isSuccess: true
      });
      
      setShowConfirmation(true);
      reset();
    } catch (err) {
      setFormStatus({
        message: `Failed to send booking request: ${err.message || err.text || 'Unknown error'}. Please try again or contact us directly.`,
        isError: true,
        isSuccess: false
      });
      console.error('EmailJS Error:', err);
    }
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Info Panel */}
          <div className="lg:w-2/5 mb-10 lg:mb-0 lg:pr-12" data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold text-custom-silver mb-6">Book Your Relaxation Journey</h2>
            
            <p className="text-custom-silver mb-8 text-lg">
              Experience the art of relaxation and wellness. Our skilled therapists are ready to help you unwind and rejuvenate.
            </p>
            
            <div className="space-y-6">
              <div className="bg-custom-silver bg-opacity-10 p-5 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-custom-silver mb-3 flex items-center">
                  <FaInfoCircle className="mr-2" /> Booking Information
                </h3>
                <ul className="text-custom-silver space-y-2">
                  <li>• Please arrive 10 minutes before your appointment</li>
                  <li>• We'll confirm your booking via email or phone</li>
                  <li>• 24-hour cancellation policy applies</li>
                  <li>• Walk-ins welcome based on availability</li>
                </ul>
              </div>
              
              <div className="bg-custom-silver bg-opacity-10 p-5 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-custom-silver mb-3">Opening Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-custom-silver">
                  <div>Monday - Friday:</div>
                  <div>9:00 AM - 7:00 PM</div>
                  <div>Saturday:</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div>Sunday:</div>
                  <div>10:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="lg:w-3/5" data-aos="fade-left">
            {showConfirmation ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-8 w-8 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-green-800">Booking Request Received</h3>
                    <div className="mt-2 text-green-700">
                      <p>Thank you for your booking request! We will contact you shortly to confirm your appointment.</p>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={closeConfirmation}
                        className="inline-flex items-center px-5 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Book Another Session
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-custom-silver bg-opacity-10 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-custom-silver mb-6">Schedule Your Session</h3>
                
                {formStatus.message && (
                  <div className={`p-4 rounded-lg ${formStatus.isError ? 'bg-red-100 text-red-800' : formStatus.isSuccess ? 'bg-green-100 text-green-800' : ''}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center text-sm font-medium text-custom-silver mb-1">
                      <FaUser className="mr-2" /> Full Name
                    </label>
                    <input 
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })} 
                      className="block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver focus:ring-2 focus:ring-custom-silver" 
                    />
                    {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-medium text-custom-silver mb-1">
                      <FaEnvelope className="mr-2" /> Email
                    </label>
                    <input 
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
                      })} 
                      type="email" 
                      className="block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver focus:ring-2 focus:ring-custom-silver" 
                    />
                    {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-medium text-custom-silver mb-1">
                      <FaPhone className="mr-2" /> Phone Number
                    </label>
                    <input 
                      {...register('phone', { 
                        required: 'Phone number is required',
                        pattern: { value: /^[0-9+\s()-]{7,20}$/, message: 'Please enter a valid phone number' }
                      })} 
                      type="tel" 
                      className="block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver focus:ring-2 focus:ring-custom-silver" 
                    />
                    {errors.phone && <p className="mt-1 text-red-400 text-sm">{errors.phone.message}</p>}
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-medium text-custom-silver mb-1">
                      <FaSpa className="mr-2" /> Select Treatment
                    </label>
                    <select 
                      {...register('service', { required: 'Please select a service' })} 
                      className="block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver focus:ring-2 focus:ring-custom-silver"
                    >
                      <option value="" disabled selected>Choose a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1 text-red-400 text-sm">{errors.service.message}</p>}
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-medium text-custom-silver mb-1">
                      <FaCalendarAlt className="mr-2" /> Preferred Date
                    </label>
                    <input 
                      {...register('date', { required: 'Please select a date' })} 
                      type="date" 
                      min={new Date().toISOString().split('T')[0]}
                      className="block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver focus:ring-2 focus:ring-custom-silver" 
                    />
                    {errors.date && <p className="mt-1 text-red-400 text-sm">{errors.date.message}</p>}
                  </div>
                  
                  <div>
                    <label className="flex items-center text-sm font-medium text-custom-silver mb-1">
                      <FaClock className="mr-2" /> Preferred Time
                    </label>
                    <select 
                      {...register('time', { required: 'Please select a time' })} 
                      className="block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver focus:ring-2 focus:ring-custom-silver"
                    >
                      <option value="" disabled selected>Select a time</option>
                      {timeSlots.map((slot, idx) => (
                        <option key={idx} value={slot}>{slot}</option>
                      ))}
                    </select>
                    {errors.time && <p className="mt-1 text-red-400 text-sm">{errors.time.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="flex items-center text-sm font-medium text-custom-silver mb-1">
                    <FaInfoCircle className="mr-2" /> Special Requests or Notes
                  </label>
                  <textarea
                    {...register('details')}
                    placeholder="Any health concerns, preferences, or special requests..."
                    className="block w-full p-3 rounded-lg bg-custom-black text-custom-silver border border-custom-silver focus:ring-2 focus:ring-custom-silver"
                    rows="4"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center bg-gradient-to-r from-custom-silver to-gray-400 text-black p-4 rounded-lg hover:bg-none hover:bg-custom-silver transition-all shadow-md font-medium text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Book Your Appointment'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;