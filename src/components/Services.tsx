'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LaserLine from './LaserLine';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceSlide {
  title: string;
  description: string;
  images?: string[];
  bgColor?: string;
  textColor?: string;
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftLineRef = useRef<HTMLDivElement>(null);
  const rightLineRef = useRef<HTMLDivElement>(null);
  const smookSectionRef = useRef<HTMLDivElement>(null);
  const servicesBoxRef = useRef<HTMLDivElement>(null);

  const services: ServiceSlide[] = [
    {
      title: 'Web Development',
      description: 'Transform your business with cutting-edge web solutions and modern technologies that scale with your growth',
      images: ['/images/frame1.jpg', '/images/frame2.jpg'],
      bgColor: '#000000',
      textColor: '#fff',
    },
    {
      title: 'Mobile Applications',
      description: 'Innovative approaches to digital transformation across all platforms, delivering seamless user experiences',
      images: ['/images/frame3.jpg'],
      bgColor: '#0a0a1a',
      textColor: '#fff',
    },
    {
      title: 'Cloud Solutions',
      description: 'Expert consultation and strategic planning for scalable cloud infrastructure that empowers your business',
      images: ['/images/frame4.jpg', '/images/frame5.jpg'],
      bgColor: '#1a0a2e',
      textColor: '#fff',
    },
    {
      title: 'Digital Consulting',
      description: 'End-to-end solutions tailored to your business needs and goals, driving innovation and growth',
      images: ['/images/frame6.jpg'],
      bgColor: '#000000',
      textColor: '#fff',
    },
  ];

  useEffect(() => {
    // Calculate total height needed for 4 sections
    const totalHeight = window.innerHeight * 4;
    if (containerRef.current) {
      containerRef.current.style.height = `${totalHeight}px`;
    }

    // Animate parallax section vertical lines and services box
    const ctx = gsap.context(() => {
      // Services box - stays fixed, no resizing

      // Parallax section vertical lines
      if (leftLineRef.current && rightLineRef.current && containerRef.current) {
        // Set initial state
        gsap.set([leftLineRef.current, rightLineRef.current], {
          height: '0%',
          opacity: 0,
        });

        // Animate lines down as user scrolls through the parallax sections
        gsap.to([leftLineRef.current, rightLineRef.current], {
          height: `${window.innerHeight * 4}px`,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: `+=${window.innerHeight * 4}`,
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Our Services Section */}
      <section
        ref={smookSectionRef}
        id="services"
        className="relative min-h-screen flex items-center justify-center"
        style={{ 
          backgroundColor: '#060010',
          overflow: 'hidden',
        }}
      >
        {/* Reversed Smoke Background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/smoke-background-design.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: 'scaleY(-1)',
            zIndex: 0,
          }}
        />
        {/* LaserLine Background - Vertical Line Only */}
        <div 
          className="absolute w-full"
          style={{ 
            zIndex: 1,
            top: '75%',
            height: '50%'
          }}
        >
          <LaserLine
            verticalBeamOffset={0.0}
            verticalSizing={2.0}
            flowSpeed={0.4}
            flowStrength={0.3}
            color="#6366F1"
          />
        </div>

        {/* Services Box - Opens at top, closes as you scroll */}
        <div
          ref={servicesBoxRef}
          style={{
            position: 'absolute',
            top: '26%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '86%',
            height: '100%',
            borderTop: 'none',
            backgroundColor: '#060010',
            borderRadius: '20px',
            border: '2px solid #6366F1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            zIndex: 15,
            boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
            overflow: 'hidden',
          }}
        >
          <div className="text-center px-8 py-12" style={{ marginTop: '8rem' }}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover how we can transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Parallax Sections Container */}
      <div ref={containerRef} className="services-parallax-container relative">
        {/* Vertical Lines */}
        <div
          ref={leftLineRef}
          className="absolute left-[7%] w-[1.5px] bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-transparent pointer-events-none"
          style={{
            top: 0,
            willChange: 'height',
            zIndex: 2000,
          }}
        />
        <div
          ref={rightLineRef}
          className="absolute right-[7%] w-[1.5px] bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-transparent pointer-events-none"
          style={{
            top: 0,
            willChange: 'height',
            zIndex: 2000,
          }}
        />
        {services.map((service, index) => {
          const isFirst = index === 0;
          const isLast = index === services.length - 1;
          
          return (
            <div
              key={`service-slide-${index}`}
              className="section-parallax"
              style={{
                top: `${index * 100}vh`,
                backgroundColor: service.bgColor,
                color: service.textColor || '#fff',
                zIndex: 1000 + index + 1,
                boxShadow: 'none',
              }}
            >
              {/* Full screen background image for slide 3 (index 2) */}
              {index === 2 && service.images && service.images.length > 0 && (
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${service.images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.2,
                    zIndex: 1,
                  }}
                />
              )}
              
              <div className="fixed-content" style={{ maxWidth: '1400px', width: '90%' }}>
                {/* Unique Layout for Slide 0 - Image on right, content on left */}
                {index === 0 && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                        {service.title}
                      </h1>
                      <p className="text-base md:text-lg lg:text-xl leading-relaxed opacity-90">
                        {service.description}
                      </p>
                    </div>
                    {service.images && service.images.length > 0 && (
                      <div className="lg:col-span-5 order-1 lg:order-2">
                        <img
                          src={service.images[0]}
                          alt={service.title}
                          className="w-full h-auto rounded-xl"
                          style={{
                            maxHeight: '400px',
                            objectFit: 'cover',
                            filter: 'brightness(0.9) contrast(1.05)',
                            boxShadow: '0 15px 40px rgba(99, 102, 241, 0.3)',
                            border: '2px solid rgba(99, 102, 241, 0.2)',
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Unique Layout for Slide 1 - Image on left, content on right */}
                {index === 1 && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {service.images && service.images.length > 0 && (
                      <div className="lg:col-span-5">
                        <img
                          src={service.images[0]}
                          alt={service.title}
                          className="w-full h-auto rounded-xl"
                          style={{
                            maxHeight: '450px',
                            objectFit: 'cover',
                            filter: 'brightness(0.85) contrast(1.1)',
                            boxShadow: '0 15px 40px rgba(139, 92, 246, 0.3)',
                            border: '2px solid rgba(139, 92, 246, 0.2)',
                          }}
                        />
                      </div>
                    )}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                        {service.title}
                      </h1>
                      <p className="text-base md:text-lg lg:text-xl leading-relaxed opacity-90">
                        {service.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Unique Layout for Slide 2 - Full screen background, text centered only */}
                {index === 2 && (
                  <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                      {service.title}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl leading-relaxed opacity-90">
                      {service.description}
                    </p>
                  </div>
                )}

                {/* Unique Layout for Slide 3 - Side by side image and text */}
                {index === 3 && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {service.images && service.images.length > 0 && (
                      <div className="lg:col-span-5">
                        <img
                          src={service.images[0]}
                          alt={service.title}
                          className="w-full h-auto rounded-xl"
                          style={{
                            maxHeight: '450px',
                            objectFit: 'cover',
                            filter: 'brightness(0.85) contrast(1.1)',
                            boxShadow: '0 15px 40px rgba(99, 102, 241, 0.3)',
                            border: '2px solid rgba(99, 102, 241, 0.2)',
                          }}
                        />
                      </div>
                    )}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                        {service.title}
                      </h1>
                      <p className="text-base md:text-lg lg:text-xl leading-relaxed opacity-90">
                        {service.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}