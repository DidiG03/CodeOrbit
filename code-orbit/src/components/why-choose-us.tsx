"use client"

import { Card } from "@/components/ui/card"
import { Parallax } from 'react-scroll-parallax'
import { IconBrain, IconBulb, IconUsers, IconShieldCheck, IconWorld, IconRocket } from '@tabler/icons-react'

const reasons = [
  {
    number: "1",
    title: "Proven Expertise",
    description: "A team of skilled professionals with years of experience.",
    icon: <IconBrain className="w-8 h-8 text-[#7DA0CA]" />
  },
  {
    number: "2",
    title: "Innovative Solutions",
    description: "Leveraging the latest technology to drive results.",
    icon: <IconBulb className="w-8 h-8 text-[#7DA0CA]" />
  },
  {
    number: "3",
    title: "Client-Centric Approach",
    description: "Customized solutions for your unique needs.",
    icon: <IconUsers className="w-8 h-8 text-[#7DA0CA]" />
  },
  {
    number: "4",
    title: "Reliability",
    description: "Consistent support and maintenance to ensure business continuity.",
    icon: <IconShieldCheck className="w-8 h-8 text-[#7DA0CA]" />
  },
  {
    number: "5",
    title: "Global Reach",
    description: "Successfully delivered projects to clients worldwide.",
    icon: <IconWorld className="w-8 h-8 text-[#7DA0CA]" />
  },
  {
    number: "6",
    title: "Agile Methodology",
    description: "Ensuring flexibility and timely delivery for all projects.",
    icon: <IconRocket className="w-8 h-8 text-[#7DA0CA]" />
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#052659] overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#548EB3]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#7DA0CA]/30 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <Parallax translateY={[-10, 10]} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-orange-300">Why Choose Us?</h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Your Trusted Partner in Technology
          </p>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <Parallax
              key={reason.title}
              translateY={[20, -20]}
              scale={[0.9, 1]}
              easing="easeOutQuad"
            >
              <Card className="group p-6 bg-[#021024]/50 backdrop-blur-sm border-[#548EB3]/20 hover:border-[#7DA0CA]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#548EB3]/10">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#548EB3]/10 group-hover:bg-[#548EB3]/20 transition-colors">
                    {reason.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-4xl font-bold text-orange-300 group-hover:text-[#7DA0CA] transition-colors">{reason.number}</span>
                      <h3 className="text-xl font-semibold text-orange-300 group-hover:text-[#7DA0CA] transition-colors">
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-[#C1E8FF]/80">
                      {reason.description}
                    </p>
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