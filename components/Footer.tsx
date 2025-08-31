import React, { useContext } from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from '../constants/icons';
import { LanguageContext } from '../contexts/LanguageContext';
import type { Page } from '../App';


interface FooterProps {
  navigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const { t } = useContext(LanguageContext);

  return (
    <footer id="contact" className="bg-[#061121] text-brand-slate">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <button onClick={() => navigate('home')} className="inline-block mb-4">
               <img src="assets/Logo1.png" alt="TRIANGLAIS Logo" className="h-12 w-auto" />
            </button>
            <p className="text-brand-slate">{t.footer.tagline}</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-brand-slate hover:text-brand-accent"><FacebookIcon className="h-6 w-6" /></a>
              <a href="#" className="text-brand-slate hover:text-brand-accent"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" className="text-brand-slate hover:text-brand-accent"><InstagramIcon className="h-6 w-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">{t.footer.quickLinks.title}</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('about')} className="hover:text-brand-accent">{t.footer.quickLinks.about}</button></li>
              <li><button onClick={() => navigate('method')} className="hover:text-brand-accent">{t.footer.quickLinks.method}</button></li>
              <li><button onClick={() => navigate('contact')} className="hover:text-brand-accent">{t.footer.quickLinks.contact}</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">{t.footer.legal.title}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-brand-accent cursor-pointer">{t.footer.legal.privacy}</a></li>
              <li><a href="#" className="hover:text-brand-accent cursor-pointer">{t.footer.legal.terms}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">{t.footer.contact.title}</h4>
            <ul className="space-y-2 text-brand-slate">
              <li>{t.footer.contact.email}: contact@trianglais.com</li>
              <li>{t.footer.contact.phone}: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-slate/20 mt-10 pt-6 text-center text-brand-slate/80 text-sm">
          &copy; {new Date().getFullYear()} {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;