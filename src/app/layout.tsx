import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'DASCA - Data Science Association | Ramdeobaba University Nagpur',
    template: '%s | DASCA RBU',
  },
  description: 'DASCA is the official Data Science Association of Ramdeobaba University, Nagpur. Join 2000+ students for tech events, workshops, cultural festivals, and sports championships. Empowering innovation through data science.',
  keywords: [
    'DASCA',
    'Data Science Association',
    'Ramdeobaba University',
    'RBU Nagpur',
    'RCOEM',
    'tech events Nagpur',
    'data science club',
    'student committee',
    'tech workshops',
    'university events Nagpur',
    'DASCA RBU',
    'data science student association',
    'tech fest Nagpur'
  ],
  authors: [{ name: 'DASCA Team' }],
  creator: 'DASCA - Ramdeobaba University',
  publisher: 'DASCA RBU',

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://dasca.in', // ✅ Updated
    title: 'DASCA - Data Science Association | RBU Nagpur',
    description: 'Official Data Science Association of Ramdeobaba University. 50+ events annually, 2000+ active students. Join the tech revolution!',
    siteName: 'DASCA RBU',
    images: [{
      url: 'https://dasca.in/og-image.jpg', // ✅ Updated
      width: 1200,
      height: 630,
      alt: 'DASCA - Data Science Association Ramdeobaba University',
    }],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'DASCA - Data Science Association | RBU',
    description: 'Empowering 2000+ students with data-driven insights and innovation at Ramdeobaba University, Nagpur',
    creator: '@dasca_rbu',
    images: ['https://dasca.in/og-image.jpg'], // ✅ Updated
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://dasca.in', // ✅ Updated
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Remix Icons for Navbar */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        {/* Material Symbols for Footer */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>

        {/* Navbar - Fixed at top */}
        <Navbar />

        {/* Main content - Add padding-top for navbar height */}
        <main className="pt-[90px]">
          {children}
        </main>

        {/* Footer - At bottom */}
        <Footer />

      </body>
    </html>
  );
}