"use client"

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load/restart
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <Services />
      <About />
      <Contact />
      <div className="h-16 md:h-24"></div>
      <Footer />
    </main>
  );
}
