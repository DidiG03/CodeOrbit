"use client"

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ScrollTextDemo from '@/components/ScrollTextDemo';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    // Scroll to top on page load/restart
    window.scrollTo(0, 0);

    // Expose contact modal function globally for other components to use
    (window as any).openContactModal = () => setIsContactOpen(true);
    
    return () => {
      delete (window as any).openContactModal;
    };
  }, []);

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Hero onContactClick={() => setIsContactOpen(true)} />
      <Services />
      <ScrollTextDemo />
      <About />
      <div className="h-32 md:h-48 lg:h-64 bg-black"></div>
      <Footer onGetQuoteClick={() => setIsContactOpen(true)} />
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
