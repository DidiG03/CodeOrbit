"use client"

import { Card } from "@/components/ui/card"
import { Parallax } from 'react-scroll-parallax'
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const values = [
  {
    title: "Innovation",
    description: "Pioneering advanced solutions to stay ahead.",
    icon: "💡"
  },
  {
    title: "Integrity",
    description: "Building trust through transparency and accountability.",
    icon: "🔒"
  },
  {
    title: "Excellence",
    description: "Striving for quality in every project.",
    icon: "⭐"
  },
  {
    title: "Collaboration",
    description: "Partnering with clients for mutual success.",
    icon: "🤝"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function CoreValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section 
      className="py-24 bg-[#052659] overflow-hidden relative"
      ref={ref}
      id="values"
    >
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#7DA0CA]">Our Core Values</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value) => (
            <motion.div 
              key={value.title}
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
              <Card className="flex flex-col h-full p-6 bg-[#548EB3]/20 border-[#7DA0CA]/30 rounded-xl">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#C1E8FF]">{value.title}</h3>
                <p className="text-[#C1E8FF]/80 text-sm">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 