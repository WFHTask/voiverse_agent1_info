import React from 'react';
import { Check } from 'lucide-react';

interface PricingProps {
  onPlanClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onPlanClick }) => {
  return (
    <section className="py-24 bg-voi-bg border-t border-slate-200" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">选择您的计划</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            内测期间，所有高级功能限时免费开放
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Explorer Plan */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-900">Explorer</h3>
              <p className="text-slate-500 mt-2 text-sm">适合刚入门的 Web3 探索者</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">$9.9</span>
              <span className="text-slate-400">/月</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                每日 1 次 Alpha 简报
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                基础公链监控 (ETH/SOL)
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                社区支持
              </li>
            </ul>
            <button 
              onClick={onPlanClick}
              className="w-full py-3 px-4 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-50 transition-colors"
            >
              申请内测
            </button>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
               <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white">Alpha Hunter</h3>
              <p className="text-slate-400 mt-2 text-sm">为全职交易员和分析师打造</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$29.9</span>
              <span className="text-slate-500">/月</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="font-semibold text-white">实时</span> Alpha 信号推送
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                无限量 AI 研报总结
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                全链监控 (含 Layer2)
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                Smart Money 地址追踪
              </li>
            </ul>
            <button 
              onClick={onPlanClick}
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/20"
            >
              申请内测
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-900">Whale</h3>
              <p className="text-slate-500 mt-2 text-sm">机构与大户专用通道</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900">Custom</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                API 数据接口访问
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                定制化监控策略
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                1v1 专属客服经理
              </li>
            </ul>
            <button 
              onClick={onPlanClick}
              className="w-full py-3 px-4 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:border-slate-300 hover:text-slate-900 transition-colors"
            >
              申请内测
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};