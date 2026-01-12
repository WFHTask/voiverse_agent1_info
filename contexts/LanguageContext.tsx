import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { translations, Language } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detect browser language and return 'zh' for Chinese, 'en' for others
const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  
  // Check navigator.languages first (array of preferred languages)
  const languages = navigator.languages || [navigator.language];
  
  // Check if any preferred language starts with 'zh' (Chinese)
  const isChinese = languages.some(lang => 
    lang.toLowerCase().startsWith('zh')
  );
  
  return isChinese ? 'zh' : 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => detectBrowserLanguage());

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};