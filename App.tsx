import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Method from './pages/Method';
import Contact from './pages/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

export type Page = 'home' | 'about' | 'method' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutPage />;
      case 'method':
        return <Method />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-dark text-brand-slate font-sans flex flex-col">
        <Header currentPage={currentPage} navigate={navigate} />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer navigate={navigate} />
      </div>
    </LanguageProvider>
  );
};

export default App;