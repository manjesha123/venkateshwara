import React from 'react';
import { Machine } from '../types';
import { Cpu, ShieldCheck } from 'lucide-react';

interface MachinerySectionProps {
  machinery: Machine[];
}

export const MachinerySection: React.FC<MachinerySectionProps> = ({ machinery }) => {
  return (
    <section id="machinery" className="py-24 bg-stone-950 text-stone-200 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
            Heavy Stone Processing Equipment
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-stone-100 mb-4">
            Built For Precision. <br />
            <span className="text-amber-500">Equipped For Scale.</span>
          </h2>
          <p className="text-stone-300 text-sm">
            Our processing plant integrates top-tier Italian & German stoneworking machinery to produce high-tolerance dimensioned slabs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {machinery.map((item) => (
            <div
              key={item.id}
              className="bg-stone-900 border border-stone-800 rounded-lg overflow-hidden group hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-stone-950 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-amber-400 border border-amber-500/30">
                    IMPORTED FROM {item.origin.toUpperCase()}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-mono text-amber-500 uppercase tracking-widest mb-1">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-lg font-bold text-stone-100 uppercase mb-3">
                    {item.name}
                  </h3>
                  <p className="text-stone-300 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="bg-stone-950 p-3 rounded border border-stone-800 flex items-center justify-between text-xs">
                  <span className="text-stone-300">Throughput Capacity</span>
                  <span className="font-mono font-bold text-amber-400">{item.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
