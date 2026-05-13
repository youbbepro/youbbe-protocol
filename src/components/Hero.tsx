import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/src/lib/i18n';

import Logo from './Logo';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[110vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Ambience & Lasers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-ybb-pink/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-700" />
        
        {/* Animated Tech Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[20%] left-0 w-full h-[1px] bg-linear-to-r from-transparent via-ybb-pink to-transparent animate-shimmer" />
          <div className="absolute top-[80%] left-0 w-full h-[1px] bg-linear-to-r from-transparent via-ybb-pink to-transparent animate-shimmer" style={{ animationDelay: '4s' }} />
          
          {/* Laser Scanning Beams */}
          <div className="absolute top-0 right-[15%] w-[2px] h-full bg-linear-to-b from-transparent via-ybb-pink to-transparent animate-laser-scan blur-[1px]" />
          <div className="absolute top-0 left-[15%] w-[2px] h-full bg-linear-to-b from-transparent via-indigo-500 to-transparent animate-laser-scan blur-[1px]" style={{ animationDelay: '-4s' }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.4em] text-ybb-pink mb-10 shadow-[0_0_15px_rgba(255,51,102,0.1)] backdrop-blur-md"
        >
          <div className="flex gap-1.5 items-center">
            <span className="w-1 h-1 bg-ybb-pink rounded-full animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-ybb-pink status-glow" />
          </div>
          {t('label.protocol_v')}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex justify-center"
        >
          <div className="flex flex-col items-center relative">
            {/* Structural Accents */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border-t border-l border-white/20 rounded-tl-3xl" />
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b border-r border-white/20 rounded-br-3xl" />
            
            <Logo size="xl" showText={true} />
            
            <div className="h-1 w-48 bg-linear-to-r from-transparent via-ybb-pink to-transparent opacity-50 mt-8" />
            <div className="flex items-center gap-4 mt-6">
               <span className="w-2 h-2 bg-ybb-pink rounded-full blur-[2px]" />
               <span className="text-sm md:text-lg font-thin text-slate-500 tracking-[1em] uppercase">{t('nav.ecosystem')} Global</span>
               <span className="w-2 h-2 bg-ybb-pink rounded-full blur-[2px]" />
            </div>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-400 font-light leading-relaxed mb-16 overflow-hidden">
          {t('hero.subtitle').split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
              className="inline-block mr-[0.25em]"
            >
               {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="w-full sm:w-auto px-10 py-5 bg-ybb-pink text-white font-bold text-xs tracking-[0.3em] uppercase rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(255,51,102,0.4)]">
            {t('hero.cta.primary')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-10 py-5 glass text-white font-bold text-xs tracking-[0.3em] uppercase rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            {t('nav.docs')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
