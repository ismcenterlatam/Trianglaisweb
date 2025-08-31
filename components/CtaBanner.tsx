import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import type { Page } from '../App';

interface CtaBannerProps {
  navigate: (page: Page) => void;
}

const CtaBanner: React.FC<CtaBannerProps> = ({ navigate }) => {
  const { t } = useContext(LanguageContext);

  return (
    <section className="bg-[#061121] py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {t.ctaBanner.title}
        </h2>
        <p className="text-lg text-brand-slate max-w-2xl mx-auto mb-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          {t.ctaBanner.subtitle}
        </p>
        <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <button 
                onClick={() => navigate('contact')} 
                className="bg-brand-accent text-brand-dark font-bold px-10 py-4 rounded-md text-xl transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-glow"
            >
                {t.ctaBanner.button}
            </button>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;