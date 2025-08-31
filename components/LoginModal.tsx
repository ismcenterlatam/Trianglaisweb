import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { SpainFlagIcon, FranceFlagIcon, USFlagIcon, XMarkIcon } from '../constants/icons';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const campusOptions = [
    {
      name: t.loginModal.spanish,
      flag: <SpainFlagIcon className="w-24 h-16 rounded-md object-cover shadow-lg" />,
      url: 'https://campus.trianglais.com/login/index.php',
      delay: '100ms'
    },
    {
      name: t.loginModal.english,
      flag: <USFlagIcon className="w-24 h-16 rounded-md object-cover shadow-lg" />,
      url: 'https://school.trianglais.com/login/index.php',
      delay: '200ms'
    },
    {
      name: t.loginModal.french,
      flag: <FranceFlagIcon className="w-24 h-16 rounded-md object-cover shadow-lg" />,
      url: 'https://ecole.trianglais.com/login/index.php',
      delay: '300ms'
    }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 animate-fadeInUp"
      style={{ animationDuration: '0.5s' }}
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-br from-[#0A192F] to-[#061121] p-8 rounded-xl shadow-2xl border border-brand-slate/30 w-full max-w-2xl mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-slate hover:text-brand-light transition-colors z-10"
          aria-label="Cerrar modal"
        >
          <XMarkIcon className="h-7 w-7" />
        </button>
        <h2 id="login-modal-title" className="text-3xl font-bold text-brand-light text-center mb-8">
          {t.loginModal.title}
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {campusOptions.map(option => (
            <a
              key={option.name}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 w-full md:w-1/3 h-48 bg-brand-dark/50 rounded-lg border-2 border-brand-slate/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:border-brand-accent hover:shadow-glow animate-fadeInUp"
              style={{ animationDelay: option.delay }}
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">{option.flag}</div>
              <span className="text-xl font-semibold text-brand-light transition-colors duration-300 group-hover:text-brand-accent">
                {option.name}
              </span>
            </a>
          ))}
        </div>
        <div className="text-center mt-8 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
          <a
            href="https://dashboard.trianglais.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-slate/60 hover:text-brand-light font-medium transition-colors duration-300"
          >
            {t.loginModal.dashboard}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;