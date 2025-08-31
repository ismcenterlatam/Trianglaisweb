import React, { useContext, useRef } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { PencilSquareIcon, CalendarDaysIcon, RocketLaunchIcon } from '../constants/icons';

const HowItWorks: React.FC = () => {
    const { t } = useContext(LanguageContext);
    const ref = useRef<HTMLDivElement | null>(null);
    const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

    const steps = [
        {
            icon: <PencilSquareIcon className="h-10 w-10" />,
            ...t.howItWorks.steps[0]
        },
        {
            icon: <CalendarDaysIcon className="h-10 w-10" />,
            ...t.howItWorks.steps[1]
        },
        {
            icon: <RocketLaunchIcon className="h-10 w-10" />,
            ...t.howItWorks.steps[2]
        }
    ];

    return (
        <section ref={ref} className="py-20 bg-[#061121]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-light">{t.howItWorks.title}</h2>
                    <p className="text-lg text-brand-slate mt-4 max-w-2xl mx-auto">{t.howItWorks.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <div 
                            key={index}
                            className={`text-center p-8 transition-all duration-700 ease-out transform ${isIntersecting ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-accent/10 text-brand-accent mb-6 mx-auto">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-light mb-3">{index + 1}. {step.name}</h3>
                            <p className="text-brand-slate leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;