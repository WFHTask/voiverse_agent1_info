import React from 'react';

interface StepCardProps {
  id?: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
  tag: string;
  tagColor: string;
  accentColor: string;
  isCenter?: boolean;
  callToAction?: string;
}

export const StepCard: React.FC<StepCardProps> = ({ 
  id, 
  step, 
  title, 
  subtitle, 
  description, 
  children,
  tag,
  tagColor,
  accentColor,
  isCenter = false,
  callToAction
}) => {
  return (
    <div id={id} className={`relative flex flex-col h-full ${isCenter ? 'lg:-mt-8' : ''}`}>
      
      {/* Card Container */}
      <div className={`
        relative flex flex-col h-full
        bg-white rounded-3xl p-6 md:p-8
        shadow-xl shadow-slate-200/50 
        border border-slate-100
        transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/80 hover:-translate-y-1
        ${isCenter ? 'ring-4 ring-indigo-50 border-indigo-100' : ''}
      `}>
        
        {/* Step Indicator (Floating) */}
        <div className="absolute -top-5 left-8 bg-white border border-slate-100 shadow-sm px-4 py-1 rounded-full text-slate-400 font-mono text-sm font-bold tracking-widest">
          STEP {step}
        </div>

        {/* Header */}
        <div className="mt-4 mb-6">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${tagColor}`}>
            {tag}
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <p className="text-sm font-medium text-slate-400 uppercase tracking-wide mt-1">{subtitle}</p>
        </div>

        {/* Visual Illustration Area */}
        <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
           {children}
        </div>

        {/* Description Section */}
        <div className="mt-auto">
          <p className="text-slate-600 leading-relaxed text-base">
            {description}
          </p>
          {callToAction && (
            <div className={`mt-4 font-bold ${accentColor} flex items-center gap-1`}>
              {callToAction}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};