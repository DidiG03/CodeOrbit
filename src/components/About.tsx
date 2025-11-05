'use client';

import { useEffect, useRef, useState } from 'react';
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
  const firstImageRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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

      // First image expansion animation
      if (firstImageRef.current) {
        gsap.set(firstImageRef.current, {
          scale: 0.2,
          opacity: 0,
        });

        gsap.to(firstImageRef.current, {
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: firstImageRef.current,
            start: 'top 90%',
            end: 'top 30%',
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Error playing video:', error);
      });
    }
  };

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
          <div className="relative overflow-hidden rounded-2xl">
            {/* Fade overlay on edges */}
            <div 
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: 'radial-gradient(circle at center, transparent 0%, transparent 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.6) 100%)',
              }}
            />
            <img 
              ref={firstImageRef}
              src="/images/frame4.jpg" 
              alt="Our Team" 
              className="w-full h-full rounded-2xl object-cover relative"
              style={{ minHeight: '400px', transformOrigin: 'center center' }}
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 mt-12">
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

          {/* Right Column - Interactive Image/Video */}
          <div className="relative group">
            <div className="relative w-full h-full">
              {/* Main Image - shown when video is not playing */}
              {!isVideoPlaying && (
                <img 
                  src="/images/Cover-Image.png" 
                  alt="Team Collaboration" 
                  className="w-full h-full rounded-2xl object-cover transition-all duration-300"
                  style={{ minHeight: '400px' }}
                />
              )}
              
              {/* Video - shown when playing */}
              {isVideoPlaying && (
                <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ minHeight: '400px', backgroundColor: '#000' }}>
                  <video
                    ref={videoRef}
                    className="w-full h-full rounded-2xl object-cover"
                    style={{ 
                      minHeight: '400px',
                      width: '100%',
                      height: '100%',
                      display: 'block',
                      backgroundColor: '#000'
                    }}
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    poster="/images/cover-image.png"
                    onEnded={() => setIsVideoPlaying(false)}
                    onError={(e) => {
                      console.error('Video error:', e);
                      setIsVideoPlaying(false);
                      alert('Video playback error. Please ensure the video file (1104.mp4) exists in the public folder and is in MP4 format with H.264 codec.');
                    }}
                    onLoadedMetadata={() => {
                      if (videoRef.current) {
                        console.log('Video dimensions:', videoRef.current.videoWidth, 'x', videoRef.current.videoHeight);
                      }
                    }}
                  >
                    <source src="/1104.mp4" type="video/mp4" />
                    <source src="/1104(1).mov" type="video/quicktime" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              
              {/* Interactive Button with Rotating Text - only show when video is not playing */}
              {!isVideoPlaying && (
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
                    onClick={handlePlayVideo}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-[#6366F1] rounded-full flex items-center justify-center hover:bg-[#4F46E5] transition-colors shadow-lg pointer-events-auto"
                    aria-label="Play video"
                    title="Play video"
                  >
                    <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.5 12L8 6.5v11L17.5 12z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

