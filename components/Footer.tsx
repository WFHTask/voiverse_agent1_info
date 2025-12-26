import React from 'react';
import { Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-xl font-bold text-slate-900">Voiverse</span>
            <p className="text-sm text-slate-500 mt-2">{t.footer.tagline}</p>
          </div>
          
          <div className="flex space-x-8">
            <a 
              href="https://x.com/voiverse_ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-900 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="text-xs text-slate-500 hover:text-slate-800">{t.footer.privacy}</a>
             <a href="#" className="text-xs text-slate-500 hover:text-slate-800">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};