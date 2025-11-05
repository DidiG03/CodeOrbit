"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

// Lazy load components below the fold to improve FCP
const ScrollTextDemo = dynamic(() => import('@/components/ScrollTextDemo'), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-[#060010]" />
});
const About = dynamic(() => import('@/components/About'), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-black" />
});
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { 
  ssr: false,
  loading: () => <div className="min-h-[200px] bg-[#e8e6e2]" />
});

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
      <ScrollTextDemo />
      <About />
      <Services />
      <div className="h-32 md:h-48 lg:h-64 bg-black"></div>
      <Footer onGetQuoteClick={() => setIsContactOpen(true)} />
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
