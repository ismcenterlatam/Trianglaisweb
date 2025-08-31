import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import Seo from '../components/Seo';
import LegalPageLayout from '../components/LegalPageLayout';

const CookiesPolicyPage: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const pageContent = t.cookiesPage;

  return (
    <>
      <Seo
        title={t.seo.cookies.title}
        description={t.seo.cookies.description}
        path="cookies"
      />
      <LegalPageLayout
        title={pageContent.title}
        lastUpdated={pageContent.lastUpdated}
        sections={pageContent.sections}
      />
    </>
  );
};

export default CookiesPolicyPage;
