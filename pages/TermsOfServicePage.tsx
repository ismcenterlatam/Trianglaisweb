import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import Seo from '../components/Seo';
import LegalPageLayout from '../components/LegalPageLayout';

const TermsOfServicePage: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const pageContent = t.termsPage;

  return (
    <>
      <Seo
        title={t.seo.terms.title}
        description={t.seo.terms.description}
        path="terms"
      />
      <LegalPageLayout
        title={pageContent.title}
        lastUpdated={pageContent.lastUpdated}
        sections={pageContent.sections}
      />
    </>
  );
};

export default TermsOfServicePage;
