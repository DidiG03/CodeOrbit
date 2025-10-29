'use client';

import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ src, alt, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ y: -8 }}
      className="group relative h-[420px] flex-shrink-0 w-full max-w-[280px] rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Image Container */}
      <div className="relative w-full h-full overflow-hidden">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#A78BFA] transition-colors duration-300">
              {title}
            </h3>
            <p className="text-white/70 text-sm mb-4 line-clamp-2">
              {description}
            </p>
          </motion.div>
          
          {/* Action Button */}
          <div className="btn-wrapper" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button 
              className="btn" 
              style={{ 
                fontSize: '0.875rem',
                padding: '0.375em 0.375em 0.375em 0.875em',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(16, 16, 16, 0.8)'
              }}
            >
              <svg
                className="btn-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style={{ height: '20px' }}
              >
                <path d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 1.42 1.42l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z" />
              </svg>
              <div className="txt-wrapper">
                <span className="txt-1">
                  {Array.from("Learn More").map((char, index) => (
                    <span key={index} className="btn-letter">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Shine Effect on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
    </motion.div>
  );
};

export default function Services() {
  const sectionRef = useRef(null);
  const leftLineRef = useRef(null);
  const rightLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const cardsRef = useRef(null);
  const titleRef = useRef(null);

  const services = useMemo(() => [
    { 
      src: '/images/frame2.jpg', 
      alt: 'Service 1', 
      title: 'Service 1',
      description: 'Transform your business with cutting-edge solutions'
    },
    { 
      src: '/images/frame2.jpg', 
      alt: 'Service 2', 
      title: 'Service 2',
      description: 'Innovative approaches to digital transformation'
    },
    { 
      src: '/images/frame2.jpg', 
      alt: 'Service 3', 
      title: 'Service 3',
      description: 'Expert consultation and strategic planning services'
    },
    { 
      src: '/images/frame2.jpg', 
      alt: 'Service 4', 
      title: 'Service 4',
      description: 'End-to-end solutions tailored to your needs'
    }
  ], []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Vertical lines - animate down once then stay in place
      if (leftLineRef.current && rightLineRef.current) {
        gsap.set([leftLineRef.current, rightLineRef.current], { height: '0%' });
        gsap.to([leftLineRef.current, rightLineRef.current],
          {
            height: '85%',
            duration: 1.5,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // Horizontal line that expands and collapses with scroll
      gsap.fromTo(bottomLineRef.current,
        { 
          width: '0%',
          left: '50%'
        },
        {
          width: '80%',
          left: '10%',
          ease: 'power1.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            end: 'top 40%',
            scrub: 0.6
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative min-h-screen bg-[#060010] pt-32 pb-40"
      style={{ overflowX: 'hidden' }}
    >
      {/* Decorative Lines */}
      <div 
        ref={leftLineRef}
        className="absolute left-[7.019%] w-[1.5px] bg-indigo-500 pointer-events-none"
        style={{ willChange: 'height', top: 0 }}
      />
      
      <div 
        ref={rightLineRef}
        className="absolute right-[7%] w-[1.5px] bg-indigo-500 pointer-events-none"
        style={{ willChange: 'height', top: 0 }}
      />
      
      {/* Title Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 mb-20 text-center">
        <h2 ref={titleRef} className="text-6xl font-bold text-white mb-4">
          <span className="text-wrapper">
            <span className="letters">Our Services</span>
          </span>
        </h2>
        <p className="text-white/80 text-lg">
          Discover how we can transform your business
        </p>
      </div>
      
      {/* Horizontal Line */}
      <div 
        ref={bottomLineRef}
        className="absolute h-[1.5px] bg-indigo-500 pointer-events-none"
        style={{ willChange: 'width, left', top: '85px' }}
      />
      
      {/* Cards Container */}
      <div 
        ref={cardsRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-8 flex gap-6 overflow-x-auto scrollbar-hide overflow-y-visible"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {services.map((service, index) => (
          <div key={`service-${index}`} style={{ scrollSnapAlign: 'start', minWidth: '280px', flex: '0 0 auto', overflow: 'visible' }}>
            <ServiceCard {...service} index={index} />
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}