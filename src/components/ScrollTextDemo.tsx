'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollTextDemo() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const line3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const isMobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      if (isMobile) {
        // Mobile: Smooth animations with delays, not tied to scroll
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        });

        if (line1Ref.current) {
          gsap.set(line1Ref.current, {
            '--bg-pos': '200%',
            '--stroke-opacity': '0',
          });

          timeline.to(line1Ref.current, {
            '--bg-pos': '100%',
            '--stroke-opacity': '1',
            duration: 1.2,
            ease: 'power2.out',
          });
        }

        if (line2Ref.current) {
          gsap.set(line2Ref.current, {
            '--bg-pos': '200%',
            '--stroke-opacity': '0',
          });

          timeline.to(
            line2Ref.current,
            {
              '--bg-pos': '100%',
              '--stroke-opacity': '1',
              duration: 1.2,
              ease: 'power2.out',
            },
            '-=0.6' // Start 0.6s before previous ends
          );
        }

        if (line3Ref.current) {
          gsap.set(line3Ref.current, {
            '--bg-pos': '200%',
            '--stroke-opacity': '0',
          });

          timeline.to(
            line3Ref.current,
            {
              '--bg-pos': '100%',
              '--stroke-opacity': '1',
              duration: 1.2,
              ease: 'power2.out',
            },
            '-=0.6' // Start 0.6s before previous ends
          );
        }
      } else {
        // Desktop: Scroll-tied animations
        // First line animation - animates first
        if (line1Ref.current) {
          gsap.set(line1Ref.current, {
            '--bg-pos': '200%',
            '--stroke-opacity': '0',
          });

          gsap.to(line1Ref.current, {
            '--bg-pos': '100%',
            '--stroke-opacity': '1',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'top 40%',
              scrub: true,
            },
          });
        }

        // Second line animation - animates after first line completes
        if (line2Ref.current) {
          gsap.set(line2Ref.current, {
            '--bg-pos': '200%',
            '--stroke-opacity': '0',
          });

          gsap.to(line2Ref.current, {
            '--bg-pos': '100%',
            '--stroke-opacity': '1',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 40%',
              end: 'top 0%',
              scrub: true,
            },
          });
        }

        // Third line animation - animates after second line completes
        if (line3Ref.current) {
          gsap.set(line3Ref.current, {
            '--bg-pos': '200%',
            '--stroke-opacity': '0',
          });

          gsap.to(line3Ref.current, {
            '--bg-pos': '100%',
            '--stroke-opacity': '1',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 0%',
              end: 'top -40%',
              scrub: true,
            },
          });
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="scroll-text-demo" 
      className="py-32 pb-40 scroll-text-section relative" 
      style={{ 
        backgroundColor: '#000000',
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Smoke Background - Above black background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/smoke-background-design.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
          zIndex: 1,
        }}
      />
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative" style={{ zIndex: 20 }}>
        <div className="scroll-text-wrapper relative" style={{ zIndex: 20 }}>
          <div className="scroll-text-heading text-center max-w-6xl mx-auto relative" style={{ zIndex: 20 }}>
            <h1 
              ref={line1Ref}
              className="font-bold leading-relaxed scroll-text-title block relative"
              style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)', zIndex: 20, fontFamily: 'Khand, sans-serif' }}
            >
              Transform Ideas Into Reality
            </h1>
            <h1 
              ref={line2Ref}
              className="font-bold leading-relaxed scroll-text-title block relative"
              style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)', zIndex: 20, fontFamily: 'Khand, sans-serif' }}
            >
              Through Innovation And
            </h1>
            <h1 
              ref={line3Ref}
              className="font-bold leading-relaxed scroll-text-title block relative"
              style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)', zIndex: 20, fontFamily: 'Khand, sans-serif' }}
            >
              Excellence
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

