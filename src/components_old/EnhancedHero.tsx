'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { heroDetails } from '@/data/hero';
import '@/types/global';

const EnhancedHero: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        
        // Function to load Tally forms
        const loadTallyForms = () => {
            if (typeof window !== 'undefined' && window.Tally) {
                window.Tally.loadEmbeds();
            }
        };
        
        // Try to load immediately if script is already loaded
        loadTallyForms();
        
        // Also try after a short delay to ensure script is loaded
        const timeoutId = setTimeout(() => {
            loadTallyForms();
        }, 1000);
        
        // Listen for script load event
        const handleScriptLoad = () => {
            loadTallyForms();
        };
        
        // Check if script element exists and add listener
        const script = document.querySelector('script[src*="tally.so"]');
        if (script) {
            script.addEventListener('load', handleScriptLoad);
        }
        
        return () => {
            clearTimeout(timeoutId);
            if (script) {
                script.removeEventListener('load', handleScriptLoad);
            }
        };
    }, []);

    const content = (
        <>
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="text-center">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-3xl mx-auto">
                    {heroDetails.heading}
                </h1>
                <p className="mt-4 text-lg text-foreground max-w-2xl mx-auto">
                    {heroDetails.subheading}
                </p>
                
                {/* Inline Email Form */}
                <div className="mt-8 max-w-md mx-auto px-4 sm:px-0">
                    {isClient ? (
                        <iframe 
                            data-tally-src="https://tally.so/embed/3lkzbp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                            loading="eager" 
                            width="100%" 
                            height="150" 
                            frameBorder="0" 
                            marginHeight={0} 
                            marginWidth={0} 
                            title="Request Demo - VibeMonitor"
                            aria-label="Demo request form for VibeMonitor"
                            className="rounded-lg"
                        ></iframe>
                    ) : (
                        <div className="h-[150px] rounded-lg bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-500">Loading form...</span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );

    // Render static version initially, then enhance with motion
    if (!isClient) {
        return (
            <div className="relative flex items-start justify-center min-h-screen pt-12 md:items-center md:pt-0 px-6 sm:px-8 md:px-5 w-full">
                {content}
            </div>
        );
    }

    // Enhanced version with animations for client-side
    return (
        <motion.div
            className="relative flex items-start justify-center min-h-screen pt-12 md:items-center md:pt-0 px-6 sm:px-8 md:px-5 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {content}
        </motion.div>
    );
};

export default EnhancedHero;