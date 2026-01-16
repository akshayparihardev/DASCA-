"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  isDarkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDarkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // EXACT SAME theme configuration from friend's code
  const themes = {
    light: {
      background: "#ffffff",
      particleColor: "rgba(0, 0, 0, 0.4)",
      lineColor: "37, 99, 235",
      pulseColor: "#2563EB",
      textMain: "text-gray-900",
      textSub: "text-gray-600",
      gradient: "from-blue-600 to-purple-600",  // Changed from gray-900 to purple for arts/culture vibe
      overlay: "from-white/60 via-transparent to-white/90",
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
    },
  };

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  // EXACT SAME Canvas Logic from friend's code
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
            ctx.strokeStyle = `rgba(${currentTheme.lineColor}, ${
              1 - dist / connectionDistance
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
            ctx.strokeStyle = `rgba(${currentTheme.lineColor}, ${
              1 - distMouse / 200
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

  // EXACT SAME Render from friend's code
  return (
    <div
      className={`relative w-full h-screen overflow-hidden flex flex-col items-center justify-center transition-colors duration-500 ${
        isDarkMode ? "bg-[#030712]" : "bg-white"
      }`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      <div
        className={`absolute inset-0 z-0 pointer-events-none bg-gradient-to-b ${currentTheme.overlay}`}
      />

      {/* Content - Updated for DASCA (Arts/Sports/Culture) */}
      <div className="relative z-10 text-center px-6">
        <h1
          className={`text-5xl md:text-7xl font-extrabold mb-6 ${currentTheme.textMain}`}
        >
          Where Passion Meets <br />
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradient}`}
          >
            Purpose
          </span>
        </h1>

        <p
          className={`max-w-2xl mx-auto mb-10 text-lg ${currentTheme.textSub}`}
        >
          Welcome to <b>DASCA</b> — The heartbeat of campus culture, 
          arts, sports, and unforgettable experiences.
        </p>

        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="px-8 py-4 bg-blue-600 text-white rounded-full flex items-center gap-3 mx-auto hover:bg-blue-700 transition-colors"
        >
          Explore DASCA
          <ArrowRight
            className={`transition-transform ${
              isHovered ? "translate-x-1" : ""
            }`}
          />
        </button>
      </div>

      <div className="absolute bottom-10 animate-bounce z-10">
        <ChevronDown className="text-gray-400" />
      </div>
    </div>
  );
};

export default HeroSection;