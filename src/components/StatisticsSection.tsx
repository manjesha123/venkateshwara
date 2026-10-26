import React from 'react';

export const StatisticsSection: React.FC = () => {
  const stats = [
    { label: 'Years Factory Operation', value: '24+', detail: 'Established in 2002' },
    { label: 'Monthly Slab Capacity', value: '45k m²', detail: '18-Wire Gang Saws' },
    { label: 'Granite Color Varieties', value: '38', detail: 'Quarry Sourced & Processing' },
    { label: 'Global B2B Shipments', value: '1,400+', detail: '20ft Container Shipping' },
  ];

  return (
    <section className="bg-stone-900 border-y border-stone-800 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col relative pl-6 border-l border-amber-600/40 hover:border-amber-500 transition-colors group"
            >
              <span className="font-serif text-4xl sm:text-5xl font-extrabold text-stone-100 group-hover:text-amber-400 transition-colors">
                {stat.value}
              </span>
              <span className="mt-2 text-xs uppercase tracking-widest text-stone-300 font-semibold">
                {stat.label}
              </span>
              <span className="mt-1 text-xs text-stone-300 font-mono">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
