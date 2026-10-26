import React from 'react';
import { MapPin, Building2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Grand Horizon Tower Cladding',
      location: 'Dubai, UAE',
      granite: 'Absolute Black & Viscon White',
      scope: '28,000 sq ft Exterior Facade',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Monarch Luxury Resort Plaza',
      location: 'Maldives',
      granite: 'Steel Grey Flamed Paving',
      scope: '15,000 sq ft Outdoor Decking',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Apex Financial Center Lobby',
      location: 'Singapore',
      granite: 'Titanium Gold Custom Slabs',
      scope: 'Feature Walls & Bookmatched Flooring',
      image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-stone-900 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              Global Architectural Portfolio
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-stone-100">
              Stone That Shapes Spaces
            </h2>
          </div>
          <p className="text-stone-300 text-sm max-w-md">
            Our processed Indian granite is installed across high-density commercial towers, luxury hospitality projects, and civic infrastructure worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-stone-950 border border-stone-800 rounded-lg overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-amber-400 font-mono bg-stone-950/80 px-2.5 py-1 rounded backdrop-blur-sm border border-stone-800">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{proj.location}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-lg font-bold text-stone-100 uppercase mb-2">
                  {proj.title}
                </h3>
                <div className="space-y-1 text-xs text-stone-300">
                  <p><span className="text-stone-300">Granite Material:</span> {proj.granite}</p>
                  <p><span className="text-stone-300">Project Scope:</span> {proj.scope}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
