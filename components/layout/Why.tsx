import { Mic, Users, Star, Award, Radio, Headphones } from "lucide-react"

export default function Why() {
    return (
        <section className="w-full bg-gray-800 py-12 md:py-24 lg:py-32" id="features">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-white">
              Why Choose PodCraft?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Expert Team</h3>
                <p className="text-gray-400">Our seasoned professionals bring years of industry experience to your project.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Star className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Quality Equipment</h3>
                <p className="text-gray-400">Access to top-quality microphones, mixers, and recording software.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Post-Production Services</h3>
                <p className="text-gray-400">Editing, mixing, and mastering services to polish your podcast.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Radio className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Distribution Support</h3>
                <p className="text-gray-400">We help you get your podcast on all major platforms and grow your audience.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Headphones className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Podcast Training</h3>
                <p className="text-gray-400">Learn the ins and outs of podcasting with our expert-led workshops.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Mic className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Custom Solutions</h3>
                <p className="text-gray-400">We tailor our services to meet your unique podcasting needs and goals.</p>
              </div>
            </div>
          </div>
        </section>
    )
}