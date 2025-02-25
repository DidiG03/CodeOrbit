"use client"

import { Parallax } from 'react-scroll-parallax'
import Image from "next/image"
import { Link } from 'react-scroll'
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react'

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

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image 
              src="/logo/HorizontalWhite.png" 
              alt="Code Orbit Logo" 
              width={150} 
              height={50}
              className="object-contain"
            />
            <p className="text-zinc-400 text-sm">
              Empowering businesses with innovative technology solutions and strategic expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="text-zinc-400 hover:text-blue-500 cursor-pointer transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-zinc-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p className="text-zinc-400">
                Building No ,950 Street, 60 Zone<br />
                20th Floor, Doha, Qatar<br />
                Office No,24
              </p>
              <p className="text-zinc-400">
                <a href="tel:+97433304448" className="hover:text-blue-500 transition-colors">
                  +974 3330 4448
                </a>
              </p>
              <p className="text-zinc-400">
                <a href="mailto:info@inception-egy.com" className="hover:text-blue-500 transition-colors">
                  info@inception-egy.com
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-zinc-400 hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-zinc-400 hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800/50 mt-12 pt-8 text-center text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Code Orbit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 