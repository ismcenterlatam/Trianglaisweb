import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { LanguageContext } from '../contexts/LanguageContext';
import { translations } from '../lib/translations';

interface SeoProps {
  title: string;
  description: string;
  path: string; // e.g., 'home', 'about'
}

const Seo: React.FC<SeoProps> = ({ title, description, path }) => {
  const { language } = useContext(LanguageContext);
  const siteUrl = "https://trianglais.com";
  
  type PathKey = keyof typeof translations.es.paths;

  const getPathForLang = (lang: 'es' | 'en' | 'fr', pageKey: PathKey) => {
    const pathSegment = translations[lang].paths[pageKey];
    if (pathSegment === '') {
      return ''; // Root path for Spanish homepage
    }
    return `/${pathSegment}`;
  }

  const currentPath = getPathForLang(language, path as PathKey);
  const canonicalUrl = `${siteUrl}${currentPath}`;
  
  useEffect(() => {
    document.title = title;
  }, [title]);

  // Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "TRIANGLAIS",
        "url": siteUrl,
        "sameAs": [
          // Add social media links here when available
        ]
      },
      {
        "@type": "WebSite",
        "name": "TRIANGLAIS",
        "url": siteUrl,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${siteUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <HeadManager>
        <>
            {/* General SEO */}
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            
            {/* Hreflang for multi-language SEO */}
            <link rel="alternate" hrefLang="es" href={`${siteUrl}${getPathForLang('es', path as PathKey)}`} />
            <link rel="alternate" hrefLang="en" href={`${siteUrl}${getPathForLang('en', path as PathKey)}`} />
            <link rel="alternate" hrefLang="fr" href={`${siteUrl}${getPathForLang('fr', path as PathKey)}`} />
            <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${getPathForLang('es', path as PathKey)}`} />

            {/* Open Graph (for Facebook, LinkedIn, etc.) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="TRIANGLAIS" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content={language} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </>
    </HeadManager>
  );
};


// This component uses a React Portal to render children into the document.head.
// This is the correct way to manage head tags declaratively in React without extra libraries.
// React will automatically handle adding the tags on mount and removing them on unmount.
const HeadManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // We need to check if document.head exists, as it might not during SSR,
    // although for this client-only app, it will always be there.
    if (typeof document === 'undefined') {
        return null;
    }
    return ReactDOM.createPortal(children, document.head);
}

export default Seo;