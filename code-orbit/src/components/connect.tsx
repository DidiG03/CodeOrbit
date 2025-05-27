"use client"

import { Parallax } from 'react-scroll-parallax'
import { IconPhone, IconMapPin, IconMail, IconWorld } from '@tabler/icons-react'
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: <IconPhone className="w-6 h-6" />,
    text: "+974 3330 4448",
    href: "tel:+97433304448"
  },
  {
    icon: <IconMapPin className="w-6 h-6" />,
    text: "Building No ,950 Street, 60 Zone 20th Floor, Doha, Qatar ,11 Office No,24",
    href: "https://maps.google.com/?q=Doha,Qatar"
  },
  {
    icon: <IconMail className="w-6 h-6" />,
    text: "info@inception-egy.com",
    href: "mailto:info@inception-egy.com"
  },
  {
    icon: <IconWorld className="w-6 h-6" />,
    text: "www.inception-egy.com",
    href: "https://www.inception-egy.com"
  }
]

export function Connect() {
  return (
    <section id="connect" className="py-24 bg-[#021024] overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#548EB3]/30 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-5xl font-bold text-[#7DA0CA]">Book A Call With Us</h2>
            
            <p className="text-xl text-[#C1E8FF]">
              Feel free to reach out to us for further information!
            </p>
          </motion.div>

          <div className="flex flex-col items-center space-y-8 w-full">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full flex justify-center"
              >
                <a
                  href={info.href}
                  className="flex items-center gap-4 group text-center hover:text-[#7DA0CA] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center justify-center gap-4 max-w-full">
                    <span className="flex-shrink-0 p-3 rounded-full bg-[#548EB3]/10 group-hover:bg-[#548EB3]/20 transition-colors text-[#C1E8FF]">
                      {info.icon}
                    </span>
                    <span className="text-lg text-[#C1E8FF]">{info.text}</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 