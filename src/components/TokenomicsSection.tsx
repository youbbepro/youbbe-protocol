import React from 'react';
import { motion } from 'motion/react';
import { TOKENOMICS } from '@/src/types';
import { Coins, TrendingUp } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function TokenomicsSection() {
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
                className="text-[10px] font-bold text-ybb-amber tracking-[0.4em] mb-4 uppercase"
              >
                O Ativo Central
              </motion.h4>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-display font-bold text-white leading-tight uppercase"
              >
                Youbbe Token (YOUB.)
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
              <div className="text-[10px] text-slate-500 font-bold tracking-[0.3em] uppercase text-center relative z-10">Suporte Total Fixo</div>
              <div className="text-4xl md:text-5xl font-mono text-white text-center tracking-tighter relative z-10">{TOKENOMICS.totalSupply}</div>
            </motion.div>

            <div className="space-y-4">
              <motion.h5 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase"
              >
                Estratégia do Ecossistema
              </motion.h5>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-sm text-slate-400 bg-white/5 p-6 rounded-2xl border-l-2 border-ybb-pink leading-relaxed font-light"
              >
                A Youbbe poderá utilizar parte de sua receita operacional para programas de incentivo e fortalecimento do ecossistema, incluindo iniciativas de cashback, recompensas, liquidez operacional e expansão da utilidade do token (YOUB.), sempre de forma estratégica, variável e não garantida.
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
              Adquirir Token (YOUB.)
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
              <h4 className="text-[10px] font-bold text-slate-500 tracking-[0.2em] mb-10 uppercase">Distribuição do Token</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {TOKENOMICS.distribution.map((item, i) => (
                  <div key={item.label} className="space-y-3">
                    <div className="flex justify-between items-center text-[11px] tracking-wider uppercase font-medium">
                      <span className="text-slate-400">{item.label}</span>
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
                  <h4 className="text-xl font-bold uppercase tracking-tight">Sistema de Taxas</h4>
                </div>
                <p className="text-xs text-slate-500 mb-6 uppercase tracking-wider font-bold">Cada transação poderá ter taxa de até 5%, distribuída em:</p>
                <div className="space-y-4">
                  {[
                    { label: "Liquidez", value: "1%" },
                    { label: "Queima", value: "1%" },
                    { label: "Fundo social", value: "1%" },
                    { label: "Ecossistema", value: "2%" },
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
                  <h4 className="text-xl font-bold uppercase tracking-tight">Mecanismo de Liquidez</h4>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">A Youbbe poderá destinar:</p>
                    <p className="text-lg font-bold text-indigo-400">Até 1% da receita operacional líquida</p>
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
