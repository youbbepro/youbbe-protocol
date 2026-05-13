import React from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { Pillar } from '@/src/types';
import { cn } from '@/src/lib/utils';
import { useTranslation } from '@/src/lib/i18n';

interface PillarSectionProps {
  pillar: Pillar;
  index: number;
  key?: string;
}

export default function PillarSection({ pillar, index }: PillarSectionProps) {
  const { t } = useTranslation();
  const IconComponent = (LucideIcons as any)[pillar.icon] || LucideIcons.HelpCircle;
  const isEven = index % 2 === 0;

  const colorStyles: Record<string, { text: string, bg: string, border: string, shadow: string, glow: string, label: string }> = {
    blue: { 
      text: "text-indigo-400", 
      bg: "bg-indigo-500/5", 
      border: "border-indigo-500/20", 
      shadow: "shadow-indigo-500/10", 
      glow: "from-indigo-500",
      label: "HUB"
    },
    emerald: { 
      text: "text-emerald-400", 
      bg: "bg-emerald-500/5", 
      border: "border-emerald-500/20", 
      shadow: "shadow-emerald-500/10", 
      glow: "from-emerald-500",
      label: t('nav.pay') || "PAY"
    },
    rose: { 
      text: "text-orange-400", 
      bg: "bg-orange-500/5", 
      border: "border-orange-500/20", 
      shadow: "shadow-orange-500/10", 
      glow: "from-orange-500",
      label: t('nav.life') || "LIFE"
    },
    purple: { 
      text: "text-pink-400", 
      bg: "bg-pink-500/5", 
      border: "border-pink-500/20", 
      shadow: "shadow-pink-500/10", 
      glow: "from-pink-500",
      label: t('nav.creators') || "CREATORS"
    },
    cyan: { 
      text: "text-blue-400", 
      bg: "bg-blue-500/5", 
      border: "border-blue-500/20", 
      shadow: "shadow-blue-500/10", 
      glow: "from-blue-500",
      label: t('nav.travel') || "TRAVEL"
    },
    amber: { 
      text: "text-violet-400", 
      bg: "bg-violet-500/5", 
      border: "border-violet-500/20", 
      shadow: "shadow-violet-500/10", 
      glow: "from-violet-500",
      label: t('nav.ai') || "AI"
    },
  };

  const style = colorStyles[pillar.color] || colorStyles.blue;

  const features = [
    t(`pillar.${pillar.id}.feat1`),
    t(`pillar.${pillar.id}.feat2`),
    t(`pillar.${pillar.id}.feat3`),
    t(`pillar.${pillar.id}.feat4`),
  ];

  const utilities = [
    t(`pillar.${pillar.id}.util1`),
    t(`pillar.${pillar.id}.util2`),
    t(`pillar.${pillar.id}.util3`),
    t(`pillar.${pillar.id}.util4`),
  ];

  return (
    <section 
      id={pillar.id}
      className="py-24 md:py-32 relative border-b border-white/5"
    >
      <div className="container mx-auto px-6">
        <div className={cn(
          "flex flex-col md:flex-row items-center gap-12 lg:gap-24",
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        )}>
          {/* Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 card-gradient rounded-[2.5rem]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn("mb-6 text-[10px] font-bold tracking-[0.4em] uppercase", style.text)}
            >
              {style.label}
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              {t(`pillar.${pillar.id}.title`)}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 font-light mb-12"
            >
              {t(`pillar.${pillar.id}.desc`)}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <motion.h4 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-[10px] font-bold uppercase tracking-widest text-slate-600"
                >
                  {t('pillar.view_features')}
                </motion.h4>
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <div className={cn("w-1 h-1 rounded-full mt-2 shrink-0", style.text, "bg-current")} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-[10px] text-ybb-pink/80 font-bold tracking-[0.3em] uppercase block mb-3"
                >
                   {t('pillar.token_utility')} (YOUB.)
                </motion.span>
                <ul className="space-y-1">
                   {utilities.map((utility, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      className="text-[11px] text-zinc-500 flex items-center gap-2"
                    >
                       <LucideIcons.Zap size={10} className="text-ybb-pink" />
                       {utility}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-8 py-3 bg-white text-black rounded-full font-bold text-xs tracking-widest uppercase hover:bg-ybb-pink hover:text-white transition-all shadow-lg text-center"
              >
                {t('nav.ecosystem')}
              </motion.button>
            </div>
          </div>

          {/* Visual/Image Placeholder */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className={cn(
                "absolute inset-0 border border-white/5 rounded-[3rem] animate-[spin_40s_linear_infinite] bg-linear-to-br to-transparent",
                style.glow
              )} />
              
              <div className="absolute inset-12 glass rounded-[2rem] flex items-center justify-center overflow-hidden">
                <div className={cn(
                  "absolute inset-0 opacity-10 bg-linear-to-br to-black",
                  style.glow
                )} />
                <IconComponent size={100} strokeWidth={1} className={cn("relative z-10 opacity-30", style.text)} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
