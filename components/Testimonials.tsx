import React, { useContext, useRef } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { QuoteIcon, UserCircleIcon } from '../constants/icons';

const Testimonials: React.FC = () => {
    const { t } = useContext(LanguageContext);
    const ref = useRef<HTMLDivElement | null>(null);
    const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

    return (
        <section ref={ref} className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-light">{t.testimonials.title}</h2>
                    <p className="text-lg text-brand-slate mt-4 max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {t.testimonials.reviews.map((review, index) => (
                        <div
                            key={index}
                            className={`bg-brand-dark/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-brand-slate/20 transition-all duration-700 ease-out transform hover:-translate-y-2 ${isIntersecting ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <QuoteIcon className="h-8 w-8 text-brand-accent/50 mb-4" />
                            <p className="text-brand-slate leading-relaxed mb-6 italic">"{review.quote}"</p>
                            <div className="flex items-center">
                                <UserCircleIcon className="h-12 w-12 text-brand-slate" />
                                <div className="ml-4">
                                    <h4 className="font-bold text-brand-light">{review.name}</h4>
                                    <p className="text-sm text-brand-accent">{review.lang}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;