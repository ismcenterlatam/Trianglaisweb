import React, { useContext } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Courses from '../components/Courses';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import Seo from '../components/Seo';
import { LanguageContext } from '../contexts/LanguageContext';
import type { Page } from '../App';

interface HomeProps {
  navigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  const { t } = useContext(LanguageContext);
  return (
    <>
      <Seo 
        title={t.seo.home.title}
        description={t.seo.home.description}
        path="home"
      />
      <Hero navigate={navigate} />
      <Features />
      <About navigate={navigate} />
      <Courses />
      <HowItWorks />
      <Testimonials />
      <CtaBanner navigate={navigate} />
    </>
  );
};

export default Home;