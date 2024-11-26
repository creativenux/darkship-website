import type { Metadata } from "next";
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import "./globals.css";

export const metadata: Metadata = {
  title: "DarkShip Studio",
  description: "Elevate your podcast with DarkShip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased'
      >
        {children}

    <footer className="w-full py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center space-x-6 mb-8">
          <Link href="/about" className="text-gray-600 hover:text-gray-700">About</Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-700">Blog</Link>
          <Link href="/jobs" className="text-gray-600 hover:text-gray-700">Jobs</Link>
          <Link href="/press" className="text-gray-600 hover:text-gray-700">Press</Link>
          <Link href="/accessibility" className="text-gray-600 hover:text-gray-700">Accessibility</Link>
          <Link href="/partners" className="text-gray-600 hover:text-gray-700">Partners</Link>
        </nav>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </a>
          <a href="x.com" target="_blank" rel="noopener noreferrer"  className="ays bmg text-gray-400 hover:text-gray-600">
            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6"><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path></svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
            <span className="sr-only">YouTube</span>
            <Youtube className="h-6 w-6" />
          </a>
        </div>
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} PodCraft Studio. All rights reserved.
        </p>
      </div>
    </footer>
      </body>
    </html>
  );
}
