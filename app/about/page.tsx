"use client"

import Image from "next/image"
import Header from "@/components/layout/Header"
import Faq from "@/components/layout/Faq"
import Why from "@/components/layout/Why"
import { InstagramLogoIcon } from "@radix-ui/react-icons"
import CalendlyModal from "@/components/layout/CalendlyModal"

export default function AboutUsPage() {
  const teamMembers = [
    { name: "Adam", role: "Founder & Lead Producer", image: "/team1.png" },
    { name: "Sam", role: "Audio Engineer", image: "/team2.png" },
    { name: "Smith", role: "Content Strategist", image: "/team1.png" },
    { name: "Taylor", role: "Video Director", image: "/team2.png" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  About DarkShip Studios
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl dark:text-gray-400">
                  Empowering voices, crafting stories, and elevating podcasts.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <p className="text-gray-300 text-lg leading-relaxed">
                DarkShip Studios was born from a passion for storytelling and a vision to make professional podcasting
                accessible to everyone. Founded in 2015 by Alex Johnson, a veteran radio producer, our studio has grown
                from a small recording booth to a state-of-the-art facility that has helped launch over 500 podcasts.
              </p>
              <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                Our mission is to provide podcasters with the tools, expertise, and support they need to create
                high-quality content that resonates with their audience. Whether you&apos;re a first-time podcaster or a
                seasoned pro, DarkShip Studios is your partner in bringing your audio vision to life.
              </p>
            </div>
          <div className="space-x-4 mt-10 text-center">
            <CalendlyModal>
              <button
                className="text-[#16px] outline outline-1 bg-white text-black hover:bg-black hover:text-white py-3 px-5"
                type="button"
              >
                Book A Session Today
              </button>
            </CalendlyModal>
          </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <span className="text-[#a8a4ff] text-lg font-medium mb-6 block">Our Team</span>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-20 leading-[1.1]">
              Meet our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-gray-900 border-gray-900">
                  <div className="p-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-center text-white my-4">{member.name}</h3>
                    <p className="text-white text-center">{member.role}</p>
                    <div className="flex space-x-4 justify-center my-3">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors duration-200"
                        >
                        <InstagramLogoIcon className="w-6 h-6" />
                        <span className="sr-only">@adams</span>
                      </a>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Why />
        
        <Faq />
      </main>
    </div>
  )
}