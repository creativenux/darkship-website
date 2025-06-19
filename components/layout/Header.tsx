"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import CalendlyModal from "./CalendlyModal"

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    return (
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/50 border-b border-gray-800">
            <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
                <Link className="flex items-center justify-center" href="/">
                    <Image src='/logo-white.png' alt="logo" width={220} height={60} />
                </Link>
                <nav className="hidden text-white md:flex gap-4 sm:gap-6 items-center">
                    <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="/about">
                        About
                    </Link>
                    <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="/pricing">
                        Pricing
                    </Link>
                    <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="/#services">
                        Services
                    </Link>
                    <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="/#gallery">
                        Gallery
                    </Link>
                    <CalendlyModal>
                        <button className="text-[#16px] outline outline-1 bg-white text-black hover:bg-black hover:text-white py-3 px-5">Book Now</button>
                    </CalendlyModal>
                </nav>
                <button
                    className="md:hidden text-white z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
            {mobileMenuOpen && (
                <div className="absolute top-0 bottom-0 h-screen flex items-center inset-0 bg-gray-900 z-40 text-white">
                    <nav className="w-full flex flex-col items-center justify-center">
                    <Link className="w-full text-center py-4 text-xl font-medium hover:bg-gray-800 transition-colors" href="/about" onClick={() => setMobileMenuOpen(false)}>
                        About
                    </Link>
                    <Link className="w-full text-center py-4 text-xl font-medium hover:bg-gray-800 transition-colors" href="/pricing" onClick={() => setMobileMenuOpen(false)}>
                        Pricing
                    </Link>
                    <Link className="w-full text-center py-4 text-xl font-medium hover:bg-gray-800 transition-colors" href="/#services" onClick={() => setMobileMenuOpen(false)}>
                        Services
                    </Link>
                    <Link className="w-full text-center py-4 text-xl font-medium hover:bg-gray-800 transition-colors" href="/#gallery" onClick={() => setMobileMenuOpen(false)}>
                        Gallery
                    </Link>
                    </nav>
                </div>
            )}
      </header>
    )
}