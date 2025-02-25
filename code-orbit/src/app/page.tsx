import { Button } from "@/components/ui/button"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { CoreValues } from "@/components/core-values"
import { Mission } from "@/components/mission"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Connect } from "@/components/connect"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Mission />
      <CoreValues />
      <Services />
      <WhyChooseUs />
      <Connect />
      <Footer />
    </main>
  )
}
