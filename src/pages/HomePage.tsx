import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PillarSection from '../components/PillarSection';
import TokenomicsSection from '../components/TokenomicsSection';
import SocialImpactSection from '../components/SocialImpactSection';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';
import { ECOSYSTEM_PILLARS } from '../types';
import { useTranslation } from '../lib/i18n';

export default function HomePage() {
  const { t } = useTranslation();
  
  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="bg-ybb-bg text-white selection:bg-ybb-pink selection:text-white min-h-screen relative overflow-hidden bg-grid">
      <div className="scanline" />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Ecosystem Title Section */}
        <section className="py-24 border-y border-white/5 bg-white/[0.01]">
          <div className="container mx-auto px-10">
            <div className="flex flex-col md:flex-row items-end justify-between gap-10">
               <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-[10px] font-bold uppercase tracking-[0.5em] text-ybb-indigo mb-6"
                >
                  {t('section.digital_infra')}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl font-bold max-w-4xl leading-tight bg-linear-to-r from-white via-white to-ybb-pink/50 bg-clip-text text-transparent"
                >
                  {t('section.digital_infra.desc')}
                </motion.p>
               </div>
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="writing-vertical hidden lg:block text-[10px] tracking-[0.5em] text-slate-800 uppercase font-bold h-32"
               >
                 {t('label.protocol_v')}
               </motion.div>
            </div>
          </div>
        </section>

        {ECOSYSTEM_PILLARS.map((pillar, index) => (
          <PillarSection 
            key={pillar.id} 
            pillar={pillar} 
            index={index} 
          />
        ))}

        <TokenomicsSection />
        <SocialImpactSection />
        <Disclaimer />
      </main>

      <Footer />
    </div>
  );
}
