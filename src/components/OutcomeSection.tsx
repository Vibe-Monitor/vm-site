import React from 'react';

const OutcomeSection: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
                    Observability that builds itself
                </h2>
                <p className="text-lg md:text-xl text-foreground-accent max-w-3xl mx-auto leading-relaxed">
                    Your codebase gets complete observability coverage without manual setup. 
                    Dashboards, alerts, and service graphs appear automatically as you ship code. 
                    When something breaks, you instantly get the exact change that caused it—and how to fix it.
                </p>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Auto</div>
                        <div className="text-foreground-accent">Instrumentation & Setup</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Complete</div>
                        <div className="text-foreground-accent">Coverage</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Instant</div>
                        <div className="text-foreground-accent">Error Resolution</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OutcomeSection;