import React from 'react';
import { StepCard } from './StepCard';
import { ProblemIllustration, SolutionIllustration, PersonalizationIllustration, ResultIllustration } from './Illustrations';
import { useLanguage } from '../contexts/LanguageContext';

interface FourStepFlowProps {
  onJoinClick?: () => void;
}

export const FourStepFlow: React.FC<FourStepFlowProps> = ({ onJoinClick }) => {
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
          Main Grid Layout - 4 Steps
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 items-start relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[160px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-red-200 via-indigo-200 via-purple-200 to-emerald-200 -z-10 border-t border-dashed border-slate-300" />

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

          {/* STEP 2: SOLUTION - Aggregation */}
          <StepCard 
            id="solution"
            step="02"
            title={t.flow.step2.title}
            subtitle={t.flow.step2.subtitle}
            description={t.flow.step2.desc}
            tag={t.flow.step2.tag}
            tagColor="bg-indigo-50 text-indigo-600 border-indigo-100"
            accentColor="text-indigo-600"
          >
            <SolutionIllustration />
          </StepCard>

          {/* STEP 3: PERSONALIZATION */}
          <StepCard 
            id="personalization"
            step="03"
            title={t.flow.step3.title}
            subtitle={t.flow.step3.subtitle}
            description={t.flow.step3.desc}
            tag={t.flow.step3.tag}
            tagColor="bg-purple-50 text-purple-600 border-purple-100"
            accentColor="text-purple-600"
          >
            <PersonalizationIllustration />
          </StepCard>

          {/* STEP 4: RESULT */}
          <StepCard 
            id="result"
            step="04"
            title={t.flow.step4.title}
            subtitle={t.flow.step4.subtitle}
            description={t.flow.step4.desc}
            tag={t.flow.step4.tag}
            tagColor="bg-emerald-50 text-emerald-600 border-emerald-100"
            accentColor="text-emerald-600"
            callToAction={t.flow.step4.cta}
            onCtaClick={onJoinClick}
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
