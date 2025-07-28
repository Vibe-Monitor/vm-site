'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const Header: React.FC = () => {

    return (
        <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70 shadow-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/" className="flex items-center gap-2" aria-label="VibeMonitor Home">
                        <Image src="/images/vibemonitor-logo-optimized.png" alt="VibeMonitor" width={24} height={24} className="h-6 w-6 object-contain" />
                        <span className="hidden font-semibold md:inline text-foreground">VibeMonitor</span>
                    </Link>
                </motion.div>


                <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="#cta"
                        className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-900 transition-colors"
                    >
                        Request Demo
                    </Link>
                </motion.div>
            </div>

        </header>
    );
};

export default Header;
