  'use client';

  import { useEffect, useRef, useState } from 'react';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const [hasScrolled, setHasScrolled] = useState(false);
    const codeOrbitRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
      const footer = footerRef.current;
      if (!footer) return;

      let lastScrollY = window.scrollY;
      let isScrolling = false;

      const handleScroll = () => {
        if (isScrolling) return;

        const currentScrollY = window.scrollY;
        const footerTop = footer.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollPosition = currentScrollY + windowHeight;

        // Reset hasScrolled if scrolling back up past footer
        if (currentScrollY < lastScrollY && currentScrollY + windowHeight < footerTop - 400) {
          setHasScrolled(false);
        }

        // Check if we're scrolling down and near the footer (within 300px)
        if (
          currentScrollY > lastScrollY &&
          scrollPosition >= footerTop - 300 &&
          !hasScrolled &&
          !isScrolling
        ) {
          isScrolling = true;
          setHasScrolled(true);

          // Smoothly scroll to the bottom of the footer
          const footerBottom = footer.offsetTop + footer.offsetHeight;
          const targetScroll = footerBottom - windowHeight;

          window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
          });

          // Reset isScrolling after animation completes (approximately 1 second)
          setTimeout(() => {
            isScrolling = false;
          }, 1000);
        }

        lastScrollY = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [hasScrolled]);

    // Animation for Code Orbit letters - exactly like anime.js example
    useEffect(() => {
      if (!codeOrbitRef.current) return;

      // Wrap every letter in a span with its own wrapper for individual animation
      const textWrappers = codeOrbitRef.current.querySelectorAll('.letters');
      textWrappers.forEach((wrapper) => {
        const text = wrapper.textContent || '';
        // Wrap each character in both a letter-wrapper and letter span
        wrapper.innerHTML = text.split('').map(char => {
          if (char === ' ') return '<span class="letter-wrapper"><span class="letter"> </span></span>';
          return `<span class="letter-wrapper"><span class="letter">${char}</span></span>`;
        }).join('');
      });

      const letterWrappers = codeOrbitRef.current.querySelectorAll('.letter-wrapper');
      const letters = codeOrbitRef.current.querySelectorAll('.letter');
      
      // Separate "Code" and "Orbit" letters
      const codeLetters: Element[] = [];
      const orbitLetters: Element[] = [];
      
      // Find which letters belong to "Code" and which to "Orbit"
      textWrappers.forEach((wrapper, wrapperIndex) => {
        const wrapperLetters = wrapper.querySelectorAll('.letter');
        wrapperLetters.forEach(letter => {
          if (wrapperIndex === 0) {
            codeLetters.push(letter);
          } else {
            orbitLetters.push(letter);
          }
        });
      });
      
      // Set up each wrapper with overflow hidden to act as a curtain window
      // Each wrapper is positioned where its letter will end up
      gsap.set(letterWrappers, { 
        display: 'inline-block',
        overflow: 'hidden',
        position: 'relative'
      });
      
      // Calculate the starting position for each letter
      // Each letter needs to start to the left of the entire word
      letterWrappers.forEach((wrapper, index) => {
        // Get the cumulative width of all previous wrappers
        let leftOffset = 0;
        for (let i = 0; i < index; i++) {
          const prevWrapper = letterWrappers[i] as HTMLElement;
          leftOffset += prevWrapper.offsetWidth || 0;
        }
        // Each letter starts far to the left (negative position relative to word start)
        const startX = -leftOffset - 100;
        gsap.set(wrapper.querySelector('.letter') as HTMLElement, { 
          x: startX,
          position: 'relative'
        });
      });
      
      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: codeOrbitRef.current,
          start: 'top 90%',
          end: 'top 20%',
          scrub: 1.2
        }
      });

      // Code letters slide faster (0.9s)
      if (codeLetters.length > 0) {
        tl.to(codeLetters, {
          x: 0,
          duration: 0.9,
          ease: 'power2.out'
        }, 0);
      }
      
      // Orbit letters slide slower (1.1s)
      if (orbitLetters.length > 0) {
        tl.to(orbitLetters, {
          x: 0,
          duration: 1.1,
          ease: 'power2.out'
        }, 0);
      }

      // Logo animation removed - logo stays visible

      animationRef.current = tl;

      return () => {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars.trigger === codeOrbitRef.current) {
            trigger.kill();
          }
        });
        tl.kill();
      };
    }, []);


    // Function to manually trigger the animation
    const triggerAnimation = () => {
      if (!codeOrbitRef.current || !animationRef.current) return;
      
      // Reset to initial state - letters positioned to the left
      const letterWrappers = codeOrbitRef.current.querySelectorAll('.letter-wrapper');
      const letters = codeOrbitRef.current.querySelectorAll('.letter');
      
      letterWrappers.forEach((wrapper, index) => {
        let leftOffset = 0;
        for (let i = 0; i < index; i++) {
          const prevWrapper = letterWrappers[i] as HTMLElement;
          leftOffset += prevWrapper.offsetWidth || 0;
        }
        const startX = -leftOffset - 100;
        gsap.set(wrapper.querySelector('.letter') as HTMLElement, { 
          x: startX
        });
      });
      
      // Logo animation removed
      
      // Restart animation
      const tl = animationRef.current as gsap.core.Timeline;
      tl.restart();
    };

  return (
      <footer 
        ref={footerRef}
        className="bg-[#e8e6e2] text-gray-900 relative"
      >
        {/* Header Section */}
        <div className="px-8 md:px-16 py-4 border-b border-gray-500 relative">
          <div className="max-w-7xl mx-auto">
            <nav className="flex flex-wrap items-center justify-between gap-4 md:gap-8 text-sm pb-2">
              {/* Left Navigation Links */}
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                <a 
                  href="#hero" 
                  className="text-gray-900 hover:text-gray-700 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById('hero');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Home
                </a>
                <a 
                  href="#services" 
                  className="text-gray-900 hover:text-gray-700 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById('services');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Services
                </a>
                <a 
                  href="#about" 
                  className="text-gray-900 hover:text-gray-700 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById('about');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-900 hover:text-gray-700 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById('contact');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Contact
                </a>
              </div>

              {/* Right Contact Info */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
                <a href="mailto:hello@codeorbit.com" className="text-gray-900 hover:text-gray-700 transition-colors">
                  hello@codeorbit.com
                </a>
                <div className="flex items-center gap-2">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition-colors">
                    Instagram
                  </a>
                  <span className="text-gray-400">,</span>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition-colors">
                    LinkedIn
                  </a>
                </div>
                <span className="text-gray-600">
                  © Copyright Code Orbit {new Date().getFullYear()}
                </span>
              </div>
            </nav>
          </div>
          {/* Edge-to-edge underline - positioned right after nav */}
          <div className="absolute left-0 right-0 border-b border-gray-500" style={{ bottom: 'calc(100% - 3.5rem)' }}></div>
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Large Brand Name */}
            <div className="mt-4 md:mt-6 mb-0 relative">
              <div ref={codeOrbitRef} className="text-9xl md:text-[12rem] lg:text-[16rem] font-bold text-gray-900 font-khand tracking-tight leading-none relative pb-0" style={{ marginBottom: 0, paddingBottom: 0, lineHeight: 0 }}>
                <div className="ml10 ml-4 md:ml-6 pt-6 lg:ml-8">
                  <span className="text-wrapper">
                    <span className="letters">Code </span>
                  </span>
                </div>
                <div className="flex justify-end -mt-28 md:-mt-32 lg:-mt-36 mr-4 md:mr-6 lg:mr-8 mb-0 pb-0" style={{ marginBottom: 0, paddingBottom: 0 }}>
                  <div className="ml10 mb-0 pb-0" style={{ marginBottom: 0, paddingBottom: 0, lineHeight: 0 }}>
                    <span className="text-wrapper" style={{ marginBottom: 0, paddingBottom: 0 }}>
                      <span className="letters">Orbit</span>
                    </span>
                  </div>
                </div>
                <img 
                  src="/images/logo/logo1.png" 
                  alt="Code Orbit Logo" 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="px-8 md:px-16 pt-3 pb-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left Section - Logo and Code Orbit */}
            <div className="flex items-center gap-3 md:gap-4 ">
              {/* Logo - 9 squares pattern */}
              <div className="grid grid-cols-3 gap-0.5">
                {/* Row 1 */}
                <div className="w-4 h-4 bg-gray-900"></div>
                <div className="w-4 h-4"></div>
                <div className="w-4 h-4 bg-gray-900"></div>
                {/* Row 2 */}
                <div className="w-4 h-4"></div>
                <div className="w-4 h-4 bg-gray-900"></div>
                <div className="w-4 h-4"></div>
                {/* Row 3 */}
                <div className="w-4 h-4 bg-gray-900"></div>
                <div className="w-4 h-4"></div>
                <div className="w-4 h-4 bg-gray-900"></div>
              </div>
            </div>

            {/* Right Section - Description and Learn More */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
              <p className="text-gray-500 text-xs max-w-md">
                Code Orbit is part of _____, an interdisciplinary communications company.
              </p>
              <a 
                href="#learn-more" 
                className="text-gray-900 hover:text-gray-700 transition-colors text-xs flex items-center gap-2 group"
              >
                Learn More
                <svg 
                  className="w-3 h-3 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
      </div>
    </footer>
  );
}

