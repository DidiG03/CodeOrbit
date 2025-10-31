'use client';

import LaserFlow from './LaserFlow';
import StaggeredMenu from './StaggeredMenu';
import TextType from './TextType';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const revealImgRef = useRef<HTMLImageElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#hero' },
    { label: 'Services', ariaLabel: 'View our services', link: '#services' },
    { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
  ];

  useEffect(() => {
    // Delay the appearance to sync with LaserFlow fade-in
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Show menu after hero appears
    const menuTimer = setTimeout(() => {
      setMenuVisible(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(menuTimer);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="w-full relative"
      style={{ 
        backgroundColor: '#060010',
        backgroundImage: 'url(/images/smoke-background-design.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        height: '100vh'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      {/* Interactive Reveal Image */}
      <img
        ref={revealImgRef}
        src="/images/frame1.jpg"
        alt="Reveal effect"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-50%',
          zIndex: 5,
          mixBlendMode: 'lighten',
          opacity: 0.3,
          pointerEvents: 'none',
          // @ts-ignore - CSS custom properties
          '--mx': '-9999px',
          '--my': '-9999px',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        } as React.CSSProperties}
      />

      {/* LaserFlow Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      >
        <LaserFlow
          horizontalBeamOffset={0.0}
          verticalBeamOffset={0.0}
          color="#6366F1"
          horizontalSizing={0.8}
          verticalSizing={2.5}
          flowStrength={0.3}
          wispIntensity={4.0}
          fogIntensity={0.3}
          wispDensity={0.8}
        />
      </div>

      {/* Content Box - Gradual Appearance */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '86%',
          height: '60%',
          backgroundColor: '#060010',
          borderRadius: '20px',
          border: '2px solid #6366F1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '2rem',
          zIndex: 15,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.5s ease-in-out',
          boxShadow: isVisible ? '0 0 30px rgba(99, 102, 241, 0.3)' : 'none'
        }}
      >
        <div className="text-center px-8">
          <div className="block mb-4">
            <TextType
              as="h1"
              text={["Welcome to Code Orbit"]}
              className="text-6xl md:text-8xl font-semibold text-white tracking-tight block"
              typingSpeed={75}
              pauseDuration={100}
              showCursor={true}
              cursorCharacter="|"
              cursorClassName="font-khand text-6xl md:text-8xl text-white"
              initialDelay={1000}
              loop={false}
            />
          </div>
          <div className="block">
            <TextType
              as="p"
              text={["Pioneering intelligent solutions that redefine how businesses operate in the digital era."]}
              className="text-lg md:text-base text-white font-medium tracking-wide block"
              typingSpeed={30}
              pauseDuration={1500}
              showCursor={false}
              initialDelay={3500}
              loop={false}
            />
          </div>
        </div>
      </div>

      {/* Logo - Top Left */}
      {menuVisible && (
        <div 
          style={{ 
            position: 'absolute', 
            top: '2em', 
            left: '2em'
          }}
        >
          <img
            src="/images/logo/logo.png"
            alt="Code Orbit Logo"
            style={{
              height: '32px',
              width: 'auto',
              display: 'block'
            }}
          />
        </div>
      )}

      {/* Fixed Menu - Top Right */}
      {menuVisible && (
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={[]}
          displaySocials={false}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={['#6366F1', '#8B5CF6']}
          logoUrl=""
          accentColor="#6366F1"
          isFixed={true}
        />
      )}
    </section>
  );
}
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to Code Orbit
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Transforming ideas into exceptional digital experiences through innovative software solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

