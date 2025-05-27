"use client"

import { Parallax } from 'react-scroll-parallax'
import Image from "next/image"
import { Link } from 'react-scroll'
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react'
import { motion } from "framer-motion"

const quickLinks = [
  { name: "Services", to: "services" },
  { name: "About Us", to: "mission" },
  { name: "Contact", to: "connect" },
]

const services = [
  "Custom Software Development",
  "Cloud & Infrastructure",
  "AI & Machine Learning",
  "IT Consulting",
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 }
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#021024] to-[#052659] border-t border-[#548EB3]/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            opacity: [0.02, 0.05, 0.02],
            y: [0, -10, 0] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#548EB3]/5 rounded-full blur-3xl" 
        />
      </div>
      
      <div className="container px-4 md:px-6 py-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Image 
              src="/logo/HorizontalWhite.png" 
              alt="Code Orbit Logo" 
              width={150} 
              height={50}
              className="object-contain"
            />
            <p className="text-[#C1E8FF] text-sm">
              Empowering businesses with innovative technology solutions and strategic expertise.
            </p>
          </motion.div>

          {/* Quick Links */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-semibold mb-4 text-[#7DA0CA]"
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {quickLinks.map((link) => (
                <motion.li key={link.name} variants={item}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="text-[#C1E8FF] hover:text-[#7DA0CA] cursor-pointer transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Services */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-semibold mb-4 text-[#7DA0CA]"
            >
              Services
            </motion.h3>
            <motion.ul 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {services.map((service) => (
                <motion.li key={service} variants={item} className="text-[#C1E8FF] text-sm">
                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-semibold mb-4 text-[#7DA0CA]"
            >
              Contact Us
            </motion.h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2 text-sm"
            >
              <motion.p variants={item} className="text-[#C1E8FF]">
                Building No ,950 Street, 60 Zone<br />
                20th Floor, Doha, Qatar<br />
                Office No,24
              </motion.p>
              <motion.p variants={item} className="text-[#C1E8FF]">
                <a href="tel:+97433304448" className="hover:text-[#7DA0CA] transition-colors">
                  +974 3330 4448
                </a>
              </motion.p>
              <motion.p variants={item} className="text-[#C1E8FF]">
                <a href="mailto:info@inception-egy.com" className="hover:text-[#7DA0CA] transition-colors">
                  info@inception-egy.com
                </a>
              </motion.p>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-4 mt-6"
            >
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                href="#"
                className="text-[#C1E8FF] hover:text-[#7DA0CA] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                href="#"
                className="text-[#C1E8FF] hover:text-[#7DA0CA] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                href="#"
                className="text-[#C1E8FF] hover:text-[#7DA0CA] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-blue-800/30 mt-12 pt-8 text-center text-sm text-zinc-400"
        >
          <p>© {new Date().getFullYear()} Code Orbit. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
} 