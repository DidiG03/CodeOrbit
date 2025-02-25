"use client"

import { Card } from "@/components/ui/card"
import { Parallax } from 'react-scroll-parallax'
import { IconCode, IconCloud, IconBrain, IconHeadset } from '@tabler/icons-react'

const services = [
  {
    title: "Custom Software Development",
    description: "Tailored enterprise solutions to streamline operations and enhance customer relationships.",
    icon: <IconCode className="w-10 h-10 text-blue-500" />,
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
    icon: <IconCloud className="w-10 h-10 text-blue-500" />,
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
    icon: <IconBrain className="w-10 h-10 text-blue-500" />,
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
    icon: <IconHeadset className="w-10 h-10 text-blue-500" />,
    items: [
      "IT Assessments",
      "Project Management",
      "Infrastructure Design",
      "Security Consulting"
    ]
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <Parallax translateY={[-10, 10]} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Parallax
              key={service.title}
              translateY={[15, -15]}
              scale={[0.9, 1]}
              easing="easeOutQuad"
              startScroll={150 * index}
            >
              <Card className="group p-8 bg-zinc-900/50 backdrop-blur-sm border-blue-600/20 hover:border-blue-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-2xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-sm">
                      {service.items.map((item) => (
                        <li key={item} className="text-zinc-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  )
} 