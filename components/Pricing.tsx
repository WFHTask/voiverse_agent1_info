import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PricingProps {
  onPlanClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onPlanClick }) => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-voi-bg border-t border-slate-200" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.pricing.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Explorer Plan */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-900">{t.pricing.explorer.name}</h3>
              <p className="text-slate-500 mt-2 text-sm">{t.pricing.explorer.desc}</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$9.9</span>
              <span className="text-slate-400">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {t.pricing.explorer.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={onPlanClick}
              className="w-full py-3 px-4 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-50 transition-colors"
            >
              {t.pricing.explorer.cta}
            </button>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
               <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{t.pricing.pro.badge}</span>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">{t.pricing.pro.name}</h3>
              <p className="text-slate-400 mt-2 text-sm">{t.pricing.pro.desc}</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$29.9</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {t.pricing.pro.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={onPlanClick}
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/20"
            >
              {t.pricing.pro.cta}
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-900">{t.pricing.whale.name}</h3>
              <p className="text-slate-500 mt-2 text-sm">{t.pricing.whale.desc}</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">Custom</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {t.pricing.whale.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={onPlanClick}
              className="w-full py-3 px-4 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:border-slate-300 hover:text-slate-900 transition-colors"
            >
              {t.pricing.whale.cta}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};