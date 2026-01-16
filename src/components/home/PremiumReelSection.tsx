'use client';

import { useState, useRef } from 'react';
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
  const [fullscreenVideo, setFullscreenVideo] =
    useState<'2026' | '2025' | null>(null);

  const video2026Ref = useRef<HTMLVideoElement>(null);
  const video2025Ref = useRef<HTMLVideoElement>(null);

  /* ---------------- SCROLL EFFECT ---------------- */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  /* ---------------- THEME ---------------- */
  const theme = {
    bg: isDarkMode ? '#0A0A0A' : '#FAFAFA',
    text: isDarkMode ? '#F8FAFC' : '#0F172A',
    textSub: isDarkMode ? '#94A3B8' : '#475569',
  };

  /* ---------------- EXCLUSIVE PLAYBACK ---------------- */
  const play2026 = () => {
    if (!video2026Ref.current || !video2025Ref.current) return;

    video2025Ref.current.pause();
    setIsPlaying2025(false);

    video2026Ref.current.play();
    setIsPlaying2026(true);
  };

  const pause2026 = () => {
    video2026Ref.current?.pause();
    setIsPlaying2026(false);
  };

  const play2025 = () => {
    if (!video2025Ref.current || !video2026Ref.current) return;

    video2026Ref.current.pause();
    setIsPlaying2026(false);

    video2025Ref.current.play();
    setIsPlaying2025(true);
  };

  const pause2025 = () => {
    video2025Ref.current?.pause();
    setIsPlaying2025(false);
  };

  const toggleMute2026 = () => {
    if (!video2026Ref.current) return;
    video2026Ref.current.muted = !isMuted2026;
    setIsMuted2026(!isMuted2026);
  };

  const toggleMute2025 = () => {
    if (!video2025Ref.current) return;
    video2025Ref.current.muted = !isMuted2025;
    setIsMuted2025(!isMuted2025);
  };

  const handleViewCommittee = () => {
    router.push('/committee#carousel');
  };

  /* ---------------- VIDEO PLAYER ---------------- */
  const VideoPlayer = ({
    year,
    videoRef,
    isPlaying,
    isMuted,
    onPlay,
    onPause,
    onMute,
    openFullscreen,
  }: {
    year: '2026' | '2025';
    videoRef: React.RefObject<HTMLVideoElement>;
    isPlaying: boolean;
    isMuted: boolean;
    onPlay: () => void;
    onPause: () => void;
    onMute: () => void;
    openFullscreen: () => void;
  }) => (
    <div className="relative group">
      <div className="relative aspect-video rounded-[32px] overflow-hidden
        bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]
        ring-1 ring-white/10">

        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
        >
          <source src={`/committee-reel-${year}.mp4`} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Center Play */}
        {!isPlaying && (
          <button
            onClick={onPlay}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="w-28 h-28 rounded-full
              bg-white/10 backdrop-blur-xl
              border border-white/30
              flex items-center justify-center
              shadow-2xl hover:scale-110 transition">
              <Play size={40} className="text-white ml-2" fill="white" />
            </div>
          </button>
        )}

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between
          opacity-0 translate-y-4 group-hover:opacity-100
          group-hover:translate-y-0 transition-all duration-300 z-20">

          <div className="flex gap-3">
            <button onClick={isPlaying ? onPause : onPlay} className="control-btn">
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>

            <button onClick={onMute} className="control-btn">
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>

          <button onClick={openFullscreen} className="control-btn">
            <Maximize2 size={18} />
          </button>
        </div>

        {/* Badge */}
        <div className="absolute top-5 left-5 px-4 py-2 rounded-full
          bg-black/40 backdrop-blur-md border border-white/20
          text-white text-sm font-semibold z-10">
          Team {year}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="relative py-32 overflow-hidden"
        style={{ background: theme.bg }}
      >
        <div className="container mx-auto px-6">

          {/* HEADER */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black mb-6" style={{ color: theme.text }}>
              Meet The Faces Behind <br />
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                The Magic
              </span>
            </h2>
            <p className="text-xl md:text-2xl" style={{ color: theme.textSub }}>
              Every unforgettable moment is powered by passion and people
            </p>
          </div>

          {/* VIDEOS */}
          <motion.div
            style={{ scale, opacity }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto"
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-4" style={{ color: theme.text }}>
                Team 2026
              </h3>
              <p className="mb-8 max-w-md" style={{ color: theme.textSub }}>
                The current powerhouse driving DASCA forward
              </p>

              <VideoPlayer
                year="2026"
                videoRef={video2026Ref}
                isPlaying={isPlaying2026}
                isMuted={isMuted2026}
                onPlay={play2026}
                onPause={pause2026}
                onMute={toggleMute2026}
                openFullscreen={() => setFullscreenVideo('2026')}
              />
            </div>

            <div className="lg:mt-32">
              <h3 className="text-4xl md:text-5xl font-black mb-4" style={{ color: theme.text }}>
                Team 2025
              </h3>
              <p className="mb-8 max-w-md" style={{ color: theme.textSub }}>
                The legends who built the foundation
              </p>

              <VideoPlayer
                year="2025"
                videoRef={video2025Ref}
                isPlaying={isPlaying2025}
                isMuted={isMuted2025}
                onPlay={play2025}
                onPause={pause2025}
                onMute={toggleMute2025}
                openFullscreen={() => setFullscreenVideo('2025')}
              />
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-24">
            <button
              onClick={handleViewCommittee}
              className="px-12 py-5 rounded-full font-bold text-lg text-white
              bg-gradient-to-r from-violet-600 to-fuchsia-600
              hover:scale-105 transition shadow-xl">
              View Full Committee
            </button>
          </div>
        </div>
      </section>

      {/* FULLSCREEN */}
      {fullscreenVideo && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center p-6"
          onClick={() => setFullscreenVideo(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:scale-110 transition">
            <X size={32} />
          </button>

          <video
            src={`/committee-reel-${fullscreenVideo}.mp4`}
            controls
            autoPlay
            className="w-full max-w-7xl rounded-2xl"
          />
        </div>
      )}
    </>
  );
};

export default PremiumReelSection;
