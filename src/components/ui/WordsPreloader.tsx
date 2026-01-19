'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  "DASCA",
  "Innovation",
  "Collaboration",
  "Integrity",
  "Networking",
  "DASCA"
];

// Animation for words - smooth opacity + Y movement
const opacity = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.14 } },
  exit: { opacity: 0, transition: { duration: 0.14 } }
};

const slideUp = {
  initial: { y: 0 },
  exit: {
    y: "-100vh",
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1] as const,
      delay: 0.2
    }
  }
};

export default function WordsPreloader({ finishLoading }: { finishLoading?: () => void }) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    // Last word - trigger finish after delay
    if (index === words.length - 1) {
      const timeout = setTimeout(() => {
        finishLoading?.();
      }, 200);
      return () => clearTimeout(timeout);
    }

    // Cycle through words
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, index === 0 ? 1000 : 350);

    return () => clearTimeout(timeout);
  }, [index, finishLoading]);

  // SVG curve path
  // Initial: Flat bottom (or slightly curved down)
  // Target: Strongly curved down as it moves up (lag effect)
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;

  // Revised target: Retain the downward curve to simulate "drag" as it goes up
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const, delay: 0.3 }
    }
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: '#141516' }}
    >
      {/* SVG Curve */}
      {dimension.width > 0 && (
        <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
          <motion.path
            variants={curve}
            initial="initial"
            exit="exit"
            fill="#141516"
          />
        </svg>
      )}

      {/* Words Container */}
      <div className="absolute z-10 flex items-center gap-2">
        <span className="text-white text-xl md:text-2xl"></span>
        <AnimatePresence mode="wait">
          <motion.p
            key={words[index]}
            variants={opacity}
            initial="initial"
            animate="enter"
            exit="exit"
            className="text-white text-4xl md:text-5xl lg:text-6xl font-light"
          >
            {words[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}