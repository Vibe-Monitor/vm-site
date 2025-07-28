'use client';

import { ctaDetails } from "@/data/cta"
import { useEffect } from "react";

// Type declaration for Tally
declare global {
    interface Window {
        Tally?: {
            loadEmbeds: () => void;
        };
    }
}

const CTA: React.FC = () => {
    useEffect(() => {
        // Ensure Tally loads when component mounts
        if (typeof window !== 'undefined' && window.Tally) {
            window.Tally.loadEmbeds();
        }
    }, []);
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-slate-800 to-slate-900">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">{ctaDetails.heading}</h2>

                        <p className="mx-auto max-w-xl md:px-5 text-white/90 text-lg">{ctaDetails.subheading}</p>
                        <p className="mx-auto max-w-xl md:px-5 text-white/90 text-lg mt-2">{ctaDetails.callToAction}</p>

                        <div className="mt-8 max-w-md mx-auto bg-white rounded-lg p-6 shadow-xl">
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
                                className="rounded-md"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA