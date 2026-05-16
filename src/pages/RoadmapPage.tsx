import React, { useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from '../lib/i18n';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RoadmapStep = ({ number, title, month, items, isLeft }: { number: number, title: string, month: string, items: string[], isLeft: boolean }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`w-full md:w-[46%] bg-white/[0.02] border border-ybb-pink/20 rounded-[32px] p-8 md:p-10 relative backdrop-blur-xl shadow-[0_0_40px_rgba(255,51,102,0.05)] hover:border-ybb-pink/50 hover:bg-white/[0.05] transition-all duration-500 group ${isLeft ? 'self-start' : 'self-end md:mt-24'}`}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-ybb-pink/20 to-ybb-indigo/20 rounded-[32px] opacity-0 group-hover:opacity-100 blur transition duration-500" />
      
      <div className="relative z-10">
        <div className="absolute -top-6 -left-4 w-7 h-7 rounded-full bg-ybb-bg border border-ybb-pink flex items-center justify-center text-[10px] font-bold font-orbitron shadow-[0_0_15px_#ff3366] text-white group-hover:scale-110 transition-transform duration-500">
          {number}
        </div>
        
        <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-white mb-2 group-hover:text-ybb-pink transition-colors duration-300">{title}</h3>
        <p className="text-ybb-pink/80 font-semibold tracking-widest text-xs mb-6 uppercase">{month}</p>
        
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex gap-4 text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
              <span className="text-ybb-pink font-bold">»</span>
              <span className="text-sm md:text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hexagon Pattern */}
      <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </motion.div>
  );
};

const LightningBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="w-full h-full opacity-30">
        <defs>
          <filter id="lightningGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {[...Array(6)].map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const length = 20 + Math.random() * 30;
          const angle = Math.random() * Math.PI * 2;
          
          return (
            <motion.path
              key={i}
              d={`M ${startX}% ${startY}% L ${startX + Math.cos(angle) * length}% ${startY + Math.sin(angle) * length}%`}
              stroke="#ff3366"
              strokeWidth="1"
              fill="none"
              filter="url(#lightningGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 50],
                y: [0, (Math.random() - 0.5) * 50]
              }}
              transition={{ 
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

const BackgroundParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-ybb-pink/30 rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5
          }}
          animate={{ 
            y: [null, Math.random() * 100 + "%"],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      ))}
    </div>
  );
};

export default function RoadmapPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const roadmapData = useMemo(() => [
    {
      number: 1,
      title: t('roadmap.step1.title'),
      month: t('roadmap.step1.month'),
      items: [
        t('roadmap.step1.i1'),
        t('roadmap.step1.i2'),
        t('roadmap.step1.i3'),
        t('roadmap.step1.i4')
      ]
    },
    {
      number: 2,
      title: t('roadmap.step2.title'),
      month: t('roadmap.step2.month'),
      items: [
        t('roadmap.step2.i1'),
        t('roadmap.step2.i2'),
        t('roadmap.step2.i3'),
        t('roadmap.step2.i4')
      ]
    },
    {
      number: 3,
      title: t('roadmap.step3.title'),
      month: t('roadmap.step3.month'),
      items: [
        t('roadmap.step3.i1'),
        t('roadmap.step3.i2'),
        t('roadmap.step3.i3'),
        t('roadmap.step3.i4')
      ]
    },
    {
      number: 4,
      title: t('roadmap.step4.title'),
      month: t('roadmap.step4.month'),
      items: [
        t('roadmap.step4.i1'),
        t('roadmap.step4.i2'),
        t('roadmap.step4.i3'),
        t('roadmap.step4.i4')
      ]
    },
    {
      number: 5,
      title: t('roadmap.step5.title'),
      month: t('roadmap.step5.month'),
      items: [
        t('roadmap.step5.i1'),
        t('roadmap.step5.i2'),
        t('roadmap.step5.i3'),
        t('roadmap.step5.i4')
      ]
    },
    {
      number: 6,
      title: t('roadmap.step6.title'),
      month: t('roadmap.step6.month'),
      items: [
        t('roadmap.step6.i1'),
        t('roadmap.step6.i2'),
        t('roadmap.step6.i3'),
        t('roadmap.step6.i4')
      ]
    },
    {
      number: 7,
      title: t('roadmap.step7.title'),
      month: t('roadmap.step7.month'),
      items: [
        t('roadmap.step7.i1'),
        t('roadmap.step7.i2'),
        t('roadmap.step7.i3'),
        t('roadmap.step7.i4')
      ]
    },
    {
      number: 8,
      title: t('roadmap.step8.title'),
      month: t('roadmap.step8.month'),
      items: [
        t('roadmap.step8.i1'),
        t('roadmap.step8.i2'),
        t('roadmap.step8.i3'),
        t('roadmap.step8.i4')
      ]
    },
    {
      number: 9,
      title: t('roadmap.step9.title'),
      month: t('roadmap.step9.month'),
      items: [
        t('roadmap.step9.i1'),
        t('roadmap.step9.i2'),
        t('roadmap.step9.i3'),
        t('roadmap.step9.i4')
      ]
    }
  ], [t]);

  return (
    <div className="bg-ybb-bg min-h-screen text-white relative font-sans overflow-x-hidden">
      <Navbar />
      
      <div className="fixed inset-0 z-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,51,102,0.05)_0%,transparent_70%)]" />
      <LightningBackground />
      <BackgroundParticles />
      
      <main className="container mx-auto px-6 py-40 relative z-10">
        <header className="text-center mb-32 relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full border border-ybb-pink/30 bg-ybb-pink/10 text-ybb-pink text-[10px] font-bold uppercase tracking-[0.5em] mb-8"
          >
            Ecosystem Strategy
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl font-orbitron font-black text-white mb-6 tracking-tighter"
          >
            YOUB <span className="text-ybb-pink drop-shadow-[0_0_30px_rgba(255,51,102,0.8)]">TOKEN</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
          >
            {t('roadmap.hero.subtitle')}
          </motion.p>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-0 w-32 h-px bg-linear-to-r from-transparent to-ybb-pink/30 hidden lg:block" />
          <div className="absolute top-1/2 right-0 w-32 h-px bg-linear-to-l from-transparent to-ybb-pink/30 hidden lg:block" />
        </header>

        <section className="relative flex flex-col gap-24 md:gap-0 pb-40">
          {/* Central Animated Line with Light Effects */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-ybb-pink via-ybb-pink/20 to-ybb-pink rounded-full transform -translate-x-1/2 hidden md:block overflow-hidden shadow-[0_0_20px_rgba(255,51,102,0.3)]">
             <motion.div 
               animate={{ y: ["-100%", "200%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="w-full h-80 bg-linear-to-b from-transparent via-ybb-pink to-transparent opacity-80"
             />
             <motion.div 
               animate={{ y: ["-100%", "200%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
               className="w-full h-40 bg-linear-to-b from-transparent via-white to-transparent"
             />
             {/* Static Glow Points */}
             {[...Array(10)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 bg-ybb-pink rounded-full blur-[2px] transform -translate-x-1/2 left-1/2 shadow-[0_0_10px_#ff3366]"
                  style={{ top: `${(i / 9) * 100}%` }}
                />
             ))}
          </div>
          
          {roadmapData.map((step, index) => (
            <RoadmapStep 
              key={step.number}
              number={step.number}
              title={step.title}
              month={step.month}
              items={step.items}
              isLeft={index % 2 === 0}
            />
          ))}
        </section>

        <section className="mt-40 text-center relative">
          {/* Section Divider Decor */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-ybb-pink/30" />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-orbitron font-black text-white mb-20 pt-32"
          >
            {t('roadmap.footer.title')}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: t('roadmap.benefit.cashback.title'), desc: t('roadmap.benefit.cashback.desc'), icon: "⚡" },
              { title: t('roadmap.benefit.discounts.title'), desc: t('roadmap.benefit.discounts.desc'), icon: "💎" },
              { title: t('roadmap.benefit.vip.title'), desc: t('roadmap.benefit.vip.desc'), icon: "🛡️" },
              { title: t('roadmap.benefit.community.title'), desc: t('roadmap.benefit.community.desc'), icon: "🤝" },
              { title: t('roadmap.benefit.ecosystem.title'), desc: t('roadmap.benefit.ecosystem.desc'), icon: "🌐" }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 shadow-xl hover:border-ybb-pink/30 hover:bg-white/[0.04] transition-all duration-500 group"
              >
                <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">{benefit.icon}</div>
                <h3 className="text-xl font-orbitron font-bold text-ybb-pink mb-4">{benefit.title}</h3>
                <p className="text-slate-500 group-hover:text-slate-300 transition-colors text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
