'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import HeroSection from '../components/home/HeroSection';
import CurvedLoop from '../components/home/CurvedLoop';
import PremiumReelSection from '../components/home/PremiumReelSection';
import { Sparkles, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    bg: isDarkMode ? '#0A0A0A' : '#FAFAFA',
    cardBg: isDarkMode ? '#141414' : '#FFFFFF',
    text: isDarkMode ? '#F8FAFC' : '#0F172A',
    textSub: isDarkMode ? '#94A3B8' : '#475569',
    border: isDarkMode ? '#262626' : '#E5E7EB',
    accent: isDarkMode ? '#8B5CF6' : '#6366F1',
  };



  const activities = [
    {
      title: 'Cultural Festivals',
      description:
        'From traditional celebrations to modern performances — celebrating diversity through art',
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      color: 'from-violet-600 to-fuchsia-600',
    },
    {
      title: 'Sports Championships',
      description:
        'Building champions across all disciplines — where teamwork meets competition',
      image:
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Skill Workshops',
      description:
        'Personal growth through expert-led sessions, masterclasses, and hands-on learning',
      image:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
      color: 'from-orange-600 to-pink-600',
    },
  ];



  // 🔥 SEO - STRUCTURED DATA (Schema.org)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DASCA - Data Science Association",
    "alternateName": "DASCA RBU",
    "url": "https://dasca.in",
    "logo": "https://dasca.in/logo.png",
    "description": "Official Data Science Association of Ramdeobaba University, Nagpur. Empowering 2000+ students through 50+ annual events including tech workshops, cultural festivals, and sports championships.",
    "email": "dasca@rknec.edu",
    "foundingDate": "2021",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440013",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/dasca_rbu",
      "https://www.linkedin.com/company/dasca-rbu"
    ],
    "memberOf": {
      "@type": "CollegeOrUniversity",
      "name": "Ramdeobaba College of Engineering and Management"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 100
    },
    "slogan": "Where Passion Meets Purpose"
  };

  return (
    <>
      {/* 🔥 SEO - SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="w-full overflow-x-hidden">


        {/* SECTION 1: HERO */}
        <HeroSection isDarkMode={isDarkMode} />

        {/* SECTION 2: TRANSFORMATION STORY */}
        <section className="relative py-32" style={{ backgroundColor: theme.bg }}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-20"
            >
              <h2
                className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
                style={{ color: theme.text }}
              >
                We Don&apos;t Just Organize Events,
                <br />
                <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                  We Create Experiences
                </span>
              </h2>
              <p
                className="text-xl md:text-2xl font-light leading-relaxed"
                style={{ color: theme.textSub }}
              >
                Every festival, tournament, and workshop is designed to bring our
                campus alive with energy, creativity, and connection.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {activities.map((activity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative"
                  style={{ padding: '4px' }}
                >
                  <div
                    className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-75 transition-opacity duration-700 bg-gradient-to-r ${activity.color}`}
                    style={{
                      filter: 'blur(20px)',
                      transform: 'scale(1.05)',
                    }}
                  />

                  <div
                    className="relative rounded-3xl overflow-hidden"
                    style={{ backgroundColor: theme.cardBg }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-60 mix-blend-multiply`}
                      />
                    </div>

                    <div className="p-8">
                      <h3
                        className="text-2xl font-black mb-3 tracking-tight"
                        style={{ color: theme.text }}
                      >
                        {activity.title}
                      </h3>
                      <p
                        className="leading-relaxed"
                        style={{ color: theme.textSub }}
                      >
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: PREMIUM REEL */}
        <PremiumReelSection isDarkMode={isDarkMode} />

        {/* SECTION 6: CURVED LOOP */}
        <section className="relative py-32 overflow-hidden" style={{
          background: isDarkMode
            ? 'linear-gradient(180deg, #020617 0%, #1e1b4b 50%, #020617 100%)'
            : 'linear-gradient(180deg, #FAFAFA 0%, #f3e8ff 50%, #FAFAFA 100%)'
        }}>
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl" />

          <CurvedLoop
            marqueeText="DASCA ✦ DOESN'T ✦ DISAPPOINT ✦ "
            speed={3}
            curveAmount={350}
            direction="right"
            interactive
            className={isDarkMode ? 'fill-white' : 'fill-gray-900'}
          />
        </section>

        {/* SECTION 7: FINAL CTA */}
        <section className="relative py-32" style={{ backgroundColor: theme.bg }}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2
                className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
                style={{ color: theme.text }}
              >
                Ready To Be Part Of
                <br />
                <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Something Extraordinary?
                </span>
              </h2>

              <p
                className="text-xl md:text-2xl font-light mb-12"
                style={{ color: theme.textSub }}
              >
                Join DASCA and create memories that will last a lifetime
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 rounded-full font-bold text-lg text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-xl hover:shadow-2xl transition-all"
                >
                  <span className="flex items-center gap-3">
                    Explore Upcoming Events
                    <ArrowRight />
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}