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
    // Calculate total height needed for 5 sections (Our Services + 4 service slides)
    // Our Services slide is 150vh, others are 100vh each
    const totalHeight = window.innerHeight * 5.5; // 1.5vh (Our Services) + 4vh (4 service slides)
    if (containerRef.current) {
      containerRef.current.style.height = `${totalHeight}px`;
    }
  }, []);

  return (
    <>
      {/* Parallax Sections Container */}
      <div ref={containerRef} className="services-parallax-container relative">
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
              width: '300px',
              height: '400px',
              zIndex: 1,
              transform: 'rotate(-8deg)',
              opacity: 0.6,
            }}
          >
            <img
              src="/images/frame1.jpg"
              alt="Background"
              className="w-full h-full object-cover rounded-xl"
              style={{
                filter: 'brightness(0.7) blur(0.5px)',
              }}
            />
          </div>

          {/* Image 2 - Top Right - Landscape orientation */}
          <div
            style={{
              position: 'absolute',
              top: '12%',
              right: '6%',
              width: '450px',
              height: '300px',
              zIndex: 1,
              transform: 'rotate(18deg)',
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
            />
          </div>

          {/* Image 3 - Bottom Left - Landscape orientation */}
          <div
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '6%',
              width: '420px',
              height: '280px',
              zIndex: 1,
              transform: 'rotate(-22deg)',
              opacity: 0.6,
            }}
          >
            <img
              src="/images/frame3.jpg"
              alt="Background"
              className="w-full h-full object-cover rounded-xl"
              style={{
                filter: 'brightness(0.7) blur(0.5px)',
              }}
            />
          </div>

          {/* Image 4 - Bottom Right - Portrait orientation */}
          <div
            style={{
              position: 'absolute',
              bottom: '12%',
              right: '8%',
              width: '300px',
              height: '400px',
              zIndex: 1,
              transform: 'rotate(15deg)',
              opacity: 0.55,
            }}
          >
            <img
              src="/images/frame4.jpg"
              alt="Background"
              className="w-full h-full object-cover rounded-xl"
              style={{
                filter: 'brightness(0.7) blur(0.5px)',
              }}
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
          
          return (
            <div
              key={`service-slide-${index}`}
              className="section-parallax"
              style={{
                top: `${150 + (index * 100)}vh`,
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