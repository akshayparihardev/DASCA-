'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import WordsPreloader from '../components/WordsPreloader';
import HeroSection from '../components/home/HeroSection';
import CurvedLoop from '../components/home/CurvedLoop';
import PremiumReelSection from '../components/home/PremiumReelSection';
import { Sparkles, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react';

export default function Home() {
  // 🔥 VERY IMPORTANT
  // default false, taaki animation control me rahe
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ✅ PRELOADER ONLY ON REAL PAGE RELOAD
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('hasLoaded');

    if (!hasLoaded) {
      setIsLoading(true);
      sessionStorage.setItem('hasLoaded', 'true');
    }
  }, []);

  // Dark mode observer (unchanged)
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

  const stats = [
    { value: '50+', label: 'Events Annually', icon: Sparkles },
    { value: '2000+', label: 'Active Students', icon: Users },
    { value: '100+', label: 'Committee Members', icon: TrendingUp },
    { value: '5+', label: 'Years of Excellence', icon: Zap },
  ];

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

  const testimonials = [
    {
      quote:
        'DASCA transformed me from a shy fresher into someone who can confidently organize fests for 1000+ people. Best decision ever.',
      author: 'Rohan Sharma',
      year: '3rd Year',
      image:
        'https://ui-avatars.com/api/?name=Rohan+Sharma&background=667eea&color=fff&size=128',
    },
    {
      quote:
        "Made lifelong friends and discovered my passion for event management. DASCA isn't just a committee — it's a family.",
      author: 'Priya Singh',
      year: 'Final Year',
      image:
        'https://ui-avatars.com/api/?name=Priya+Singh&background=764ba2&color=fff&size=128',
    },
  ];

  return (
    <>
      {/* 🔥 WORDS PRELOADER — ONLY ON PAGE RELOAD */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <WordsPreloader finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

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
                We Don't Just Organize Events,
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
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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

        {/* SECTION 4: STATS */}
        <section className="relative py-32" style={{ backgroundColor: theme.bg }}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2
                className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
                style={{ color: theme.text }}
              >
                By The Numbers
              </h2>
              <p
                className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
                style={{ color: theme.textSub }}
              >
                Our impact speaks louder than words
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 rounded-3xl"
                  style={{
                    backgroundColor: theme.cardBg,
                    border: `1px solid ${theme.border}`,
                  }}
                >
                  <stat.icon
                    size={48}
                    className="mx-auto mb-6"
                    style={{ color: theme.accent }}
                  />
                  <div className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div
                    className="font-semibold tracking-wide"
                    style={{ color: theme.textSub }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: TESTIMONIALS */}
        <section
          className="relative py-32"
          style={{ backgroundColor: theme.cardBg }}
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2
                className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
                style={{ color: theme.text }}
              >
                Real Stories, Real Impact
              </h2>
              <p
                className="text-xl font-light"
                style={{ color: theme.textSub }}
              >
                From students who lived the DASCA experience
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="p-10 rounded-3xl relative"
                  style={{
                    backgroundColor: theme.bg,
                    border: `1px solid ${theme.border}`,
                  }}
                >
                  <div
                    className="text-7xl font-black opacity-10 absolute top-6 left-6"
                    style={{ color: theme.accent }}
                  >
                    "
                  </div>

                  <p
                    className="text-lg mb-8 italic leading-relaxed"
                    style={{ color: theme.text }}
                  >
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.author}
                      className="w-14 h-14 rounded-full"
                    />
                    <div>
                      <div
                        className="font-bold text-lg"
                        style={{ color: theme.text }}
                      >
                        {t.author}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: theme.textSub }}
                      >
                        {t.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: CURVED LOOP */}
        <section className="relative py-20" style={{ backgroundColor: theme.bg }}>
          <CurvedLoop
            marqueeText="DASCA ✦ DOESN'T ✦ DISAPPOINTS ✦ "
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
