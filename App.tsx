
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductBento from './components/ProductBento';
import FeaturesSlider from './components/FeaturesSlider';
import PerceptionEngineDeepDive from './components/PerceptionEngineDeepDive';
import ProfessionalDecisions from './components/ProfessionalDecisions';
import DSKeyDeepDive from './components/DSKeyDeepDive';
import AiResponseLayer from './components/AiResponseLayer';
import AiMonitoring from './components/AiMonitoring';
import ChildProtection from './components/ChildProtection';
import PropertyProtection from './components/PropertyProtection';
import ZoneProtection from './components/ZoneProtection';
import SmartIntelligence from './components/SmartIntelligence';
import LocalPrivacyDeepDive from './components/LocalPrivacyDeepDive';
import ComparisonMatrix from './components/ComparisonMatrix';
import ProductSelection from './components/ProductSelection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProtectionLayerBackground from './components/ProtectionLayerBackground';

const App: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    // 1. Reveal Animations Observer
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Protection Layer Active State Observer
    const layerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          // Logic:
          // Layer 1 (Blue): DSKey
          // Layer 2 (Amber): Perception, Decisions, Response
          // Layer 3 (Red): Monitoring
          if (id === 'dskey-detail') {
            setActiveLayer(1);
          } else if (['perception-engine', 'professional-decisions', 'ai-response-layer'].includes(id)) {
            setActiveLayer(2);
          } else if (id === 'ai-monitoring') {
            setActiveLayer(3);
          } else if (id === 'product-bento' || id === 'hero') {
            setActiveLayer(0); // Reset when scrolling back up
          }
        }
      });
    }, { threshold: 0.2, rootMargin: '-20% 0px -20% 0px' }); 

    // Observe specific sections for the background layer effect
    const layerIds = [
      'hero',
      'product-bento',
      'dskey-detail', 
      'perception-engine', 
      'professional-decisions', 
      'ai-response-layer', 
      'ai-monitoring'
    ];
    
    layerIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) layerObserver.observe(el);
    });

    // Cleanup
    return () => {
      revealObserver.disconnect();
      layerObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-black text-white selection:bg-blue-500 selection:text-white relative">
      <Navbar />
      
      {/* Fixed Background Layer Effect */}
      <ProtectionLayerBackground activeLayer={activeLayer} />

      {/* Main Content - Z-Index 10 ensures it sits above the fixed background */}
      <main className="relative z-10">
        <Hero />
        
        <div className="reveal">
          <ProductBento />
        </div>

        {/* DSKey Deep Dive - Layer 1 */}
        <div className="reveal">
          <DSKeyDeepDive />
        </div>
        
        {/* Perception Engine (Understand + Memory) - Layer 2 */}
        <div className="reveal">
          <PerceptionEngineDeepDive />
        </div>

        {/* Professional Decisions (Evidence + Adjudication) - Layer 2 */}
        <div className="reveal">
          <ProfessionalDecisions />
        </div>

        {/* AiResponseLayer - Layer 2 */}
        <div className="reveal">
          <AiResponseLayer />
        </div>
        
        {/* AiMonitoring Section - Layer 3 */}
        <div className="reveal">
          <AiMonitoring />
        </div>

        {/* ChildProtection Section */}
        <div className="reveal">
          <ChildProtection />
        </div>

        {/* PropertyProtection Section */}
        <div className="reveal">
          <PropertyProtection />
        </div>
        
        {/* ZoneProtection Section */}
        <div className="reveal">
          <ZoneProtection />
        </div>
        
        <div className="reveal">
          <SmartIntelligence />
        </div>

        <div className="reveal">
          <LocalPrivacyDeepDive />
        </div>
        
        <div className="reveal">
          <ComparisonMatrix />
        </div>

        <div className="reveal">
          <ProductSelection />
        </div>

        <div className="reveal">
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
