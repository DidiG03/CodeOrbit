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

    const ctx = gsap.context(() => {
      // First line animation
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

      // Second line animation
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
            start: 'top 50%',
            end: 'top 10%',
            scrub: true,
          },
        });
      }

      // Third line animation
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
            start: 'top 20%',
            end: 'top -10%',
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="scroll-text-demo" 
      className="py-32 pb-40 scroll-text-section" 
      style={{ 
        backgroundColor: '#060010', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="scroll-text-wrapper">
          <div className="scroll-text-heading text-center max-w-6xl mx-auto">
            <h1 
              ref={line1Ref}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-relaxed scroll-text-title block"
            >
              Transform Ideas Into Reality
            </h1>
            <h1 
              ref={line2Ref}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-relaxed scroll-text-title block"
            >
              Through Innovation And
            </h1>
            <h1 
              ref={line3Ref}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-relaxed scroll-text-title block"
            >
              Excellence
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

