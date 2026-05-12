import React from 'react';
import { motion } from 'motion/react';
import { Heart, PawPrint, Users, Globe } from 'lucide-react';

export default function SocialImpactSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="w-full h-full flex items-center justify-center">
          <Globe size={800} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-20 h-20 bg-ybb-pink/20 text-ybb-pink rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(255,51,102,0.2)]"
        >
          <Heart size={40} fill="currentColor" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          IMPACTO SOCIAL
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-400 mb-16 italic"
        >
          "A tecnologia é mais poderosa quando empodera comunidades e protege 
          aqueles que não podem falar por si mesmos."
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImpactCard 
            index={0}
            icon={<PawPrint />}
            title="Causas Animais"
            description="Financiamento direto para abrigos, operações de resgate e organizações de bem-estar animal globalmente."
          />
          <ImpactCard 
            index={1}
            icon={<Users />}
            title="Projetos Sociais"
            description="Empoderando comunidades vulneráveis através da educação tecnológica e infraestrutura."
          />
          <ImpactCard 
            index={2}
            icon={<Globe />}
            title="Meio Ambiente"
            description="Apoiando iniciativas de sustentabilidade e programas de compensação de carbono em nossa infraestrutura digital."
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 inline-flex items-center gap-2 text-ybb-pink font-bold tracking-widest uppercase text-xs cursor-pointer hover:underline"
        >
          Saiba mais sobre nosso modelo de governança
        </motion.div>
      </div>
    </section>
  );
}

function ImpactCard({ icon, title, description, index }: { icon: any, title: string, description: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass p-8 rounded-[2.5rem] border border-white/5 hover:bg-white/[0.05] transition-all group"
    >
      <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
