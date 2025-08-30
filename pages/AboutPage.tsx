import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
    const { t } = useContext(LanguageContext);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-light">{t.about.title}</h1>
          <p className="text-lg text-brand-accent mt-4">{t.about.tagline}</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/600/400?random=5" 
              alt="Team discussing language learning" 
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-brand-light mb-6">{t.about.subtitle}</h2>
            <p className="text-brand-slate text-lg mb-4 leading-relaxed">
              {t.about.paragraph1}
            </p>
            <p className="text-brand-slate text-lg mb-8 leading-relaxed">
              {t.about.paragraph2}
            </p>
            <a href="#" className="bg-brand-accent text-brand-dark font-bold px-8 py-3 rounded-md text-lg hover:bg-opacity-80 transition-all duration-300 shadow-md">
              {t.about.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
