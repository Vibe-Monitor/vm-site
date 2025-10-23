import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-12">
            <div className="max-w-7xl w-full mx-auto px-6">
                <div className="flex flex-col items-center space-y-6">
                    <Link href="/" className="flex items-center gap-2" aria-label="VibeMonitor Home">
                        <Image 
                            src={siteDetails.siteLogo} 
                            alt="VibeMonitor - AI Assisted Observability Platform" 
                            width={24} 
                            height={24} 
                            className="min-w-fit h-6 object-contain"
                        />
                        <h3 className="manrope text-lg font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    
                    <p className="text-foreground-accent max-w-md text-sm text-center">
                        {footerDetails.subheading}
                    </p>

                    {/* Copyright */}
                    <div className="pt-4 border-t border-gray-200 w-full text-center">
                        <span className="text-foreground-accent text-sm">
                            &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
