import React from 'react';
import { ArrowDown, ShieldCheck, Factory, Globe2, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreCollection: () => void;
  onRequestQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreCollection, onRequestQuote }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
  <img
    src="images/hero.jpeg"
    alt="Granite Factory Quarry Slabs"
    className="w-full h-full object-cover object-center scale-105 animate-pulse transition-transform duration-10000"
    style={{ animationDuration: '20s' }}
  />
  {/* Reduced gradient opacity from 90%/60% down to 60%/20% */}
  <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/50 to-stone-950/20" />
  {/* Reduced top/bottom gradient opacity */}
  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/40" />
  {/* Subtler grid overlay */}
  <div className="absolute inset-0 bg-grid-pattern opacity-15" />
</div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span>Industrial Granite Manufacturing Facility</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-100 uppercase leading-[1.1] mb-6">
            From Raw Stone. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              To Timeless Surfaces.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-stone-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-8 max-w-2xl">
            Precision-engineered Indian granite. From quarry-sourced raw blocks to high-sheen processed slabs, 
            custom architectural tiles, and global bulk shipping.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <button
              onClick={onExploreCollection}
              className="px-8 py-4 rounded bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-semibold uppercase text-xs tracking-widest shadow-xl shadow-amber-900/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Explore Collection</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onRequestQuote}
              className="px-8 py-4 rounded bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-amber-500/50 uppercase text-xs tracking-widest font-semibold backdrop-blur-sm transition-all"
            >
              Discuss Bulk Order
            </button>
          </div>

          {/* Fast Highlights Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-stone-800/80">
            <div className="flex items-start gap-3">
              <Factory className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
              <div>
                <p className="text-stone-200 font-semibold text-sm">45,000 m²/mo</p>
                <p className="text-stone-400 text-xs">Slab Processing</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe2 className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
              <div>
                <p className="text-stone-200 font-semibold text-sm">34+ Countries</p>
                <p className="text-stone-400 text-xs">Direct Port Freight</p>
              </div>
            </div>

            <div className="flex items-start gap-3 col-span-2 sm:col-span-1">
              <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
              <div>
                <p className="text-stone-200 font-semibold text-sm">Zero Defect</p>
                <p className="text-stone-400 text-xs">3-Stage Slab Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-500 text-[10px] uppercase tracking-widest pointer-events-none">
        <span>Scroll to Explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-amber-500" />
      </div>
    </section>
  );
};
