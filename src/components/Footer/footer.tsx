import Link from 'next/link';
import { siteDetails } from '@/content/site_details';

const Footer: React.FC = () => {
    const { footer } = siteDetails;

    return (
        <footer className="bg-primary py-10 border-t border-gray-700">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Logo and Company Name */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                        <span className="font-semibold text-white">{footer.companyName}</span>
                    </div>
                    {/* Navigation Links */}
                    <nav className="flex flex-wrap items-center justify-center gap-6">
                        {footer.links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-md text-text-muted hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Copyright */}
                    <div className="text-md text-text-muted">
                        {footer.copyright}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;