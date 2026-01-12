import React, { useState } from 'react';
import { Twitter, Users, ChevronRight, Check, Globe, Rss } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface KOL {
  rank: number;
  name: string;
  handle: string;
  followers: string;
  description: string;
  avatar: string;
  type: 'twitter' | 'media';
}

// Twitter KOLs - Elon Musk at rank 4
// Using unavatar.io service for reliable avatar fetching
const kolData: KOL[] = [
  {
    rank: 1,
    name: "Sam Altman",
    handle: "@sama",
    followers: "4.2M",
    description: "OpenAI CEO, AI industry leader, discussing AI development, ethics, and future trends.",
    avatar: "https://unavatar.io/twitter/sama",
    type: 'twitter'
  },
  {
    rank: 2,
    name: "Andrej Karpathy",
    handle: "@karpathy",
    followers: "1.4M",
    description: "Eureka Labs founder, former Tesla AI director and OpenAI founding member.",
    avatar: "https://unavatar.io/twitter/karpathy",
    type: 'twitter'
  },
  {
    rank: 3,
    name: "Lex Fridman",
    handle: "@lexfridman",
    followers: "4.2M",
    description: "MIT research scientist and podcast host, focusing on AI, robotics, and human interaction.",
    avatar: "https://unavatar.io/twitter/lexfridman",
    type: 'twitter'
  },
  {
    rank: 4,
    name: "Elon Musk",
    handle: "@elonmusk",
    followers: "232M",
    description: "xAI founder, Tesla & SpaceX CEO, discussing AGI and AI future.",
    avatar: "https://unavatar.io/twitter/elonmusk",
    type: 'twitter'
  },
  {
    rank: 5,
    name: "Yann LeCun",
    handle: "@ylecun",
    followers: "937.8K",
    description: "Meta Chief AI Scientist, Turing Award winner, deep learning pioneer.",
    avatar: "https://unavatar.io/twitter/ylecun",
    type: 'twitter'
  },
  {
    rank: 6,
    name: "Andrew Ng",
    handle: "@AndrewYNg",
    followers: "1.1M",
    description: "DeepLearning.AI founder, Stanford professor, AI education pioneer.",
    avatar: "https://unavatar.io/twitter/AndrewYNg",
    type: 'twitter'
  },
  {
    rank: 7,
    name: "Demis Hassabis",
    handle: "@demishassabis",
    followers: "479.5K",
    description: "Google DeepMind CEO, 2024 Nobel Prize winner, focused on AGI.",
    avatar: "https://unavatar.io/twitter/demishassabis",
    type: 'twitter'
  },
  {
    rank: 8,
    name: "Greg Brockman",
    handle: "@gdb",
    followers: "845.1K",
    description: "OpenAI co-founder and chairman, sharing AI research and ethics.",
    avatar: "https://unavatar.io/twitter/gdb",
    type: 'twitter'
  }
];

// Media Sources
const mediaData: KOL[] = [
  {
    rank: 1,
    name: "Hacker News",
    handle: "news.ycombinator.com",
    followers: "10M+",
    description: "Y Combinator's tech community. The pulse of Silicon Valley startups and tech discussions.",
    avatar: "",
    type: 'media'
  },
  {
    rank: 2,
    name: "The Information",
    handle: "theinformation.com",
    followers: "500K+",
    description: "Premium tech journalism with exclusive AI industry scoops and deep dives.",
    avatar: "",
    type: 'media'
  },
  {
    rank: 3,
    name: "TechCrunch",
    handle: "techcrunch.com",
    followers: "15M+",
    description: "Breaking AI startup news, funding rounds, and product launches.",
    avatar: "",
    type: 'media'
  },
  {
    rank: 4,
    name: "MIT Tech Review",
    handle: "technologyreview.com",
    followers: "8M+",
    description: "MIT's flagship publication covering emerging AI technologies and research.",
    avatar: "",
    type: 'media'
  },
  {
    rank: 5,
    name: "ArXiv AI Papers",
    handle: "arxiv.org/list/cs.AI",
    followers: "2M+",
    description: "Latest AI research papers directly from the academic frontier.",
    avatar: "",
    type: 'media'
  },
  {
    rank: 6,
    name: "VentureBeat AI",
    handle: "venturebeat.com/ai",
    followers: "5M+",
    description: "Enterprise AI news, market analysis, and industry trends.",
    avatar: "",
    type: 'media'
  }
];

