"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Committee', href: '/committee' },
    { name: 'Teachers', href: '/teachers' }
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <header
        data-testid="navbar"
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
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            data-testid="nav-logo"
            className="relative transition-all duration-500 hover:scale-105 active:scale-95 z-[1001]"
            aria-label="DASCA Home"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/DASCA_logo.png"
              alt="DASCA Logo"
              width={350}
              height={350}
              className="w-auto object-contain transition-all duration-500"
              style={{
                height: isScrolled ? '85px' : '110px',
                maxWidth: isScrolled ? '300px' : '400px',

                filter: isDarkMode
                  ? 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.4)) drop-shadow(0 0 15px rgba(45, 212, 191, 0.2))'
                  : 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',

                opacity: 1
              }}
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-8 xl:gap-12"
            data-testid="nav-desktop"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className="relative group"
                prefetch={true}
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

          {/* Mobile Menu Button */}
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-[1001] p-2 rounded-lg transition-colors duration-300"
            style={{
              color: isDarkMode ? '#FFFFFF' : '#1E293B',
            }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} strokeWidth={2} />
            ) : (
              <Menu size={28} strokeWidth={2} />
            )}
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          data-testid="nav-mobile-menu"
          className="fixed inset-0 z-[999] lg:hidden"
          style={{
            background: isDarkMode
              ? 'rgba(2, 6, 23, 0.98)'
              : 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                data-testid={`nav-mobile-link-${link.name.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative group"
                style={{
                  animation: `slideUpFade 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <span
                  className="text-3xl sm:text-4xl font-bold transition-all duration-300"
                  style={{
                    color: isDarkMode ? '#FFFFFF' : '#1E293B',
                  }}
                >
                  {link.name}
                </span>

                {/* Underline effect */}
                <span
                  className="absolute bottom-[-8px] left-0 w-0 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 group-hover:w-full"
                />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;