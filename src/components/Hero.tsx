'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import { heroDetails } from '@/data/hero';

// Type declaration for Tally
declare global {
    interface Window {
        Tally?: {
            loadEmbeds: () => void;
        };
    }
}

const Hero: React.FC = () => {
    useEffect(() => {
        // Ensure Tally loads when component mounts
        if (typeof window !== 'undefined' && window.Tally) {
            window.Tally.loadEmbeds();
        }
    }, []);
    return (
        <motion.section
            id="hero"
            className="relative flex items-center justify-center pt-32 pb-28 px-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>


            <div className="text-center">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-3xl mx-auto">{heroDetails.heading}</h1>
                <p className="mt-4 text-lg text-foreground max-w-2xl mx-auto">{heroDetails.subheading}</p>
                
                {/* Inline Email Form */}
                <div className="mt-8 max-w-md mx-auto">
                    <iframe 
                        data-tally-src="https://tally.so/embed/3jALra?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                        loading="lazy" 
                        width="100%" 
                        height="150" 
                        frameBorder="0" 
                        marginHeight={0} 
                        marginWidth={0} 
                        title="Request Demo - VibeMonitor"
                        aria-label="Demo request form for VibeMonitor"
                        className="rounded-lg"
                    ></iframe>
                </div>
                
                {/* Scroll cue */}
                <a href="#features" className="mt-10 flex flex-col items-center text-xs text-gray-500 hover:text-gray-700 transition-colors">
                    <span className="animate-bounce text-lg">↓</span>
                    <span className="mt-1">Scroll</span>
                </a>
            </div>
        </motion.section>
    );
};

export default Hero;
