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
    const [hasScrolled, setHasScrolled] = useState(false);
    const codeOrbitRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Timeline | null>(null);
    const [fontSize, setFontSize] = useState('clamp(8rem, 20vw, 30rem)');
    const [logoSize, setLogoSize] = useState('w-12 h-12');

    // Handle responsive font size for screens below 1080px
    useEffect(() => {
      const updateFontSize = () => {
        if (window.innerWidth < 1080) {
          // Use a small percentage of viewport width for screens below 1080px
          // Calculate based on screen width to ensure it fits properly
          const width = window.innerWidth;
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
      };

      updateFontSize();
      window.addEventListener('resize', updateFontSize);

      return () => {
        window.removeEventListener('resize', updateFontSize);
      };
    }, []);

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
              if (codeOrbitRef.current && tl) {
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
        ScrollTrigger.create({
          trigger: codeOrbitRef.current,
          start: 'top 90%',
          end: 'top 20%',
          scrub: 1.2,
          animation: tl
        });
      }

      // Logo animation removed - logo stays visible

      animationRef.current = tl;

      // Cleanup on unmount
      return () => {
        if (scrollCleanup) {
          scrollCleanup();
        } else {
          ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.vars?.trigger === codeOrbitRef.current) {
              trigger.kill();
            }
          });
        }
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

        {/* Footer Bottom Section */}
        <div className="max-w-7xl mx-auto">
            <div className="absolute left-0 right-0 border-b border-gray-500" style={{ top: 'calc(100% - 3rem)' }}></div>

            <nav className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 lg:gap-8 text-xs md:text-sm pb-2">
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
          </div>
        </footer>
      );
    }

