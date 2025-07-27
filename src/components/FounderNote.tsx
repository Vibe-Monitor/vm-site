import React from 'react';

const FounderNote: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-gray-50 rounded-xl p-8 md:p-12 text-center">
                    <div className="mb-6">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-white">AK</span>
                        </div>
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                        &ldquo;I&apos;m Ankesh, ex-Atlassian engineer who spent too many nights debugging incidents that could have been solved in minutes with the right context. 
                        VibeMonitor is built for engineering teams who are tired of playing detective during outages.&rdquo;
                    </blockquote>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <p className="text-foreground-accent">
                            <strong>Ankesh Khemani</strong><br />
                            Founder, VibeMonitor
                        </p>
                        <a 
                            href="https://calendly.com/ankesh-khemani/meetme" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-accent transition-colors font-medium"
                        >
                            Schedule a Chat
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderNote;