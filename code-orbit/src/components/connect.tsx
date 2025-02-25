"use client"

import { Parallax } from 'react-scroll-parallax'
import { IconPhone, IconMapPin, IconMail, IconWorld } from '@tabler/icons-react'

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
    <section id="connect" className="py-24 bg-zinc-950 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Parallax translateY={[-10, 10]}>
            <h2 className="text-5xl font-bold mb-4 text-blue-500">Connect</h2>
            <h3 className="text-4xl font-bold mb-6 text-white">with Us!</h3>
            <p className="text-xl text-zinc-400 mb-12">
              Feel free to reach out to us for further information!
            </p>
          </Parallax>

          <div className="space-y-6">
            {contactInfo.map((info) => (
              <Parallax
                key={info.text}
                translateX={[-10, 10]}
                className="flex items-center justify-center gap-4 text-zinc-300 hover:text-blue-400 transition-colors"
              >
                <a
                  href={info.href}
                  className="flex items-center gap-4 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    {info.icon}
                  </span>
                  <span className="text-lg">{info.text}</span>
                </a>
              </Parallax>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 