"use client"

import { Button } from "@/components/ui/button"
import { Parallax } from 'react-scroll-parallax'
import { Link } from 'react-scroll'
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#021024] via-[#052659] to-[#0a1428] overflow-hidden">
      {/* Background Parallax Elements */}
      <Parallax 
        translateY={[-20, 20]} 
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15] 
            }} 
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#548EB3]/30 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1] 
            }} 
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-[#7DA0CA]/20 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              x: [0, 20, 0],
              y: [0, -20, 0],
              opacity: [0.1, 0.18, 0.1] 
            }} 
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#C1E8FF]/15 rounded-full blur-[100px]" 
          />
        </div>
      </Parallax>

      {/* Logo at top */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container px-4 pt-8"
      >
        <Image 
          src="/logo/HorizontalWhite.png" 
          alt="Code Orbit Logo" 
          width={200} 
          height={70}
          priority
          className="object-contain"
        />
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-12 text-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Title with seamless logo integration */}
              <div className="relative">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
                  Welcome to <span className="text-[#7DA0CA]">Code</span>
                  <span className="inline-block w-[1em] relative">
                    <Image 
                      src="/logo/Untitled_Artwork.png" 
                      alt="Code Orbit Symbol" 
                      width={300}
                      height={300}
                      priority
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] object-contain opacity-100"
                    />
                  </span>
                  <span className="text-[#7DA0CA]">rbit</span>
                </h1>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-2xl md:text-3xl text-[#C1E8FF] max-w-4xl mx-auto leading-relaxed"
              >
                Empowering businesses to thrive in an increasingly digital world through innovative technology and strategic expertise.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex gap-8"
            >
              <Link to="services" smooth={true} duration={500} offset={-50}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="min-w-[200px] h-14 text-xl bg-[#548EB3] hover:bg-[#7DA0CA] transition-colors rounded-md"
                  >
                    Our Services
                  </Button>
                </motion.div>
              </Link>
              <Link to="connect" smooth={true} duration={500} offset={-50}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="min-w-[200px] h-14 text-xl border-[#7DA0CA] text-[#7DA0CA] hover:bg-[#7DA0CA]/10 transition-colors rounded-md"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute right-[10%] top-1/4 w-3 h-3 bg-[#C1E8FF] rounded-full"
      />
      <motion.div 
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute left-[15%] top-1/3 w-2 h-2 bg-[#7DA0CA] rounded-full"
      />
      <motion.div 
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute right-[20%] bottom-1/4 w-4 h-4 bg-[#548EB3] rounded-full"
      />

      {/* Bottom Logo */}
      <motion.div 
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <Image 
          src="/logo/Untitled_Artwork.png" 
          alt="Code Orbit Symbol" 
          width={100} 
          height={100}
          priority
          className="object-contain opacity-30"
        />
      </motion.div>
    </section>
  )
} 