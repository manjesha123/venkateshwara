import React, { useState } from 'react';
import { Enquiry, Product } from '../types';
import { X, Lock, Database, Search, Edit3, Trash2, CheckCircle, Clock } from 'lucide-react';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  enquiries: Enquiry[];
  products: Product[];
  onUpdateEnquiryStatus: (id: string, status: Enquiry['status']) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  enquiries,
  products,
  onUpdateEnquiryStatus,
}) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'enquiries' | 'inventory'>('enquiries');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'vanguard2026' || passcode === 'admin') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid Factory Security Key! Try "vanguard2026"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md">
      <div className="bg-stone-900 border border-stone-800 rounded-xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-6 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-amber-500/10 border border-amber-500/30 text-amber-500">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-stone-100 uppercase tracking-wider">
                Factory CRM & Operations Dashboard
              </h2>
              <p className="text-[10px] font-mono text-stone-300">
                Authorized Personnel Only • Vanguard Internal Database
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white bg-stone-900 border border-stone-800 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isAuthenticated ? (
          /* Security Passcode Modal */
          <div className="flex-1 flex items-center justify-center p-6">
            <form onSubmit={handleLogin} className="max-w-sm w-full bg-stone-950 p-8 rounded-lg border border-stone-800 space-y-4 text-center">
              <Lock className="w-10 h-10 text-amber-500 mx-auto" />
              <div>
                <h3 className="text-stone-100 font-serif font-bold uppercase text-base">Security Portal Login</h3>
                <p className="text-stone-300 text-xs mt-1">Enter security key (Default: <code className="text-amber-400 font-mono">vanguard2026</code>)</p>
              </div>

              <input
                type="password"
                placeholder="Enter Staff Key..."
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded px-4 py-2.5 text-stone-200 text-xs font-mono text-center focus:border-amber-500 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded"
              >
                Authenticate
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Admin Views */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* Nav Sub-tabs */}
            <div className="bg-stone-950 px-6 py-3 border-b border-stone-800 flex items-center gap-4">
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`text-xs uppercase font-mono tracking-wider px-4 py-2 rounded transition-all ${
                  activeTab === 'enquiries'
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'text-stone-400 hover:text-stone-200 bg-stone-900'
                }`}
              >
                B2B Lead Enquiries ({enquiries.length})
              </button>
              <button
                onClick={() => setActiveTab('inventory')}
                className={`text-xs uppercase font-mono tracking-wider px-4 py-2 rounded transition-all ${
                  activeTab === 'inventory'
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'text-stone-400 hover:text-stone-200 bg-stone-900'
                }`}
              >
                Live Catalog Inventory ({products.length})
              </button>
            </div>

            {/* Tab Contents */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === 'enquiries' && (
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-stone-950 text-stone-300 font-mono uppercase text-[10px] border-b border-stone-800">
                        <tr>
                          <th className="p-3">Ref ID / Date</th>
                          <th className="p-3">Customer & Firm</th>
                          <th className="p-3">Granite Variety</th>
                          <th className="p-3">Qty (SqFt)</th>
                          <th className="p-3">Destination</th>
                          <th className="p-3">Status</th>
                          <th className="p-3">Update</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-800">
                        {enquiries.map((enq) => (
                          <tr key={enq.id} className="hover:bg-stone-950/50">
                            <td className="p-3 font-mono">
                              <span className="text-amber-400 font-bold block">{enq.id}</span>
                              <span className="text-stone-300 text-[10px]">{enq.date}</span>
                            </td>
                            <td className="p-3">
                              <p className="font-semibold text-stone-200">{enq.customerName}</p>
                              <p className="text-stone-300 text-[10px]">{enq.companyName}</p>
                              <p className="text-stone-300 text-[10px]">{enq.email}</p>
                            </td>
                            <td className="p-3 text-stone-200 font-medium">{enq.productRequested}</td>
                            <td className="p-3 font-mono text-stone-300">{enq.quantitySqFt.toLocaleString()} sqft</td>
                            <td className="p-3 text-stone-300">{enq.deliveryLocation}</td>
                            <td className="p-3">
                              <span
                                className={`px-2 py-1 rounded text-[10px] font-mono uppercase font-bold ${
                                  enq.status === 'New'
                                    ? 'bg-amber-950 text-amber-400 border border-amber-500/30'
                                    : enq.status === 'Quoted'
                                    ? 'bg-blue-950 text-blue-400 border border-blue-500/30'
                                    : 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                                }`}
                              >
                                {enq.status}
                              </span>
                            </td>
                            <td className="p-3">
                              <select
                                value={enq.status}
                                onChange={(e) =>
                                  onUpdateEnquiryStatus(enq.id, e.target.value as Enquiry['status'])
                                }
                                className="bg-stone-950 border border-stone-800 rounded text-[10px] font-mono text-stone-300 px-2 py-1"
                              >
                                <option value="New">New</option>
                                <option value="Contacted">Contacted</option>
                                <option value="Quoted">Quoted</option>
                                <option value="Converted">Converted</option>
                                <option value="Closed">Closed</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'inventory' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {products.map((p) => (
                    <div key={p.id} className="bg-stone-950 border border-stone-800 p-4 rounded flex gap-4">
                      <img src={p.image} alt={p.name} className="w-20 h-20 object-cover rounded" />
                      <div className="flex-1 text-xs">
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif font-bold text-stone-200 uppercase">{p.name}</h4>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${p.inStock ? 'bg-emerald-950 text-emerald-400' : 'bg-red-950 text-red-400'}`}>
                            {p.inStock ? 'IN STOCK' : 'OUT OF STOCK'}
                          </span>
                        </div>
                        <p className="text-stone-300 text-[10px] mt-1">{p.origin}</p>
                        <p className="text-stone-300 text-[10px] mt-1">Color: {p.color}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
