'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WordsPreloader from '@/components/WordsPreloader'; // Adjust path if needed

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset loading state on mount (which happens on every route change in template.tsx)
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds optimal duration (Point 3 & 4)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <WordsPreloader />}
      </AnimatePresence>
      {children}
    </>
  );
}