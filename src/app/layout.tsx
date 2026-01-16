import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DASCA | Data Science Association",
  description: "Empowering students with data-driven insights and fostering innovation at RBU Nagpur",
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