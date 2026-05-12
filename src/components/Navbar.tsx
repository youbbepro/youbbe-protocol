import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hub', href: '#hub' },
    { name: 'Págs', href: '#pay' },
    { name: 'Vida', href: '#life' },
    { name: 'Criadores', href: '#creators' },
    { name: 'Viagem', href: '#travel' },
    { name: 'IA', href: '#ai' },
    { name: 'Token', href: '#token' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6",
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#">
          <Logo size="md" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8 text-[11px] font-bold tracking-[0.2em] text-slate-500">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-ybb-pink transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-ybb-pink/30 transition-colors group">
            <div className="w-2 h-2 rounded-full bg-ybb-pink shadow-[0_0_8px_#ff3366] animate-pulse"></div>
            <span className="text-xs font-mono text-slate-300 group-hover:text-white transition-colors cursor-help">(YOUB.): $0.4281</span>
          </div>

          <button className="bg-ybb-pink text-white px-8 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all uppercase flex items-center gap-2 group shadow-[0_0_20px_rgba(255,51,102,0.3)]">
            Conectar
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-zinc-400 hover:text-white border-b border-white/5 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-white text-black py-4 rounded-xl font-bold">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
