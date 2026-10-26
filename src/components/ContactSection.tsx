import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    graniteType: 'Absolute Black Premium',
    quantity: '',
    message: ''
  });

  // Target WhatsApp phone number for factory sales (country code + number without + or spaces)
  const factoryWhatsAppNumber = '917259789414'; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the form inputs into a structured WhatsApp message
    const formattedMessage = 
`*NEW B2B ENQUIRY - VANGUARD GRANITE*
----------------------------------
👤 *Name:* ${formData.name}
🏢 *Company:* ${formData.company}
📞 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email}

🪨 *Granite Variety:* ${formData.graniteType}
📐 *Approx Quantity:* ${formData.quantity || 'Not specified'}

📝 *Project Details / Requirements:*
${formData.message}
----------------------------------
_Sent from Vanguard Granite Website_`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(formattedMessage);
    
    // Create WhatsApp Web / Mobile Deep Link
    const whatsappUrl = `https://wa.me/${factoryWhatsAppNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const directWhatsAppUrl = `https://wa.me/${factoryWhatsAppNumber}?text=${encodeURIComponent(
    'Hello Vanguard Granite Factory Team, I would like to discuss custom stone slabs and bulk project requirements.'
  )}`;

  return (
    <section id="contact" className="py-24 bg-stone-950 border-t border-stone-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
            Direct Communication & Logistics
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-stone-100 mb-4">
            Connect With Our Factory
          </h2>
          <p className="text-stone-300 text-sm">
            Fill out the project details below to chat instantly with our export sales division on WhatsApp or call our factory directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Phone, Quick WhatsApp & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-stone-900 border border-stone-800 rounded-lg p-6 space-y-6">
              
              {/* Direct Phone Call */}
              <a
                href="tel:+917259789414"
                className="flex items-start gap-4 p-4 rounded bg-stone-950 border border-stone-800 hover:border-amber-500/50 transition-all group"
              >
                <div className="p-3 bg-amber-500/10 text-amber-500 rounded group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-stone-300 uppercase tracking-widest block">Call Mobile / Direct Line</span>
                  <span className="text-stone-100 font-semibold text-base">+91 7259789414</span>
                  <span className="text-[11px] text-stone-300 block mt-0.5">Mon-Sat from 9:00 AM to 7:00 PM IST</span>
                </div>
              </a>

              {/* Quick WhatsApp Link */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded bg-emerald-950/80 border border-emerald-500/40 hover:bg-emerald-900 transition-all text-emerald-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-600 text-white rounded">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest block text-emerald-400">Quick Chat</span>
                    <span className="text-white font-bold text-sm">Open WhatsApp Directly</span>
                  </div>
                </div>
                <span className="text-xs font-mono bg-emerald-600/30 px-3 py-1.5 rounded border border-emerald-500/40 text-white">
                  Chat Now
                </span>
              </a>

              {/* Address Details */}
              <div className="flex items-start gap-4 p-4 rounded bg-stone-950 border border-stone-800">
                <div className="p-3 bg-amber-500/10 text-amber-500 rounded shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-stone-300 uppercase tracking-widest block">Processing Plant Address</span>
                  <span className="text-stone-200 text-xs leading-relaxed block font-medium mt-1">
                    Plot 42-45, KIADB Industrial Area, Jigani, Bengaluru, Karnataka - 560105, India
                  </span>
                  <a
                    href="https://maps.google.com/?q=Jigani+Industrial+Area+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs text-amber-400 hover:text-amber-300 uppercase font-mono tracking-wider underline underline-offset-4"
                  >
                    Open Google Maps Directions →
                  </a>
                </div>
              </div>

              {/* Email & Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-800 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>exports@srivenkateshwara.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Mon - Sat: 9:00 - 19:00</span>
                </div>
              </div>

            </div>

            {/* Google Map iframe */}
            <div className="bg-stone-900 border border-stone-800 rounded-lg overflow-hidden h-64 relative">
              <iframe
                title="Factory Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.045610487569!2d77.632!3d12.785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae412a00000001%3A0x123456789abcdef!2sJigani%20Industrial%20Area%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
              />
            </div>

          </div>

          {/* Right Column: Dynamic WhatsApp Form */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-lg p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono uppercase tracking-widest mb-3">
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  Direct WhatsApp Routing
                </div>
                <h3 className="font-serif text-2xl font-bold uppercase text-stone-100 mb-1">
                  Send Requirement to WhatsApp
                </h3>
                <p className="text-xs text-stone-300">
                  Fill in your project requirements. Clicking submit will automatically open WhatsApp with a formatted enquiry ready to send.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs uppercase font-mono text-stone-300 block mb-1">Your Name *</span>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-3 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-xs uppercase font-mono text-stone-300 block mb-1">Company / Firm *</span>
                  <input
                    type="text"
                    required
                    placeholder="Apex Construction Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-3 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs uppercase font-mono text-stone-300 block mb-1">Mobile / Phone *</span>
                  <input
                    type="tel"
                    required
                    placeholder="+91 7259789414"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-3 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-xs uppercase font-mono text-stone-300 block mb-1">Corporate Email *</span>
                  <input
                    type="email"
                    required
                    placeholder="john@apexarch.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-3 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs uppercase font-mono text-stone-300 block mb-1">Select Granite Variety</span>
                  <select
                    value={formData.graniteType}
                    onChange={(e) => setFormData({ ...formData, graniteType: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-3 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Absolute Black Premium">Absolute Black Premium</option>
                    <option value="Viscon White Imperial">Viscon White Imperial</option>
                    <option value="Imperial Red Royal">Imperial Red Royal</option>
                    <option value="Titanium Gold Matrix">Titanium Gold Matrix</option>
                    <option value="Steel Grey Classic">Steel Grey Classic</option>
                    <option value="Black Galaxy Starlight">Black Galaxy Starlight</option>
                    <option value="Custom Cut / Other">Custom Cut / Other</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-xs uppercase font-mono text-stone-300 block mb-1">Approx Quantity (Sq Ft / Containers)</span>
                  <input
                    type="text"
                    placeholder="e.g. 5,000 sq ft or 2 Containers"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-3 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-xs uppercase font-mono text-stone-300 block mb-1">Project Message & Specifications *</span>
                <textarea
                  rows={4}
                  required
                  placeholder="Specify slab thickness (e.g. 20mm/30mm), edge finish, and delivery location..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded px-4 py-3 text-xs text-stone-200 focus:border-amber-500 focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase text-xs tracking-widest rounded shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Send Enquiry via WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};