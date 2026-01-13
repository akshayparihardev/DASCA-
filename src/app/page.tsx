'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
// Path verify kar lena bhai
import WordsPreloader from '../components/WordsPreloader'; 

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          // Important: Hum function pass kar rahe hain, timer nahi laga rahe
          <WordsPreloader finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <main 
        className="flex min-h-screen flex-col items-center justify-center p-24"
        style={{
          backgroundColor: 'var(--body-bg)', 
          color: 'var(--text-secondary)'
        }}
      >
        <h1 
          className="text-4xl font-bold mb-4" 
          style={{ color: 'var(--text-primary)' }}
        >
          Welcome to DASCA
        </h1>
        <p 
          className="text-lg opacity-80" 
          style={{ color: 'var(--text-secondary)' }}
        >
          This is the main content area. Scroll down to see the Footer!
        </p>
      </main>
    </>
  );
}