import type { Metadata } from "next";
import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"
import "./globals.css";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

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

      <Footer />
    
      </body>
    </html>
  );
}
