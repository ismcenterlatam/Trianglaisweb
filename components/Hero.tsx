import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import type { Page } from '../App';
import ParallaxBackground from './ParallaxBackground';

interface HeroProps {
  navigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
  const { t } = useContext(LanguageContext);
  
  return (
    <section 
      className="relative text-white overflow-hidden"
    >
      <ParallaxBackground />
      <div className="relative container mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center z-10">
        <h1 
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-brand-light animate-fadeInUp"
          style={{ animationDelay: '0.2s' }}
        >
          {t.hero.title}
        </h1>
        <p 
          className="text-lg md:text-xl text-brand-slate mb-8 max-w-3xl mx-auto animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
          {t.hero.subtitle}
        </p>
        <div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto animate-fadeInUp"
          style={{ animationDelay: '0.6s' }}
        >
          <button 
            onClick={() => navigate('method')} 
            className="bg-brand-accent text-brand-dark font-bold px-8 py-4 rounded-md text-lg transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-glow"
          >
            {t.hero.ctaExplore}
          </button>
          <button 
            onClick={() => navigate('contact')} 
            className="bg-brand-slate/20 backdrop-blur-sm text-brand-light font-bold px-8 py-4 rounded-md text-lg hover:bg-brand-slate/30 transition-all duration-300 shadow-lg"
          >
            {t.hero.ctaTrial}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;