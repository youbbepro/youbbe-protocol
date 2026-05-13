import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert } from 'lucide-react';
import { useTranslation } from '@/src/lib/i18n';

export default function Disclaimer() {
  const { t } = useTranslation();

  return (
    <section className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <ShieldAlert className="text-ybb-pink" size={24} />
            <h2 className="text-xl font-bold tracking-[0.2em] uppercase text-white">{t('disclaimer.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[11px] leading-relaxed text-zinc-500 uppercase tracking-wider font-medium">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-zinc-300 font-bold tracking-widest text-[12px]">{t('disclaimer.nature.title')}</h3>
                <p>
                  {t('disclaimer.nature.text1')}
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>{t('disclaimer.nature.item1')}</li>
                  <li>{t('disclaimer.nature.item2')}</li>
                  <li>{t('disclaimer.nature.item3')}</li>
                  <li>{t('disclaimer.nature.item4')}</li>
                  <li>{t('disclaimer.nature.item5')}</li>
                  <li>{t('disclaimer.nature.item6')}</li>
                  <li>{t('disclaimer.nature.item7')}</li>
                </ul>
                <p>
                  {t('disclaimer.nature.text2')}
                </p>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-8">
                <h3 className="text-zinc-300 font-bold tracking-widest text-[12px]">{t('disclaimer.investment.title')}</h3>
                <p>
                  {t('disclaimer.investment.text1')}
                </p>
                <p>
                  {t('disclaimer.investment.text2')}
                </p>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-8">
                <h3 className="text-zinc-300 font-bold tracking-widest text-[12px]">{t('disclaimer.utility.title')}</h3>
                <p>
                  {t('disclaimer.utility.text1')}
                </p>
                <p>
                  {t('disclaimer.utility.text2')}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-zinc-300 font-bold tracking-widest text-[12px]">{t('disclaimer.programs.title')}</h3>
                <p>
                  {t('disclaimer.programs.text1')}
                </p>
                <p>
                  {t('disclaimer.programs.text2')}
                </p>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-8">
                <h3 className="text-zinc-300 font-bold tracking-widest text-[12px]">{t('disclaimer.compliance.title')}</h3>
                <p>
                  {t('disclaimer.compliance.text1')}
                </p>
                <p>
                  {t('disclaimer.compliance.text2')}
                </p>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-8">
                <h3 className="text-zinc-300 font-bold tracking-widest text-[12px]">{t('disclaimer.risks.title')}</h3>
                <p>
                  {t('disclaimer.risks.text1')}
                </p>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-8">
                <h3 className="text-zinc-300 font-bold tracking-widest text-[12px]">{t('disclaimer.liability.title')}</h3>
                <p>
                  {t('disclaimer.liability.text1')}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 text-center">
             <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] max-w-4xl mx-auto leading-loose">
               📌 {t('disclaimer.final.title')}: {t('disclaimer.final.text1')}
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
