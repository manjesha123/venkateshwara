import React from 'react';
import { Quote, Award, ShieldCheck } from 'lucide-react';

export const OwnerSection: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 border-b border-stone-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Family-Owned & Operated Since 2002</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-stone-100 mb-4">
            Leadership & <span className="text-amber-500">Executive Vision</span>
          </h2>
          <p className="text-stone-300 text-sm">
            Two decades of hands-on expertise in quarry extraction, precision Italian processing machinery, and global B2B stone distribution.
          </p>
        </div>

        {/* Two Owners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Owner 1: Vikramaditya Vanguard */}
          <div className="bg-stone-950 border border-stone-800 rounded-lg p-6 sm:p-8 relative flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-full sm:w-48 h-56 shrink-0 rounded overflow-hidden border border-stone-800 relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Vikramaditya Vanguard - Managing Director"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <span className="text-amber-400 font-mono text-[10px] uppercase tracking-widest block">
                Co-Founder & Managing Director
              </span>
              <h3 className="font-serif text-xl font-bold text-stone-100 uppercase">
                Vikramaditya Vanguard
              </h3>
              <p className="text-stone-300 text-xs leading-relaxed">
                Oversees quarry block reserves, raw material extraction, and primary gang-saw cutting operations across Southern India.
              </p>
              <div className="pt-2 font-mono text-[11px] text-amber-500">
                Direct Line: +91 98765 43210
              </div>
            </div>
          </div>

          {/* Owner 2: Raghavendra Vanguard */}
          <div className="bg-stone-950 border border-stone-800 rounded-lg p-6 sm:p-8 relative flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-full sm:w-48 h-56 shrink-0 rounded overflow-hidden border border-stone-800 relative">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
                alt="Raghavendra Vanguard - Director of Engineering & Global Exports"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <span className="text-amber-400 font-mono text-[10px] uppercase tracking-widest block">
                Co-Founder & Director of Engineering
              </span>
              <h3 className="font-serif text-xl font-bold text-stone-100 uppercase">
                Raghavendra Vanguard
              </h3>
              <p className="text-stone-300 text-xs leading-relaxed">
                Manages Italian 22-head polishing lines, automated CNC waterjet customization, and international container freight logistics.
              </p>
              <div className="pt-2 font-mono text-[11px] text-amber-500">
                Direct Line: +91 98765 43211
              </div>
            </div>
          </div>

        </div>

        {/* Joint Statement Banner */}
        <div className="bg-stone-950 border border-stone-800 rounded-lg p-8 sm:p-10 relative">
          <Quote className="w-10 h-10 text-amber-500/20 absolute top-6 left-6" />
          <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
            <h4 className="font-serif text-lg font-bold text-stone-100 uppercase tracking-wide">
              Our Shared Commitment to Quality
            </h4>
            <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed italic">
              "From the moment a raw block is extracted at our quarries to the final fumigated A-frame container packing, we personally oversee every step. We believe that true architectural luxury begins with uncompromising material integrity."
            </p>
            <div className="pt-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
              — Vikramaditya & Raghavendra Vanguard
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};