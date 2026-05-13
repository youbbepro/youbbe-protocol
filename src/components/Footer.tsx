import React from 'react';
import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from '@/src/lib/i18n';

import Logo from './Logo';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16 pb-16 border-b border-white/5">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Logo size="lg" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <SocialLink icon={<Twitter size={20} />} />
            <SocialLink icon={<Instagram size={20} />} />
            <SocialLink icon={<Linkedin size={20} />} />
            <SocialLink icon={<Github size={20} />} />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-10 text-[10px] text-slate-500 tracking-[0.3em] font-bold uppercase"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ybb-pink status-glow"></span>
              {t('footer.staking')}
            </div>
            <div className="flex items-center gap-2 text-indigo-400">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 status-glow"></span>
              {t('footer.infra')}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <span className="text-center md:text-right hover:text-white transition-colors cursor-help">{t('label.impact_footer')}</span>
            <span className="text-white/10 select-none">© 2024 Youbbe Global Protocol</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function SocialLink({ icon }: { icon: any }) {
  return (
    <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
      {icon}
    </a>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <a href="#" className="text-zinc-500 hover:text-white text-sm transition-colors">
        {label}
      </a>
    </li>
  );
}
