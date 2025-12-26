import React from 'react';
import { Hero } from './components/Hero';
import { ThreeStepFlow } from './components/ThreeStepFlow';
import { FeaturedTopics } from './components/FeaturedTopics';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { CommunityAccess } from './components/CommunityAccess';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  // Scroll to the community access section instead of opening a modal
  const scrollToCommunity = () => {
    const element = document.getElementById('community-access');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-voi-bg text-voi-text-main font-sans selection:bg-voi-accent/20 selection:text-voi-accent">
      <Navbar onJoinClick={scrollToCommunity} />
      
      <main className="flex-grow">
        <Hero onCtaClick={scrollToCommunity} />
        <ThreeStepFlow onJoinClick={scrollToCommunity} />
        <FeaturedTopics />
        <Pricing onPlanClick={scrollToCommunity} />
        <CommunityAccess />
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;