import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import emailjs from 'emailjs-com';

emailjs.init('KdMXyDrbf9wDWO4Aq');

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-custom-black">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;