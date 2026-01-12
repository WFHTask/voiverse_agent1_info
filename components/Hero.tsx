import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-32 md:pt-64 md:pb-64 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white min-h-screen flex items-center">
      {/* Light Background Gradient */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-slate-50 to-white opacity-80 pointer-events-none"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-[80px] mix-blend-multiply animate-float"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-200/40 rounded-full blur-[80px] mix-blend-multiply animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-12 md:mb-16 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
          </span>
          {t.hero.badge}
        </div>
        
        {/* Unified Title for All Devices */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 md:mb-12 leading-tight max-w-3xl mx-auto">
          {t.hero.title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 font-medium mb-12 md:mb-16">
          {t.hero.subtitle}
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <button 
            onClick={onCtaClick}
            className="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-600/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:ring-offset-white"
          >
            <Sparkles className="w-5 h-5 mr-2 text-indigo-300 group-hover:text-white" />
            {t.hero.cta}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};