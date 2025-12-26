import React from 'react';
import { StepCard } from './StepCard';
import { ProblemIllustration, SolutionIllustration, ResultIllustration } from './Illustrations';
import { useLanguage } from '../contexts/LanguageContext';

export const ThreeStepFlow: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-voi-bg relative" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.flow.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.flow.subtitle}</p>
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
            title={t.flow.step1.title}
            subtitle={t.flow.step1.subtitle}
            description={t.flow.step1.desc}
            tag={t.flow.step1.tag}
            tagColor="bg-red-50 text-red-600 border-red-100"
            accentColor="text-red-600"
          >
            <ProblemIllustration />
          </StepCard>

          {/* STEP 2: SOLUTION */}
          <StepCard 
            id="solution"
            step="02"
            title={t.flow.step2.title}
            subtitle={t.flow.step2.subtitle}
            description={t.flow.step2.desc}
            tag={t.flow.step2.tag}
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
            title={t.flow.step3.title}
            subtitle={t.flow.step3.subtitle}
            description={t.flow.step3.desc}
            tag={t.flow.step3.tag}
            tagColor="bg-emerald-50 text-emerald-600 border-emerald-100"
            accentColor="text-emerald-600"
            callToAction={t.flow.step3.cta}
          >
            <ResultIllustration 
              title={t.flow.illus.dailyAlpha}
              readTime={t.flow.illus.readTime}
              badge={t.flow.illus.fomoFree}
            />
          </StepCard>

        </div>
      </div>
    </section>
  );
};