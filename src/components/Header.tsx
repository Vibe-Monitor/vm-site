'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';

const Header: React.FC = () => {

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image 
                            src={siteDetails.siteLogo} 
                            alt="VibeMonitor Logo" 
                            width={32} 
                            height={32} 
                            className="min-w-fit w-8 h-8"
                        />
                        <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                </nav>
            </Container>

        </header>
    );
};

export default Header;
