import React, { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { CheckCircleIcon } from '../constants/icons';

const Contact: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };
  
  const canSubmit = formData.name && formData.email.includes('@') && formData.message;

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-light">{t.contact.title}</h1>
          <p className="text-lg text-brand-slate mt-4 max-w-3xl mx-auto">{t.contact.subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-brand-dark/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-brand-slate/20">
            {isSubmitted ? (
                 <div className="text-center py-10">
                    <CheckCircleIcon className="h-16 w-16 text-brand-accent mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-brand-light">{t.contact.success.title}</h2>
                    <p className="text-brand-slate mt-2">{t.contact.success.message}</p>
                 </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-light mb-2">{t.contact.form.name}</label>
                        <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-brand-dark border border-brand-slate/30 text-brand-light rounded-md p-3 focus:ring-brand-accent focus:border-brand-accent transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-light mb-2">{t.contact.form.email}</label>
                        <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-brand-dark border border-brand-slate/30 text-brand-light rounded-md p-3 focus:ring-brand-accent focus:border-brand-accent transition"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-brand-light mb-2">{t.contact.form.message}</label>
                        <textarea
                        name="message"
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-brand-dark border border-brand-slate/30 text-brand-light rounded-md p-3 focus:ring-brand-accent focus:border-brand-accent transition"
                        ></textarea>
                    </div>
                    <div>
                        <button
                        type="submit"
                        disabled={!canSubmit}
                        className="w-full bg-brand-accent text-brand-dark font-bold py-3 px-6 rounded-md text-lg hover:bg-opacity-80 transition-all duration-300 shadow-md disabled:bg-brand-slate/50 disabled:cursor-not-allowed"
                        >
                        {t.contact.form.submit}
                        </button>
                    </div>
                </form>
             )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
