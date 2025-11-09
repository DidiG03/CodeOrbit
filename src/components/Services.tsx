'use client';

import { useEffect, useRef } from 'react';

interface ServiceSlide {
  title: string;
  description: string;
  images?: string[];
  bgColor?: string;
  textColor?: string;
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  const services: ServiceSlide[] = [
    {
      title: 'Web Solutions',
      description: 'Transform your business with cutting-edge web solutions and modern technologies that scale with your growth',
      images: ['/images/img5.png', '/images/frame2.jpg'],
      bgColor: '#0f0f0f',
      textColor: '#fff',
    },
    {
      title: 'Automated WhatsApp Bot',
      description: 'We are happy to introduce you to our latest innovation, a custom AI Whatsapp Bot that can help you automate your business processes and improve your customer service.',
      images: ['/images/Whatsappbot1.png'],
      bgColor: '#0a0a15',
      textColor: '#fff',
    },
    {
      title: 'Tailored AI Solutions',
      description: 'Custom AI solutions tailored to your business needs, delivering seamless user experiences',
      images: ['/images/frame3.png'],
      bgColor: '#000000',
      textColor: '#fff',
    },
    {
      title: 'Digital Consulting',
      description: 'End-to-end solutions tailored to your business needs and goals, driving innovation and growth',
      images: ['/images/consulting.png'],
      bgColor: '#0f0f0f',
      textColor: '#fff',
    },
  ];

