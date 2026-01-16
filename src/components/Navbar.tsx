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

  // Toggle theme
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
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
          
          // Always visible background
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
          
          {/* Logo - ORIGINAL APPEARANCE */}
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
                
                // Keep logo ORIGINAL - Just subtle glow in dark mode
                filter: isDarkMode 
                  ? 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.4)) drop-shadow(0 0 15px rgba(45, 212, 191, 0.2))' 
                  : 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
                
                opacity: 1
              }}
              priority
            />
          </Link>

          {/* Theme Toggle + Menu */}
          <div className="flex items-center gap-4 sm:gap-6 z-[1002]">
            
            {/* Theme Toggle Button - FIXED STYLING */}
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-full transition-all duration-300 group relative hover:scale-110 active:scale-95"
              aria-label="Toggle Theme"
              style={{
                // 🎯 FIXED: Better light mode background
                background: isDarkMode 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(100, 116, 139, 0.08)', // Subtle grey-blue tint
                
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                
                // Better shadows
                boxShadow: isDarkMode 
                  ? '0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.08)' 
                  : '0 2px 8px rgba(0, 0, 0, 0.06), inset 0 0 0 1px rgba(0, 0, 0, 0.04)',
                
                // Smooth hover transition
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                // Hover effect
                e.currentTarget.style.background = isDarkMode 
                  ? 'rgba(255, 255, 255, 0.15)' 
                  : 'rgba(100, 116, 139, 0.12)';
              }}
              onMouseLeave={(e) => {
                // Reset to default
                e.currentTarget.style.background = isDarkMode 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(100, 116, 139, 0.08)';
              }}
            >
              <i 
                className={`${isDarkMode ? 'ri-sun-line' : 'ri-moon-line'} text-[26px] sm:text-[28px] transition-all duration-500 group-hover:rotate-[25deg]`}
                style={{ 
                  color: isDarkMode ? '#FFFFFF' : '#334155', // Darker icon in light mode
                  filter: isDarkMode 
                    ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))' 
                    : 'none'
                }}
              />
            </button>

            {/* Hamburger Menu */}
            <button 
              onClick={toggleDrawer}
              className="flex flex-col justify-between w-[36px] sm:w-[38px] h-5 cursor-pointer group"
              aria-label="Toggle Menu"
            >
              {/* Top bar */}
              <div 
                className="w-full h-[2.5px] rounded-sm transition-all duration-[400ms]"
                style={{ 
                  transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  transform: isDrawerOpen ? 'translateY(9px) rotate(45deg)' : 'none',
                  
                  background: isDarkMode ? '#FFFFFF' : '#1E293B',
                  filter: isDarkMode 
                    ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))' 
                    : 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))'
                }}
              />
              
              {/* Middle bar */}
              <div 
                className="w-full h-[2.5px] rounded-sm transition-all duration-[400ms]"
                style={{ 
                  transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  opacity: isDrawerOpen ? 0 : 1,
                  
                  background: isDarkMode ? '#FFFFFF' : '#1E293B',
                  filter: isDarkMode 
                    ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))' 
                    : 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))'
                }}
              />
              
              {/* Bottom bar */}
              <div 
                className="w-full h-[2.5px] rounded-sm transition-all duration-[400ms]"
                style={{ 
                  transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  transform: isDrawerOpen ? 'translateY(-9px) rotate(-45deg)' : 'none',
                  
                  background: isDarkMode ? '#FFFFFF' : '#1E293B',
                  filter: isDarkMode 
                    ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7)) drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))' 
                    : 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))'
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
          
          background: isDarkMode 
            ? 'rgba(2, 6, 23, 0.98)'
            : 'rgba(255, 255, 255, 0.98)',
          
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          
          borderLeft: isDarkMode 
            ? '1px solid rgba(255, 255, 255, 0.1)' 
            : '1px solid rgba(0, 0, 0, 0.08)',
          
          transitionTimingFunction: 'cubic-bezier(0.7, 0, 0.2, 1)',
          
          boxShadow: isDarkMode 
            ? '-5px 0 40px rgba(139, 92, 246, 0.25)' 
            : '-5px 0 30px rgba(0, 0, 0, 0.08)'
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
                color: isDarkMode ? '#FFFFFF' : '#000000'
              }}
            >
              <span 
                className="absolute left-5 lg:relative lg:left-auto text-sm font-normal lg:mr-4 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:text-blue-500"
                style={{ 
                  color: isDarkMode ? '#9CA3AF' : '#6B7280',
                  opacity: 0.4
                }}
              >
                0{index + 1}
              </span>
              
              <span 
                className="relative inline-block transition-transform duration-500 group-hover/link:translate-y-[-100%]"
                style={{ transitionTimingFunction: 'cubic-bezier(0.5, 0, 0, 1)' }}
              >
                {link.name}
                <span 
                  className="absolute top-full left-0 w-full"
                  style={{ 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
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
          style={{ 
            backdropFilter: 'blur(4px)', 
            WebkitBackdropFilter: 'blur(4px)' 
          }}
        />
      )}

      {/* Animations */}
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