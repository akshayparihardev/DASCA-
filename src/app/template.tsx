'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WordsPreloader from '@/components/ui/WordsPreloader'; // Adjust path if needed

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset loading state on mount
    setIsLoading(true);
  }, []);

  const finishLoading = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <WordsPreloader finishLoading={finishLoading} />}
      </AnimatePresence>
      {children}
    </>
  );
}