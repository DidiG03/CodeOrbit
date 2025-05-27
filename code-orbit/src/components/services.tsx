"use client"

import { Card } from "@/components/ui/card"
import { Parallax } from 'react-scroll-parallax'
import { IconCode, IconCloud, IconBrain, IconHeadset } from '@tabler/icons-react'
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored enterprise solutions to streamline operations and enhance customer relationships.",
    icon: <IconCode className="w-10 h-10 text-[#7DA0CA]" />,
    items: [
      "Custom ERP/CRM/Supply Chain Systems",
      "POS Systems",
      "Web Applications",
      "Mobile Applications (iOS & Android)",
      "E-Commerce Platforms"
    ]
  },
  {
    title: "Cloud & Infrastructure",
    description: "Scalable and secure cloud solutions for modern business needs.",
    icon: <IconCloud className="w-10 h-10 text-[#7DA0CA]" />,
    items: [
      "Cloud Migration Services",
      "Server Virtualization",
      "Data Centers Preparation",
      "Network Solutions"
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI technology.",
    icon: <IconBrain className="w-10 h-10 text-[#7DA0CA]" />,
    items: [
      "Healthcare AI Solutions",
      "Financial Analytics",
      "Retail Optimization",
      "Predictive Maintenance",
      "Educational Technology"
    ]
  },
  {
    title: "IT Consulting",
    description: "Expert guidance and support for your technology initiatives.",
    icon: <IconHeadset className="w-10 h-10 text-[#7DA0CA]" />,
    items: [
      "IT Assessments",
      "Project Management",
      "Infrastructure Design",
      "Security Consulting"
    ]
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section 
      id="services" 
      className="py-24 bg-[#021024] overflow-hidden relative"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#548EB3]/20 rounded-full blur-3xl" 
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7DA0CA]/20 rounded-full blur-3xl" 
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="/images/team_image.png" 
            alt="Services Image" 
            width={500} 
            height={400} 
            className="object-contain rounded-lg"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#7DA0CA]">Our Services</h2>
          <p className="text-xl text-[#C1E8FF] max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.title}
              variants={item}
              whileHover={{ 
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              className="h-full"
            >
              <Card className="flex flex-col h-full p-8 bg-[#052659] border-[#548EB3]/20 rounded-xl">
                <div className="flex items-start gap-5 mb-4">
                  <div className="p-3 rounded-xl bg-[#548EB3]/20">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#C1E8FF] mb-1">
                      {service.title}
                    </h3>
                    <p className="text-[#C1E8FF]/80 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-[#C1E8FF]/90 flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7DA0CA]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </section>
  )
}