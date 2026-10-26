import React, { useState } from 'react';
import { Product, Enquiry } from '../types';
import { X, CheckCircle2, Calculator, Send, FileCheck } from 'lucide-react';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  initialProduct?: string;
  onAddEnquiry: (enquiry: Enquiry) => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  products,
  initialProduct = '',
  onAddEnquiry,
}) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [generatedId, setGeneratedId] = useState('');

  // Form State
  const [customerName, setCustomerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [productRequested, setProductRequested] = useState(initialProduct || products[0]?.name || '');
  const [quantitySqFt, setQuantitySqFt] = useState<number>(2500);
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `VG-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newEnquiry: Enquiry = {
      id: newId,
      date: new Date().toISOString().split('T')[0],
      customerName,
      companyName,
      email,
      phone,
      productRequested,
      quantitySqFt: Number(quantitySqFt),
      deliveryLocation,
      status: 'New',
      notes,
    };

    onAddEnquiry(newEnquiry);
    setGeneratedId(newId);
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  // Quick weight calculation: ~15 lbs per sq ft for 20mm granite
  const estimatedWeightTons = ((quantitySqFt * 14.5) / 2204.62).toFixed(1);
  const estimatedContainers = Math.ceil(Number(estimatedWeightTons) / 27); // 27 tons per 20ft container

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-stone-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-stone-900 border-l border-stone-800 w-full max-w-xl h-full flex flex-col justify-between p-6 sm:p-8 overflow-y-auto">
        
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-stone-800 mb-6">
            <div>
              <p className="text-amber-500 font-mono text-[10px] uppercase tracking-widest">
                Factory Direct B2B Pricing
              </p>
              <h2 className="font-serif text-2xl font-bold uppercase text-stone-100">
                Request Quote
              </h2>
            </div>
            <button
              onClick={resetAndClose}
              className="p-2 text-stone-400 hover:text-white rounded bg-stone-950 border border-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Product Selection & Quantity */}
              <div className="space-y-4">
                <label className="block">
                  <span className="text-xs uppercase font-mono tracking-wider text-stone-300 block mb-1">
                    Select Granite Variety *
                  </span>
                  <select
                    value={productRequested}
                    onChange={(e) => setProductRequested(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-3 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                    required
                  >
                    {products.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.color})
                      </option>
                    ))}
                  </select>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs uppercase font-mono tracking-wider text-stone-300 block mb-1">
                      Quantity (Square Feet) *
                    </span>
                    <input
                      type="number"
                      min="100"
                      value={quantitySqFt}
                      onChange={(e) => setQuantitySqFt(Number(e.target.value))}
                      className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-3 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs uppercase font-mono tracking-wider text-stone-300 block mb-1">
                      Delivery Destination Port/City *
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. Hamburg Port, Germany"
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-3 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                      required
                    />
                  </label>
                </div>

                {/* Instant Container Weight Estimator */}
                <div className="p-4 bg-stone-950 rounded border border-stone-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-stone-300">
                    <Calculator className="w-4 h-4 text-amber-500" />
                    <span>Freight Est:</span>
                  </div>
                  <div className="text-amber-400 font-bold">
                    ~{estimatedWeightTons} Metric Tons ({estimatedContainers} x 20ft Container)
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 pt-4 border-t border-stone-800">
                <p className="text-xs font-mono text-amber-500 uppercase tracking-widest">
                  Company & Buyer Information
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs uppercase font-mono text-stone-300 block mb-1">
                      Contact Name *
                    </span>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-2.5 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs uppercase font-mono text-stone-300 block mb-1">
                      Company / Firm Name *
                    </span>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-2.5 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs uppercase font-mono text-stone-300 block mb-1">
                      Corporate Email *
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-2.5 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                    />
                  </label>

                  <label className="block">
                    <span className="text-xs uppercase font-mono text-stone-300 block mb-1">
                      Phone / WhatsApp *
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-2.5 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs uppercase font-mono text-stone-300 block mb-1">
                    Special Cutting / Edge Finishing Specs
                  </span>
                  <textarea
                    rows={3}
                    placeholder="Specify slab thickness (e.g. 20mm/30mm), edge profile (e.g. Bullnose, Miter), or finish."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-2.5 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold uppercase text-xs tracking-widest rounded shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quotation Request</span>
              </button>
            </form>
          ) : (
            /* Success View */
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-950 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-amber-500 uppercase tracking-widest block mb-1">
                  Enquiry Reference Code
                </span>
                <span className="font-mono text-2xl font-bold text-stone-100 bg-stone-950 px-4 py-2 rounded border border-stone-800 inline-block">
                  {generatedId}
                </span>
              </div>

              <p className="text-stone-300 text-sm max-w-md mx-auto">
                Thank you, <strong className="text-stone-100">{customerName}</strong>. Our industrial export sales division has received your enquiry for <strong className="text-amber-400">{productRequested}</strong> ({quantitySqFt} sq ft).
              </p>

              <div className="p-4 bg-stone-950 border border-stone-800 rounded text-left text-xs text-stone-300 space-y-2">
                <p><strong>Status:</strong> Logged in Factory CRM Database</p>
                <p><strong>Estimated Response:</strong> Within 4 Business Hours</p>
                <p><strong>PDF Quote Sheet:</strong> Sent to {email}</p>
              </div>

              <button
                onClick={resetAndClose}
                className="w-full py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold uppercase tracking-wider rounded transition-all"
              >
                Close Window
              </button>
            </div>
          )}
        </div>

        <div className="pt-6 border-t border-stone-800 text-[10px] text-stone-300 font-mono text-center">
          Vanguard Granite Export Division • CIF & FOB Port Rates
        </div>
      </div>
    </div>
  );
};
