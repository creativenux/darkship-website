import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/layout/Header"
import Faq from "@/components/layout/Faq"
import Why from "@/components/layout/Why"

export default function AboutUsPage() {
  const teamMembers = [
    { name: "Alex Johnson", role: "Founder & Lead Producer", image: "/placeholder.svg?height=400&width=400" },
    { name: "Sam Lee", role: "Audio Engineer", image: "/placeholder.svg?height=400&width=400" },
    { name: "Jamie Smith", role: "Content Strategist", image: "/placeholder.svg?height=400&width=400" },
    { name: "Taylor Brown", role: "Marketing Director", image: "/placeholder.svg?height=400&width=400" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  About PodCraft Studio
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl dark:text-gray-400">
                  Empowering voices, crafting stories, and elevating podcasts since 2015.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <p className="text-gray-300 text-lg leading-relaxed">
                PodCraft Studio was born from a passion for storytelling and a vision to make professional podcasting
                accessible to everyone. Founded in 2015 by Alex Johnson, a veteran radio producer, our studio has grown
                from a small recording booth to a state-of-the-art facility that has helped launch over 500 podcasts.
              </p>
              <p className="mt-4 text-gray-300 text-lg leading-relaxed">
                Our mission is to provide podcasters with the tools, expertise, and support they need to create
                high-quality content that resonates with their audience. Whether you&apos;re a first-time podcaster or a
                seasoned pro, PodCraft Studio is your partner in bringing your audio vision to life.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="bg-gray-700 border-gray-600">
                  <CardContent className="p-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-center text-white">{member.name}</h3>
                    <p className="text-gray-400 text-center">{member.role}</p>
                  </CardContent>
                </Card>
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