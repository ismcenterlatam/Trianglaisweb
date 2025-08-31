import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import Seo from '../components/Seo';
import LegalPageLayout from '../components/LegalPageLayout';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const pageContent = t.privacyPage;

  return (
    <>
      <Seo
        title={t.seo.privacy.title}
        description={t.seo.privacy.description}
        path="privacy"
      />
      <LegalPageLayout
        title={pageContent.title}
        lastUpdated={pageContent.lastUpdated}
        sections={pageContent.sections}
      />
    </>
  );
};

export default PrivacyPolicyPage;
