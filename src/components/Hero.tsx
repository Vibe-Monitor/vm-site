'use client';

import React, { useEffect } from 'react';

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
        const loadTally = () => {
            const script = document.createElement('script');
            script.src = 'https://tally.so/widgets/embed.js';
            script.async = true;
            script.onload = () => {
                if (typeof window !== 'undefined' && window.Tally) {
                    window.Tally.loadEmbeds();
                }
            };
            document.head.appendChild(script);
        };
        
        if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
            loadTally();
        } else if (typeof window !== 'undefined' && window.Tally) {
            window.Tally.loadEmbeds();
        }
    }, []);
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-20 md:pt-32 px-5"
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
                        title="Get Early Access to VibeMonitor"
                        aria-label="Email signup form for VibeMonitor early access"
                        className="rounded-lg"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Hero;
