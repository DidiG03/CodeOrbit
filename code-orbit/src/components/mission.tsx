"use client"

import Image from 'next/image';
import { motion } from "framer-motion"

export function Mission() {
  return (
    <section className="py-24 bg-[#052659] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#548EB3]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#7DA0CA]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-orange-300 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-[#548EB3] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Key Mission Points */}
              <div className="space-y-6">
                <div className="bg-[#548EB3]/10 p-6 rounded-xl backdrop-blur-sm border border-[#7DA0CA]/20">
                  <h3 className="text-xl font-semibold text-orange-300 mb-3">
                    Empowering Digital Transformation
                  </h3>
                  <p className="text-white leading-relaxed">
                    Our mission is to provide cutting-edge, customized software solutions and professional services that empower businesses to thrive in an increasingly digital world. We are committed to helping organizations optimize their operations, enhance customer experiences, and achieve sustainable growth through innovative technology and strategic expertise.
                  </p>
                </div>

                <div className="bg-[#548EB3]/10 p-6 rounded-xl backdrop-blur-sm border border-[#7DA0CA]/20">
                  <h3 className="text-xl font-semibold text-orange-300 mb-3">
                    Innovation & Excellence
                  </h3>
                  <p className="text-white leading-relaxed">
                    By leveraging the latest advancements in artificial intelligence, cloud computing, cybersecurity, and data analytics, we aim to transform complex challenges into valuable opportunities. Our approach is centered on understanding the unique needs of each client, delivering scalable and future-proof solutions, and fostering long-term partnerships built on trust, excellence, and measurable success.
                  </p>
                </div>
              </div>

              {/* Mission Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#548EB3]/5 rounded-lg border border-[#7DA0CA]/10">
                  <div className="text-3xl font-bold text-[#7DA0CA] mb-1">100+</div>
                  <div className="text-sm text-[#C1E8FF]/80">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-[#548EB3]/5 rounded-lg border border-[#7DA0CA]/10">
                  <div className="text-3xl font-bold text-[#7DA0CA] mb-1">95%</div>
                  <div className="text-sm text-[#C1E8FF]/80">Client Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-[#548EB3]/5 rounded-lg border border-[#7DA0CA]/10">
                  <div className="text-3xl font-bold text-[#7DA0CA] mb-1">24/7</div>
                  <div className="text-sm text-[#C1E8FF]/80">Support</div>
                </div>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-[#548EB3]/20">
                <Image 
                  src="/images/team_image.png" 
                  alt="Mission Image" 
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#548EB3]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#7DA0CA]/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
