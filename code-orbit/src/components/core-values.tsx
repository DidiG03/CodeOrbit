"use client"

import { Card } from "@/components/ui/card"
import { Parallax } from 'react-scroll-parallax'

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

export function CoreValues() {
  return (
    <section className="py-24 bg-zinc-900 overflow-hidden">
      <div className="container px-4 md:px-6">
        <Parallax translateY={[-10, 10]} className="text-center">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        </Parallax>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Parallax
              key={value.title}
              translateY={[20, -20]}
              scale={[0.8, 1]}
              easing="easeInQuad"
              startScroll={100 * index} // Staggered animation start
            >
              <Card className="p-6 bg-zinc-800 border-blue-600 transform transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-zinc-300">{value.description}</p>
              </Card>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  )
} 