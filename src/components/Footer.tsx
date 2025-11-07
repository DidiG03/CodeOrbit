'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type FooterProps = {
  onGetQuoteClick?: () => void;
};

export default function Footer({ onGetQuoteClick }: FooterProps) {
    const footerRef = useRef<HTMLElement>(null);
    const codeOrbitRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Timeline | null>(null);
    const [fontSize, setFontSize] = useState('clamp(8rem, 20vw, 30rem)');
    const [logoSize, setLogoSize] = useState('w-12 h-12');

    // Handle responsive font size for screens below 1080px
    useEffect(() => {
      let rafId: number | null = null;
      
      const updateFontSize = () => {
        // Use requestAnimationFrame to batch DOM reads and avoid forced reflow
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
        }
        
        rafId = requestAnimationFrame(() => {
          const width = window.innerWidth;
          
          if (width < 1080) {
            // Use a small percentage of viewport width for screens below 1080px
            // Calculate based on screen width to ensure it fits properly
            if (width <= 400) {
              // Very small mobile screens (400px and less)
              setFontSize('clamp(5.5rem, 16vw, 9rem)');
              setLogoSize('w-11 h-11');
            } else if (width < 480) {
              // Very small mobile screens
              setFontSize('clamp(6rem, 18vw, 10rem)');
              setLogoSize('w-12 h-12');
            } else if (width < 768) {
              // Small tablets and large phones
              setFontSize('clamp(7rem, 22vw, 14rem)');
              setLogoSize('w-16 h-16');
            } else {
              // Medium tablets and small laptops
              setFontSize('clamp(8rem, 25vw, 18rem)');
              setLogoSize('w-20 h-20');
            }
          } else {
            setFontSize('clamp(8rem, 20vw, 30rem)');
            setLogoSize('sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48');
          }
          
          rafId = null;
        });
      };

      updateFontSize();
      
      // Use ResizeObserver for better performance than window resize
      const resizeObserver = new ResizeObserver(() => {
        updateFontSize();
      });
      
      resizeObserver.observe(document.documentElement);

      return () => {
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
        }
        resizeObserver.disconnect();
      };
    }, []);


    // Animation for Code Orbit letters - exactly like anime.js example
    useEffect(() => {
      // Capture ref value at the start to avoid stale closure warning
      const codeOrbitElement = codeOrbitRef.current;
      if (!codeOrbitElement) return;

      // Wrap every letter in a span with its own wrapper for individual animation
      const textWrappers = codeOrbitElement.querySelectorAll('.letters');
      textWrappers.forEach((wrapper) => {
        const text = wrapper.textContent || '';
        // Wrap each character in both a letter-wrapper and letter span
        wrapper.innerHTML = text.split('').map(char => {
          if (char === ' ') return '<span class="letter-wrapper"><span class="letter"> </span></span>';
          return `<span class="letter-wrapper"><span class="letter">${char}</span></span>`;
        }).join('');
      });

      const letterWrappers = codeOrbitElement.querySelectorAll('.letter-wrapper');
      const letters = codeOrbitElement.querySelectorAll('.letter');
      
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
      // Batch DOM reads first, then writes to avoid forced reflow
      const letterPositions: Array<{ element: HTMLElement; x: number }> = [];
      
      // First, batch all DOM reads
      letterWrappers.forEach((wrapper, index) => {
        // Get the cumulative width of all previous wrappers (batch reads)
        let leftOffset = 0;
        for (let i = 0; i < index; i++) {
          const prevWrapper = letterWrappers[i] as HTMLElement;
          leftOffset += prevWrapper.offsetWidth || 0;
        }
        // Each letter starts far to the left (negative position relative to word start)
        const startX = -leftOffset - 100;
        const letterElement = wrapper.querySelector('.letter') as HTMLElement;
        if (letterElement) {
          letterPositions.push({ element: letterElement, x: startX });
        }
      });
      
      // Set initial positions immediately (needed before timeline creation)
      // But use gsap.set which batches internally, so this is still optimized
      letterPositions.forEach(({ element, x }) => {
        gsap.set(element, { 
          x: x,
          position: 'relative'
        });
      });
      
      // Create timeline - auto-play for larger screens, timer-based for smaller screens
      const isSmallScreen = window.innerWidth < 1080;
      const tl = gsap.timeline({ paused: true });

      let scrollCleanup: (() => void) | null = null;

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

      // For smaller screens, trigger animation after user scrolls down (restartable)
      if (isSmallScreen) {
        let lastScrollY = 0;
        let timeoutId: NodeJS.Timeout | null = null;
        
        const checkScrollAndAnimate = () => {
          const currentScrollY = window.scrollY;
          const scrollDelta = currentScrollY - lastScrollY;
          
          // Check if user has scrolled down (positive delta)
          if (scrollDelta > 0 && currentScrollY > 200) {
            // Clear any existing timeout to restart the timer
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
            
            // Restart the animation timeline
            tl.restart();
            tl.pause();
            
            // Wait 50ms then trigger animation
            timeoutId = setTimeout(() => {
              if (codeOrbitElement && tl) {
                console.log('Triggering animation for small screen');
                // Play the animation
                tl.play();
              }
            }, 50);
          }
          
          lastScrollY = currentScrollY;
        };

        // Set up scroll listener
        window.addEventListener('scroll', checkScrollAndAnimate, { passive: true });
        
        scrollCleanup = () => {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          window.removeEventListener('scroll', checkScrollAndAnimate);
        };
      } else {
        // For larger screens, use ScrollTrigger as before
        let scrollTriggerInstance: ScrollTrigger | null = null;
        let initAttempted = false;
        
        // Wait for element to be properly positioned before creating ScrollTrigger
        const initScrollTrigger = () => {
          if (!codeOrbitElement || initAttempted) return;
          
          // Ensure element is in DOM and has dimensions
          const rect = codeOrbitElement.getBoundingClientRect();
          if (rect.width === 0 && rect.height === 0) {
            // Element not ready yet, try again
            setTimeout(initScrollTrigger, 50);
            return;
          }
          
          // Prevent multiple initializations
          if (scrollTriggerInstance) return;
          
          initAttempted = true;
          
          scrollTriggerInstance = ScrollTrigger.create({
            trigger: codeOrbitElement,
            start: 'top 90%',
            end: 'top 20%',
            scrub: 1.2,
            animation: tl,
            invalidateOnRefresh: true
          });
          
          // Refresh ScrollTrigger to ensure it calculates positions correctly
          ScrollTrigger.refresh();
        };
        
        // Initialize ScrollTrigger after DOM is ready
        requestAnimationFrame(() => {
          initScrollTrigger();
        });
        
        // Also try after a delay in case RAF wasn't enough
        setTimeout(() => {
          if (codeOrbitElement && !scrollTriggerInstance) {
            initScrollTrigger();
          }
        }, 200);
        
        // Refresh ScrollTrigger on window load and resize
        const refreshScrollTrigger = () => {
          if (scrollTriggerInstance) {
            ScrollTrigger.refresh();
          }
        };
        
        if (document.readyState === 'complete') {
          setTimeout(refreshScrollTrigger, 100);
        } else {
          window.addEventListener('load', refreshScrollTrigger, { once: true });
        }
        
        window.addEventListener('resize', refreshScrollTrigger, { passive: true });
        
        // Store cleanup
        scrollCleanup = () => {
          window.removeEventListener('load', refreshScrollTrigger);
          window.removeEventListener('resize', refreshScrollTrigger);
          if (scrollTriggerInstance) {
            scrollTriggerInstance.kill();
            scrollTriggerInstance = null;
          }
        };
      }

      // Logo animation removed - logo stays visible

      animationRef.current = tl;

      // Cleanup on unmount
      return () => {
        if (scrollCleanup) {
          scrollCleanup();
        }
        
        // Kill all ScrollTriggers associated with this element
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars?.trigger === codeOrbitElement) {
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
        {/* Navigation Section - At the top */}
        <div className="relative px-2 md:px-4 lg:px-8 pt-4 pb-4">
          <nav className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 lg:gap-8 text-xs md:text-sm px-4 md:px-6 lg:px-8">
              {/* Left Navigation Links - Mobile with percentage spacing */}
              <div className="flex md:hidden items-center justify-between w-full pr-4">
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
                  style={{ width: '18%' }}
                >
                  Home
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
                  style={{ width: '18%', textAlign: 'center' }}
                >
                  About
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
                  style={{ width: '20%', textAlign: 'center' }}
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-900 hover:text-gray-700 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onGetQuoteClick) {
                      onGetQuoteClick();
                    }
                  }}
                  style={{ width: '20%', textAlign: 'center' }}
                >
                  Get a Quote
                </a>

              </div>
              
              {/* Left Navigation Links - Desktop */}
              <div className="hidden md:flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
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
                  href="#contact" 
                  className="text-gray-900 hover:text-gray-700 transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onGetQuoteClick) {
                      onGetQuoteClick();
                    }
                  }}
                >
                  Get a Quote
                </a>

              </div>

              {/* Right Contact Info - Hidden on mobile, shown on desktop */}
              <div className="hidden md:flex flex-row flex-wrap items-center gap-4 lg:gap-6 xl:gap-8 text-xs md:text-sm">
                <a href="mailto:hello@codeorbit.com" className="text-gray-900 hover:text-gray-700 transition-colors">
                  hello@codeorbit.com
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition-colors">
                  Instagram
                </a>
                <span className="text-gray-600 whitespace-nowrap">
                  © Copyright Code Orbit {new Date().getFullYear()}
                </span>
              </div>
          </nav>

          {/* Border line right after navigation - full width */}
          <div className="absolute left-0 right-0 border-b border-gray-500 mt-4"></div>
        </div>

        {/* Header Section */}
        <div className="px-4 md:px-8 lg:px-16 py-4 relative">
          {/* Edge-to-edge underline - positioned right after nav */}
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Large Brand Name */}
            <div className="mt-4 md:mt-6 mb-0 relative">
              <div ref={codeOrbitRef} className="font-bold text-gray-900 font-khand tracking-tight leading-none relative pb-0" style={{ marginBottom: 0, paddingBottom: 0, lineHeight: 0, fontSize }}>
                <div className="ml10 ml-2 md:ml-4 lg:ml-6 xl:ml-8 pt-2 md:pt-4 lg:pt-6">
                  <span className="text-wrapper">
                    <span className="letters">Code </span>
                  </span>
                </div>
                <div className="flex justify-end -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-32 xl:-mt-36 mr-2 md:mr-4 lg:mr-6 xl:mr-8 mb-0 pb-0" style={{ marginBottom: 0, paddingBottom: 0 }}>
                  <div className="ml10 mb-0 pb-0" style={{ marginBottom: 0, paddingBottom: 0, lineHeight: 0 }}>
                    <span className="text-wrapper" style={{ marginBottom: 0, paddingBottom: 0 }}>
                      <span className="letters">Orbit</span>
                    </span>
                  </div>
                </div>
                <img 
                  src="/images/logo/logo1.png" 
                  alt="Code Orbit Logo" 
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${logoSize} object-contain`}
                />
              </div>
            </div>
          </div>
        </div>

      </footer>
    );
  }

