"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Headphones, Video, Book, VideoIcon, MessageSquare } from "lucide-react"
import Header from "@/components/layout/Header"
import { useState } from "react"; // Import useState for managing state
import Faq from "@/components/layout/Faq";
import Why from "@/components/layout/Why";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false); // State for modal visibility
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // State for current image index
  const images = [...Array(9)].map((_, i) => `/placeholder.png?height=${300 + i * 50}&width=${400 + i * 50}`); // Image sources

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <main className="flex-1">
        <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden">
            <Image
                src="/placeholder.png?height=1080&width=1920"
                alt="Studio background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-pink-900/90 to-red-900/90 z-10"></div>
            <Header />
            <div className="relative z-20 px-4 md:px-6 max-w-4xl mx-auto flex-grow flex items-center">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                            Elevate Your Podcast with DarkShip
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                            Professional recording spaces, top-notch equipment, and expert 
                            support to bring your podcast vision to life.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Button size='lg' className="bg-purple-600 text-white hover:bg-purple-700">Book a Session</Button>
                    </div>
                </div>
            </div>
        </section>
        
        <Why />

        <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <Headphones className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Podcast Recording</h3>
                <p className="text-gray-400">Professional-grade recording facilities for your podcast episodes.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Video className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Podcast Production</h3>
                <p className="text-gray-400">Full-service production including editing, mixing, and mastering.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Video className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Video Recording</h3>
                <p className="text-gray-400">High-quality video recording for podcasts and other content.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Book className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Audiobook & Voiceover Recording</h3>
                <p className="text-gray-400">Professional recording services for audiobooks and voiceovers.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <VideoIcon className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Video Conferences & Meetings</h3>
                <p className="text-gray-400">Fully equipped spaces for video conferences and virtual meetings.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <MessageSquare className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Consultation Services</h3>
                <p className="text-gray-400">Expert advice on content creation, marketing, and distribution.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="w-full py-16 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16">Studio Gallery</h2>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {images.map((src, i) => (
                <div key={i} className="mb-4 cursor-pointer" onClick={() => openModal(i)}>
                  <Image
                    src={src}
                    alt={`Studio image ${i + 1}`}
                    width={400 + i * 50}
                    height={300 + i * 50}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal for zoomed image */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative">
              <button onClick={closeModal} className="absolute top-2 right-2 text-white">X</button>
              <img src={images[currentImageIndex]} alt={`Zoomed image ${currentImageIndex + 1}`} className="max-w-full max-h-screen" />
              <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white">←</button>
              <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">→</button>
            </div>
          </div>
        )}

        <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-lg">
                  <Star className="h-6 w-6 text-yellow-500 mb-4" />
                  <p className="text-gray-300 mb-4">
                    PodCraft Studio has been instrumental in taking our podcast to the next level. The quality of our
                    recordings has improved dramatically!
                  </p>
                  <p className="font-bold text-purple-400">- Satisfied Podcaster {i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16">Featured Client Podcast</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="aspect-w-16 aspect-h-10">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
              <div className="aspect-w-16 aspect-h-12">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
              <div className="aspect-w-16 aspect-h-12">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
              {/* Add more cards here if needed */}
            </div>
          </div>
        </section>
        
        <Faq />
      </main>
    </div>
  )
}