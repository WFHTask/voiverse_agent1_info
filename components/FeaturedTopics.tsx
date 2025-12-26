import React from 'react';
import { Flame, Coins, Radar, BookOpen, Gift, TrendingUp } from 'lucide-react';

export const FeaturedTopics: React.FC = () => {
  const topics = [
    {
      icon: <TrendingUp className="w-6 h-6 text-cyan-600" />,
      title: "预测市场",
      desc: "实时追踪 Polymarket 胜率异动，比新闻更快洞察大选、宏观与热门事件走向。",
      bg: "bg-cyan-50 border-cyan-100"
    },
    {
      icon: <Flame className="w-6 h-6 text-orange-500" />,
      title: "Meme 土狗 / 金狗",
      desc: "实时监控链上交易量异动，比推特早 10 分钟发现下一个百倍 Meme。",
      bg: "bg-orange-50 border-orange-100"
    },
    {
      icon: <Gift className="w-6 h-6 text-purple-500" />,
      title: "Airdrop 空投交互",
      desc: "AI 自动整理低成本、高回报的空投交互路径，告别盲目刷单。",
      bg: "bg-purple-50 border-purple-100"
    },
    {
      icon: <Radar className="w-6 h-6 text-indigo-500" />,
      title: "Smart Money 聪明钱",
      desc: "追踪鲸鱼钱包动向，分析胜率最高的链上地址操作。",
      bg: "bg-indigo-50 border-indigo-100"
    },
    {
      icon: <Coins className="w-6 h-6 text-yellow-500" />,
      title: "DeFi 收益挖矿",
      desc: "聚合全网 APY 数据，筛选无常损失风险最低的优质矿池。",
      bg: "bg-yellow-50 border-yellow-100"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-emerald-500" />,
      title: "研报精读",
      desc: "将 50 页的机构英文研报提炼为 200 字中文核心观点。",
      bg: "bg-emerald-50 border-emerald-100"
    }
  ];

  return (
    <section className="py-24 bg-white" id="topics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">精选主题</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Voiverse 全天候扫描 Web3 全赛道，为您提炼以下高价值情报
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl border ${topic.bg} transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  {topic.icon}
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