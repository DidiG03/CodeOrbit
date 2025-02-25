"use client"

import { Button } from "@/components/ui/button"
import { Parallax } from 'react-scroll-parallax'
import { Link } from 'react-scroll'
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-zinc-950 overflow-hidden">
      {/* Background Parallax Elements */}
      <Parallax 
        translateY={[-20, 20]} 
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>
      </Parallax>

      {/* Logo at top */}
      <div className="container px-4 pt-8">
        <Image 
          src="/logo/HorizontalWhite.png" 
          alt="Code Orbit Logo" 
          width={200} 
          height={70}
          priority
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-12 text-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
                <span className="text-white">Welcome to </span>
                <span className="text-blue-500">Code</span>
                <span className="inline-flex items-center relative">
                  <Image 
                    src="/logo/Untitled_Artwork.png" 
                    alt="Code Orbit Symbol" 
                    width={220} 
                    height={220}
                    priority
                    className="object-contain ml-5"
                  />
                </span>
                <span className="text-blue-500">Orbit</span>
              </h1>
              <p className="text-2xl md:text-3xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
                Empowering businesses to thrive in an increasingly digital world through innovative technology and strategic expertise.
              </p>
            </div>
            
            <div className="flex gap-8">
              <Link to="services" smooth={true} duration={500} offset={-50}>
                <Button 
                  variant="default" 
                  size="lg" 
                  className="min-w-[200px] h-14 text-xl bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Our Services
                </Button>
              </Link>
              <Link to="connect" smooth={true} duration={500} offset={-50}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="min-w-[200px] h-14 text-xl border-blue-600/50 hover:bg-blue-600/10 transition-colors"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <Image 
          src="/logo/Untitled_Artwork.png" 
          alt="Code Orbit Symbol" 
          width={100} 
          height={100}
          priority
          className="object-contain opacity-20"
        />
      </div>
    </section>
  )
} 