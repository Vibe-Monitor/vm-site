'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {

    return (
        <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70 shadow-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
                <Link href="/" className="flex items-center gap-2" aria-label="VibeMonitor Home">
                    <Image src="/images/vibemonitor-logo-optimized.png" alt="VibeMonitor" width={24} height={24} className="h-6 w-6 object-contain" />
                    <span className="hidden font-semibold md:inline text-foreground">VibeMonitor</span>
                </Link>

                <nav className="hidden items-center gap-8 text-sm md:flex">
                    <Link href="#features" className="hover:text-teal-600 transition-colors">Features</Link>
                    <Link href="#founder" className="hover:text-teal-600 transition-colors">About</Link>
                </nav>

                <Link
                    href="#cta"
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-900 transition-colors"
                >
                    Request Demo
                </Link>
            </div>

        </header>
    );
};

export default Header;
