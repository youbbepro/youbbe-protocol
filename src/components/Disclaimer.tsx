import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert } from 'lucide-react';

export default function Disclaimer() {
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
            <h2 className="text-xl font-bold tracking-[0.2em] uppercase text-white">DISCLAIMER JURÍDICO — YOUBBE TOKEN (YOUB.)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[11px] leading-relaxed text-zinc-500 uppercase tracking-wider font-medium">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-zinc-300 font-bold tracking-widest text-[12px]">Natureza do Token</h3>
                <p>
                  O Youbbe Token (YOUB.) foi desenvolvido exclusivamente como um utility token, destinado à utilização dentro do ecossistema digital Youbbe, incluindo, mas não se limitando a:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>acesso a funcionalidades e serviços;</li>
                  <li>programas de fidelidade;</li>
                  <li>descontos e benefícios operacionais;</li>
                  <li>cashback;</li>
                  <li>utilização em produtos e plataformas do ecossistema;</li>
                  <li>participação em iniciativas comunitárias e sociais;</li>
                  <li>mecanismos de engajamento e recompensas.</li>
                </ul>
                <p>
                  O (YOUB.) não representa, em nenhuma hipótese: participação societária; valor mobiliário; contrato de investimento coletivo; título financeiro; participação acionária; direito a dividendos; direito sobre receitas, lucros ou ativos da empresa; promessa de valorização financeira; garantia de rentabilidade futura.
                </p>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-8">
                <h3 className="text-zinc-300 font-bold tracking-widest text-[12px]">⚖️ Ausência de Oferta de Investimento</h3>
                <p>
                  A aquisição, utilização ou manutenção do token (YOUB.) não deve ser interpretada como: investimento financeiro; aplicação especulativa; expectativa de lucro; instrumento de renda passiva; participação em resultados da empresa; promessa de retorno econômico.
                </p>
                <p>
                  O token possui finalidade exclusivamente utilitária dentro das plataformas, produtos e serviços do ecossistema Youbbe.
                </p>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-8">
                <h3 className="text-zinc-300 font-bold tracking-widest text-[12px]">🌐 Utilidade Operacional do Token</h3>
                <p>
                  O (YOUB.) foi estruturado para possuir utilidade funcional real, incluindo: pagamentos internos; acesso a serviços premium; redução de taxas operacionais; programas de cashback; programas de recompensas; benefícios vinculados ao uso do ecossistema; funcionalidades de fidelização e engajamento; participação em iniciativas sociais e comunitárias.
                </p>
                <p>
                  O valor percebido do token poderá variar conforme fatores de mercado, adoção tecnológica, crescimento do ecossistema e dinâmica econômica geral, sem qualquer garantia por parte da Youbbe.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-zinc-300 font-bold tracking-widest text-[12px]">⚠️ Programas Econômicos do Ecossistema</h3>
                <p>
                  A Youbbe poderá, de forma discricionária, estratégica e não obrigatória, destinar parte de sua receita operacional para iniciativas relacionadas ao fortalecimento do ecossistema, incluindo: programas de liquidez; cashback; recompensas; incentivos operacionais; expansão da utilidade do token (YOUB.).
                </p>
                <p>
                  Tais iniciativas: não constituem distribuição de lucros; não representam promessa de valorização; não criam obrigação financeira perante os usuários; poderão ser alteradas, reduzidas, suspensas ou encerradas a qualquer momento.
                </p>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-8">
                <h3 className="text-zinc-300 font-bold tracking-widest text-[12px]">🏛️ Regulamentação e Compliance</h3>
                <p>
                  O projeto Youbbe busca atuar em conformidade com legislações aplicáveis relacionadas a: tecnologia; ativos digitais; prevenção à lavagem de dinheiro; compliance; proteção de dados; regulamentações operacionais aplicáveis.
                </p>
                <p>
                  O token (YOUB.) foi concebido com base em características típicas de utility tokens amplamente reconhecidas pelo mercado internacional. Ainda assim, regulações relacionadas a ativos digitais podem variar conforme jurisdição e poderão sofrer alterações futuras. Usuários são responsáveis por compreender e respeitar as leis locais aplicáveis em seus respectivos países.
                </p>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-8">
                <h3 className="text-zinc-300 font-bold tracking-widest text-[12px]">⚠️ Riscos</h3>
                <p>
                  A utilização de ativos digitais envolve riscos significativos, incluindo: volatilidade de mercado; mudanças regulatórias; riscos tecnológicos; riscos operacionais; riscos de liquidez; riscos relacionados à adoção do ecossistema. Não há qualquer garantia de: valorização; estabilidade de preço; liquidez contínua; disponibilidade futura do token.
                </p>
              </div>

              <div className="space-y-4 border-t border-white/5 pt-8">
                <h3 className="text-zinc-300 font-bold tracking-widest text-[12px]">🔐 Limitação de Responsabilidade</h3>
                <p>
                  A Youbbe não garante: valorização do token; retorno financeiro; manutenção de preço; disponibilidade permanente de mercados secundários; resultados econômicos futuros. A participação no ecossistema é voluntária e realizada por conta e risco exclusivo do usuário.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 text-center">
             <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] max-w-4xl mx-auto leading-loose">
               📌 Declaração Final: O Youbbe Token (YOUB.) é um utility token desenvolvido para utilização dentro de um ecossistema tecnológico integrado, possuindo finalidade operacional, funcional e utilitária, não devendo ser interpretado como instrumento financeiro, valor mobiliário ou oferta de investimento sob qualquer hipótese.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
