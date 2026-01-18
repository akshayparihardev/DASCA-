'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PremiumReelSectionProps {
  isDarkMode: boolean;
}

const PremiumReelSection: React.FC<PremiumReelSectionProps> = ({ isDarkMode }) => {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);

  /* ---------------- STATES ---------------- */
  const [isPlaying2026, setIsPlaying2026] = useState(false);
  const [isPlaying2025, setIsPlaying2025] = useState(false);
  const [isMuted2026, setIsMuted2026] = useState(true);
  const [isMuted2025, setIsMuted2025] = useState(true);
  const [fullscreenVideo, setFullscreenVideo] = useState<'2026' | '2025' | null>(null);
  const [progress2026, setProgress2026] = useState(0);
  const [progress2025, setProgress2025] = useState(0);

  const video2026Ref = useRef<HTMLVideoElement>(null);
  const video2025Ref = useRef<HTMLVideoElement>(null);

  /* ---------------- SCROLL EFFECT ---------------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  /* ---------------- THEME ---------------- */
  const theme = {
    bg: isDarkMode ? '#0A0A0A' : '#FAFAFA',
    cardBg: isDarkMode ? '#141414' : '#FFFFFF',
    text: isDarkMode ? '#F8FAFC' : '#0F172A',
    textSub: isDarkMode ? '#94A3B8' : '#475569',
    border: isDarkMode ? '#262626' : '#E5E7EB',
    accent: isDarkMode ? '#8B5CF6' : '#6366F1',
  };

  /* ---------------- VIDEO PROGRESS TRACKING ---------------- */
  useEffect(() => {
    const video2026 = video2026Ref.current;
    const video2025 = video2025Ref.current;

    const updateProgress2026 = () => {
      if (video2026 && video2026.duration && !isNaN(video2026.duration)) {
        const progress = (video2026.currentTime / video2026.duration) * 100;
        setProgress2026(progress);
      }
    };

    const updateProgress2025 = () => {
      if (video2025 && video2025.duration && !isNaN(video2025.duration)) {
        const progress = (video2025.currentTime / video2025.duration) * 100;
        setProgress2025(progress);
      }
    };

    if (video2026) {
      video2026.addEventListener('timeupdate', updateProgress2026);
    }
    if (video2025) {
      video2025.addEventListener('timeupdate', updateProgress2025);
    }

    return () => {
      if (video2026) {
        video2026.removeEventListener('timeupdate', updateProgress2026);
      }
      if (video2025) {
        video2025.removeEventListener('timeupdate', updateProgress2025);
      }
    };
  }, []);

  /* ---------------- EXCLUSIVE PLAYBACK ---------------- */
  const play2026 = async () => {
    if (!video2026Ref.current) return;

    try {
      // Pause other video
      if (video2025Ref.current && !video2025Ref.current.paused) {
        video2025Ref.current.pause();
        setIsPlaying2025(false);
      }

      await video2026Ref.current.play();
      setIsPlaying2026(true);
    } catch (err) {
      console.error('Play error:', err);
    }
  };

  const pause2026 = () => {
    if (video2026Ref.current && !video2026Ref.current.paused) {
      video2026Ref.current.pause();
      setIsPlaying2026(false);
    }
  };

  const play2025 = async () => {
    if (!video2025Ref.current) return;

    try {
      // Pause other video
      if (video2026Ref.current && !video2026Ref.current.paused) {
        video2026Ref.current.pause();
        setIsPlaying2026(false);
      }

      await video2025Ref.current.play();
      setIsPlaying2025(true);
    } catch (err) {
      console.error('Play error:', err);
    }
  };

  const pause2025 = () => {
    if (video2025Ref.current && !video2025Ref.current.paused) {
      video2025Ref.current.pause();
      setIsPlaying2025(false);
    }
  };

  const toggleMute2026 = () => {
    if (!video2026Ref.current) return;
    const newMuted = !isMuted2026;
    video2026Ref.current.muted = newMuted;
    setIsMuted2026(newMuted);
  };

  const toggleMute2025 = () => {
    if (!video2025Ref.current) return;
    const newMuted = !isMuted2025;
    video2025Ref.current.muted = newMuted;
    setIsMuted2025(newMuted);
  };

  const handleViewCommittee = () => {
    router.push('/committee#carousel');
  };

  /* ---------------- SEEK FUNCTIONALITY ---------------- */
  const handleSeek2026 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!video2026Ref.current || !video2026Ref.current.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    video2026Ref.current.currentTime = percentage * video2026Ref.current.duration;
  };

  const handleSeek2025 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!video2025Ref.current || !video2025Ref.current.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    video2025Ref.current.currentTime = percentage * video2025Ref.current.duration;
  };

  /* ---------------- VIDEO PLAYER COMPONENT ---------------- */
  const VideoPlayer = ({
    year,
    videoRef,
    isPlaying,
    isMuted,
    progress,
    onPlay,
    onPause,
    onMute,
    onSeek,
    openFullscreen,
  }: {
    year: '2026' | '2025';
    videoRef: React.RefObject<HTMLVideoElement>;
    isPlaying: boolean;
    isMuted: boolean;
    progress: number;
    onPlay: () => void;
    onPause: () => void;
    onMute: () => void;
    onSeek: (e: React.MouseEvent<HTMLDivElement>) => void;
    openFullscreen: () => void;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-4 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"
        style={{
          background: `linear-gradient(135deg, ${isDarkMode ? '#8B5CF6' : '#6366F1'}, ${isDarkMode ? '#EC4899' : '#EC4899'})`,
        }}
      />

      <div
        className="relative aspect-video rounded-[32px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]"
        style={{
          backgroundColor: theme.cardBg,
          border: `2px solid ${theme.border}`,
        }}
      >
        {/* Video element */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          controlsList="nodownload"
        >
          <source src={`/committee-reel-${year}.mp4`} type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

        {/* Center play button - ALWAYS VISIBLE when paused */}
        {!isPlaying && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onPlay();
            }}
            className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
          >
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border-2 border-white/40 flex items-center justify-center shadow-2xl hover:bg-white/30 transition-all duration-300">
              <Play size={36} className="text-white ml-1.5" fill="white" />
            </div>
          </motion.button>
        )}

        {/* Controls overlay - ALWAYS VISIBLE */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
          {/* Progress bar */}
          <div
            onClick={onSeek}
            className="w-full h-2 bg-white/20 rounded-full mb-4 cursor-pointer overflow-hidden backdrop-blur-sm"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
              style={{ width: `${progress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>

          {/* Control buttons */}
          <div className="flex justify-between items-center">
            <div className="flex gap-3">
              {/* Play/Pause */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  isPlaying ? onPause() : onPlay();
                }}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer"
              >
                {isPlaying ? (
                  <Pause size={18} className="text-white" fill="white" />
                ) : (
                  <Play size={18} className="text-white ml-0.5" fill="white" />
                )}
              </motion.button>

              {/* Mute/Unmute */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onMute();
                }}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer"
              >
                {isMuted ? <VolumeX size={18} className="text-white" /> : <Volume2 size={18} className="text-white" />}
              </motion.button>
            </div>

            {/* Fullscreen */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openFullscreen();
              }}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer"
            >
              <Maximize2 size={18} className="text-white" />
            </motion.button>
          </div>
        </div>

        {/* Year badge */}
        <div className="absolute top-6 left-6 px-5 py-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide z-20">
          Team {year}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <section ref={sectionRef} className="relative py-32 overflow-hidden" style={{ background: theme.bg }}>
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
          <motion.div style={{ scale, opacity }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto">
            {/* 2026 Video */}
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

              <VideoPlayer
                year="2026"
                videoRef={video2026Ref}
                isPlaying={isPlaying2026}
                isMuted={isMuted2026}
                progress={progress2026}
                onPlay={play2026}
                onPause={pause2026}
                onMute={toggleMute2026}
                onSeek={handleSeek2026}
                openFullscreen={() => setFullscreenVideo('2026')}
              />
            </div>

            {/* 2025 Video */}
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

              <VideoPlayer
                year="2025"
                videoRef={video2025Ref}
                isPlaying={isPlaying2025}
                isMuted={isMuted2025}
                progress={progress2025}
                onPlay={play2025}
                onPause={pause2025}
                onMute={toggleMute2025}
                onSeek={handleSeek2025}
                openFullscreen={() => setFullscreenVideo('2025')}
              />
            </div>
          </motion.div>

          {/* CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewCommittee}
              className="px-12 py-5 rounded-full font-bold text-lg text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-[0_20px_50px_-15px_rgba(139,92,246,0.5)] hover:shadow-[0_25px_60px_-15px_rgba(139,92,246,0.7)] transition-all duration-300"
            >
              View Full Committee
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FULLSCREEN MODAL */}
      {fullscreenVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setFullscreenVideo(null)}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenVideo(null);
            }}
          >
            <X size={24} />
          </motion.button>

          <motion.video
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={`/committee-reel-${fullscreenVideo}.mp4`}
            controls
            controlsList="nodownload"
            autoPlay
            loop
            preload="auto"
            className="w-full max-w-7xl rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
};

export default PremiumReelSection;