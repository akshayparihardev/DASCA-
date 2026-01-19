"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  isDarkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // --- 1. Enhanced Theme Configuration ---
  const themes = {
    light: {
      background: "#ffffff",
      particleColor: "rgba(0, 0, 0, 0.4)",
      lineColor: "37, 99, 235",
      pulseColor: "#2563EB",
      textMain: "text-gray-900",
      textSub: "text-gray-600",
      gradient: "from-blue-600 to-gray-900",
      overlay: "from-white/60 via-transparent to-white/90",
      buttonSecondary:
        "border-gray-300 text-gray-600 hover:border-blue-600 hover:text-blue-600",
      badge: "border-blue-600/20 bg-blue-50 text-blue-600",
    },
    dark: {
      background: "#030712",
      particleColor: "rgba(255, 255, 255, 0.3)",
      lineColor: "59, 130, 246",
      pulseColor: "#00C4CC",
      textMain: "text-white",
      textSub: "text-gray-400",
      gradient: "from-blue-400 to-cyan-300",
      overlay: "from-black/40 via-transparent to-black/90",
      buttonSecondary:
        "border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400",
      badge: "border-cyan-500/30 bg-cyan-900/10 text-cyan-400",
    },
  };

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  // --- 2. Canvas Logic ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let w: number, h: number;
    let particles: any[] = [];
    let pulses: any[] = [];
    const mouse = { x: null as number | null, y: null as number | null };

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 45 : 85;
    const connectionDistance = isMobile ? 100 : 150;
    const pulseChance = 0.003;

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = currentTheme.particleColor;
        ctx.fill();
      }
    }

    class Pulse {
      p1: any;
      p2: any;
      progress: number;
      speed: number;
      dead: boolean;

      constructor(p1: any, p2: any) {
        this.p1 = p1;
        this.p2 = p2;
        this.progress = 0;
        this.speed = 0.04;
        this.dead = false;
      }

      update() {
        this.progress += this.speed;
        if (this.progress >= 1) this.dead = true;
      }

      draw() {
        const x = this.p1.x + (this.p2.x - this.p1.x) * this.progress;
        const y = this.p1.y + (this.p2.y - this.p1.y) * this.progress;

        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = currentTheme.pulseColor;

        if (isDarkMode) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = currentTheme.pulseColor;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      particles = [];
      pulses = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p, index) => {
        p.update();
        p.draw();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${currentTheme.lineColor}, ${1 - dist / connectionDistance
              })`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            if (Math.random() < pulseChance) {
              pulses.push(new Pulse(p, p2));
            }
          }
        }

        if (mouse.x != null && mouse.y != null) {
          const distMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (distMouse < 200) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${currentTheme.lineColor}, ${1 - distMouse / 200
              })`;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      });

      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        const dist = Math.hypot(
          pulse.p1.x - pulse.p2.x,
          pulse.p1.y - pulse.p2.y
        );

        if (dist > connectionDistance || pulse.dead) {
          pulses.splice(i, 1);
        } else {
          pulse.update();
          pulse.draw();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode, currentTheme]);

  // --- 3. Render ---
  return (
    <div
      className={`relative w-full h-screen overflow-hidden flex flex-col items-center justify-center transition-colors duration-500 ${isDarkMode ? "bg-[#030712]" : "bg-white"
        }`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      <div
        className={`absolute inset-0 z-0 pointer-events-none bg-gradient-to-b ${currentTheme.overlay}`}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">

        {/* Main Headline - SOPHISTICATED TYPOGRAPHY */}
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black mb-6 tracking-tight leading-[1.1] ${currentTheme.textMain}`}
          style={{
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            letterSpacing: "-0.025em",
            textRendering: "optimizeLegibility",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale"
          }}
        >
          Where Passion Meets
          <br />
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradient} animate-gradient-shift`}
            style={{
              display: "inline-block",
              backgroundSize: "200% auto"
            }}
          >
            Purpose
          </span>
        </h1>

        {/* Subtitle - REFINED & ELEGANT */}
        <p
          className={`text-lg sm:text-xl md:text-2xl font-light mb-12 leading-relaxed ${currentTheme.textSub}`}
          style={{
            fontFamily: "'Inter', sans-serif",
            maxWidth: "45rem",
            margin: "0 auto 3.5rem auto",
            fontWeight: 300,
            lineHeight: 1.65
          }}
        >
          Welcome to <span className={`font-semibold ${currentTheme.textMain}`}>DASCA</span> — The official Data Science Association of
          Ramdeobaba University.
        </p>

        {/* CTA Button - SOPHISTICATED DESIGN */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-3 overflow-hidden"
          style={{
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0.01em"
          }}
        >
          {/* Subtle hover gradient shift */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          <span className="relative z-10">Explore DASCA</span>
        </div>
      </div>

      {/* Scroll Indicator - MINIMAL & REFINED */}
      <div className="absolute bottom-10 animate-bounce-gentle z-10 opacity-40 hover:opacity-100 transition-opacity duration-300">
        <ChevronDown
          className={currentTheme.textSub}
          size={32}
          strokeWidth={1.5}
        />
      </div>

      {/* Smooth Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 3s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;