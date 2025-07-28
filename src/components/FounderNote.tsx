import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa6';

const FounderNote: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-gray-50 rounded-xl p-8 md:p-12 text-center">
                    <div className="mb-6">
                        <div className="w-16 h-16 mx-auto mb-4">
                            <Image 
                                src="/images/ankesh.png"
                                alt="Ankesh Khemani, Founder of VibeMonitor"
                                width={64}
                                height={64}
                                className="rounded-full object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                        &ldquo;I&apos;m Ankesh, ex-Atlassian engineer who spent too many weekends fixing bugs that could have been caught and explained in minutes. 
                        VibeMonitor is built for small teams who want to spend time building features, not firefighting production issues.&rdquo;
                    </blockquote>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <p className="text-foreground-accent">
                            <strong>Ankesh Khemani</strong><br />
                            Founder, VibeMonitor
                        </p>
                        <div className="flex items-center gap-3">
                            <a 
                                href="https://www.linkedin.com/in/ankeshkhemani/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Connect with Ankesh on LinkedIn"
                                className="text-primary hover:text-primary-accent transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a 
                                href="https://calendly.com/ankesh-khemani/meetme" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-accent transition-colors font-medium"
                                aria-label="Schedule a chat with Ankesh Khemani, VibeMonitor founder"
                            >
                                Schedule a Chat
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderNote;