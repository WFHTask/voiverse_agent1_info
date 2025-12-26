import React from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const CommunityAccess: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="community-access" className="py-24 bg-indigo-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.community.title}</h2>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            {t.community.subtitle}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
          
          {/* WeChat Group (Priority) */}
          <div className="flex-1 bg-white text-slate-900 rounded-3xl p-8 flex flex-col items-center text-center shadow-xl transform md:scale-105 border-4 border-indigo-400/30">
            <div className="bg-emerald-100 p-3 rounded-full mb-6">
              <MessageSquare className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{t.community.wechatTitle}</h3>
            <p className="text-slate-500 mb-6">{t.community.wechatDesc}</p>
            
            {/* QR Code Image */}
            <div className="w-48 h-48 bg-slate-100 rounded-xl border-2 border-slate-200 flex items-center justify-center mb-4 overflow-hidden relative group">
               <img 
                 src="./wechat-qr.jpg" 
                 alt="WeChat Group QR Code" 
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   // Fallback visual if image is missing
                   e.currentTarget.style.display = 'none';
                   const parent = e.currentTarget.parentElement;
                   if (parent) {
                     parent.innerHTML = `<div class="p-4 text-xs text-slate-400 text-center">Image missing.<br/>Please add <strong>wechat-qr.jpg</strong> to project root.</div>`;
                   }
                 }}
               />
            </div>
            
            <p className="text-xs text-slate-500 max-w-xs mx-auto leading-tight opacity-80">
              {t.community.wechatNote}
            </p>
          </div>

          {/* Telegram Channel (Secondary) */}
          <div className="flex-1 bg-indigo-800/50 backdrop-blur-sm border border-indigo-700/50 rounded-3xl p-8 flex flex-col items-center text-center justify-center hover:bg-indigo-800/70 transition-colors">
            <div className="bg-blue-500/20 p-3 rounded-full mb-6">
              <Send className="w-8 h-8 text-blue-400 ml-1" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">{t.community.telegramTitle}</h3>
            <p className="text-indigo-200 mb-8">{t.community.telegramDesc}</p>
            
            <a 
              href="https://t.me/+fGR5naIi0nI0OTI1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              {t.community.telegramBtn}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};