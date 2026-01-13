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
    { name: 'Gallery', href: '/gallery' },
    { name: 'Events', href: '/events' },
    { name: 'Committee', href: '/committee' },
    { name: 'Leaderboard', href: '/leaderboard' }
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

  // SIMPLE: Load saved theme on mount (default: light mode)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme === 'dark') {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
      } else {
        // Default: Light mode
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark-mode');
        document.body.classList.remove('dark-mode');
      }
    }
  }, []);

  // SIMPLE: Toggle theme
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
    document.body.offsetHeight; // Trigger reflow
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
        className="fixed top-0 left-0 w-full h-[90px] z-[1000] transition-all duration-500"
        style={{ 
          background: isScrolled 
            ? (isDarkMode ? 'rgba(2, 6, 23, 0.8)' : 'rgba(255, 255, 255, 0.8)')
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
          borderBottom: isScrolled 
            ? (isDarkMode ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)')
            : 'none'
        }}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 h-full flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="z-[1002] relative">
            <Image 
              src="/DASCA_logo.png" 
              alt="DASCA Logo" 
              width={180}
              height={45}
              className="w-auto object-contain"
              style={{ height: '45px' }}
              priority
            />
          </Link>

          {/* Theme Toggle + Menu */}
          <div className="flex items-center gap-5">
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full transition-all duration-500 hover:bg-[var(--btn-bg)] group"
              aria-label="Toggle Theme"
            >
              <i 
                className={`${isDarkMode ? 'ri-sun-line' : 'ri-moon-line'} text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[15deg] group-active:scale-90 group-active:rotate-180`}
                style={{ color: isDarkMode ? 'var(--text-primary)' : 'var(--text-secondary)' }}
              />
            </button>

            {/* Hamburger Menu */}
            <button 
              onClick={toggleDrawer}
              className="flex flex-col justify-between w-[35px] h-5 cursor-pointer z-[1002]"
              aria-label="Toggle Menu"
            >
              <div 
                className={`w-full h-[2px] rounded-sm transition-all duration-[400ms] ${
                  isDrawerOpen 
                    ? 'translate-y-[9px] rotate-45 bg-[var(--text-primary)]' 
                    : 'bg-[var(--text-secondary)]'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
              />
              <div 
                className={`w-full h-[2px] rounded-sm transition-all duration-[400ms] ${
                  isDrawerOpen ? 'opacity-0' : 'bg-[var(--text-secondary)]'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
              />
              <div 
                className={`w-full h-[2px] rounded-sm transition-all duration-[400ms] ${
                  isDrawerOpen 
                    ? 'translate-y-[-9px] rotate-[-45deg] bg-[var(--text-primary)]' 
                    : 'bg-[var(--text-secondary)]'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
              />
            </button>

          </div>
        </div>
      </header>

      {/* Drawer */}
      <aside 
        className={`
          fixed top-0 right-0 h-screen pt-[90px]
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

          <div 
            className={`h-px w-full max-w-[250px] my-8 opacity-0 ${isDrawerOpen ? 'animate-slideUpFade' : ''}`}
            style={{ background: 'var(--nav-border)', animationDelay: '0.6s' }}
          />

          <Link
            href="/join"
            onClick={handleLinkClick}
            className={`
              text-lg font-semibold px-8 py-3 rounded-full border
              transition-all duration-300 hover:translate-y-[-3px]
              opacity-0 ${isDrawerOpen ? 'animate-slideUpFade' : ''}
            `}
            style={{ 
              color: 'var(--text-primary)',
              borderColor: 'var(--nav-border)',
              animationDelay: '0.7s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--text-primary)';
              e.currentTarget.style.color = 'var(--body-bg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            Join DASCA
          </Link>
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
          .animate-slideUpFade:nth-child(4) .group\\/link > span { animation-delay: 0.6s; }
          .animate-slideUpFade:nth-child(5) .group\\/link > span { animation-delay: 0.7s; }
        }
      `}</style>
    </>
  );
};

export default Navbar;