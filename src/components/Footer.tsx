import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-8">
            <div className="max-w-7xl w-full mx-auto px-6 text-center">
                <div className="flex flex-col items-center space-y-3">
                    <Link href="/" className="flex items-center gap-2">
                        <Image 
                            src={siteDetails.siteLogo} 
                            alt="VibeMonitor Logo" 
                            width={24} 
                            height={24} 
                            className="min-w-fit w-6 h-6"
                        />
                        <h3 className="manrope text-lg font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    
                    <p className="text-foreground-accent max-w-md text-sm">
                        {footerDetails.subheading}
                    </p>
                    
                    <div className="flex items-center gap-4">
                        {footerDetails.socials && Object.keys(footerDetails.socials).map(platformName => {
                            if (platformName && footerDetails.socials[platformName]) {
                                return (
                                    <Link
                                        href={footerDetails.socials[platformName]}
                                        key={platformName}
                                        aria-label={platformName}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary transition-colors"
                                    >
                                        {getPlatformIconByName(platformName)}
                                    </Link>
                                )
                            }
                        })}
                        <span className="text-foreground-accent text-sm">
                            &copy; {new Date().getFullYear()} {siteDetails.siteName}
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
