import React, { useState } from 'react';
import { Pickaxe, Eye, Layers, Sparkles, CheckCircle2, Truck, ArrowRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      num: '01',
      title: 'Quarry Block Storage Yard',
      icon: Pickaxe,
      image: 'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&q=80&w=800',
      tagline: 'Outdoor Raw Stone Block Reserves',
      description: 'Massive raw granite blocks sourced directly from quarries are organized neatly in our open-air yard, ready for indoor processing.'
    },
    {
      num: '02',
      title: 'Overhead Gantry Crane Transfer',
      icon: Eye,
      image: 'images/crane.jpeg',
      tagline: 'Heavy Lifting & Positioning',
      description: 'Our yellow overhead gantry crane safely hoists and positions heavy granite blocks onto the cutting beds inside the factory shed.'
    },
    {
      num: '03',
      title: 'Bridge Saw Cutting Operations',
      icon: Layers,
      image: 'images/cutting.jpeg',
      tagline: 'Precision Bridge Cutting Machinery',
      description: 'Heavy-duty bridge saws slice raw blocks into uniform slabs with exact thickness tolerances and smooth structural edges.'
    },
    {
      num: '04',
      title: 'Indoor Processing & Finishing',
      icon: Sparkles,
      image: 'images/cutting_small.jpeg',
      tagline: 'Multiple Cutting & Polishing Bays',
      description: 'Slabs are moved across our indoor parallel machinery lines for surface finishing, polishing, and custom dimensioning.'
    },
    {
      num: '05',
      title: 'Quality Inspection & Grading',
      icon: CheckCircle2,
      image: 'images/polish.jpeg',
      tagline: 'Surface & Dimension Audit',
      description: 'Finished slabs are meticulously inspected by our floor technicians for surface consistency, thickness accuracy, and edge quality.'
    },
    {
      num: '06',
      title: 'Stacked Slab Storage & Dispatch',
      icon: Truck,
      image: 'images/pack.jpeg',
      tagline: 'Organized Inventory & Transport Loading',
      description: 'Finished slabs are stacked securely in our indoor warehouse bays, ready for safe container loading and global project dispatch.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-stone-950 text-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              Inside Our Manufacturing Plant
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-stone-100">
              Factory Processing Workflow
            </h2>
          </div>
          <p className="text-stone-300 text-sm max-w-md">
            From outdoor block yards and overhead gantry cranes to indoor bridge cutting saws and stacked inventory bays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-3">
            {stages.map((stage, idx) => {
              const IconComponent = stage.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={stage.num}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded transition-all flex items-center justify-between border ${
                    isActive
                      ? 'bg-stone-900 border-amber-500/60 shadow-lg shadow-amber-900/10'
                      : 'bg-stone-950/60 border-stone-850 hover:border-stone-800 hover:bg-stone-900/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-bold px-2 py-1 rounded ${
                      isActive ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-300'
                    }`}>
                      {stage.num}
                    </span>
                    <div>
                      <h3 className={`text-sm font-semibold uppercase tracking-wider ${
                        isActive ? 'text-amber-400' : 'text-stone-300'
                      }`}>
                        {stage.title}
                      </h3>
                      <p className="text-xs text-stone-300 hidden sm:block">{stage.tagline}</p>
                    </div>
                  </div>
                  <IconComponent className={`w-5 h-5 ${isActive ? 'text-amber-400' : 'text-stone-300'}`} />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-lg p-6 sm:p-8 relative min-h-[420px] flex flex-col justify-between">
            <div>
              <div className="aspect-video w-full overflow-hidden rounded-md mb-6 relative">
                <img
                  src={stages[activeStep].image}
                  alt={stages[activeStep].title}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded text-amber-400 text-xs font-mono border border-amber-500/30">
                  FACTORY STAGE {stages[activeStep].num} OF 06
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold uppercase tracking-wide text-stone-100 mb-2">
                {stages[activeStep].title}
              </h3>
              <p className="text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
                {stages[activeStep].tagline}
              </p>
              <p className="text-stone-300 text-sm leading-relaxed">
                {stages[activeStep].description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800 flex justify-between items-center text-xs text-stone-300">
              <span>Plant Floor Operations</span>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % stages.length)}
                className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold uppercase tracking-wider"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};