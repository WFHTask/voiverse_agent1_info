import React from 'react';
import { StepCard } from './StepCard';
import { ProblemIllustration, SolutionIllustration, ResultIllustration } from './Illustrations';

export const ThreeStepFlow: React.FC = () => {
  return (
    <section className="py-24 bg-voi-bg relative" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">工作原理：从混乱到掌控，只需三步</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Voiverse 重新定义你获取 Crypto 信息的路径，让价值自动浮现。</p>
        </div>

        {/* 
          Main Grid Layout
        */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[180px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-slate-200 via-indigo-200 to-slate-200 -z-10 border-t border-dashed border-slate-300" />

          {/* STEP 1: PROBLEM */}
          <StepCard 
            id="problem"
            step="01"
            title="信息过载"
            subtitle="Info Overload"
            description="每天 500+ 条推特、1000+ Telegram 信息，几百个群消息。盯盘熬夜，却还是错过金狗？"
            tag="痛点场景"
            tagColor="bg-red-50 text-red-600 border-red-100"
            accentColor="text-red-600"
          >
            <ProblemIllustration />
          </StepCard>

          {/* STEP 2: SOLUTION */}
          <StepCard 
            id="solution"
            step="02"
            title="AI 意图过滤"
            subtitle="Smart Filtering"
            description="扔掉 99% 的噪音，AI 自动识别你的关注点。无需搜索，关键情报主动找你。"
            tag="核心机制"
            tagColor="bg-indigo-50 text-indigo-600 border-indigo-100"
            accentColor="text-indigo-600"
            isCenter={true}
          >
            <SolutionIllustration />
          </StepCard>

          {/* STEP 3: RESULT */}
          <StepCard 
            id="result"
            step="03"
            title="每日3分钟 Alpha简报"
            subtitle="Instant Results"
            description="为你把数小时分散的信息提炼最重要，形成 3 分钟图文并茂简报。直接推送至您的微信、Telegram 或邮箱。不再做信息的奴隶，做决策的主人。"
            tag="最终收益"
            tagColor="bg-emerald-50 text-emerald-600 border-emerald-100"
            accentColor="text-emerald-600"
            callToAction="加入内测！"
          >
            <ResultIllustration />
          </StepCard>

        </div>
      </div>
    </section>
  );
};