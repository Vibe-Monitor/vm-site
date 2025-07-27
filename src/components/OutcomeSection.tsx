import React from 'react';

const OutcomeSection: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
                    Ship fearlessly — cut MTTR by 80%
                </h2>
                <p className="text-lg md:text-xl text-foreground-accent max-w-3xl mx-auto leading-relaxed">
                    Instead of spending hours manually correlating logs, traces, and metrics during incidents, 
                    VibeMonitor&apos;s AI instantly identifies root causes and suggests specific fixes. 
                    Your team can focus on building features, not firefighting.
                </p>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">80%</div>
                        <div className="text-foreground-accent">Faster MTTR</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3x</div>
                        <div className="text-foreground-accent">Less Alert Noise</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-foreground-accent">AI Monitoring</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OutcomeSection;