import React, { useState, useEffect, useContext } from 'react';
import Seo from '../components/Seo';
import { LanguageContext } from '../contexts/LanguageContext';
import { 
  ExclamationTriangleIcon, 
  ShieldExclamationIcon, 
  ServerIcon,
  ClockIcon,
  LinkIcon,
  ScaleIcon,
  DocumentIcon,
  LockClosedIcon,
} from '../constants/icons';
import type { Page } from '../App';

type StatusCode = 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 422 | 423 | 424 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 510;

interface ErrorPageProps {
  statusCode: StatusCode;
  navigate: (page: Page) => void;
}

const iconMap: { [key in StatusCode]?: React.FC<{className?: string}> } = {
  401: ShieldExclamationIcon,
  403: ShieldExclamationIcon,
  407: ShieldExclamationIcon,
  408: ClockIcon,
  410: LinkIcon,
  413: ScaleIcon,
  415: DocumentIcon,
  423: LockClosedIcon,
  500: ServerIcon,
  501: ServerIcon,
  502: ServerIcon,
  503: ServerIcon,
  504: ClockIcon,
  505: ServerIcon,
  506: ServerIcon,
  507: ServerIcon,
  510: ServerIcon,
};


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
    const errorKey = `error${statusCode}` as keyof typeof t.errors;
    const seoKey = `error${statusCode}` as keyof typeof t.seo;

    // Default to a generic error if the specific one isn't found, though it should be.
    // FIX: Cast content to the correct object type.
    // TypeScript infers a union type for t.errors properties, but we know error keys point to objects, not strings.
    const content = (t.errors[errorKey] || t.errors['error404']) as { title: string; message: string; };
    const seo = t.seo[seoKey] || t.seo.error404;
    
    // Determine the icon
    const Icon = iconMap[statusCode] || ExclamationTriangleIcon;

    return {
      content,
      seo,
      path: errorKey,
      Icon
    };
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
              {t.errors.buttonText}
            </button>
            <p className="text-brand-slate mt-8">
              {t.errors.redirectText} <span className="font-bold text-brand-light">{countdown}</span>s...
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;