  useEffect(() => {
    // Calculate total height needed for 5 sections (Our Services + 4 service slides)
    // Our Services slide is 150vh, first 3 slides are 100vh each, last slide (Digital Consulting) is 250vh
    // Use requestAnimationFrame to batch DOM operations and avoid forced reflow
    const updateHeight = () => {
      const totalHeight = window.innerHeight * 7; // 1.5vh (Our Services) + 3vh (3 service slides) + 2.5vh (Digital Consulting - longer) = 7vh total
      if (containerRef.current) {
        // Batch DOM write in RAF to avoid forced reflow
        requestAnimationFrame(() => {
          if (containerRef.current) {
            containerRef.current.style.height = `${totalHeight}px`;
          }
        });
      }
    };
    
    updateHeight();
    // Use ResizeObserver instead of window resize for better performance
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes knowMoreTextShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes knowMoreGlow {
          0%,
          100% {
            transform: translate3d(-10%, -10%, 0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate3d(10%, 10%, 0) scale(1.1);
            opacity: 0.75;
          }
        }

        @keyframes knowMoreShadowPulse {
          0%,
          100% {
            box-shadow: 0 0 0px 0 rgba(139, 92, 246, 0.4), 0 0 25px 8px rgba(59, 130, 246, 0.25);
          }
          50% {
            box-shadow: 0 0 18px 4px rgba(139, 92, 246, 0.5), 0 0 35px 14px rgba(59, 130, 246, 0.35);
          }
        }

        .know-more-button {
          position: relative;
          overflow: hidden;
          background: rgba(59, 130, 246, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .know-more-button::before {
          content: '';
          position: absolute;
          inset: -50%;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.45),
            rgba(139, 92, 246, 0.35),
            rgba(236, 72, 153, 0.4)
          );
          opacity: 0.55;
          animation: knowMoreGlow 6s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        .know-more-button::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          animation: knowMoreShadowPulse 2.8s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        .know-more-button:hover::before {
          opacity: 0.75;
        }

        .know-more-text {
          background: linear-gradient(90deg, #bfdbfe, #c4b5fd, #f9a8d4, #c4b5fd, #bfdbfe);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: knowMoreTextShift 4s ease-in-out infinite;
        }
      `}</style>
      {/* Parallax Sections Container */}
      <div ref={containerRef} id="services" className="services-parallax-container relative">
        {/* Our Services Title Slide */}
        <div
          className="section-parallax"
          style={{
            top: '0vh',
            backgroundColor: '#000000',
            color: '#fff',
            zIndex: 1000,
            boxShadow: 'none',
            height: '150vh',
            overflow: 'hidden',
          }}
        >
          {/* Background Images at different angles */}
          {/* Image 1 - Top Left - Portrait orientation */}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: '8%',
              width: '25%',
              aspectRatio: '35 / 23',
              zIndex: 1,
              transform: 'rotate(-8deg)',
              opacity: 0.6,
            }}
          >
            <img
              src="/images/consulting.png"
              alt="Background"
              className="w-full h-full object-cover rounded-xl"
              style={{
                filter: 'brightness(0.7) blur(0.5px)',
              }}
              loading="lazy"
            />
          </div>

          {/* Image 2 - Top Right - Landscape orientation */}
          <div
            style={{
              position: 'absolute',
              top: '12%',
              right: '9%',
              width: '35%',
              aspectRatio: '35 / 20',
              zIndex: 1,
              transform: 'rotate(18deg)',
              opacity: 0.55,
            }}
          >
            <img
              src="/images/Cover-Image-2.png"
              alt="Background"
              className="w-full h-full object-cover rounded-xl"
              style={{
                filter: 'brightness(0.7) blur(0.5px)',
              }}
              loading="lazy"
            />
          </div>

          {/* Image 3 - Bottom Left - Landscape orientation */}
          <div
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '6%',
              width: '30%',
              aspectRatio: '28 / 18',
              zIndex: 1,
              transform: 'rotate(-22deg)',
              opacity: 0.6,
            }}
          >
            <img
              src="/images/frame3.png"
              alt="Background"
              className="w-full h-full object-cover rounded-xl"
              style={{
                filter: 'brightness(0.7) blur(0.5px)',
              }}
              loading="lazy"
            />
          </div>

          {/* Image 4 - Bottom Right - Portrait orientation */}
          <div
            style={{
              position: 'absolute',
              bottom: '12%',
              right: '8%',
              width: '18%',
              aspectRatio: '18 / 26',
              zIndex: 1,
              transform: 'rotate(12deg)',
              opacity: 0.55,
            }}
          >
            <img
              src="/images/frame2.jpg"
              alt="Background"
              className="w-full h-full object-cover rounded-xl"
              style={{
                filter: 'brightness(0.7) blur(0.5px)',
              }}
              loading="lazy"
            />
          </div>

          <div className="fixed-content" style={{ maxWidth: '1400px', width: '90%', zIndex: 10 }}>
            <div className="flex flex-col items-center justify-center" style={{ height: '150vh', paddingTop: '8vh' }}>
              <div className="text-center relative z-10">
                <h1 
                  className="font-bold"
                  style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', marginBottom: '4rem' }}
                >
                  Our Services
                </h1>
                {/* Animated Arrow */}
                <div
                  className="arrow-container"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    animation: 'bounceArrow 2s ease-in-out infinite',
                    cursor: 'pointer',
                    marginTop: '4rem',
                  }}
                  onClick={() => {
                    if (containerRef.current) {
                      const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
                      const nextSlidePosition = containerTop + (window.innerHeight * 1.5); // 150vh
                      window.scrollTo({
                        top: nextSlidePosition,
                        behavior: 'smooth',
                      });
                    }
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      border: '2px solid white',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#6366F1';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'white';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {services.map((service, index) => {
          const isFirst = index === 0;
          const isLast = index === services.length - 1;
          
          // Calculate top position: each slide is 100vh apart, starting after "Our Services" (150vh)
          const topPosition = 150 + (index * 100);
          
          // Last slide (Digital Consulting) is 250vh tall, others are 100vh
          const slideHeight = isLast ? '250vh' : '100vh';
          
          return (
            <div
              key={`service-slide-${index}`}
              className="section-parallax"
              style={{
                top: `${topPosition}vh`,
                height: slideHeight,
                backgroundColor: service.bgColor,
                color: service.textColor || '#fff',
                zIndex: 1000 + index + 1,
                boxShadow: 'none',
              }}
            >
              {/* Full screen background image for slide 3 (index 2) */}
              {index === 2 && service.images && service.images.length > 0 && (
                <div
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                  style={{
                    zIndex: 0,
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${service.images[0]})`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      opacity: 0.5,
                      width: 'clamp(60%, 80vw, 80%)',
                      height: 'clamp(60%, 80vh, 80%)',
                    }}
                  />
                </div>
              )}
              
              <div className="fixed-content" style={{ maxWidth: '1400px', width: '90%' }}>
                {/* Unique Layout for Slide 0 - Image on right, content on left */}
                {index === 0 && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                      <h1 
                        className="font-bold mb-4 md:mb-6"
                        style={{ fontSize: 'clamp(1.75rem, 6vw, 3.75rem)' }}
                      >
                        {service.title}
                      </h1>
                      <p 
                        className="leading-relaxed opacity-90"
                        style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
                      >
                        {service.description}
                      </p>
                    </div>
                    {service.images && service.images.length > 0 && (
                      <div className="lg:col-span-5">
                        <img
                          src={service.images[0]}
                          alt={service.title}
                          className="w-full h-auto rounded-xl"
                          style={{
                            maxHeight: '40vh',
                            objectFit: 'cover',
                            filter: 'brightness(0.9) contrast(1.05)',
                            boxShadow: '0 15px 40px rgba(255, 255, 255, 0.15)',
                            border: '2px solid rgba(255, 255, 255, 0.1)',
                          }}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Unique Layout for Slide 1 - Image on right, content on left */}
                {index === 1 && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                        {service.title}
                      </h1>
                      <p className="text-base md:text-lg lg:text-xl leading-relaxed opacity-90">
                        {service.description}
                      </p>
                      <a
                        href="https://agent.codeorbit.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="know-more-button group inline-flex items-center gap-3 mt-8 px-8 py-3 rounded-full text-white font-semibold tracking-wide transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b5cf6]"
                      >
                        <span className="know-more-text relative z-10 uppercase text-sm md:text-base tracking-[0.35em]">
                          Know More
                        </span>
                        <span className="relative z-10 text-xl transition-transform duration-300 ease-out group-hover:translate-x-2">
                          →
                        </span>
                      </a>
                    </div>
                    {service.images && service.images.length > 0 && (
                      <div className="lg:col-span-5 order-1 lg:order-2" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                          src={service.images[0]}
                          alt={service.title}
                          className="rounded-xl"
                          style={{
                            width: '90%',
                            height: '90%',
                            maxWidth: '90%',
                            maxHeight: '90%',
                            objectFit: 'contain',
                            filter: 'brightness(0.85) contrast(1.1)',
                            boxShadow: '0 8px 20px rgba(255, 255, 255, 0.1)',
                          }}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Unique Layout for Slide 2 - Background image behind, content in front */}
                {index === 2 && (
                  <div className="relative text-center max-w-4xl mx-auto px-6" style={{ zIndex: 10 }}>
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
                            maxHeight: '45vh',
                            objectFit: 'cover',
                            filter: 'brightness(0.85) contrast(1.1)',
                            boxShadow: '0 15px 40px rgba(255, 255, 255, 0.15)',
                            border: '2px solid rgba(255, 255, 255, 0.1)',
                          }}
                          loading="lazy"
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