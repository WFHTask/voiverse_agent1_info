import React from 'react';
import { 
  MessageCircle, Twitter, TrendingUp, AlertCircle, 
  Cpu, Diamond, ArrowDown,
  CheckCircle, Coffee, Newspaper, Zap, Filter
} from 'lucide-react';

// ==========================================
// SCENE 1: THE PROBLEM (Chaos & Overload)
// ==========================================
export const ProblemIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
      
      {/* The User (Stressed) */}
      <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-slate-200 shadow-lg">
        <span className="text-3xl">😓</span>
        {/* Pulse of anxiety */}
        <div className="absolute inset-0 rounded-full border border-red-500/30 animate-ping"></div>
      </div>

      {/* Floating Noise Icons - Darker borders for light mode */}
      <div className="absolute top-4 left-4 animate-float" style={{ animationDelay: '0s' }}>
        <div className="bg-sky-50 p-2 rounded-xl border border-sky-100 shadow-sm">
          <Twitter className="w-5 h-5 text-sky-500" />
        </div>
      </div>
      <div className="absolute bottom-10 right-8 animate-float" style={{ animationDelay: '1.5s' }}>
         <div className="bg-blue-50 p-2 rounded-xl border border-blue-100 shadow-sm">
          <MessageCircle className="w-5 h-5 text-blue-500" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
      </div>
      <div className="absolute top-10 right-4 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="bg-red-50 p-2 rounded-xl border border-red-100 shadow-sm flex items-center gap-1 text-xs text-red-600 font-bold font-mono">
          <TrendingUp className="w-4 h-4" /> -20%
        </div>
      </div>
      <div className="absolute bottom-6 left-10 animate-float" style={{ animationDelay: '2s' }}>
         <div className="bg-amber-50 p-2 rounded-xl border border-amber-100 shadow-sm">
          <AlertCircle className="w-5 h-5 text-amber-500" />
        </div>
      </div>

      {/* Connection Lines (Chaos) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 2" />
      </svg>
    </div>
  );
};

// ==========================================
// SCENE 2: THE SOLUTION (The Smart Funnel)
// ==========================================
export const SolutionIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between py-4 bg-gradient-to-b from-indigo-50/50 to-white">
      {/* Top: Input Stream (Noise) */}
      <div className="w-full flex justify-center gap-3 opacity-60 mb-2">
         <div className="w-2.5 h-2.5 rounded-full bg-red-400 animate-bounce" style={{ animationDelay: '0s' }}></div>
         <div className="w-2.5 h-2.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
         <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
         <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      </div>

      {/* Middle: The Funnel / AI Chip */}
      <div className="relative z-10 w-32 h-24 flex items-center justify-center">
        {/* Funnel Shape BG */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-transparent clip-path-polygon" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 60% 100%, 40% 100%)' }}></div>
        
        {/* The Chip */}
        <div className="relative z-20 w-14 h-14 bg-white rounded-2xl shadow-lg shadow-indigo-200 flex items-center justify-center border border-indigo-100">
          <Cpu className="w-8 h-8 text-indigo-600 animate-pulse" />
        </div>
      </div>

      {/* Bottom: Output (Gold/Diamond) */}
      <div className="mt-2 flex flex-col items-center animate-float">
        <div className="relative group">
            <div className="absolute -inset-3 bg-amber-200/40 rounded-full blur-md group-hover:bg-amber-300/50 transition-all"></div>
            <div className="bg-gradient-to-br from-amber-300 to-orange-500 p-3.5 rounded-2xl shadow-lg border border-white relative z-10">
              <Diamond className="w-8 h-8 text-white" fill="currentColor" />
            </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// SCENE 3: THE RESULT (Relaxed Control)
// ==========================================
export const ResultIllustration: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-emerald-50/30 flex flex-col items-center justify-center p-4">
      {/* Background Decor */}
      <div className="absolute top-4 right-4 opacity-10">
        <Coffee className="w-20 h-20 text-emerald-800" />
      </div>

      {/* The Brief Card */}
      <div className="relative w-4/5 bg-white rounded-xl shadow-xl shadow-slate-200/80 overflow-hidden transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300 border border-slate-100">
        <div className="h-1.5 bg-emerald-500 w-full"></div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
               <div className="p-1.5 bg-emerald-100 rounded-full">
                 <Newspaper className="w-3 h-3 text-emerald-600" />
               </div>
               <span className="text-[10px] font-bold text-slate-800 uppercase">Daily Alpha</span>
            </div>
            <span className="text-[9px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded font-medium">3 min read</span>
          </div>
          
          <div className="space-y-2">
             <div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
             <div className="h-2 w-full bg-slate-100 rounded-full"></div>
             <div className="h-2 w-5/6 bg-slate-100 rounded-full"></div>
          </div>

          <div className="mt-4 flex justify-end">
             <div className="bg-emerald-500 rounded-full p-1 shadow-md shadow-emerald-200">
               <CheckCircle className="w-3 h-3 text-white" />
             </div>
          </div>
        </div>
      </div>

      {/* Floating Status Badges */}
      <div className="absolute bottom-6 left-6 bg-white border border-slate-100 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg animate-float" style={{ animationDelay: '1s'}}>
         <div className="bg-amber-100 p-0.5 rounded-full">
           <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
         </div>
         <span className="text-xs text-slate-700 font-bold">FOMO Free</span>
      </div>
    </div>
  );
};