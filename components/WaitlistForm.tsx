import React, { useState } from 'react';
import { X, Mail, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl transform transition-all scale-100 border border-slate-100">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 transition-colors bg-slate-50 p-1 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <Check className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.waitlist.successTitle}</h3>
            <p className="text-slate-500">{t.waitlist.successDesc}</p>
            <button 
              onClick={onClose}
              className="mt-8 text-sm text-indigo-600 hover:text-indigo-800 font-bold"
            >
              {t.waitlist.close}
            </button>
          </div>
        ) : (
          <div className="py-2">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.waitlist.title}</h3>
              <p className="text-slate-500">
                {t.waitlist.subtitle} <span className="font-bold text-indigo-600">100</span> {t.waitlist.subtitle2}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                  {t.waitlist.emailLabel}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    className="block w-full pl-10 pr-3 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm"
                    placeholder={t.waitlist.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-indigo-600/20 text-sm font-bold text-white bg-slate-900 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-all transform hover:-translate-y-0.5"
                >
                  {t.waitlist.cta}
                </button>
              </div>
              
              <p className="text-xs text-center text-slate-400 mt-6">
                {t.waitlist.privacy}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};