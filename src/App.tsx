import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OwnerSection } from './components/OwnerSection'; // <-- Two owners section
import { StatisticsSection } from './components/StatisticsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { GraniteCatalog } from './components/GraniteCatalog';
import { MachinerySection } from './components/MachinerySection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ProductModal } from './components/ProductModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Footer } from './components/Footer';

import { INITIAL_PRODUCTS, INITIAL_MACHINERY } from './data/mockData';
import { Product } from './types';

export function App() {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [machinery] = useState(INITIAL_MACHINERY);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleNavigateToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-amber-600 selection:text-white">
      <Navbar onNavigateToContact={handleNavigateToContact} />

      <main>
        <HeroSection
          onExploreCollection={() => {
            const el = document.getElementById('collection');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onRequestQuote={handleNavigateToContact}
        />

        {/* Two Owners Section Positioned Here */}
        <OwnerSection />

        <StatisticsSection />

        <ProcessTimeline />

        <GraniteCatalog
          products={products}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onRequestQuoteForProduct={handleNavigateToContact}
        />

        <MachinerySection machinery={machinery} />

        <ProjectsSection />

        <ContactSection />
      </main>

      <Footer />
      <WhatsAppWidget />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={handleNavigateToContact}
      />
    </div>
  );
}

export default App;