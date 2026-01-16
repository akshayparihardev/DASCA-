"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
      
      if (savedTheme === 'dark') {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark-mode');
        document.body.classList.remove('dark-mode');
      }
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark-mode');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
    
    // Force repaint
    document.body.style.display = 'none';
    document.body.offsetHeight;
    document.body.style.display = '';
  };

  // Toggle drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    document.body.style.overflow = !isDrawerOpen ? 'hidden' : '';
  };

  // Close drawer
  const handleLinkClick = () => {
    setIsDrawerOpen(false);
    document.body.style.overflow = '';
  };

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <header 
        className="fixed top-0 left-0 w-full z-[1000] transition-all duration-500"
        style={{ 
          height: isScrolled ? '85px' : '110px',
          // PERFECT BLEND - No visible strip!
          background: isScrolled 
            ? (isDarkMode 
                ? 'rgba(10, 10, 10, 0.85)'  // Match your dark hero bg
                : 'rgba(250, 250, 250, 0.85)') // Match your light hero bg
            : 'transparent', // Fully transparent when at top
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
          // NO BORDER when not scrolled
          borderBottom: isScrolled 
            ? (isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)')
            : 'none'
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 h-full flex items-center justify-between">
          
          {/* Logo - PROFESSIONAL & BIG */}
          <Link 
            href="/" 
            className="z-[1002] relative transition-all duration-500 hover:scale-105 active:scale-95"
            aria-label="DASCA Home"
          >
            <Image 
              src="/DASCA_logo.png" 
              alt="DASCA Logo" 
              width={350}
              height={350}
              className="w-auto object-contain transition-all duration-500"
              style={{ 
                height: isScrolled ? '65px' : '85px',
                maxWidth: isScrolled ? '240px' : '320px',
                
                // Dark mode: Super bright & visible
                filter: isDarkMode 
                  ? 'brightness(2.5) contrast(1.15) saturate(1.1) drop-shadow(0 0 35px rgba(139, 92, 246, 0.6))' 
                  : 'brightness(1) contrast(1.05) drop-shadow(0 4px 20px rgba(0, 0, 0, 0.12))',
                
                opacity: 1
              }}
              priority
            />
          </Link>

          {/* Theme Toggle + Menu */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-full transition-all duration-500 group relative"
              aria-label="Toggle Theme"
              style={{
                background: isDarkMode 
                  ? 'rgba(255, 255, 255, 0.06)' 
                  : 'rgba(0, 0, 0, 0.04)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <i 
                className={`${isDarkMode ? 'ri-sun-line' : 'ri-moon-line'} text-[26px] sm:text-[28px] transition-all duration-500 group-hover:scale-110 group-hover:rotate-[15deg] group-active:scale-90 group-active:rotate-180`}
                style={{ 
                  color: isDarkMode ? '#FFFFFF' : '#1E293B',
                  filter: isDarkMode ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))' : 'none'
                }}
              />
            </button>

            {/* Hamburger Menu */}
            <button 
              onClick={toggleDrawer}
              className="flex flex-col justify-between w-[36px] sm:w-[38px] h-5 cursor-pointer z-[1002] group"
              aria-label="Toggle Menu"
            >
              <div 
                className={`w-full h-[2.5px] rounded-sm transition-all duration-[400ms]`}
                style={{ 
                  transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  transform: isDrawerOpen ? 'translateY(9px) rotate(45deg)' : 'none',
                  background: isDrawerOpen 
                    ? 'var(--text-primary)' 
                    : (isDarkMode ? '#FFFFFF' : '#1E293B'),
                  filter: isDarkMode && !isDrawerOpen ? 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))' : 'none'
                }}
              />
              <div 
                className={`w-full h-[2.5px] rounded-sm transition-all duration-[400ms]`}
                style={{ 
                  transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  opacity: isDrawerOpen ? 0 : 1,
                  background: isDarkMode ? '#FFFFFF' : '#1E293B',
                  filter: isDarkMode ? 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))' : 'none'
                }}
              />
              <div 
                className={`w-full h-[2.5px] rounded-sm transition-all duration-[400ms]`}
                style={{ 
                  transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  transform: isDrawerOpen ? 'translateY(-9px) rotate(-45deg)' : 'none',
                  background: isDrawerOpen 
                    ? 'var(--text-primary)' 
                    : (isDarkMode ? '#FFFFFF' : '#1E293B'),
                  filter: isDarkMode && !isDrawerOpen ? 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))' : 'none'
                }}
              />
            </button>

          </div>
        </div>
      </header>

      {/* Drawer */}
      <aside 
        className={`
          fixed top-0 right-0 h-screen pt-[110px]
          flex flex-col justify-center items-center lg:items-start px-8 lg:px-12
          transition-all duration-[600ms]
          ${isDrawerOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'}
          z-[1001]
        `}
        style={{
          width: 'min(450px, 90vw)',
          background: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          borderLeft: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
          transitionTimingFunction: 'cubic-bezier(0.7, 0, 0.2, 1)'
        }}
      >
        
        <nav className="flex flex-col gap-4 w-full items-center lg:items-start">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className={`
                relative flex items-center justify-center lg:justify-start w-full
                font-extrabold uppercase leading-tight overflow-hidden
                opacity-0 translate-y-8 group/link
                ${isDrawerOpen ? 'animate-slideUpFade' : ''}
              `}
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                animationDelay: `${0.1 * (index + 1)}s`,
                color: 'var(--drawer-text)'
              }}
            >
              <span 
                className="absolute left-5 lg:relative lg:left-auto text-sm font-normal opacity-30 lg:mr-4 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:text-blue-500"
                style={{ color: 'var(--text-secondary)' }}
              >
                0{index + 1}
              </span>
              
              <span 
                className="relative inline-block transition-transform duration-500 group-hover/link:translate-y-[-100%]"
                style={{ transitionTimingFunction: 'cubic-bezier(0.5, 0, 0, 1)' }}
              >
                {link.name}
                <span className="absolute top-full left-0 w-full text-blue-500">
                  {link.name}
                </span>
              </span>
            </Link>
          ))}
        </nav>

      </aside>

      {/* Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] transition-opacity duration-300"
          onClick={handleLinkClick}
          style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
        />
      )}

      {/* Mobile Animation */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          @keyframes mobileRollWave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-100%); }
          }

          .animate-slideUpFade .group\\/link > span {
            animation: mobileRollWave 1s cubic-bezier(0.5, 0, 0, 1) forwards;
          }

          .animate-slideUpFade:nth-child(1) .group\\/link > span { animation-delay: 0.3s; }
          .animate-slideUpFade:nth-child(2) .group\\/link > span { animation-delay: 0.4s; }
          .animate-slideUpFade:nth-child(3) .group\\/link > span { animation-delay: 0.5s; }
        }
      `}</style>
    </>
  );
};

export default Navbar;