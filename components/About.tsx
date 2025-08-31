import React, { useContext, useRef } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import type { Page } from '../App';
import { ArrowRightIcon } from '../constants/icons';

interface AboutProps {
  navigate: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ navigate }) => {
  const { t } = useContext(LanguageContext);
  const ref = useRef<HTMLElement | null>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section ref={ref} id="about-home" className="py-20 bg-[#061121]">
      <div className="container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-6">{t.about.tagline}</h2>
            <p className="text-lg text-brand-slate mb-8 leading-relaxed">
              {t.about.paragraph1}
            </p>
            <button 
              onClick={() => navigate('about')} 
              className="font-bold text-brand-accent hover:text-white transition-colors duration-300 flex items-center group text-lg"
            >
              <span>{t.homeAboutCta}</span>
              <ArrowRightIcon className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="assets/team-photo.svg" 
              alt={t.about.title}
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
