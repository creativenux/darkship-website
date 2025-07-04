"use client";

import Image from "next/image"
import { XCircle, ArrowLeftCircle, ArrowRightCircle } from "lucide-react"
import Header from "@/components/layout/Header"
import { useState } from "react";
import Faq from "@/components/layout/Faq";
import ServicesSection from "@/components/layout/Services";
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import CalendlyModal from "@/components/layout/CalendlyModal";


function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.1, // This replaces threshold
    margin: "100px" // Optional: adds margin around the element
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 80
      }}
      transition={{ 
        duration: 2,
        ease: "easeOut",
        delay: 0.8
      }}
    >
      {children}
    </motion.div>
  );
}


export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false); // State for modal visibility
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // State for current image index
  const images = [...Array(10)].map((_, index: number) => `/gallery${index+1}.jpeg`); 

  const featuredWorks = [
    'https://www.youtube.com/embed/JDTImaBt8EI?si=UDxfQ_0JiybU8c7S', 
  ];

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
        <Header />
        <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden">
            <Image
                src="/gallery2.jpeg?height=1080&width=1920"
                alt="Studio background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-900/80 to-red-900/90 z-10"></div>
            <div className="relative z-20 px-4 md:px-6 max-w-4xl mx-auto flex-grow flex items-center">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-8">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                        Premier podcast production studio in the heart of Jos
                      </h1>
                      <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                          Professional recording spaces, top-notch equipment, and expert 
                          support to bring your podcast vision to life.
                      </p>
                      <div className="space-x-4">
                        <CalendlyModal>
                          <button
                            className="text-[#16px] outline outline-1 bg-white text-black hover:bg-black hover:text-white py-3 px-5"
                            type="button"
                          >
                            Book Now
                          </button>
                        </CalendlyModal>
                      </div>
                    </div>
                </div>
            </div>
        </section>


        {/* Who We Are Section */}
        <section className="bg-black px-4 md:px-6 lg:px-8 w-full py-10 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <span className="text-[#a8a4ff] text-lg text-center font-medium mb-6 block">Who We Are</span>
            
            <FadeInWhenVisible>
              <h2 className="text-white text-4xl md:text-5xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight text-center max-w-6xl mx-auto">
                DarkShip Studios is a custom-built, soundproofed recording environments designed to offer professional quality 
                for a range of podcast and video requirements.
              </h2>
            </FadeInWhenVisible>
          </div>
        </section>
        
        {/* <Why /> */}
        <ServicesSection />

        <section id="gallery" className="w-full py-16 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <span className="text-[#a8a4ff] text-lg font-medium mb-6 block">Studio Gallery</span>
            
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-20 leading-[1.1]">
                Careful furnished
            </h2>
            
            <div className="columns-1 sm:columns-2 gap-3">
                {images.map((src, i) => (
                  <div key={i} className="break-inside-avoid mb-2 cursor-pointer" onClick={() => openModal(i)}>
                    <Image 
                      className="h-auto rounded-lg" 
                      src={src}
                      alt={`Studio image ${i + 1}`} 
                      width={800}
                      height={600}
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
              <button onClick={closeModal} className="absolute top-2 right-2 text-white"><XCircle /></button>
              <img src={images[currentImageIndex]} alt={`Zoomed image ${currentImageIndex + 1}`} className="max-w-full max-h-screen" />
              <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"><ArrowLeftCircle /></button>
              <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"><ArrowRightCircle /></button>
            </div>
          </div>
        )}

        <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <span className="text-[#a8a4ff] text-lg font-medium mb-6 block">Testimonials</span>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-20 leading-[1.1]">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-900 p-6 rounded-lg">
                  <p className="text-white mb-4">
                    DarkShip Studios has been instrumental in taking our podcast to the next level. The quality of our
                    recordings has improved dramatically!
                  </p>
                  <p className="font-bold text-white">Satisfied Podcaster {i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <span className="text-[#a8a4ff] text-lg font-medium mb-6 block">Works</span>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-20 leading-[1.1]">
              Featured Work
            </h2>
            <div className="column-1 md:columns-2 gap-4">
              {featuredWorks.map((link: string, index: number) => (
                <div className="w-full h-[400px] mb-5" key={index}>
                  <iframe
                    src={link}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Faq />
      </main>
    </div>
  )
}