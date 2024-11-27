import Link from 'next/link'
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com' },
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Youtube, href: 'https://youtube.com' },
  ]

  return (
    <footer className="bg-black px-4 md:px-6 lg:px-8 w-full pt-10 md:pt-24 lg:pt-32 text-white">
      
      <div className="max-w-7xl mx-auto">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div>
                <Image src='/logo-white.png' alt="logo" width={220} height={60} />
                <p>Elevate your podcast and video production</p>
                <div className="flex space-x-4 mt-3">
                    {socialLinks.map((social) => (
                        <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                        >
                        <social.icon className="w-6 h-6" />
                        <span className="sr-only">{social.href.split('.com')[0].split('://')[1]}</span>
                        </a>
                    ))}
                </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                Quick Links
              </h3>
              <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="hover:text-purple-400 transition-colors duration-200">
                        About
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-purple-400 transition-colors duration-200">
                        Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" className="hover:text-purple-400 transition-colors duration-200">
                        Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/book" className="hover:text-purple-400 transition-colors duration-200">
                        Book
                    </Link>
                  </li>
              </ul>
            </div>

          <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                Contact Us
              </h3>
              <ul className="space-y-3 text-white">
                <li>
                    <a
                        href="https://maps.app.goo.gl/R8kRcAr8NwAtLzKM9"
                        className="hover:text-purple-400 transition-colors duration-200 flex flex-row"
                    >
                        <MapPin className="w-6 h-6 mr-2" />
                        <span>Kazizi Mall Kwang Road
                        Jos, Plateau State</span>
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:support@darkshipstudios.com"
                        className="hover:text-purple-400 transition-colors duration-200 flex flex-row"
                    >
                        <Mail className="w-5 h-5 mr-2" />
                        <span>support@darkshipstudios.com</span>
                    </a>
                </li>
                <li>
                    <a
                        href="tel:support@07000000000"
                        className="hover:text-purple-400 transition-colors duration-200 flex flex-row"
                    >
                        <PhoneCall className="w-5 h-5 mr-2" />
                        <span>0700 0000 000</span>
                    </a>
                </li>
              </ul>
            </div>
        </div>

        <div className="py-4 relative">
          <div className="pt-4 border-t border-gray-800 text-sm">
            <p className="mt-8 text-center">&copy; {new Date().getFullYear()} DarkShip Studios. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}