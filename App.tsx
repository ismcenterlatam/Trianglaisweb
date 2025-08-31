import React, { useState, useCallback, useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Method from './pages/Method';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import { LanguageProvider } from './contexts/LanguageContext';

export type Page = 'home' | 'about' | 'method' | 'contact' | 'error403' | 'error500';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home navigate={navigate} />;
      case 'about':
        return <AboutPage navigate={navigate} />;
      case 'method':
        return <Method />;
      case 'contact':
        return <Contact />;
      case 'error403':
        return <ErrorPage statusCode={403} navigate={navigate} />;
      case 'error500':
        return <ErrorPage statusCode={500} navigate={navigate} />;
      default:
        return <ErrorPage statusCode={404} navigate={navigate} />;
    }
  };

  const isErrorPage = !['home', 'about', 'method', 'contact'].includes(currentPage);

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