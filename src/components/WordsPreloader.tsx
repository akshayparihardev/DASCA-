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


const wordVariants = {
  initial: {
    opacity: 0,
    y: 20,              
    filter: "blur(8px)" 
  },
  enter: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,    
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,             
    filter: "blur(8px)", 
    transition: {
      duration: 0.2,    
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function WordsPreloader({ finishLoading }: { finishLoading: () => void }) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    // 1. Last Word Logic (Tamil - "டாஸ்கா")
    if (index === words.length - 1) {
      const lastTimeout = setTimeout(() => {
        if (finishLoading) finishLoading();
      }, 1000); 
      return () => clearTimeout(lastTimeout);
    }

    // 2. TIMING LOGIC
    // English (First) = 1000ms
    // Regional Languages (Middle) = 350ms each (Perfect read speed)
    const timeout = setTimeout(
      () => {
        setIndex((prev) => prev + 1);
      },
      index === 0 ? 1000 : 350 
    );

    return () => clearTimeout(timeout);
  }, [index, finishLoading]);

  // Curve Animation Logic
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 300 0 0 L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
    >
      {/* Background SVG */}
      {dimension.width > 0 && (
        <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none z-0">
          <motion.path
            variants={curve}
            initial="initial"
            exit="exit"
            fill="#141516"
            style={{ willChange: "d" }} 
          ></motion.path>
        </svg>
      )}

      {/* Text Container */}
      <div className="absolute z-50 flex items-center justify-center w-full h-full">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            variants={wordVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="text-5xl md:text-6xl font-medium text-white font-sans tracking-tight"
          >
            {words[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}