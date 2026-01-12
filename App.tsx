import React from 'react';
import { Hero } from './components/Hero';
import { FourStepFlow } from './components/FourStepFlow';
import { FeaturedTopics } from './components/FeaturedTopics';
import { KOLShowcase } from './components/KOLShowcase';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  // Scroll to the pricing section for CTA
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-voi-bg text-voi-text-main font-sans selection:bg-voi-accent/20 selection:text-voi-accent">
      <Navbar onJoinClick={scrollToPricing} />
      
      <main className="flex-grow">
        <Hero onCtaClick={scrollToPricing} />
        <KOLShowcase />
        <FourStepFlow onJoinClick={scrollToPricing} />
        <FeaturedTopics />
        <Pricing onPlanClick={scrollToPricing} />
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