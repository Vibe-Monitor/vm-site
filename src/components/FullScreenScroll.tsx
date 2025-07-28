'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import '@/types/global';

interface FullScreenScrollProps {
  children: React.ReactNode[];
  sectionIds: string[];
}

const FullScreenScroll: React.FC<FullScreenScrollProps> = ({ children, sectionIds }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = useCallback((index: number) => {
    if (index >= 0 && index < children.length && !isScrolling) {
      setIsScrolling(true);
      setCurrentSection(index);
      const section = document.getElementById(sectionIds[index]);
      section?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setIsScrolling(false), 300);
    }
  }, [children.length, isScrolling, sectionIds]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection(children.length - 1);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault();
        return;
      }

      // Clear any existing timeout
      clearTimeout(scrollTimeout);
      
      // Prevent default scroll behavior
      e.preventDefault();
      
      // Set a short timeout to debounce rapid scroll events
      scrollTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
          scrollToSection(currentSection + 1);
        } else if (e.deltaY < 0) {
          scrollToSection(currentSection - 1);
        }
      }, 100);
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      window.touchStartY = touch.clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!isScrolling && window.touchStartY) {
        const touch = e.changedTouches[0];
        const deltaY = window.touchStartY - touch.clientY;
        
        if (Math.abs(deltaY) > 50) { // Minimum swipe distance
          if (deltaY > 0) {
            scrollToSection(currentSection + 1);
          } else {
            scrollToSection(currentSection - 1);
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      clearTimeout(scrollTimeout);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isScrolling, scrollToSection, children.length]);

  return (
    <div className="relative">
      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${ 
              currentSection === index
                ? 'bg-primary scale-125 shadow-lg'
                : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Sections Container */}
      <div className="snap-y snap-mandatory overflow-hidden">
        {children.map((child, index) => (
          <section
            key={index}
            id={sectionIds[index]}
            className="min-h-screen w-full snap-start flex items-center justify-start flex-col"
          >
            {child}
          </section>
        ))}
      </div>

      {/* Scroll Hint */}
      {currentSection < children.length - 1 && (
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll or use arrow keys</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-xl"
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FullScreenScroll;