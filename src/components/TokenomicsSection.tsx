import React from 'react';
import { motion } from 'motion/react';
import { TOKENOMICS } from '@/src/types';
import { Coins, TrendingUp } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useTranslation } from '@/src/lib/i18n';

export default function TokenomicsSection() {
  const { t } = useTranslation();

  const distLabels: Record<string, string> = {
    "Ecossistema": "tokenomics.dist.ecosystem",
    "Liquidez": "tokenomics.dist.liquidity",
    "Tesouraria": "tokenomics.dist.treasury",
    "Equipe": "tokenomics.dist.team",
    "Marketing": "tokenomics.dist.marketing",
    "Fundo Social": "tokenomics.dist.social_fund",
    "Reserva Estratégica": "tokenomics.dist.strategic_reserve",
    "1ª Pré-venda": "tokenomics.dist.presale1",
    "2ª Pré-venda": "tokenomics.dist.presale2",
    "3ª Pré-venda": "tokenomics.dist.presale3",
  };

  return (
    <section id="token" className="py-24 md:py-32 border-b border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Header Info */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <motion.h4 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[9px] font-bold text-ybb-amber tracking-[0.4em] mb-4 uppercase"
              >
                {t('section.tokenomics.badge')}
              </motion.h4>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-display font-bold text-white leading-tight uppercase"
              >
                Youbbe <span className="text-ybb-pink">Token</span> (YOUB.)
              </motion.h2>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 glass-pink rounded-[2.5rem] border-white/5 space-y-4 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ybb-pink/10 blur-3xl rounded-full" />
              <div className="text-[9px] text-slate-500 font-bold tracking-[0.3em] uppercase text-center relative z-10">{t('section.tokenomics.total_supply')}</div>
              <div className="text-2xl md:text-3xl font-mono text-white text-center tracking-tighter relative z-10">{TOKENOMICS.totalSupply}</div>
            </motion.div>

            <div className="space-y-4">
              <motion.h5 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase"
              >
                {t('section.tokenomics.strategy')}
              </motion.h5>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-sm text-slate-400 bg-white/5 p-6 rounded-2xl border-l-2 border-ybb-pink leading-relaxed font-light"
              >
                {t('section.tokenomics.strategy.desc')}
              </motion.div>
            </div>

            <motion.button 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-white text-black font-bold rounded-full text-xs tracking-[0.3em] hover:bg-ybb-pink hover:text-white transition-all uppercase shadow-lg"
            >
              {t('section.tokenomics.buy')}
            </motion.button>
          </div>

          {/* Metrics Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Distribution Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 glass-darker p-8 md:p-12 rounded-[3rem]"
            >
              <h4 className="text-[10px] font-bold text-slate-500 tracking-[0.2em] mb-10 uppercase">{t('section.tokenomics.distribution')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {TOKENOMICS.distribution.map((item, i) => (
                  <div key={item.label} className="space-y-3">
                    <div className="flex justify-between items-center text-[11px] tracking-wider uppercase font-medium">
                      <span className="text-slate-400">{t(distLabels[item.label] || item.label)}</span>
                      <span className="text-white font-bold">{item.percentage}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={cn(
                          "h-full rounded-full transition-all duration-1000",
                          i % 3 === 0 ? "bg-ybb-pink" : i % 3 === 1 ? "bg-indigo-500" : "bg-slate-400"
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mechanism Cards */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-[2.5rem] border border-white/5"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-ybb-pink/10 text-ybb-pink rounded-xl">
                    <Coins size={20} />
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tight">{t('section.tokenomics.fees')}</h4>
                </div>
                <p className="text-xs text-slate-500 mb-6 uppercase tracking-wider font-bold">{t('section.tokenomics.fees.desc')}</p>
                <div className="space-y-4">
                  {[
                    { label: t('tokenomics.dist.liquidity'), value: "1%" },
                    { label: t('section.tokenomics.fees.burn'), value: "1%" },
                    { label: t('section.tokenomics.fees.social'), value: "1%" },
                    { label: t('section.tokenomics.fees.ecosystem'), value: "2%" },
                  ].map((item, i) => (
                    <motion.div 
                      key={item.label} 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                    >
                      <span className="text-sm text-slate-300">{item.label}</span>
                      <span className="text-sm font-bold text-white">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
                    <TrendingUp size={20} />
                  </div>
                  <h4 className="text-xl font-bold uppercase tracking-tight">{t('section.tokenomics.buyback')}</h4>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{t('section.tokenomics.revenue_allocation')}</p>
                    <p className="text-lg font-bold text-indigo-400">{t('section.tokenomics.revenue_allocation.desc')}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-2xl text-center border border-white/5 hover:border-indigo-500/30 transition-colors">
                      <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Finalidade 1</p>
                      <p className="text-xs text-white font-medium">Recompra de tokens</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl text-center border border-white/5 hover:border-indigo-500/30 transition-colors">
                      <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Finalidade 2</p>
                      <p className="text-xs text-white font-medium">Injeção de liquidez</p>
                    </div>
                  </div>

                  <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-2xl space-y-2">
                    <div className="flex items-center gap-2 text-amber-500 text-[10px] font-bold uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
                      Importante
                    </div>
                    <ul className="text-[10px] text-amber-500/80 space-y-1 font-medium">
                      <li>• Não é garantia</li>
                      <li>• Não é distribuição de lucro</li>
                      <li>• É estratégia operacional</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
