import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import CalendlyModalGlobal from "@/components/layout/CalendlyGlobalModal";

export const metadata: Metadata = {
  title: "DarkShip Studio",
  description: "Elevate your podcast and video production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="https://darkship.studio/icon-red.png"  sizes="any" type="image/png" />
      <meta name="keywords" content="podcast, podcast recording, podcast production, video production, content, Jos, plateau, audio, voice over, video conferences, video meeting, Nigeria, visual effects" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://darkship.studio/" />
      <meta property="og:title" content="DarkShip Studio" />
      <meta property="og:description" content="Elevate your podcast and video production" />
      <meta property="og:image" content="https://darkship.studio/logo-red.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://darkship.studio/" />
      <meta property="twitter:title" content="DarkShip Studio" />
      <meta property="twitter:description" content="Elevate your podcast and video production" />
      <meta property="twitter:image" content="https://darkship.studio/logo-red.png" />

      <body
        className='antialiased'
        id="body"
      >
        {children}
        <CalendlyModalGlobal />
        <Footer />
      </body>
    </html>
  );
}
