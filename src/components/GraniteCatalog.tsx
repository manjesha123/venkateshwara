import React, { useState } from 'react';
import { Product, GraniteCategory, SurfaceFinish } from '../types';
import { Search, Filter, Eye, Check, ExternalLink, PackageCheck } from 'lucide-react';

interface GraniteCatalogProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onRequestQuoteForProduct: (productName: string) => void;
}

export const GraniteCatalog: React.FC<GraniteCatalogProps> = ({
  products,
  onSelectProduct,
  onRequestQuoteForProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GraniteCategory>('All');
  const [selectedFinish, setSelectedFinish] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: GraniteCategory[] = ['All', 'Black', 'White & Grey', 'Red & Pink', 'Exotic'];
  const finishes: string[] = ['All', 'Polished', 'Honed', 'Flamed', 'Leathered'];

  const filteredProducts = products.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesFinish = selectedFinish === 'All' || item.finishes.includes(selectedFinish as SurfaceFinish);
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesFinish && matchesSearch;
  });

  return (
    <section id="collection" className="py-24 bg-stone-900 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              Factory Direct Inventory
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-stone-100">
              Granite Collection
            </h2>
          </div>
          <p className="text-stone-300 text-sm max-w-md">
            Explore our prime selection of natural stone blocks processed into polished, honed, and flamed slabs ready for immediate container dispatch.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-stone-950 p-4 sm:p-6 rounded-lg border border-stone-800 mb-10 flex flex-col lg:flex-row gap-4 justify-between items-stretch">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded text-xs uppercase font-semibold tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-stone-950 shadow-md'
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search and Finish Filter */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-300" />
              <input
                type="text"
                placeholder="Search color, origin, name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-stone-900 border border-stone-800 text-stone-200 text-xs rounded pl-9 pr-4 py-2.5 w-full sm:w-60 focus:outline-none focus:border-amber-500"
              />
            </div>

            <select
              value={selectedFinish}
              onChange={(e) => setSelectedFinish(e.target.value)}
              className="bg-stone-900 border border-stone-800 text-stone-300 text-xs rounded px-3 py-2.5 focus:outline-none focus:border-amber-500"
            >
              <option value="All">All Finishes</option>
              {finishes.filter(f => f !== 'All').map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-stone-950 border border-stone-800 hover:border-amber-500/50 rounded-lg overflow-hidden transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image & Quick Badge */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    {product.inStock ? (
                      <span className="bg-emerald-950/90 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded backdrop-blur-md flex items-center gap-1">
                        <PackageCheck className="w-3 h-3" /> Stock Ready
                      </span>
                    ) : (
                      <span className="bg-amber-950/90 text-amber-400 border border-amber-500/30 text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded backdrop-blur-md">
                        On Quarry Order
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-stone-300 border border-stone-800">
                    {product.color}
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6">
                  <p className="text-[10px] uppercase font-mono text-amber-500 tracking-widest mb-1">
                    {product.origin}
                  </p>
                  <h3 className="font-serif text-xl font-bold uppercase text-stone-100 group-hover:text-amber-400 transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-stone-300 text-xs line-clamp-2 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Surface Finishes tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.finishes.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] bg-stone-900 text-stone-300 px-2 py-0.5 rounded border border-stone-800"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-2 border-t border-stone-900 mt-2">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="flex-1 text-center py-2.5 bg-stone-900 hover:bg-stone-850 text-stone-200 rounded text-xs uppercase font-semibold border border-stone-800 transition-all flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-500" />
                  <span>Specs</span>
                </button>
                <button
                  onClick={() => onRequestQuoteForProduct(product.name)}
                  className="flex-1 text-center py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded text-xs uppercase font-bold transition-all"
                >
                  Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-stone-950 border border-stone-800 rounded-lg">
            <p className="text-stone-300 font-serif text-lg mb-2">No Granite Varieties Match Your Filters</p>
            <p className="text-stone-300 text-xs">Try clearing search keywords or selecting all categories.</p>
          </div>
        )}

      </div>
    </section>
  );
};
