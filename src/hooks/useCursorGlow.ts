
"use client";

import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

interface UseCursorGlowProps {
  elementRef: RefObject<HTMLElement>;
  glowSize?: number; 
  isEnabled?: boolean;
}

export function useCursorGlow({ elementRef, glowSize = 300, isEnabled = true }: UseCursorGlowProps) {
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (!isEnabled) {
      element.classList.remove('cursor-glow-active');
      // Optionally clean up style properties if not relying on CSS defaults
      element.style.removeProperty('--mouse-x');
      element.style.removeProperty('--mouse-y');
      element.style.removeProperty('--glow-size');
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      animationFrameId.current = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        element.style.setProperty('--mouse-x', `${x}px`);
        element.style.setProperty('--mouse-y', `${y}px`);
        // glowSize is set once below, can be dynamic if needed by moving this line up
        if (!element.classList.contains('cursor-glow-active')) {
            element.classList.add('cursor-glow-active');
        }
      });
    };

    const handleMouseLeave = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      element.classList.remove('cursor-glow-active');
    };

    // Set glow size initially
    element.style.setProperty('--glow-size', `${glowSize}px`);

    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.classList.remove('cursor-glow-active'); // Clean up on unmount
    };
  }, [elementRef, glowSize, isEnabled]);
}
