'use client';

import { useEffect, useState } from 'react';
import { HeroOption1 } from '@/components/HeroOption1';
import { HowItWorksOption2 } from '@/components/HowItWorksOption2';
import { InteractiveProofOption3 } from '@/components/InteractiveProofOption3';
import { IntegrationsV2Option1 } from '@/components/IntegrationsV2Option1';
import { FinalCTAOption4 } from '@/components/FinalCTAOption4';
import { CleanFooter } from '@/components/CleanFooter';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

export default function Home() {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShownExitIntent, setHasShownExitIntent] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitIntent) {
        setShowExitIntent(true);
        setHasShownExitIntent(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShownExitIntent]);

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#0F1828' }}>
      {/* Main Content - Screenshot + Illustration Balanced */}
      <HeroOption1 />
      <InteractiveProofOption3 />
      <IntegrationsV2Option1 />
      <HowItWorksOption2 />
      <FinalCTAOption4 />
      <CleanFooter />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowExitIntent(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-md w-full p-8 relative"
            >
              <button
                onClick={() => setShowExitIntent(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-[#2F4257] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-[#98A3B1]" />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-[#6266FA] flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">⚡</span>
                </div>

                <h3 style={{ fontWeight: 700, color: '#E5E7EB', marginBottom: '12px', fontSize: '24px' }}>
                  Wait—One More Thing
                </h3>

                <p style={{ fontSize: '16px', color: '#98A3B1', marginBottom: '24px' }}>
                  Find root cause of your first error in 60 seconds. Start free. No card required.
                </p>

                <div className="space-y-3">
                  <button
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    style={{ height: '48px', fontSize: '16px' }}
                  >
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setShowExitIntent(false)}
                    className="w-full px-6 py-3 text-[#98A3B1] hover:text-[#E5E7EB] transition-colors text-sm"
                  >
                    Maybe later
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-[#2F4257]">
                  <p style={{ fontSize: '12px', color: '#98A3B1' }}>
                    ✓ No credit card  •  ✓ 2-minute setup  •  ✓ Cancel anytime
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
