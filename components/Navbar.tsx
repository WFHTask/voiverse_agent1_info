import React, { useState, useEffect } from 'react';
import { BrainCircuit, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg shadow-md shadow-indigo-600/20">
              <BrainCircuit className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Voiverse
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-indigo-600 text-sm font-medium transition-colors">{t.nav.works}</a>
            <a href="#topics" className="text-slate-600 hover:text-indigo-600 text-sm font-medium transition-colors">{t.nav.topics}</a>
            <a href="#pricing" className="text-slate-600 hover:text-indigo-600 text-sm font-medium transition-colors">{t.nav.pricing}</a>
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <Globe className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">{language === 'en' ? '中文' : 'EN'}</span>
            </button>

            <button 
              onClick={onJoinClick}
              className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-slate-600 hover:text-indigo-600 transition-colors"
            >
               <span className="text-sm font-bold">{language === 'en' ? '中文' : 'EN'}</span>
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 p-4 absolute w-full shadow-xl">
          <div className="flex flex-col space-y-4">
             <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium">{t.nav.works}</a>
             <a href="#topics" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium">{t.nav.topics}</a>
             <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 font-medium">{t.nav.pricing}</a>
             <button 
              onClick={() => { onJoinClick(); setMobileMenuOpen(false); }}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold w-full"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};