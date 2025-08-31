import React, { useState, useEffect, useContext } from 'react';
import Seo from '../components/Seo';
import { LanguageContext } from '../contexts/LanguageContext';
import { ExclamationTriangleIcon, ShieldExclamationIcon, ServerIcon } from '../constants/icons';
import type { Page } from '../App';

interface ErrorPageProps {
  statusCode: 404 | 403 | 500;
  navigate: (page: Page) => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ statusCode, navigate }) => {
  const { t } = useContext(LanguageContext);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    const timeout = setTimeout(() => {
      navigate('home');
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  const getErrorDetails = () => {
    switch (statusCode) {
      case 403:
        return {
          content: t.error403,
          seo: t.seo.error403,
          path: 'error403' as const,
          Icon: ShieldExclamationIcon,
        };
      case 500:
        return {
          content: t.error500,
          seo: t.seo.error500,
          path: 'error500' as const,
          Icon: ServerIcon,
        };
      case 404:
      default:
        return {
          content: t.notFound,
          seo: t.seo.notFound,
          path: 'notFound' as const,
          Icon: ExclamationTriangleIcon,
        };
    }
  };

  const { content, seo, path, Icon } = getErrorDetails();

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path={path}
      />
      <section className="flex items-center justify-center min-h-screen bg-brand-dark py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-4">
                <Icon className="h-16 w-16 text-brand-accent mx-auto" />
            </div>
            <h1 className="text-8xl font-extrabold text-brand-accent leading-none">
              {statusCode}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-light mt-4 mb-4">
              {content.title}
            </h2>
            <p className="text-lg text-brand-slate mb-8">
              {content.message}
            </p>
            <button
              onClick={() => navigate('home')}
              className="bg-brand-accent text-brand-dark font-bold px-8 py-3 rounded-md text-lg transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-glow"
            >
              {content.buttonText}
            </button>
            <p className="text-brand-slate mt-8">
              {content.redirectText} <span className="font-bold text-brand-light">{countdown}</span>s...
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;