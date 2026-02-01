'use client';

import { motion } from 'framer-motion';

interface PremiumReelSectionProps {
  isDarkMode: boolean;
}

const PremiumReelSection: React.FC<PremiumReelSectionProps> = ({ isDarkMode }) => {
  const theme = {
    bg: isDarkMode ? '#0A0A0A' : '#FAFAFA',
    cardBg: isDarkMode ? '#141414' : '#FFFFFF',
    text: isDarkMode ? '#F8FAFC' : '#0F172A',
    textSub: isDarkMode ? '#94A3B8' : '#475569',
    border: isDarkMode ? '#262626' : '#E5E7EB',
  };

  const handleOpenReel = (year: '2026' | '2025') => {
    // Open reel in new tab
    window.open(`/committee-reel-${year}.mp4`, '_blank');
  };

  return (
    <section className="relative py-32 overflow-hidden" style={{ background: theme.bg }}>
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]" style={{ color: theme.text }}>
            Meet The Faces Behind{' '}
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              The Magic
            </span>
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed" style={{ color: theme.textSub }}>
            Every unforgettable moment is powered by passion and people
          </p>
        </motion.div>

        {/* VIDEOS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* 2026 Reel */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight" style={{ color: theme.text }}>
                Team 2026
              </h3>
              <p className="text-lg max-w-md leading-relaxed" style={{ color: theme.textSub }}>
                The current powerhouse driving DASCA forward with innovation and energy
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => handleOpenReel('2026')}
            >
              {/* Glow effect */}
              <div
                className="absolute -inset-4 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                style={{
                  background: `linear-gradient(135deg, ${isDarkMode ? '#8B5CF6' : '#6366F1'}, ${isDarkMode ? '#EC4899' : '#EC4899'})`,
                }}
              />

              <div
                className="relative aspect-video rounded-[32px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] group-hover:scale-[1.02] transition-transform duration-300"
                style={{
                  backgroundColor: theme.cardBg,
                  border: `2px solid ${theme.border}`,
                }}
              >
                {/* Video thumbnail */}
                <video
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/committee-reel-2026.mp4#t=0.1" type="video/mp4" />
                </video>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border-2 border-white/40 flex items-center justify-center shadow-2xl group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Year badge */}
                <div className="absolute top-6 left-6 px-5 py-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide">
                  Team 2026
                </div>

                {/* Click to open hint */}
                <div className="absolute bottom-6 left-6 right-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium bg-black/50 backdrop-blur-md rounded-full px-4 py-2 inline-block">
                    Click to watch in new tab
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 2025 Reel */}
          <div className="lg:mt-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight" style={{ color: theme.text }}>
                Team 2025
              </h3>
              <p className="text-lg max-w-md leading-relaxed" style={{ color: theme.textSub }}>
                The legends who built the foundation and set the standard
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => handleOpenReel('2025')}
            >
              {/* Glow effect */}
              <div
                className="absolute -inset-4 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
                style={{
                  background: `linear-gradient(135deg, ${isDarkMode ? '#8B5CF6' : '#6366F1'}, ${isDarkMode ? '#EC4899' : '#EC4899'})`,
                }}
              />

              <div
                className="relative aspect-video rounded-[32px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] group-hover:scale-[1.02] transition-transform duration-300"
                style={{
                  backgroundColor: theme.cardBg,
                  border: `2px solid ${theme.border}`,
                }}
              >
                {/* Video thumbnail */}
                <video
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/committee-reel-2025.mp4#t=0.1" type="video/mp4" />
                </video>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border-2 border-white/40 flex items-center justify-center shadow-2xl group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Year badge */}
                <div className="absolute top-6 left-6 px-5 py-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide">
                  Team 2025
                </div>

                {/* Click to open hint */}
                <div className="absolute bottom-6 left-6 right-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium bg-black/50 backdrop-blur-md rounded-full px-4 py-2 inline-block">
                    Click to watch in new tab
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="/committee"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 rounded-full font-bold text-lg text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-[0_20px_50px_-15px_rgba(139,92,246,0.5)] hover:shadow-[0_25px_60px_-15px_rgba(139,92,246,0.7)] transition-all duration-300"
          >
            View Full Committee
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumReelSection;