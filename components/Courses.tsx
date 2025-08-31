import React, { useContext, useRef } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ArrowRightIcon } from '../constants/icons';

interface CourseCardProps {
  title: string;
  level: string;
  description: string;
  cta: string;
  delay?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, level, description, cta, delay = 0 }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });
    
    return (
        <div 
            ref={ref}
            className={`bg-[#061121] p-8 rounded-lg shadow-lg border border-brand-slate/20 transition-all duration-700 ease-out transform hover:-translate-y-2 hover:border-brand-accent ${isIntersecting ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <span className="inline-block bg-brand-accent/10 text-brand-accent text-xs font-bold px-3 py-1 rounded-full mb-4">{level}</span>
            <h3 className="text-2xl font-bold text-brand-light mb-4">{title}</h3>
            <p className="text-brand-slate leading-relaxed mb-6 h-24">{description}</p>
            <button className="font-bold text-brand-accent hover:text-white transition-colors duration-300 flex items-center group">
                {cta}
                <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    );
};

const Courses: React.FC = () => {
    const { t } = useContext(LanguageContext);

    const coursesData = [
        { ...t.courses.english },
        { ...t.courses.spanish },
        { ...t.courses.french },
    ];

    return (
        <section className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-light">{t.courses.title}</h2>
                    <p className="text-lg text-brand-slate mt-4 max-w-2xl mx-auto">{t.courses.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {coursesData.map((course, index) => (
                        <CourseCard 
                            key={index} 
                            {...course} 
                            delay={index * 150} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;