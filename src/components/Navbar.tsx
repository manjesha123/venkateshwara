import React, { useState, useEffect } from 'react';
import { Layers, Menu, X, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onNavigateToContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Process', href: '#process' },
    { label: 'Granite Collection', href: '#collection' },
    { label: 'Machinery', href: '#machinery' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-stone-950/80 via-stone-950/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-amber-600 to-amber-900 flex items-center justify-center shadow-lg shadow-amber-900/30 border border-amber-500/40 group-hover:border-amber-400 transition-all">
            <Layers className="w-5 h-5 text-stone-950 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-wider text-stone-100 group-hover:text-amber-400 transition-colors uppercase">
              SRI <span className="text-amber-500 font-normal">Venkateswara</span>
            </span>
            <span className="text-[9px] tracking-widest text-stone-400 uppercase font-mono">
              Processing & Export Factory
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-stone-300 hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-500 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onNavigateToContact}
            className="text-xs uppercase tracking-wider font-semibold text-stone-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 px-5 py-2.5 rounded shadow-lg shadow-amber-900/20 hover:shadow-amber-500/20 transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onNavigateToContact}
            className="text-xs uppercase font-medium text-amber-400 border border-amber-500/40 px-3 py-1.5 rounded"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-stone-300 hover:text-white p-2"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-stone-300 hover:text-amber-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};