export const KOLShowcase: React.FC = () => {
  const { t } = useLanguage();
  const [selectedKOLs, setSelectedKOLs] = useState<Set<string>>(new Set());

  const toggleKOL = (id: string) => {
    setSelectedKOLs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="sources">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-100/50 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-100/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.kol.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.kol.subtitle}
          </p>
        </div>

        {/* Selection Counter */}
        {selectedKOLs.size > 0 && (
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              <Check className="w-4 h-4" />
              {selectedKOLs.size} sources selected
            </span>
          </div>
        )}

        {/* Twitter KOLs Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-sky-100 p-2 rounded-lg">
              <Twitter className="w-5 h-5 text-sky-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">{t.kol.sectionKol}</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {kolData.map((kol) => (
              <KOLCard 
                key={`kol-${kol.rank}`} 
                kol={kol} 
                isSelected={selectedKOLs.has(`kol-${kol.rank}`)}
                onToggle={() => toggleKOL(`kol-${kol.rank}`)}
                followersLabel={t.kol.followersLabel}
              />
            ))}
          </div>
        </div>

        {/* Media Sources Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Globe className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">{t.kol.sectionMedia}</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {mediaData.map((media) => (
              <MediaCard 
                key={`media-${media.rank}`} 
                media={media} 
                isSelected={selectedKOLs.has(`media-${media.rank}`)}
                onToggle={() => toggleKOL(`media-${media.rank}`)}
                readersLabel={t.kol.readersLabel}
              />
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors group">
            {t.kol.viewMore}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

interface KOLCardProps {
  kol: KOL;
  isSelected: boolean;
  onToggle: () => void;
  followersLabel: string;
}

const KOLCard: React.FC<KOLCardProps> = ({ kol, isSelected, onToggle, followersLabel }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      onClick={onToggle}
      className={`
        relative p-3 rounded-2xl border-2 transition-all duration-300 cursor-pointer group
        ${isSelected 
          ? 'bg-indigo-50 border-indigo-400 shadow-lg shadow-indigo-100' 
          : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-md'
        }
      `}
    >
      {/* Selection indicator */}
      <div className={`
        absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center transition-all z-20
        ${isSelected ? 'bg-indigo-600' : 'bg-slate-200 group-hover:bg-indigo-100'}
      `}>
        {isSelected && <Check className="w-3 h-3 text-white" />}
      </div>

      {/* Avatar */}
      <div className="w-12 h-12 mx-auto mb-2 rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
        {kol.avatar && !imgError ? (
          <img 
            src={kol.avatar} 
            alt={kol.name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <Twitter className="w-5 h-5 text-slate-400" />
        )}
      </div>

      {/* Name */}
      <h3 className="text-xs font-bold text-slate-900 text-center truncate mb-0.5">
        {kol.name}
      </h3>

      {/* Handle */}
      <p className="text-[10px] text-indigo-600 text-center truncate mb-1">
        {kol.handle}
      </p>

      {/* Followers */}
      <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500">
        <Users className="w-3 h-3" />
        <span>{kol.followers}</span>
      </div>

      {/* Description (on hover) */}
      <div className="absolute inset-0 bg-slate-900/95 rounded-2xl p-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <p className="text-[10px] text-white text-center leading-relaxed">
          {kol.description}
        </p>
      </div>
    </div>
  );
};

interface MediaCardProps {
  media: KOL;
  isSelected: boolean;
  onToggle: () => void;
  readersLabel: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ media, isSelected, onToggle, readersLabel }) => {
  // Brand colors for media
  const brandColors: { [key: string]: { bg: string; text: string; icon: string } } = {
    'Hacker News': { bg: 'bg-orange-100', text: 'text-orange-600', icon: 'Y' },
    'The Information': { bg: 'bg-slate-800', text: 'text-white', icon: 'Ti' },
    'TechCrunch': { bg: 'bg-emerald-500', text: 'text-white', icon: 'TC' },
    'MIT Tech Review': { bg: 'bg-red-600', text: 'text-white', icon: 'MIT' },
    'ArXiv AI Papers': { bg: 'bg-red-100', text: 'text-red-700', icon: 'arX' },
    'VentureBeat AI': { bg: 'bg-purple-600', text: 'text-white', icon: 'VB' },
  };

  const brand = brandColors[media.name] || { bg: 'bg-slate-100', text: 'text-slate-600', icon: '?' };

  return (
    <div 
      onClick={onToggle}
      className={`
        relative p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer group
        ${isSelected 
          ? 'bg-emerald-50 border-emerald-400 shadow-lg shadow-emerald-100' 
          : 'bg-white border-slate-200 hover:border-emerald-200 hover:shadow-md'
        }
      `}
    >
      {/* Selection indicator */}
      <div className={`
        absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center transition-all z-20
        ${isSelected ? 'bg-emerald-600' : 'bg-slate-200 group-hover:bg-emerald-100'}
      `}>
        {isSelected && <Check className="w-3 h-3 text-white" />}
      </div>

      {/* Logo */}
      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl ${brand.bg} flex items-center justify-center`}>
        <span className={`text-sm font-bold ${brand.text}`}>{brand.icon}</span>
      </div>

      {/* Name */}
      <h3 className="text-sm font-bold text-slate-900 text-center truncate mb-1">
        {media.name}
      </h3>

      {/* Handle */}
      <p className="text-[10px] text-slate-500 text-center truncate mb-2">
        {media.handle}
      </p>

      {/* Readers */}
      <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500">
        <Rss className="w-3 h-3" />
        <span>{media.followers} {readersLabel}</span>
      </div>

      {/* Description (on hover) */}
      <div className="absolute inset-0 bg-slate-900/95 rounded-2xl p-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <p className="text-xs text-white text-center leading-relaxed">
          {media.description}
        </p>
      </div>
    </div>
  );
};
