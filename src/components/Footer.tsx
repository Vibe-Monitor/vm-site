import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 text-center">
                <div className="flex flex-col items-center mb-6">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                        <Image 
                            src={siteDetails.siteLogo} 
                            alt="VibeMonitor Logo" 
                            width={32} 
                            height={32} 
                            className="min-w-fit w-8 h-8"
                        />
                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="text-foreground-accent max-w-md">
                        {footerDetails.subheading}
                    </p>
                    
                    {footerDetails.socials && (
                        <div className="mt-6 flex items-center gap-5 flex-wrap justify-center">
                            {Object.keys(footerDetails.socials).map(platformName => {
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
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-8 text-center text-foreground-accent px-6 border-t border-gray-200 pt-6">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
