import { Film, Mic, Newspaper, VideoIcon, Video, Headphones } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Film,
      title: "Visual Effects",
      description: "Unleash your creativity and captivate your audience with every frame",
    },
    {
      icon: Headphones,
      title: "Podcast Recording",
      description: "Professional-grade recording facilities for your podcast episodes.",
    },
    {
      icon: Mic,
      title: "Podcast Production",
      description: "Retain visitors with live video content, pique their interest and attract new listeners.",
    },
    {
      icon: Video,
      title: "Video Recording",
      description: "High-quality video recording for podcasts and other content.",
    },
    {
      icon: Newspaper,
      title: "Audiobook & Voiceover Recording",
      description: "Professional recording services for audiobooks and voiceovers.",
    },
    {
      icon: VideoIcon,
      title: "Video Conferences & Meetings",
      description: "Fully equipped spaces for video conferences and virtual meetings.",
    },
  ]

  return (
    <section className="bg-black px-4 md:px-6 lg:px-8 w-full py-10 md:py-24 lg:py-32" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <span className="text-[#a8a4ff] text-lg font-medium mb-6 block">Our Services</span>
        
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-20 leading-[1.1]">
            We help brands drive growth through digital experiences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="border border-gray-600 p-8 relative group hover:border-gray-700 transition-colors"
            >
              <div className="flex items-center mb-12">
                <div className="w-12 h-12 rounded-full bg-black border border-gray-600 flex items-center justify-center relative z-10">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="h-[1px] bg-gray-600 flex-1 -ml-1 group-hover:bg-gray-700 transition-colors" />
              </div>

              <h3 className="text-white text-2xl font-bold mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}