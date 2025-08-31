import React from 'react';

interface Section {
  title: string;
  content: string;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, lastUpdated, sections }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-brand-dark/50 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg border border-brand-slate/20">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-light">{title}</h1>
            <p className="text-sm text-brand-slate mt-2">{lastUpdated}</p>
          </div>
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold text-brand-accent mb-4">{section.title}</h2>
                <p className="text-brand-slate leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalPageLayout;
