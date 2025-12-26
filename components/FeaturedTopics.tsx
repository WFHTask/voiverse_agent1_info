import React from 'react';
import { Flame, Coins, Radar, BookOpen, Gift, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const FeaturedTopics: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <TrendingUp className="w-6 h-6 text-cyan-600" />,
    <Flame className="w-6 h-6 text-orange-500" />,
    <Gift className="w-6 h-6 text-purple-500" />,
    <Radar className="w-6 h-6 text-indigo-500" />,
    <Coins className="w-6 h-6 text-yellow-500" />,
    <BookOpen className="w-6 h-6 text-emerald-500" />
  ];

  const backgrounds = [
    "bg-cyan-50 border-cyan-100",
    "bg-orange-50 border-orange-100",
    "bg-purple-50 border-purple-100",
    "bg-indigo-50 border-indigo-100",
    "bg-yellow-50 border-yellow-100",
    "bg-emerald-50 border-emerald-100"
  ];

  return (
    <section className="py-24 bg-white" id="topics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.topics.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.topics.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.topics.list.map((topic, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl border ${backgrounds[index]} transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{topic.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {topic.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};