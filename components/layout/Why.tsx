import { Mic, Users, Star, Award, Radio, Headphones } from "lucide-react"

export default function Why() {
    return (
        <section className="w-full bg-black py-12 md:py-24 lg:py-32 text-white" id="features">
          <div className="container mx-auto px-4 md:px-6">
            <span className="text-[#a8a4ff] text-lg font-medium mb-6 block">Our Services</span>
        
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-20 leading-[1.1]">
            Why Choose DarkShip?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-white">Our seasoned professionals bring years of industry experience to your project.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Star className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2">Quality Equipment</h3>
                <p className="text-white">Access to top-quality microphones, mixers, and recording software.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2">Post-Production Services</h3>
                <p className="text-white">Editing, mixing, and mastering services to polish your podcast.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Radio className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2">Distribution Support</h3>
                <p className="text-white">We help you get your podcast on all major platforms and grow your audience.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Headphones className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2">Podcast Training</h3>
                <p className="text-white">Learn the ins and outs of podcasting with our expert-led workshops.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Mic className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                <p className="text-white">We tailor our services to meet your unique podcasting needs and goals.</p>
              </div>
            </div>
          </div>
        </section>
    )
}