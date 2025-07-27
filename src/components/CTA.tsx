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
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">{ctaDetails.heading}</h2>

                        <p className="mx-auto max-w-xl md:px-5">{ctaDetails.subheading}</p>

                        <div className="mt-6 max-w-md mx-auto">
                            <iframe 
                                data-tally-src="https://tally.so/embed/3jALra?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                                loading="lazy" 
                                width="100%" 
                                height="198" 
                                frameBorder="0" 
                                marginHeight={0} 
                                marginWidth={0} 
                                title="🚀 Get Early Access to Vibe Monitor"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA