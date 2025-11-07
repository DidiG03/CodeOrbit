'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const heading1Ref = useRef<HTMLHeadingElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);
  const span1Ref = useRef<HTMLSpanElement>(null);
  const span2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isMobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      if (isMobile) {
        // Mobile: Smooth animations with delays
        // First heading and span animation
        const timeline1 = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        });

        if (heading1Ref.current) {
          gsap.set(heading1Ref.current, {
            '--bg-pos': '200%',
            '--stroke-opacity': '0',
          });

          timeline1.to(heading1Ref.current, {
            '--bg-pos': '100%',
            '--stroke-opacity': '1',
            duration: 1.2,
            ease: 'power2.out',
          });
        }

        if (span1Ref.current) {
          gsap.set(span1Ref.current, {
            '--bg-pos': '200%',
            '--stroke-opacity': '0',
          });

          timeline1.to(
            span1Ref.current,
            {
              '--bg-pos': '100%',
              '--stroke-opacity': '1',
              duration: 1.2,
              ease: 'power2.out',
            },
            '-=0.8' // Start 0.8s before previous ends
          );
        }

        // Second heading and span animation
        const timeline2 = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center 80%',
            once: true,
          },
        });

        if (heading2Ref.current) {
          gsap.set(heading2Ref.current, {
            '--bg-pos': '200%',
            '--stroke-opacity': '0',
          });

          timeline2.to(heading2Ref.current, {
            '--bg-pos': '100%',
            '--stroke-opacity': '1',
            duration: 1.2,
            ease: 'power2.out',
          });
        }

        if (span2Ref.current) {
          gsap.set(span2Ref.current, {
            '--bg-pos': '200%',
            '--stroke-opacity': '0',
          });

          timeline2.to(
            span2Ref.current,
            {
              '--bg-pos': '100%',
              '--stroke-opacity': '1',
              duration: 1.2,
              ease: 'power2.out',
            },
            '-=0.8' // Start 0.8s before previous ends
          );
        }
      } else {
        // Desktop: Scroll-tied animations
        // First heading animation
        if (heading1Ref.current) {
          gsap.set(heading1Ref.current, {
            '--bg-pos': '200%',
            '--stroke-opacity': '0',
          });

          gsap.to(heading1Ref.current, {
            '--bg-pos': '100%',
            '--stroke-opacity': '1',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'top -10%',
              scrub: true,
            },
          });
        }

        // First span (Our Expertise)
        if (span1Ref.current) {
          gsap.set(span1Ref.current, {
            '--bg-pos': '200%',
            '--stroke-opacity': '0',
          });

          gsap.to(span1Ref.current, {
            '--bg-pos': '100%',
            '--stroke-opacity': '1',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'top -10%',
              scrub: true,
            },
          });
        }

        // Second heading animation
        if (heading2Ref.current) {
          gsap.set(heading2Ref.current, {
            '--bg-pos': '200%',
            '--stroke-opacity': '0',
          });

          gsap.to(heading2Ref.current, {
            '--bg-pos': '100%',
            '--stroke-opacity': '1',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'center bottom',
              end: 'center -20%',
              scrub: true,
            },
          });
        }

        // Second span (Online Excellence)
        if (span2Ref.current) {
          gsap.set(span2Ref.current, {
            '--bg-pos': '200%',
            '--stroke-opacity': '0',
          });

          gsap.to(span2Ref.current, {
            '--bg-pos': '100%',
            '--stroke-opacity': '1',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'center bottom',
              end: 'center -20%',
              scrub: true,
            },
          });
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 pb-40 about-scroll-section" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Headline */}
          <div className="relative about-scroll-title">
            {/* OUR STORY label */}
            <div className="mb-6 relative">
              <div className="absolute left-0 top-[-6px] w-16 h-8 border-l-2 border-t-2 border-white/20"></div>
              <span className="text-l uppercase tracking-widest text-white/60 ml-6" style={{ fontFamily: 'Khand, sans-serif' }}>About US</span>
            </div>
            
            {/* Blue Gradient Accent Bar */}
            <div className="absolute left-0 top-8 w-2 h-24 md:h-32 bg-gradient-to-b from-[#6366F1] to-transparent"></div>
            
            {/* Main Headline */}
            <div className="about-scroll-heading relative z-10 ml-6 md:ml-10 lg:ml-12">
              <h2 
                ref={heading1Ref} 
                className="font-semibold leading-tight about-scroll-title"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
              >
                Your Vision<br/>
                <span ref={span1Ref} className="about-scroll-span">Our Expertise</span><br/>
                Your Success
              </h2>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Large Team Image */}
          <div className="relative overflow-hidden rounded-2xl">
            {/* Fade overlay on edges */}
            <div 
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: 'radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.6) 100%)',
              }}
            />
