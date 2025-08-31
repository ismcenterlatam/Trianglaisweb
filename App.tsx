import React, { useState, useCallback, useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Method from './pages/Method';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';
import { LanguageProvider } from './contexts/LanguageContext';

export type Page = 
  'home' | 'about' | 'method' | 'contact' |
  'privacy' | 'terms' | 'cookies' |
  'error400' | 'error401' | 'error402' | 'error403' | 'error404' | 'error405' |
  'error406' | 'error407' | 'error408' | 'error409' | 'error410' | 'error411' |
  'error412' | 'error413' | 'error414' | 'error415' | 'error416' | 'error417' |
  'error422' | 'error423' | 'error424' |
  'error500';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={navigate} />;
      case 'about': return <AboutPage navigate={navigate} />;
      case 'method': return <Method />;
      case 'contact': return <Contact />;
      case 'privacy': return <PrivacyPolicyPage />;
      case 'terms': return <TermsOfServicePage />;
      case 'cookies': return <CookiesPolicyPage />;
      case 'error400': return <ErrorPage statusCode={400} navigate={navigate} />;
      case 'error401': return <ErrorPage statusCode={401} navigate={navigate} />;
      case 'error402': return <ErrorPage statusCode={402} navigate={navigate} />;
      case 'error403': return <ErrorPage statusCode={403} navigate={navigate} />;
      case 'error405': return <ErrorPage statusCode={405} navigate={navigate} />;
      case 'error406': return <ErrorPage statusCode={406} navigate={navigate} />;
      case 'error407': return <ErrorPage statusCode={407} navigate={navigate} />;
      case 'error408': return <ErrorPage statusCode={408} navigate={navigate} />;
      case 'error409': return <ErrorPage statusCode={409} navigate={navigate} />;
      case 'error410': return <ErrorPage statusCode={410} navigate={navigate} />;
      case 'error411': return <ErrorPage statusCode={411} navigate={navigate} />;
      case 'error412': return <ErrorPage statusCode={412} navigate={navigate} />;
      case 'error413': return <ErrorPage statusCode={413} navigate={navigate} />;
      case 'error414': return <ErrorPage statusCode={414} navigate={navigate} />;
      case 'error415': return <ErrorPage statusCode={415} navigate={navigate} />;
      case 'error416': return <ErrorPage statusCode={416} navigate={navigate} />;
      case 'error417': return <ErrorPage statusCode={417} navigate={navigate} />;
      case 'error422': return <ErrorPage statusCode={422} navigate={navigate} />;
      case 'error423': return <ErrorPage statusCode={423} navigate={navigate} />;
      case 'error424': return <ErrorPage statusCode={424} navigate={navigate} />;
      case 'error500': return <ErrorPage statusCode={500} navigate={navigate} />;
      default: return <ErrorPage statusCode={404} navigate={navigate} />;
    }
  };

  const isErrorPage = currentPage.startsWith('error');

  return (
    <div className="min-h-screen bg-brand-dark text-brand-slate font-sans flex flex-col">
      {!isErrorPage && <Header currentPage={currentPage} navigate={navigate} />}
      <main className="flex-grow">
        {renderPage()}
      </main>
      {!isErrorPage && <Footer navigate={navigate} />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};


export default App;