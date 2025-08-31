import React, { useContext, useRef } from 'react';
import { UserGroupIcon, ClockIcon, ChatBubbleBottomCenterTextIcon } from '../constants/icons';
import { LanguageContext } from '../contexts/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`bg-brand-dark/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-brand-slate/20 hover:border-brand-accent/50 hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 ${isIntersecting ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-accent/10 text-brand-accent mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-brand-light mb-3">{title}</h3>
      <p className="text-brand-slate leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const { t } = useContext(LanguageContext);

  const featuresData = [
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: t.features.cards.expertTutors.title,
      description: t.features.cards.expertTutors.description
    },
    {
      icon: <ClockIcon className="h-8 w-8" />,
      title: t.features.cards.flexibleSchedules.title,
      description: t.features.cards.flexibleSchedules.description
    },
    {
      icon: <ChatBubbleBottomCenterTextIcon className="h-8 w-8" />,
      title: t.features.cards.interactiveLessons.title,
      description: t.features.cards.interactiveLessons.description
    }
  ];

  return (
    <section className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light">{t.features.title}</h2>
          <p className="text-lg text-brand-slate mt-4 max-w-2xl mx-auto">{t.features.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;