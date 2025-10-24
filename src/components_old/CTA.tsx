'use client';

import { ctaDetails } from "@/data/cta";
import { useEffect } from "react";
import { motion } from "framer-motion";
import '@/types/global';
import { Badge } from '@/components/Badge';

const CTA: React.FC = () => {
    useEffect(() => {
        // Ensure Tally loads when component mounts
        if (typeof window !== 'undefined' && window.Tally) {
            window.Tally.loadEmbeds();
        }
    }, []);
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="relative w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-slate-800 to-slate-900">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
<Badge 
  text="Ship fearlessly. Find root cause in under 60 seconds." 
  className="bg-blue-950/80 border-blue-800 text-yellow-400 px-8 py-3 text-base"
/>
   <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <motion.h2 
                            className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {ctaDetails.heading}
                        </motion.h2>

                        <motion.p 
                            className="mx-auto max-w-xl md:px-5 text-white/90 text-lg"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {ctaDetails.subheading}
                        </motion.p>
                        <motion.p 
                            className="mx-auto max-w-xl md:px-5 text-white/90 text-lg mt-2"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {ctaDetails.callToAction}
                        </motion.p>

                        <motion.div 
                            className="mt-8 max-w-md mx-auto bg-white rounded-lg p-6 shadow-xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <iframe 
                                data-tally-src="https://tally.so/embed/3lkzbp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                                loading="lazy" 
                                width="100%" 
                                height="150" 
                                frameBorder="0" 
                                marginHeight={0} 
                                marginWidth={0} 
                                title="Request Demo - VibeMonitor"
                                aria-label="Demo request form for VibeMonitor"
                                className="rounded-md"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA