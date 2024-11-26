"use client"

import { useState } from "react"
import Link from "next/link"
import { Mic, Menu, X } from "lucide-react"

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    return (
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/50 border-b border-gray-800">
            <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
                <Link className="flex items-center justify-center" href="/">
                    <Mic className="h-6 w-6 text-purple-500" />
                    <span className="ml-2 text-2xl font-bold text-white">PodCraft Studio</span>
                </Link>
                <nav className="hidden text-white md:flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="/about">
                        About
                    </Link>
                    <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="/pricing">
                        Pricing
                    </Link>
                    <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="/#features">
                        Features
                    </Link>
                    <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="/#services">
                        Services
                    </Link>
                    <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="/#gallery">
                        Gallery
                    </Link>
                </nav>
                <button
                    className="md:hidden text-white z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
            {mobileMenuOpen && (
                <div className="absolute top-0 bottom-0 h-screen flex items-center inset-0 bg-gray-900 z-40">
                    <nav className="w-full flex flex-col items-center justify-center">
                    <Link className="w-full text-center py-4 text-xl font-medium hover:bg-gray-800 transition-colors" href="/about" onClick={() => setMobileMenuOpen(false)}>
                        About
                    </Link>
                    <Link className="w-full text-center py-4 text-xl font-medium hover:bg-gray-800 transition-colors" href="/pricing" onClick={() => setMobileMenuOpen(false)}>
                        Pricing
                    </Link>
                    <Link className="w-full text-center py-4 text-xl font-medium hover:bg-gray-800 transition-colors" href="/#features" onClick={() => setMobileMenuOpen(false)}>
                        Features
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