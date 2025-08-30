import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useContext(LanguageContext);
  
  return (
    <section 
      className="relative text-white"
    >
      <div className="absolute inset-0 bg-brand-dark"></div>
      <div className="relative container mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-brand-light">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-brand-slate mb-8 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <a href="#courses" className="bg-brand-accent text-brand-dark font-bold px-8 py-4 rounded-md text-lg hover:bg-opacity-80 transition-all duration-300 shadow-lg transform hover:scale-105">
            {t.hero.ctaExplore}
          </a>
          <a href="#" className="bg-brand-slate/20 backdrop-blur-sm text-brand-light font-bold px-8 py-4 rounded-md text-lg hover:bg-brand-slate/30 transition-all duration-300 shadow-lg">
            {t.hero.ctaTrial}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;