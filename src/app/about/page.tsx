import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About DASCA - Data Science Association RBU',
  description: 'Learn about DASCA, the official Data Science Association of Ramdeobaba University. Our mission, vision, and 5+ years of excellence in fostering innovation and empowering 2000+ students.',
  openGraph: {
    title: 'About DASCA - Data Science Association',
    description: 'Discover the story behind DASCA and our mission at Ramdeobaba University, Nagpur',
    url: 'https://dasca.in/about',
  },
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  Lightbulb, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  Laptop, 
  GraduationCap, 
  Music 
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function AboutPage() {
  const heroRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  // Dark mode observer
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains('dark-mode'));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const theme = {
    bg: isDarkMode ? '#0A0A0A' : '#F8FAFC',
    cardBg: isDarkMode ? '#141414' : '#FFFFFF',
    text: isDarkMode ? '#F8FAFC' : '#0F172A',
    textSub: isDarkMode ? '#94A3B8' : '#475569',
    border: isDarkMode ? '#262626' : '#E5E7EB',
    accent: isDarkMode ? '#8B5CF6' : '#6366F1',
  };

  const coreValues = [
    {
      icon: BookOpen,
      title: "Learning-Oriented",
      description: "Prioritizing continuous learning and skill development to stay ahead in the evolving tech landscape.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Believing in the power of teamwork and peer-to-peer knowledge sharing to achieve common goals.",
      color: "from-violet-600 to-purple-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Encouraging creativity and unique problem-solving approaches to tackle real-world data challenges.",
      color: "from-orange-600 to-pink-600"
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      description: "Upholding the ethical use of data and technology as a fundamental standard in all our practices.",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Heart,
      title: "Inclusivity",
      description: "Fostering an open, supportive environment where every learner is welcomed and their potential valued.",
      color: "from-pink-600 to-rose-600"
    }
  ];

  const initiatives = [
    {
      icon: Laptop,
      title: "Technical Workshops",
      description: "Hands-on sessions on Data Science, AI/ML, and Web Development to build real-world practical skills.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: GraduationCap,
      title: "Alumni Interaction",
      description: "Bridging the gap between seniors and juniors through mentorship sessions, career guidance, and networking.",
      color: "from-violet-600 to-fuchsia-600"
    },
    {
      icon: Music,
      title: "Cultural Events",
      description: "Celebrating the spirit of our department with festivals, talent showcases, and community gatherings.",
      color: "from-orange-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/20 selection:text-blue-900" style={{ backgroundColor: theme.bg }}>
      
      {/* HERO SECTION */}
      <motion.section 
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950"
      >
        {/* Background - Refined Gradients & Noise */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
          
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/40 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000" />
          </div>
        </div>

        <div className="relative z-10 text-center px-6 py-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400 mb-6 tracking-tight">
              ABOUT US
            </h1>
            
            <div className="flex items-center justify-center gap-6 mb-10 opacity-80">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <p className="text-xl md:text-2xl text-blue-100 font-light tracking-[0.4em] uppercase">
                DASCA
              </p>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            </div>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              Fostering knowledge, innovation, and collaboration in <span className="text-blue-200 font-normal">Data Science & Analytics</span>.
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-slate-500 to-transparent"></div>
        </motion.div>
      </motion.section>

      {/* WHAT IS DASCA */}
      <section className="py-24 px-6 relative" style={{ backgroundColor: theme.cardBg }}>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight" style={{ color: theme.text }}>
              What is DASCA?
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8 text-lg md:text-xl leading-relaxed font-light"
            style={{ color: theme.textSub }}
          >
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left" style={{ color: theme.text }}>
              DASCA (Data Science Association) is a student-led technical club dedicated to fostering knowledge, innovation, and collaboration in the domain of data science and analytics.
            </p>
            
            <p>
              The club aims to create a vibrant learning ecosystem where students can enhance their technical skills, explore real-world applications, and stay updated with the latest industry trends.
            </p>

            <div className="p-6 rounded-r-lg border-l-4 border-blue-500 italic" style={{ backgroundColor: theme.bg, color: theme.text }}>
              "We function as a bridge between academic theory and practical application—providing a platform to dive deep into visualization, ML, and statistical analysis."
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24 px-6" style={{ backgroundColor: theme.bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision - WITH GLOW EFFECT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
              style={{ padding: '4px' }}
            >
              {/* 🔥 GLOW EFFECT */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-700 bg-gradient-to-r from-blue-600 to-cyan-600"
                style={{
                  filter: 'blur(20px)',
                  transform: 'scale(1.05)',
                }}
              />

              <div
                className="relative p-10 rounded-2xl shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] transition-all duration-300"
                style={{ backgroundColor: theme.cardBg, border: `1px solid ${theme.border}` }}
              >
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-7 h-7 text-blue-600" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 tracking-tight" style={{ color: theme.text }}>Our Vision</h3>
                <p className="leading-relaxed" style={{ color: theme.textSub }}>
                  To build a strong community of data science enthusiasts who are equipped with analytical thinking, technical expertise, and ethical values to solve real-world problems.
                </p>
              </div>
            </motion.div>

            {/* Mission - WITH GLOW EFFECT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              style={{ padding: '4px' }}
            >
              {/* 🔥 GLOW EFFECT */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-700 bg-gradient-to-r from-cyan-600 to-blue-600"
                style={{
                  filter: 'blur(20px)',
                  transform: 'scale(1.05)',
                }}
              />

              <div
                className="relative p-10 rounded-2xl shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] transition-all duration-300"
                style={{ backgroundColor: theme.cardBg, border: `1px solid ${theme.border}` }}
              >
                <div className="w-14 h-14 bg-cyan-50 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-7 h-7 text-cyan-600" />
                </div>

                <h3 className="text-3xl font-bold mb-4 tracking-tight" style={{ color: theme.text }}>Our Mission</h3>
                <ul className="space-y-4" style={{ color: theme.textSub }}>
                  {[
                    "Promote awareness and understanding of data science.",
                    "Provide hands-on learning through workshops & projects.",
                    "Connect students with industry experts and alumni.",
                    "Encourage teamwork, innovation, and continuous learning."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CORE VALUES - WITH GLOW EFFECT */}
      <section className="py-24 px-6" style={{ backgroundColor: theme.cardBg }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: theme.text }}>
              Core Values
            </h2>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: theme.textSub }}>
              The fundamental principles that drive our community forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative ${
                   index >= 3 ? "lg:col-span-1 lg:mx-auto lg:w-full lg:max-w-md" : ""
                }`}
                style={{ padding: '4px' }}
              >
                {/* 🔥 GLOW EFFECT */}
                <div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-75 transition-opacity duration-700 bg-gradient-to-r ${value.color}`}
                  style={{
                    filter: 'blur(20px)',
                    transform: 'scale(1.05)',
                  }}
                />

                <div
                  className="relative p-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ backgroundColor: theme.bg, border: `1px solid ${theme.border}` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      backgroundColor: theme.cardBg, 
                      borderColor: theme.border,
                      color: theme.text 
                    }}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: theme.text }}>
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-sm" style={{ color: theme.textSub }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY INITIATIVES - WITH GLOW EFFECT */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ backgroundColor: isDarkMode ? '#0f172a' : '#f1f5f9' }}>
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/40 rounded-full blur-[100px]" />
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/40 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" style={{ color: theme.text }}>Key Initiatives</h2>
            <p className="text-xl max-w-2xl mx-auto font-light" style={{ color: theme.textSub }}>
              Beyond academics, we foster growth through technical training, mentorship, and vibrant community events.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
                style={{ padding: '4px' }}
              >
                {/* 🔥 GLOW EFFECT */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-700 bg-gradient-to-r ${item.color}`}
                  style={{
                    filter: 'blur(20px)',
                    transform: 'scale(1.05)',
                  }}
                />

                <div
                  className="relative p-8 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: theme.cardBg,
                    border: `1px solid ${theme.border}`
                  }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ 
                      backgroundColor: theme.bg,
                      color: theme.accent 
                    }}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: theme.text }}>{item.title}</h3>
                  <p className="leading-relaxed font-light" style={{ color: theme.textSub }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}