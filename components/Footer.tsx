import React from 'react';
import { Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-xl font-bold text-slate-900">Voiverse</span>
            <p className="text-sm text-slate-500 mt-2">Web3 AI 降噪情报官</p>
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
            &copy; {new Date().getFullYear()} Voiverse Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="text-xs text-slate-500 hover:text-slate-800">Privacy Policy</a>
             <a href="#" className="text-xs text-slate-500 hover:text-slate-800">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};