<<<<<<< Updated upstream
            <img 
              src="/images/frame4.jpg" 
              alt="Our Team" 
              className="w-full h-full rounded-2xl object-cover relative"
              style={{ minHeight: '400px' }}
              loading="lazy"
            />
=======
>>>>>>> Stashed changes

          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Description */}
            <p className="text-lg text-white/70 leading-relaxed">
              We are a team of passionate developers, designers, and innovators dedicated to 
              creating exceptional digital experiences that drive business growth. With years 
              of experience in software development and a commitment to excellence, we help 
              businesses transform their ideas into reality through cutting-edge technology 
              and innovative solutions.
            </p>

            {/* Statistics */}
            {/* <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div>
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">XX+</div>
                <div className="text-sm md:text-base text-white/60">Completed Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">XX</div>
                <div className="text-sm md:text-base text-white/60">Satisfied Customers</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">XX+</div>
                <div className="text-sm md:text-base text-white/60">Years Of Mastery</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold text-white mb-2">XX+</div>
                <div className="text-sm md:text-base text-white/60">Worldwide Honors</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* New Section - Timeline and Interactive Image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-16 md:mt-32">
          {/* Left Column - Story and Timeline */}
          <div className="space-y-8">
            {/* OUR STORY label */}
            <div className="relative">
              <div className="absolute left-0 top-[-6px] w-12 h-6 border-l-2 border-t-2 border-white/20"></div>
              <span className="text-l uppercase tracking-widest text-white/60 ml-4">Our Story</span>
            </div>

            {/* Main Headline */}
            <div className="about-scroll-heading ml-4 md:ml-8">
              <h2 
                ref={heading2Ref} 
                className="font-bold leading-tight about-scroll-title"
                style={{ fontSize: 'clamp(2rem, 7vw, 3.75rem)' }}
              >
                Your Gateway To{' '}
                <span ref={span2Ref} className="about-scroll-span">Online Excellence</span>{' '}
                Dream Big In Pixels.
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-white/60 leading-relaxed">
              We are a team of passionate developers, designers, and innovators dedicated to 
              creating exceptional digital experiences that drive business growth. With years 
              of experience in software development and a commitment to excellence, we help 
              businesses transform their ideas into reality through cutting-edge technology.
            </p>            
          </div>

          {/* Right Column - Image */}
          <div className="relative group">
            <div className="relative w-full h-full">
              <img 
                src="/images/Cover-Image.png" 
                alt="Team Collaboration" 
                className="w-full h-full rounded-2xl object-cover transition-all duration-300"
                style={{ minHeight: '400px' }}
                loading="lazy"
              />
              
              {/* Rotating Text Overlay - positioned with percentages */}
              <div 
                className="absolute pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '30%',
                  height: '30%',
                  minWidth: '120px',
                  minHeight: '120px',
                  maxWidth: '192px',
                  maxHeight: '192px',
                }}
              >
                <svg 
                  className="w-full h-full pointer-events-none"
                  viewBox="0 0 192 192"
                  preserveAspectRatio="xMidYMid meet"
                  style={{ 
                    animation: 'spin 20s linear infinite',
                    transformOrigin: '50% 50%'
                  }}
                >
                  <defs>
                    <path id="circle" d="M 96,96 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
                  </defs>
                  <text fontSize="11" fill="white" opacity="0.8">
                    <textPath href="#circle" startOffset="0%">
                      Get In Touch · Get In Touch · Get In Touch · 
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

