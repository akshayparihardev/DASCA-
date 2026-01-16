"use client";

import React, { useEffect, useState, useRef } from 'react';

const Footer = () => {
  const [liked, setLiked] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ========== QUOTE CONFIGURATION ==========
  const quotes = [
    "Innovation",
    "Excellence", 
    "Connections",
    "Inspiration",
  ];

  const QUOTE_CHANGE_SPEED = 1500;

  const socialLinks = [
    {
      name: "Email",
      iconClass: "ri-mail-send-line",
      href: "mailto:dasca@rknec.edu",
      label: "dasca@rknec.edu",
      textColor: "hover:text-orange-500",
      glowColor: "bg-gradient-to-br from-red-600 to-orange-500",
      circleHover: "group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-orange-500 group-hover:shadow-lg group-hover:shadow-orange-500/50 group-hover:text-white",
    },
    {
      name: "Instagram",
      iconClass: "ri-instagram-line",
      href: "https://www.instagram.com/dasca_rbu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "@dasca_rbu",
      textColor: "hover:text-pink-500",
      glowColor: "bg-gradient-to-br from-purple-600 to-pink-500",
      circleHover: "group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-500 group-hover:shadow-lg group-hover:shadow-pink-500/50 group-hover:text-white",
    },
    {
      name: "LinkedIn",
      iconClass: "ri-linkedin-fill",
      href: "https://www.linkedin.com/company/dasca-rbu/?viewAsMember=true",
      label: "DASCA RBU",
      textColor: "hover:text-cyan-500",
      glowColor: "bg-gradient-to-br from-blue-700 to-cyan-500",
      circleHover: "group-hover:bg-gradient-to-br group-hover:from-blue-700 group-hover:to-cyan-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 group-hover:text-white",
    }
  ];

  // ========== QUICK LINKS CONFIGURATION ==========
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Committee", href: "/committee" },
  ];

  useEffect(() => {
    const isLiked = localStorage.getItem('dasca_liked') === 'true';
    setLiked(isLiked);
    audioRef.current = new Audio('/mixkit-hard-pop-click-2364.wav');

    // Quote rotation with configurable speed
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, QUOTE_CHANGE_SPEED);

    return () => clearInterval(quoteInterval);
  }, []);

  const handleLike = (e: React.MouseEvent) => {
    if (!liked) {
      setLiked(true);
      localStorage.setItem('dasca_liked', 'true');
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(err => console.log("Audio Error:", err));
      }
      createFlyingHeart(e.clientX, e.clientY);
    } else {
      setLiked(false);
      localStorage.removeItem('dasca_liked');
    }
  };

  const createFlyingHeart = (x: number, y: number) => {
    const heart = document.createElement('span');
    heart.className = 'flying-heart material-symbols-outlined text-3xl';
    heart.textContent = 'favorite';
    const jitter = Math.floor(Math.random() * 20) - 10;
    heart.style.left = `${x - 12 + jitter}px`;
    heart.style.top = `${y - 12}px`;
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 1000);
  };

  return (
    <footer 
      style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--text-primary)', fontFamily: 'Aeonik Regular' }}
      className="w-full flex justify-center py-12 px-5 md:py-[80px] md:px-[40px] overflow-hidden transition-colors duration-400"
    >
      <div className="w-full max-w-[1400px] flex flex-col gap-16 md:gap-20">
        
        {/* ========== MAIN SECTION ========== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          
          {/* ===== LEFT: BRAND SECTION (5 COLUMNS) ===== */}
          <div className="md:col-span-5 flex flex-col gap-8">
            
            {/* Logo + Tagline */}
            <div>
              <h1 className="gap-4 text-[3rem] md:text-[4rem] font-black uppercase leading-none tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                DASCA
              </h1>
              
              <p className="pt-4 text-[0.95rem] md:text-[1.05rem] font-medium leading-relaxed opacity-70 max-w-[400px] mb-6">
                Empowering students with data-driven insights and fostering innovation at RBU Nagpur.
              </p>

              <div className="pt-2 text-[1.6rem] md:text-[1.9rem] leading-[1.35] font-semibold tracking-wide" style={{ color: 'var(--text-secondary)' }}>
                <p className="opacity-90">Data Science</p>
                <p className="opacity-90">Department</p>
                <p className="font-bold mt-1 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text ">
                  RBU Nagpur
                </p>
              </div>
            </div>

            {/* Social Media - Horizontal Cards */}
            <div className="pt-3 flex flex-col gap-4">
              <h3 className="text-[0.7rem] font-black tracking-widest uppercase opacity-40 mb-1">
                Connect With Us
              </h3>
              
              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                    className={`group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 ${social.textColor}`}
                    style={{ 
                      backgroundColor: 'var(--btn-bg)',
                      color: 'var(--text-primary)',
                      border: '1px solid transparent'
                    }}
                  >
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 ${social.glowColor} opacity-0 group-hover:opacity-30 rounded-full blur-lg transition-opacity duration-300`} />
                      <div className={`relative z-10 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${social.circleHover.replace('rounded-full', 'rounded-xl')}`}>
                        <i className={`${social.iconClass} text-[1.15rem] transition-colors duration-300`}></i>
                      </div>
                    </div>
                    
                    {/* Labels */}
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-[0.65rem] font-bold uppercase tracking-wider opacity-50 group-hover:opacity-100 transition-opacity">
                        {social.name}
                      </span>
                      <span className="text-[0.9rem] font-semibold truncate">
                        {social.label}
                      </span>
                    </div>

                    {/* Arrow */}
                    <i className="ri-arrow-right-line text-xl opacity-0 group-hover:opacity-60 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"></i>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ===== CENTER: DIVIDER (1 COLUMN) ===== */}
          <div className="hidden md:block md:col-span-1">
            <div className="w-[1px] h-full mx-auto bg-gradient-to-b from-transparent via-[var(--border-color)] to-transparent opacity-50"></div>
          </div>
          <div className="block md:hidden w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent opacity-30"></div>

          {/* ===== RIGHT: CTA SECTION (6 COLUMNS) ===== */}
          <div className="md:col-span-6 flex flex-col items-start md:items-center gap-8 justify-center min-h-[400px]">
            
            {/* Animated Quote */}
            <div className="relative w-full overflow-hidden mb-4">
              <div className="relative h-[80px] flex items-center justify-center">
                {quotes.map((quote, index) => (
                  <div
                    key={index}
                    className={`absolute w-full text-center transition-all duration-700 ease-in-out ${
                      index === currentQuote
                        ? 'opacity-100 translate-y-0'
                        : index === (currentQuote - 1 + quotes.length) % quotes.length
                        ? 'opacity-0 -translate-y-6'
                        : 'opacity-0 translate-y-6'
                    }`}
                  >
                    <div className="text-[1.4rem] md:text-[1.7rem] font-bold leading-tight px-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                      "{quote}"
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Quote Indicators */}
              <div className="flex justify-center gap-2 mt-3">
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentQuote(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentQuote
                        ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
                        : 'w-1.5 bg-gray-400 dark:bg-gray-600 opacity-30 hover:opacity-60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CTA Text */}
            <div className="text-center">
              <p className="gap-4 text-[1.8rem] md:text-[2.2rem] font-semibold leading-tight mb-3">
                Wanna Join DASCA<br/>as Volunteer?
              </p>
              <p className="pt-3 text-sm opacity-50 font-medium">
                Be part of something extraordinary
              </p>
            </div>
            
            {/* JOIN Button - Enhanced */}
            <button 
              className="group relative h-[75px] w-full md:w-[240px] rounded-full flex items-center justify-center font-bold tracking-[0.2em] text-[0.9rem] overflow-hidden cursor-pointer uppercase transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:w-full hover:max-w-full md:hover:max-w-[420px] hover:justify-start hover:pl-10 shadow-lg hover:shadow-2xl"
              style={{ 
                background: 'linear-gradient(135deg, var(--btn-bg) 0%, var(--btn-bg-hover) 100%)',
                color: 'var(--btn-text)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <span className="z-10 transition-all duration-400">JOIN NOW</span>
              <i className="ri-arrow-right-line absolute right-[25px] text-[1.4rem] opacity-0 translate-x-[-15px] transition-all duration-400 delay-100 group-hover:opacity-100 group-hover:translate-x-0 z-10"></i>
            </button>

            {/* ✨ NEW: QUICK LINKS - Simple Vertical List ✨ */}
            <div className="w-full max-w-md mt-8">
              <div className="flex flex-col items-center md:items-center gap-4">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group relative inline-flex items-center gap-3 text-[1rem] md:text-[1.1rem] font-semibold transition-all duration-300"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {/* Text with Underline */}
                    <span className="relative">
                      {link.name}
                      {/* Underline */}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    
                    {/* Arrow - 45deg on hover */}
                    <i className="ri-arrow-right-up-line text-[1.2rem] opacity-0 translate-x-[-10px] translate-y-[10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"></i>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ========== BOTTOM SECTION ========== */}
        <div className="border-t border-[var(--border-color)] pt-8 flex flex-col md:flex-row justify-between items-center text-[0.7rem] font-bold tracking-[0.12em] uppercase transition-colors duration-400 gap-6 md:gap-4" style={{ color: 'var(--text-secondary)' }}>
          
          {/* Left: Copyright */}
          <div className="order-2 md:order-1 opacity-60 hover:opacity-100 transition-opacity">
            <p>© 2026 DASCA. ALL RIGHTS RESERVED.</p>
          </div>
          
          {/* Center: Credits */}
          <div className="order-3 md:order-2 opacity-50 hover:opacity-80 transition-opacity">
            <p className="flex items-center gap-2">
              BUILT BY DASCA WITH
              <span className="text-base">🩷</span>
            </p>
          </div>

          {/* Right: Like Section */}
          <div className="order-1 md:order-3 flex items-center gap-4 border-t border-dashed border-[var(--border-color)] md:border-none pt-4 md:pt-0 w-full md:w-auto justify-center md:justify-end">
            <span className="opacity-60 hover:opacity-100 transition-opacity text-[0.68rem]">
              LIKED THE WEBSITE?
            </span>
            
            <div className="flex items-center gap-2 cursor-pointer select-none group" onClick={handleLike}>
              <span className="text-[0.68rem] opacity-50 group-hover:opacity-100 transition-opacity">
                GIVE US A
              </span>
              <span 
                className={`material-symbols-outlined text-[1.8rem] transition-all duration-200 group-hover:scale-125 ${liked ? 'heart-pop' : ''}`}
                style={{ 
                    fontVariationSettings: `'FILL' ${liked ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
                    background: liked ? 'linear-gradient(45deg, #ff357a, #fff172)' : 'transparent',
                    WebkitBackgroundClip: liked ? 'text' : 'unset',
                    backgroundClip: liked ? 'text' : 'unset',
                    color: liked ? 'transparent' : 'var(--heart-icon-idle)'
                }}
              >
                favorite
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;