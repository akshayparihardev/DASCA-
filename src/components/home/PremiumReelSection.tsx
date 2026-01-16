'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, X } from 'lucide-react';

interface PremiumReelSectionProps {
  isDarkMode: boolean;
}

const PremiumReelSection: React.FC<PremiumReelSectionProps> = ({ isDarkMode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const theme = {
    bg: isDarkMode ? '#0A0A0A' : '#FAFAFA',
    text: isDarkMode ? '#F8FAFC' : '#0F172A',
    textSub: isDarkMode ? '#94A3B8' : '#475569',
    accent: isDarkMode ? '#8B5CF6' : '#6366F1',
  };

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative py-32 overflow-hidden"
        style={{ backgroundColor: theme.bg }}
      >
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-6"
              style={{ 
                backgroundColor: isDarkMode ? 'rgba(139, 92, 246, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                color: theme.accent 
              }}
            >
              Team 2024
            </span>
            <h2 
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
              style={{ color: theme.text }}
            >
              Meet The Faces Behind
              <br />
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                The Magic
              </span>
            </h2>
            <p 
              className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
              style={{ color: theme.textSub }}
            >
              Every great event, every unforgettable moment — powered by passion and dedication
            </p>
          </motion.div>

          {/* Video Player */}
          <motion.div
            style={{ scale, opacity }}
            className="max-w-7xl mx-auto"
          >
            <div className="relative group">
              {/* Main Video Container */}
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
                  loop
                  playsInline
                >
                  <source src="/videos/committee-reel-2024.mp4" type="video/mp4" />
                </video>

                {/* Video Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Play/Pause Button (Center) */}
                {!isPlaying && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    onClick={togglePlay}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                  >
                    <Play size={40} className="text-white ml-2" fill="white" />
                  </motion.button>
                )}

                {/* Video Controls (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-4">
                    {/* Play/Pause */}
                    <button
                      onClick={togglePlay}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause size={20} className="text-white" />
                      ) : (
                        <Play size={20} className="text-white ml-1" />
                      )}
                    </button>

                    {/* Mute/Unmute */}
                    <button
                      onClick={toggleMute}
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX size={20} className="text-white" />
                      ) : (
                        <Volume2 size={20} className="text-white" />
                      )}
                    </button>
                  </div>

                  {/* Fullscreen Button */}
                  <button
                    onClick={toggleFullscreen}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Maximize2 size={20} className="text-white" />
                  </button>
                </div>

                {/* Badge */}
                <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                  <span className="text-white font-semibold text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    DASCA 2026
                  </span>
                </div>
              </div>

              {/* Glow Effect */}
              <div 
                className="absolute -inset-1 rounded-3xl blur-3xl opacity-30 -z-10"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
                }}
              />
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                View Full Committee
              </button>
              <button 
                className="px-8 py-4 rounded-full font-bold border-2 hover:scale-105 transition-all duration-300"
                style={{
                  borderColor: theme.text,
                  color: theme.text,
                  backgroundColor: 'transparent'
                }}
              >
                Join Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center p-6"
          onClick={toggleFullscreen}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            onClick={toggleFullscreen}
          >
            <X size={24} className="text-white" />
          </button>

          {/* Fullscreen Video */}
          <div className="relative w-full max-w-7xl aspect-video rounded-2xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src="/videos/committee-reel-2024.mp4"
              controls
              autoPlay
              loop
            />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PremiumReelSection;