"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation links
  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Committee', href: '/committee' }
  ];

  // Check if mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load saved theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark';

      setIsDarkMode(isDark);

      if (isDark) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark-mode');
      }
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <header
      className="fixed top-0 left-0 w-full z-[1000] transition-all duration-500"
      style={{
        height: isScrolled ? '100px' : '130px',

        background: isScrolled
          ? (isDarkMode
            ? 'rgba(2, 6, 23, 0.95)'
            : 'rgba(255, 255, 255, 0.95)')
          : (isDarkMode
            ? 'rgba(2, 6, 23, 0.75)'
            : 'rgba(255, 255, 255, 0.5)'),

        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',

        borderBottom: isScrolled
          ? `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'}`
          : (isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : 'none')
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 h-full flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="relative transition-all duration-500 hover:scale-105 active:scale-95"
          aria-label="DASCA Home"
        >
          <Image
            src="/DASCA_logo.png"
            alt="DASCA Logo"
            width={350}
            height={350}
            className="w-auto object-contain transition-all duration-500"
            style={{
              height: isScrolled ? '80px' : '110px',
              maxWidth: isScrolled ? '300px' : '400px',

              filter: isDarkMode
                ? 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.4)) drop-shadow(0 0 15px rgba(45, 212, 191, 0.2))'
                : 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',

              opacity: 1
            }}
            priority
          />
        </Link>

        {/* Centered Navigation Links */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-12">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group"
            >
              <span
                className="text-base font-medium transition-all duration-300"
                style={{
                  color: isDarkMode ? '#FFFFFF' : '#1E293B',
                }}
              >
                {link.name}
              </span>

              {/* Underline effect */}
              <span
                className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 group-hover:w-full"
              />
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
};

export default Navbar;