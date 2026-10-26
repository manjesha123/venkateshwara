import React from 'react';
import { Layers, MapPin, Phone, Mail, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-850 text-stone-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-stone-850">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-amber-600 flex items-center justify-center text-stone-950 font-bold">
                <Layers className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-serif text-lg font-bold tracking-wider text-stone-100 uppercase">
                SRI <span className="text-amber-500">Venkateshwara</span>
              </span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Leading processor and bulk exporter of high-density natural granite slabs, tiles, and monument blocks from Karnataka & Andhra Pradesh quarries.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-serif text-xs uppercase tracking-widest text-stone-200 font-bold mb-4">
              Factory Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home Showcase</a></li>
              <li><a href="#process" className="hover:text-amber-400 transition-colors">6-Stage Processing</a></li>
              <li><a href="#collection" className="hover:text-amber-400 transition-colors">Granite Slab Catalog</a></li>
              <li><a href="#machinery" className="hover:text-amber-400 transition-colors">Machinery & Specs</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Global Project Portfolio</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-xs uppercase tracking-widest text-stone-200 font-bold mb-4">
              Manufacturing Unit
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Plot 42-45, KIADB Industrial Area, Jigani, Bengaluru, Karnataka - 560105, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+91 (80) 4900-8800 / +91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>exports@vanguardgranite.com</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-serif text-xs uppercase tracking-widest text-stone-200 font-bold mb-4">
              Export Compliance
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed mb-4">
              Certified ISO 9001:2015, CE Quality Certified, FIGSI Member, & ISPM-15 Fumigation Compliant.
            </p>
            <div className="font-mono text-[10px] text-amber-500/80 bg-stone-900 p-2 rounded border border-stone-850">
              IEC NO: 0702008912 • GSTIN: 29AAAAA0000A1Z5
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-300 gap-4">
          <p>© 2026 SRI Venkateshwara Granite Processing & Manufacturing Factory. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Export</a>
            <a href="#" className="hover:text-stone-300">Quality Certificate</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
