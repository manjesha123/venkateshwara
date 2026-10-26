import React from 'react';
import { Product } from '../types';
import { X, Check, ShieldCheck, MapPin, Layers } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onRequestQuote }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-stone-900 border border-stone-800 rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-stone-950/80 hover:bg-stone-800 text-stone-400 hover:text-white p-2 rounded-full border border-stone-800 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Image Showcase */}
        <div className="md:w-1/2 relative bg-stone-950">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover min-h-[280px]"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-stone-950/80 backdrop-blur-md p-3 rounded border border-stone-800 text-xs">
            <span className="text-amber-500 font-mono uppercase block text-[10px]">Quarry Location</span>
            <span className="text-stone-200 font-semibold">{product.origin}</span>
          </div>
        </div>

        {/* Right Product Specs */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="inline-block px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-[10px] font-mono uppercase tracking-wider mb-2">
              {product.category} Granite
            </div>

            <h2 className="font-serif text-2xl font-bold uppercase text-stone-100 mb-2">
              {product.name}
            </h2>

            <p className="text-stone-300 text-xs leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Technical Specifications Table */}
            <div className="bg-stone-950 p-4 rounded border border-stone-800 space-y-2 mb-6">
              <p className="text-[10px] font-mono text-amber-500 uppercase tracking-widest border-b border-stone-800 pb-2">
                Certified Technical Properties
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-stone-300 block text-[10px]">Compressive Strength:</span>
                  <span className="text-stone-200 font-mono font-semibold">{product.technicalSpecs.compressiveStrength}</span>
                </div>
                <div>
                  <span className="text-stone-300 block text-[10px]">Water Absorption:</span>
                  <span className="text-stone-200 font-mono font-semibold">{product.technicalSpecs.waterAbsorption}</span>
                </div>
                <div>
                  <span className="text-stone-300 block text-[10px]">Bulk Density:</span>
                  <span className="text-stone-200 font-mono font-semibold">{product.technicalSpecs.density}</span>
                </div>
                <div>
                  <span className="text-stone-300 block text-[10px]">Flexural Strength:</span>
                  <span className="text-stone-200 font-mono font-semibold">{product.technicalSpecs.flexuralStrength}</span>
                </div>
              </div>
            </div>

            <div className="space-y-1 text-xs mb-6">
              <p className="text-stone-300"><span className="text-stone-300">Available Thicknesses:</span> {product.thickness}</p>
              <p className="text-stone-300"><span className="text-stone-300">Finishes:</span> {product.finishes.join(', ')}</p>
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-stone-800">
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product.name);
              }}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded transition-all"
            >
              Request Container Pricing
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
