import React, { useState, useContext } from 'react';
import { LanguageIcon, GlobeIcon, ChevronDownIcon } from '../constants/icons';
import { LanguageContext } from '../contexts/LanguageContext';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useContext(LanguageContext);

  const navLinks: { name: keyof typeof t.nav; page: Page }[] = [
    { name: 'home', page: 'home' },
    { name: 'about', page: 'about' },
    { name: 'method', page: 'method' },
    { name: 'contact', page: 'contact' },
  ];
  
  const languages = [
      { code: 'es', label: 'Español (ES)' },
      { code: 'en', label: 'English (EN)' },
      { code: 'fr', label: 'Français (FR)' },
  ];

  const handleLangChange = (langCode: 'es' | 'en' | 'fr') => {
    setLanguage(langCode);
    setIsLangMenuOpen(false);
  };

  return (
    <header className="bg-brand-dark/80 backdrop-blur-md sticky top-0 z-50 border-b border-brand-slate/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a onClick={() => navigate('home')} className="flex items-center space-x-2 text-2xl font-bold text-brand-light cursor-pointer">
            <LanguageIcon className="h-8 w-8 text-brand-accent" />
            <span>TRIANGLAIS</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                onClick={() => navigate(link.page)}
                className={`font-medium cursor-pointer transition-colors duration-300 ${
                  currentPage === link.page ? 'text-brand-accent' : 'text-brand-light hover:text-brand-accent'
                }`}
              >
                {t.nav[link.name]}
              </a>
            ))}
            {/* Language Selector */}
            <div className="relative">
              <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center text-brand-light hover:text-brand-accent transition-colors duration-300">
                <GlobeIcon className="h-5 w-5 mr-1" />
                <span>{language.toUpperCase()}</span>
                <ChevronDownIcon className={`h-4 w-4 ml-1 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLangMenuOpen && (
                 <div className="absolute right-0 mt-2 py-2 w-36 bg-[#122849] rounded-md shadow-xl z-20">
                    {languages.map(lang => (
                         <a
                            key={lang.code}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleLangChange(lang.code as 'es' | 'en' | 'fr');
                            }}
                            className="block px-4 py-2 text-sm text-brand-light hover:bg-brand-dark hover:text-brand-accent"
                         >
                            {lang.label}
                         </a>
                    ))}
                 </div>
              )}
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-light hover:text-brand-accent focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                 <a
                 key={link.name}
                 onClick={() => {
                    navigate(link.page);
                    setIsMenuOpen(false);
                 }}
                 className={`font-medium cursor-pointer transition-colors duration-300 py-2 text-center rounded-md ${
                   currentPage === link.page ? 'text-brand-accent bg-brand-slate/10' : 'text-brand-light hover:text-brand-accent hover:bg-brand-slate/10'
                 }`}
               >
                 {t.nav[link.name]}
               </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;