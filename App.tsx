import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ThreeStepFlow } from './components/ThreeStepFlow';
import { FeaturedTopics } from './components/FeaturedTopics';
import { Pricing } from './components/Pricing';
import { WaitlistForm } from './components/WaitlistForm';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const toggleWaitlist = () => setIsWaitlistOpen(!isWaitlistOpen);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-voi-bg text-voi-text-main font-sans selection:bg-voi-accent/20 selection:text-voi-accent">
      <Navbar onJoinClick={toggleWaitlist} />
      
      <main className="flex-grow">
        <Hero onCtaClick={toggleWaitlist} />
        <ThreeStepFlow />
        <FeaturedTopics />
        <Pricing onPlanClick={toggleWaitlist} />
        <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      </main>

      <Footer />
    </div>
  );
};

export default App;