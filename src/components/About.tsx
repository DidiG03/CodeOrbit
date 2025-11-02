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

    const ctx = gsap.context(() => {
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
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Large Team Image */}
          <div className="relative">
            <img 
              src="/images/frame4.jpg" 
              alt="Our Team" 
              className="w-full h-full rounded-2xl object-cover"
              style={{ minHeight: '400px' }}
            />
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
            <div className="grid grid-cols-2 gap-4 md:gap-6">
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
            </div>

            {/* Watch Intro Section */}
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-3">
                {/* Profile pictures placeholder - using colored circles */}
                <div className="w-12 h-12 rounded-full border-2 border-white/30 bg-gradient-to-br from-purple-500 to-blue-500"></div>
                <div className="w-12 h-12 rounded-full border-2 border-white/30 bg-gradient-to-br from-purple-500 to-[#6366F1]"></div>
                <div className="w-12 h-12 rounded-full border-2 border-white/30 bg-gradient-to-br from-blue-500 to-cyan-500"></div>
              </div>
              <button className="flex items-center gap-2 md:gap-3 text-white text-sm md:text-lg font-medium hover:text-[#6366F1] transition-colors">
                <span>WATCH INTRO</span>
              </button>
              {/* Play Button */}
              <button 
                className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-[#6366F1] flex items-center justify-center hover:bg-[#6366F1] transition-colors group"
                aria-label="Watch intro video"
                title="Watch intro video"
              >
                <svg className="w-4 h-4 md:w-6 md:h-6 text-[#6366F1] group-hover:text-white transition-colors ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
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

            {/* Know More Button */}
            <div className="btn-wrapper">
              <button className="btn">
                <svg
                  className="btn-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 1.42 1.42l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76Z" />
                </svg>
                <div className="txt-wrapper">
                  <span className="txt-1">
                    {Array.from("Know More").map((char, index) => (
                      <span key={index} className="btn-letter">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                </div>
              </button>
            </div>

            {/* Timeline */}
            <div className="space-y-6 pt-12 pb-8 md:pb-12">
              {/* Timeline Line and Markers */}
              <div className="relative h-32">
                {/* Horizontal Line */}
                <div className="absolute left-0 right-0 top-12 h-0.5 bg-white/20"></div>
                
                {/* Markers */}
                <div className="flex justify-between h-full">
                  <div className="flex flex-col items-center relative ml-4 pb-20 md:pb-24">
                    <div className="absolute top-8 md:top-12 w-16 h-16 -translate-y-1/2">
                        <img src="/images/frame5.jpg" alt="2000" className="w-16 h-16 rounded-full object-fill" />
                    </div>
                    <div className="absolute top-28 md:top-32">
                      <div className="text-white text-sm mb-1 ml-4">2019</div>
                      <div className="text-white/60 text-xs">Establishment & Foundation</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center relative">
                    <div className="absolute top-12 w-4 h-4 -translate-y-1/2">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-20 text-white text-sm">2020</div>
                  </div>
                  <div className="flex flex-col items-center relative">
                    <div className="absolute top-12 w-4 h-4 -translate-y-1/2">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-20 text-white text-sm">2022</div>
                  </div>
                  <div className="flex flex-col items-center relative">
                    <div className="absolute top-12 w-4 h-4 -translate-y-1/2">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-20 text-white text-sm">2023</div>
                  </div>
                  <div className="flex flex-col items-center relative">
                    <div className="absolute top-12 w-4 h-4 -translate-y-1/2">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-20 text-white text-sm">2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Image */}
          <div className="relative group">
            <div className="relative w-full h-full">
              {/* Main Image */}
              <img 
                src="/images/frame6.jpg" 
                alt="Team Collaboration" 
                className="w-full h-full rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                style={{ minHeight: '400px' }}
              />
              
              {/* Interactive Button with Rotating Text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg 
                  className="w-32 h-32 md:w-48 md:h-48 pointer-events-none"
                  viewBox="0 0 192 192"
                  style={{ 
                    animation: 'spin 20s linear infinite',
                    transformOrigin: '96px 96px'
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
                <button 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-[#6366F1] rounded-full flex items-center justify-center hover:bg-[#4F46E5] transition-colors shadow-lg pointer-events-auto"
                  aria-label="Get in touch"
                  title="Get in touch"
                >
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.5 12L8 6.5v11L17.5 12z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

