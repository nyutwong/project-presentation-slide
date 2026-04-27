import { useState, useEffect, useCallback } from 'react';

export interface PresentationState {
  currentIndex: number;
  total: number;
  direction: 1 | -1;
  goNext: () => void;
  goPrev: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
}

export function usePresentation(total: number): PresentationState {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goNext = useCallback(() => {
    if (currentIndex < total - 1) {
      setDirection(1);
      setCurrentIndex(i => i + 1);
    }
  }, [currentIndex, total]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(i => i - 1);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  return {
    currentIndex,
    total,
    direction,
    goNext,
    goPrev,
    canGoNext: currentIndex < total - 1,
    canGoPrev: currentIndex > 0,
  };
}
