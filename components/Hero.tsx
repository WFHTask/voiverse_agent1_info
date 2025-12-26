import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const topics = [
    "区块链技术", "加密货币市场", "DeFi协议", "NFT动态", 
    "DAO治理", "Layer2扩容", "跨链桥", "智能合约安全"
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Light Background Gradient */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-slate-50 to-white opacity-80 pointer-events-none"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/40 rounded-full blur-[80px] mix-blend-multiply animate-float"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-200/40 rounded-full blur-[80px] mix-blend-multiply animate-float" style={{animationDelay: '2s'}}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold mb-6 md:mb-8 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
          </span>
          Voiverse 内测启动
        </div>
        
        {/* Mobile: Unified simplified sentence */}
        <h1 className="md:hidden text-4xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          你的 Web3 AI <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
             降噪情报官
          </span>
          <span className="block text-xl mt-3 text-slate-700 font-bold">
            只听干货，拒绝 FOMO。
          </span>
        </h1>

        {/* Desktop: Original Two-part structure */}
        <h1 className="hidden md:block text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
          你的 Web3 AI <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
             降噪情报官
          </span>
        </h1>
        
        {/* Desktop Emotional Hook (Hidden on mobile as it's merged above) */}
        <p className="hidden md:block mt-4 text-xl md:text-2xl text-slate-900 font-medium max-w-2xl mx-auto">
          别让噪音埋没你的 Alpha。只听干货，拒绝 FOMO。
        </p>

        {/* Functional Description */}
        <p className="mt-2 md:mt-4 text-sm md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
          <span className="font-semibold text-slate-700">「Web3每日推荐」</span>由 AI 驱动，从 100+ 加密媒体和 KOL 中智能筛选，呈现 Web3 核心资讯。不错过每个重要的链上机会。
        </p>

        {/* Topic Tags Pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto opacity-80">
          {topics.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 md:px-3 md:py-1 bg-slate-100/80 border border-slate-200 text-slate-600 rounded-full text-xs md:text-sm font-medium hover:bg-white hover:border-indigo-200 hover:text-indigo-600 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={onCtaClick}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 md:py-4 text-lg font-bold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-600/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 focus:ring-offset-white"
          >
            <Sparkles className="w-5 h-5 mr-2 text-indigo-300 group-hover:text-white" />
            立即获取内测资格
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="mt-8 md:mt-10 flex items-center justify-center gap-8 text-slate-400 grayscale opacity-60">
           <div className="h-1 w-1 rounded-full bg-slate-300"></div>
           <p className="text-xs md:text-sm font-medium">* 首批 100 个测试名额</p>
           <div className="h-1 w-1 rounded-full bg-slate-300"></div>
        </div>
      </div>
    </section>
  );
};