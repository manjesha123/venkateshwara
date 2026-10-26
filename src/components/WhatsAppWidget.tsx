import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const whatsappNumber = '917259789414'; // Representative Indian Granite Export Line
  const defaultText = encodeURIComponent(
    'Hello Vanguard Granite Factory Team. I am interested in inquiring about bulk granite container shipments.'
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultText}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3 sm:p-4 rounded-full shadow-2xl shadow-emerald-900/50 flex items-center gap-2 group transition-all duration-300 border border-emerald-400/40"
      title="Direct Factory WhatsApp Line"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs uppercase font-bold tracking-wider">
        Chat with Factory Sales
      </span>
    </a>
  );
};
