import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navbar
    'nav.hub': 'Hub',
    'nav.pay': 'Pay',
    'nav.life': 'Life',
    'nav.creators': 'Creators',
    'nav.travel': 'Travel',
    'nav.ai': 'IA',
    'nav.token': 'Token',
    'nav.ecosystem': 'Ecossistema',
    'nav.tokenomics': 'Tokenomics',
    'nav.impact': 'Impacto',
    'nav.docs': 'Documentação',
    'nav.connect': 'Conectar Carteira',
    
    // Hero
    'hero.badge': 'Protocolo de Utilidade Youbbe',
    'hero.title.base': 'A nova era da',
    'hero.title.highlight': 'utilidade digital',
    'hero.subtitle': 'Arquitetura de alta performance unificada por inteligência artificial e protocolos distribuídos.',
    'hero.cta.primary': 'Explorar Ecossistema',
    'hero.cta.secondary': 'Ver Tokenomics',
    
    // Section Headers
    'section.digital_infra': 'Infraestrutura Digital',
    'section.digital_infra.desc': 'Uma sinfonia de módulos verticais, unificados por inteligência.',
    'section.tokenomics.badge': 'O Ativo Central',
    'section.tokenomics.title': 'Youbbe Token (YOUB.)',
    'section.tokenomics.total_supply': 'Suporte Total Fixo',
    'section.tokenomics.strategy': 'Estratégia do Ecossistema',
    'section.tokenomics.strategy.desc': 'A Youbbe poderá utilizar parte de sua receita operacional para programas de incentivo e fortalecimento do ecossistema, incluindo iniciativas de cashback, recompensas, liquidez operacional e expansão da utilidade do token (YOUB.), sempre de forma estratégica, variável e não garantida.',
    'section.tokenomics.buy': 'Adquirir Token (YOUB.)',
    'section.tokenomics.distribution': 'Distribuição do Token',
    'section.tokenomics.fees': 'Sistema de Taxas',
    'section.tokenomics.fees.desc': 'Cada transação poderá ter taxa de até 5%, distribuída em:',
    'section.tokenomics.fees.burn': 'Queima',
    'section.tokenomics.fees.social': 'Fundo social',
    'section.tokenomics.fees.ecosystem': 'Ecossistema',
    'section.tokenomics.revenue_allocation': 'A Youbbe poderá destinar:',
    'section.tokenomics.revenue_allocation.desc': 'Até 1% da receita operacional líquida',
    'section.tokenomics.buyback': 'Recompra / Liquidez',
    'section.tokenomics.social_fund': 'Fundo Social',
    
    // Social Impact
    'social.badge': 'Impacto Social',
    'social.quote': '"A tecnologia é mais poderosa quando empodera comunidades e protege aqueles que não podem falar por si mesmos."',
    'social.causes_animals': 'Causas Animais',
    'social.causes_animals.desc': 'Financiamento direto para abrigos, operações de resgate e organizações de bem-estar animal globalmente.',
    'social.social_projects': 'Projetos Sociais',
    'social.social_projects.desc': 'Empoderando comunidades vulneráveis através da educação tecnológica e infraestrutura.',
    'social.environment': 'Meio Ambiente',
    'social.environment.desc': 'Apoiando iniciativas de sustentabilidade e programas de compensação de carbono em nossa infraestrutura digital.',
    'social.governance': 'Saiba mais sobre nosso modelo de governança',

    // Pillars
    'pillar.view_features': 'Recursos Principais',
    'pillar.token_utility': 'Utilidade do Token',
    
    // Labels
    'label.protocol_v': 'Protocolo v1.0.4',
    'label.impact_footer': 'Impacto: Causas Animais & Apoio Comunitário',
    'footer.staking': 'Staking de Utilidade Ativo',
    'footer.infra': 'Infraestrutura Global Pronta',

    // Disclaimer
    'disclaimer.title': 'DISCLAIMER JURÍDICO — YOUBBE TOKEN (YOUB.)',
    'disclaimer.nature.title': 'Natureza do Token',
    'disclaimer.nature.text1': 'O Youbbe Token (YOUB.) foi desenvolvido exclusivamente como um utility token, destinado à utilização dentro do ecossistema digital Youbbe, incluindo, mas não se limitando a:',
    'disclaimer.nature.item1': 'acesso a funcionalidades e serviços;',
    'disclaimer.nature.item2': 'programas de fidelidade;',
    'disclaimer.nature.item3': 'descontos e benefícios operacionais;',
    'disclaimer.nature.item4': 'cashback;',
    'disclaimer.nature.item5': 'utilização em produtos e plataformas do ecossistema;',
    'disclaimer.nature.item6': 'participação em iniciativas comunitárias e sociais;',
    'disclaimer.nature.item7': 'mecanismos de engajamento e recompensas.',
    'disclaimer.nature.text2': 'O (YOUB.) não representa, em nenhuma hipótese: participação societária; valor mobiliário; contrato de investimento coletivo; título financeiro; participação acionária; direito a dividendos; direito sobre receitas, lucros ou ativos da empresa; promessa de valorização financeira; garantia de rentabilidade futura.',
    
    'disclaimer.investment.title': '⚖️ Ausência de Oferta de Investimento',
    'disclaimer.investment.text1': 'A aquisição, utilização ou manutenção do token (YOUB.) não deve ser interpretada como: investimento financeiro; aplicação especulativa; expectativa de lucro; instrumento de renda passiva; participação em resultados da empresa; promessa de retorno econômico.',
    'disclaimer.investment.text2': 'O token possui finalidade exclusivamente utilitária dentro das plataformas, produtos e serviços do ecossistema Youbbe.',
    
    'disclaimer.utility.title': '🌐 Utilidade Operacional do Token',
    'disclaimer.utility.text1': 'O (YOUB.) foi estruturado para possuir utilidade funcional real, incluindo: pagamentos internos; acesso a serviços premium; redução de taxas operacionais; programas de cashback; programas de recompensas; benefícios vinculados ao uso do ecossistema; funcionalidades de fidelização e engajamento; participação em iniciativas sociais e comunitárias.',
    'disclaimer.utility.text2': 'O valor percebido do token poderá variar conforme fatores de mercado, adoção tecnológica, crescimento do ecossistema e dinâmica econômica geral, sem qualquer garantia por parte da Youbbe.',
    
    'disclaimer.programs.title': '⚠️ Programas Econômicos do Ecossistema',
    'disclaimer.programs.text1': 'A Youbbe poderá, de forma discricionária, estratégica e não obrigatória, destinar parte de sua receita operacional para iniciativas relacionadas ao fortalecimento do ecossistema, incluindo: programas de liquidez; cashback; recompensas; incentivos operacionais; expansão da utilidade do token (YOUB.).',
    'disclaimer.programs.text2': 'Tais iniciativas: não constituem distribuição de lucros; não representam promessa de valorização; não criam obrigação financeira perante os usuários; poderão ser alteradas, reduzidas, suspensas ou encerradas a qualquer momento.',
    
    'disclaimer.compliance.title': '🏛️ Regulamentação e Compliance',
    'disclaimer.compliance.text1': 'O projeto Youbbe busca atuar em conformidade com legislações aplicáveis relacionadas a: tecnologia; ativos digitais; prevenção à lavagem de dinheiro; compliance; proteção de dados; regulamentações operacionais aplicáveis.',
    'disclaimer.compliance.text2': 'O token (YOUB.) foi concebido com base em características típicas de utility tokens amplamente reconhecidas pelo mercado internacional. Ainda assim, regulações relacionadas a ativos digitais podem variar conforme jurisdição e poderão sofrer alterações futuras. Usuários são responsáveis por compreender e respeitar as leis locais aplicáveis em seus respectivos países.',
    
    'disclaimer.risks.title': '⚠️ Riscos',
    'disclaimer.risks.text1': 'A utilização de ativos digitais envolve riscos significativos, incluindo: volatilidade de mercado; mudanças regulatórias; riscos tecnológicos; riscos operacionais; riscos de liquidez; riscos relacionados à adoção do ecossistema. Não há qualquer garantia de: valorização; estabilidade de preço; liquidez contínua; disponibilidade futura do token.',
    
    'disclaimer.liability.title': '🔐 Limitação de Responsabilidade',
    'disclaimer.liability.text1': 'A Youbbe não garante: valorização do token; retorno financeiro; manutenção de preço; disponibilidade permanente de mercados secundários; resultados econômicos futuros. A participação no ecossistema é voluntária e realizada por conta e risco exclusivo do usuário.',
    
    'disclaimer.final.title': '📌 Declaração Final',
    'disclaimer.final.text1': 'O Youbbe Token (YOUB.) é um utility token desenvolvido para utilização dentro de um ecossistema tecnológico integrado, possuindo finalidade operacional, funcional e utilitária, não devendo ser interpretado como instrumento financeiro, valor mobiliário ou oferta de investimento sob qualquer hipótese.',

    // Pillars translated strings
    'pillar.hub.title': 'Youbbe Hub',
    'pillar.hub.desc': 'O motor SaaS central do ecossistema. Uma plataforma de negócios completa com ferramentas integradas para marketing, CRM, automação e gestão.',
    'pillar.hub.feat1': 'CRM Inteligente e Gestão de Pipeline',
    'pillar.hub.feat2': 'Automação de E-mail e WhatsApp Marketing',
    'pillar.hub.feat3': 'Dashboard Financeiro Abrangente',
    'pillar.hub.feat4': 'IA Integrada para Vendas e Conteúdo',
    'pillar.hub.util1': 'Descontos em assinaturas mensais',
    'pillar.hub.util2': 'Desbloqueio de recursos SaaS premium',
    'pillar.hub.util3': 'Acesso antecipado a novas ferramentas',
    'pillar.hub.util4': 'Cashback em (YOUB.) no uso da plataforma',

    'pillar.pay.title': 'Youbbe Pay',
    'pillar.pay.desc': 'A espinha dorsal financeira. Uma infraestrutura de pagamento moderna para transações digitais, integração cripto e soluções financeiras globais.',
    'pillar.pay.feat1': 'Carteira Digital Multi-moeda',
    'pillar.pay.feat2': 'PIX, Cartão e Pagamentos Recorrentes',
    'pillar.pay.feat3': 'Gateway Cripto e Conversão',
    'pillar.pay.feat4': 'Sistema de Cashback Automatizado',
    'pillar.pay.util1': 'Taxas de transação reduzidas',
    'pillar.pay.util2': 'Taxas de cashback aumentadas',
    'pillar.pay.util3': 'Processamento de transação prioritário',
    'pillar.pay.util4': 'Recompensas por holding',

    'pillar.life.title': 'Youbbe Life',
    'pillar.life.desc': 'Produtos físicos e bem-estar. Nutracêuticos premium, bebidas energéticas e produtos de lifestyle projetados para performance.',
    'pillar.life.feat1': 'Bebidas Funcionais Youbbe Energy',
    'pillar.life.feat2': 'Nutracêuticos de Performance e Cognição',
    'pillar.life.feat3': 'Vestuário de Lifestyle Exclusivo',
    'pillar.life.feat4': 'Monitoramento de Saúde e Performance',
    'pillar.life.util1': 'Descontos na loja',
    'pillar.life.util2': 'Acesso a produtos exclusivos',
    'pillar.life.util3': 'Recompensas em (YOUB.) em cada compra',
    'pillar.life.util4': 'Lançamentos de produtos VIP',

    'pillar.creators.title': 'Youbbe Creators',
    'pillar.creators.desc': 'A plataforma da economia creator. Monetização, engajamento comunitário e marketplaces digitais para influenciadores e educadores.',
    'pillar.creators.feat1': 'Assinaturas de Conteúdo Premium',
    'pillar.creators.feat2': 'Marketplace de Produtos Digitais',
    'pillar.creators.feat3': 'Sistemas de Engajamento Gamificados',
    'pillar.creators.feat4': 'Gorjetas Diretas e Suporte em Lives',
    'pillar.creators.util1': 'Pagamentos em (YOUB.) para criadores',
    'pillar.creators.util2': 'Pagamentos internos no ecossistema',
    'pillar.creators.util3': 'Sistemas de fidelidade e recompensa',
    'pillar.creators.util4': 'Descontos em ferramentas para criadores',

    'pillar.travel.title': 'Youbbe Travel',
    'pillar.travel.desc': 'Experiências e viagens. Sistemas de reserva integrados e experiências premium recompensadas dentro do ecossistema.',
    'pillar.travel.feat1': 'Integração de Reservas Globais',
    'pillar.travel.feat2': 'Experiências de Viagem Premium',
    'pillar.travel.feat3': 'Programas VIP para Viajantes',
    'pillar.travel.feat4': 'Seguro Viagem Integrado',
    'pillar.travel.util1': 'Descontos em reservas',
    'pillar.travel.util2': 'Cashback em (YOUB.) em viagens',
    'pillar.travel.util3': 'Benefícios VIP em níveis',
    'pillar.travel.util4': 'Acesso a upgrades premium',

    'pillar.ai.title': 'Youbbe AI',
    'pillar.ai.desc': 'A camada de inteligência. Automatizando processos e aumentando a produtividade em todo o ecossistema Youbbe.',
    'pillar.ai.feat1': 'Automação de Processos de Negócio com IA',
    'pillar.ai.feat2': 'Ferramentas de Geração de Conteúdo Inteligente',
    'pillar.ai.feat3': 'Agentes de Vendas e Suporte com IA',
    'pillar.ai.feat4': 'Análise Preditiva Baseada em Dados',
    'pillar.ai.util1': 'Acesso a Modelos de IA Premium',
    'pillar.ai.util2': 'Créditos de Computação de IA',
    'pillar.ai.util3': 'Ferramentas avançadas de automação',
    'pillar.ai.util4': 'Limites de uso expandidos',

    // Tokenomics Distribution Labels
    'tokenomics.dist.ecosystem': 'Ecossistema',
    'tokenomics.dist.liquidity': 'Liquidez',
    'tokenomics.dist.treasury': 'Tesouraria',
    'tokenomics.dist.team': 'Equipe',
    'tokenomics.dist.marketing': 'Marketing',
    'tokenomics.dist.social_fund': 'Fundo Social',
    'tokenomics.dist.strategic_reserve': 'Reserva Estratégica',
    'tokenomics.dist.presale1': '1ª Pré-venda',
    'tokenomics.dist.presale2': '2ª Pré-venda',
    'tokenomics.dist.presale3': '3ª Pré-venda',

    // Roadmap
    'roadmap.hero.subtitle': 'Roadmap oficial do ecossistema YOUB Token',
    'roadmap.footer.title': 'UTILIDADES DO YOUB TOKEN',
    'roadmap.benefit.cashback.title': 'Cashback',
    'roadmap.benefit.cashback.desc': 'Recompensas em compras e pagamentos.',
    'roadmap.benefit.discounts.title': 'Descontos',
    'roadmap.benefit.discounts.desc': 'Benefícios progressivos para holders.',
    'roadmap.benefit.vip.title': 'VIP Access',
    'roadmap.benefit.vip.desc': 'Acesso premium e recursos exclusivos.',
    'roadmap.benefit.community.title': 'Comunidade',
    'roadmap.benefit.community.desc': 'Participação em campanhas e governança social.',
    'roadmap.benefit.ecosystem.title': 'Ecossistema',
    'roadmap.benefit.ecosystem.desc': 'Integração com Pay, AI, Life e Creators.',

    // Roadmap Steps
    'roadmap.step1.title': 'Fundação do Ecossistema',
    'roadmap.step1.month': 'Mês 1 - Mês 3',
    'roadmap.step1.i1': 'Estrutura corporativa e jurídica',
    'roadmap.step1.i2': 'Desenvolvimento da marca e website',
    'roadmap.step1.i3': 'Estruturação das plataformas',
    'roadmap.step1.i4': 'Construção da comunidade inicial',

    'roadmap.step2.title': 'Token & Infraestrutura',
    'roadmap.step2.month': 'Mês 4 - Mês 6',
    'roadmap.step2.i1': 'Desenvolvimento do smart contract',
    'roadmap.step2.i2': 'Auditoria de segurança',
    'roadmap.step2.i3': 'Sistema de cashback e benefícios',
    'roadmap.step2.i4': 'Wallet, integrações e compliance',

    'roadmap.step3.title': 'Lançamento Oficial',
    'roadmap.step3.month': 'Mês 7 - Mês 9',
    'roadmap.step3.i1': 'Lançamento do token e liquidez',
    'roadmap.step3.i2': 'Plataforma oficial e área do holder',
    'roadmap.step3.i3': 'Campanhas globais e marketing',
    'roadmap.step3.i4': 'Integração completa do ecossistema',

    'roadmap.step4.title': 'Youbbe Pay',
    'roadmap.step4.month': 'Mês 10 - Mês 12',
    'roadmap.step4.i1': 'Carteira digital',
    'roadmap.step4.i2': 'PIX e transferências',
    'roadmap.step4.i3': 'Cashback integrado',
    'roadmap.step4.i4': 'Benefícios financeiros',

    'roadmap.step5.title': 'Youbbe Creators',
    'roadmap.step5.month': 'Mês 13 - Mês 18',
    'roadmap.step5.i1': 'Plataforma de monetização',
    'roadmap.step5.i2': 'Marketplace e conteúdo premium',
    'roadmap.step5.i3': 'Recompensas em YBB',
    'roadmap.step5.i4': 'Programas de fidelização',

    'roadmap.step6.title': 'Youbbe Life',
    'roadmap.step6.month': 'Mês 19 - Mês 24',
    'roadmap.step6.i1': 'Lançamento da linha de produtos',
    'roadmap.step6.i2': 'Cashback em compras',
    'roadmap.step6.i3': 'Benefícios para holders',
    'roadmap.step6.i4': 'Marketplace exclusivo',

    'roadmap.step7.title': 'Youbbe AI',
    'roadmap.step7.month': 'Mês 25 - Mês 30',
    'roadmap.step7.i1': 'Ferramentas IA para empresas',
    'roadmap.step7.i2': 'IA para creators e marketing',
    'roadmap.step7.i3': 'Créditos premium para holders',
    'roadmap.step7.i4': 'Automação operacional',

    'roadmap.step8.title': 'Expansão Global',
    'roadmap.step8.month': 'Mês 31 - Mês 48',
    'roadmap.step8.i1': 'Entrada em novos mercados',
    'roadmap.step8.i2': 'Parcerias internacionais',
    'roadmap.step8.i3': 'Integrações estratégicas',
    'roadmap.step8.i4': 'Governança comunitária',

    'roadmap.step9.title': 'Economia Autossustentável',
    'roadmap.step9.month': 'Mês 49 - Mês 60+',
    'roadmap.step9.i1': 'Crescimento sustentável',
    'roadmap.step9.i2': 'Novos produtos e serviços',
    'roadmap.step9.i3': 'Expansão de utilities',
    'roadmap.step9.i4': 'Infraestrutura global consolidada',
  },
  en: {
    // Navbar
    'nav.hub': 'Hub',
    'nav.pay': 'Pay',
    'nav.life': 'Life',
    'nav.creators': 'Creators',
    'nav.travel': 'Travel',
    'nav.ai': 'AI',
    'nav.token': 'Token',
    'nav.ecosystem': 'Ecosystem',
    'nav.tokenomics': 'Tokenomics',
    'nav.impact': 'Impact',
    'nav.docs': 'Documentation',
    'nav.connect': 'Connect Wallet',
    
    // Hero
    'hero.badge': 'Youbbe Utility Protocol',
    'hero.title.base': 'The new era of',
    'hero.title.highlight': 'digital utility',
    'hero.subtitle': 'High-performance architecture unified by artificial intelligence and distributed protocols.',
    'hero.cta.primary': 'Explore Ecosystem',
    'hero.cta.secondary': 'View Tokenomics',
    
    // Section Headers
    'section.digital_infra': 'Digital Infrastructure',
    'section.digital_infra.desc': 'A symphony of vertical modules, unified by intelligence.',
    'section.tokenomics.badge': 'The Central Asset',
    'section.tokenomics.title': 'Youbbe Token (YOUB.)',
    'section.tokenomics.total_supply': 'Total Fixed Supply',
    'section.tokenomics.strategy': 'Ecosystem Strategy',
    'section.tokenomics.strategy.desc': 'Youbbe may use part of its operating revenue for incentive programs and ecosystem strengthening, including cashback initiatives, rewards, operational liquidity, and expansion of the utility of the (YOUB.) token, always in a strategic, variable, and non-guaranteed manner.',
    'section.tokenomics.buy': 'Acquire Token (YOUB.)',
    'section.tokenomics.distribution': 'Token Distribution',
    'section.tokenomics.fees': 'Fee System',
    'section.tokenomics.fees.desc': 'Each transaction may have a fee of up to 5%, distributed in:',
    'section.tokenomics.fees.burn': 'Burn',
    'section.tokenomics.fees.social': 'Social Fund',
    'section.tokenomics.fees.ecosystem': 'Ecosystem',
    'section.tokenomics.revenue_allocation': 'Youbbe may allocate:',
    'section.tokenomics.revenue_allocation.desc': 'Up to 1% of net operating revenue',
    'section.tokenomics.buyback': 'Buyback / Liquidity',
    'section.tokenomics.social_fund': 'Social Fund',
    
    // Social Impact
    'social.badge': 'Social Impact',
    'social.quote': '"Technology is most powerful when it empowers communities and protects those who cannot speak for themselves."',
    'social.causes_animals': 'Animal Causes',
    'social.causes_animals.desc': 'Direct funding for shelters, rescue operations, and animal welfare organizations globally.',
    'social.social_projects': 'Social Projects',
    'social.social_projects.desc': 'Empowering vulnerable communities through technology education and infrastructure.',
    'social.environment': 'Environment',
    'social.environment.desc': 'Supporting sustainability initiatives and carbon offset programs in our digital infrastructure.',
    'social.governance': 'Learn more about our governance model',

    // Pillars
    'pillar.view_features': 'Key Features',
    'pillar.token_utility': 'Token Utility',
    
    // Labels
    'label.protocol_v': 'Protocol v1.0.4',
    'label.impact_footer': 'Impact: Animal Causes & Community Support',
    'footer.staking': 'Utility Staking Active',
    'footer.infra': 'Global Infrastructure Ready',

    // Disclaimer
    'disclaimer.title': 'LEGAL DISCLAIMER — YOUBBE TOKEN (YOUB.)',
    'disclaimer.nature.title': 'Nature of the Token',
    'disclaimer.nature.text1': 'The Youbbe Token (YOUB.) was developed exclusively as a utility token, intended for use within the Youbbe digital ecosystem, including but not limited to:',
    'disclaimer.nature.item1': 'access to features and services;',
    'disclaimer.nature.item2': 'loyalty programs;',
    'disclaimer.nature.item3': 'operational discounts and benefits;',
    'disclaimer.nature.item4': 'cashback;',
    'disclaimer.nature.item5': 'use in products and platforms of the ecosystem;',
    'disclaimer.nature.item6': 'participation in community and social initiatives;',
    'disclaimer.nature.item7': 'engagement and rewards mechanisms.',
    'disclaimer.nature.text2': 'The (YOUB.) does not represent, under any circumstances: corporate participation; security; collective investment contract; financial title; shareholding; right to dividends; right to revenues, profits or assets of the company; promise of financial appreciation; guarantee of future profitability.',
    
    'disclaimer.investment.title': '⚖️ Absence of Investment Offer',
    'disclaimer.investment.text1': 'The acquisition, use or maintenance of the (YOUB.) token should not be interpreted as: financial investment; speculative application; expectation of profit; passive income instrument; participation in company results; promise of economic return.',
    'disclaimer.investment.text2': 'The token has an exclusively utilitarian purpose within the Youbbe ecosystem platforms, products and services.',
    
    'disclaimer.utility.title': '🌐 Operational Utility of the Token',
    'disclaimer.utility.text1': 'The (YOUB.) was structured to have real functional utility, including: internal payments; access to premium services; reduction of operational fees; cashback programs; rewards programs; benefits linked to the use of the ecosystem; loyalty and engagement features; participation in social and community initiatives.',
    'disclaimer.utility.text2': 'The perceived value of the token may vary according to market factors, technological adoption, ecosystem growth and general economic dynamics, without any guarantee on the part of Youbbe.',
    
    'disclaimer.programs.title': '⚠️ Ecosystem Economic Programs',
    'disclaimer.programs.text1': 'Youbbe may, at its discretion, strategically and non-obligatorily, allocate part of its operating revenue to initiatives related to strengthening the ecosystem, including: liquidity programs; cashback; rewards; operational incentives; expansion of the utility of the (YOUB.) token.',
    'disclaimer.programs.text2': 'Such initiatives: do not constitute profit distribution; do not represent a promise of appreciation; do not create a financial obligation to users; may be altered, reduced, suspended or terminated at any time.',
    
    'disclaimer.compliance.title': '🏛️ Regulation and Compliance',
    'disclaimer.compliance.text1': 'The Youbbe project seeks to act in compliance with applicable laws related to: technology; digital assets; anti-money laundering; compliance; data protection; applicable operational regulations.',
    'disclaimer.compliance.text2': 'The (YOUB.) token was conceived based on typical characteristics of utility tokens widely recognized by the international market. Even so, regulations related to digital assets may vary by jurisdiction and may undergo future changes. Users are responsible for understanding and respecting the local laws applicable in their respective countries.',
    
    'disclaimer.risks.title': '⚠️ Risks',
    'disclaimer.risks.text1': 'The use of digital assets involves significant risks, including: market volatility; regulatory changes; technological risks; operational risks; liquidity risks; risks related to ecosystem adoption. There is no guarantee of: appreciation; price stability; continuous liquidity; future availability of the token.',
    
    'disclaimer.liability.title': '🔐 Limitation of Liability',
    'disclaimer.liability.text1': 'Youbbe does not guarantee: token appreciation; financial return; price maintenance; permanent availability of secondary markets; future economic results. Participation in the ecosystem is voluntary and carried out at the exclusive risk of the user.',
    
    'disclaimer.final.title': '📌 Final Declaration',
    'disclaimer.final.text1': 'The Youbbe Token (YOUB.) is a utility token developed for use within an integrated technological ecosystem, having an operational, functional and utilitarian purpose, and should not be interpreted as a financial instrument, security or investment offer under any circumstances.',

    // Pillars translated strings
    'pillar.hub.title': 'Youbbe Hub',
    'pillar.hub.desc': 'The central SaaS engine of the ecosystem. A complete business platform with integrated tools for marketing, CRM, automation, and management.',
    'pillar.hub.feat1': 'Intelligent CRM and Pipeline Management',
    'pillar.hub.feat2': 'Email and WhatsApp Marketing Automation',
    'pillar.hub.feat3': 'Comprehensive Financial Dashboard',
    'pillar.hub.feat4': 'Integrated AI for Sales and Content',
    'pillar.hub.util1': 'Discounts on monthly subscriptions',
    'pillar.hub.util2': 'Unlock premium SaaS features',
    'pillar.hub.util3': 'Early access to new tools',
    'pillar.hub.util4': 'Cashback in (YOUB.) on platform use',

    'pillar.pay.title': 'Youbbe Pay',
    'pillar.pay.desc': 'The financial backbone. A modern payment infrastructure for digital transactions, crypto integration, and global financial solutions.',
    'pillar.pay.feat1': 'Multi-currency Digital Wallet',
    'pillar.pay.feat2': 'PIX, Card, and Recurring Payments',
    'pillar.pay.feat3': 'Crypto Gateway and Conversion',
    'pillar.pay.feat4': 'Automated Cashback System',
    'pillar.pay.util1': 'Reduced transaction fees',
    'pillar.pay.util2': 'Increased cashback rates',
    'pillar.pay.util3': 'Priority transaction processing',
    'pillar.pay.util4': 'Holding rewards',

    'pillar.life.title': 'Youbbe Life',
    'pillar.life.desc': 'Physical products and well-being. Premium nutraceuticals, energy drinks, and lifestyle products designed for performance.',
    'pillar.life.feat1': 'Youbbe Energy Functional Drinks',
    'pillar.life.feat2': 'Performance and Cognition Nutraceuticals',
    'pillar.life.feat3': 'Exclusive Lifestyle Apparel',
    'pillar.life.feat4': 'Health and Performance Monitoring',
    'pillar.life.util1': 'Store discounts',
    'pillar.life.util2': 'Access to exclusive products',
    'pillar.life.util3': 'Rewards in (YOUB.) on every purchase',
    'pillar.life.util4': 'VIP product launches',

    'pillar.creators.title': 'Youbbe Creators',
    'pillar.creators.desc': 'The creator economy platform. Monetization, community engagement, and digital marketplaces for influencers and educators.',
    'pillar.creators.feat1': 'Premium Content Subscriptions',
    'pillar.creators.feat2': 'Digital Products Marketplace',
    'pillar.creators.feat3': 'Gamified Engagement Systems',
    'pillar.creators.feat4': 'Direct Tips and Live Support',
    'pillar.creators.util1': 'Payments in (YOUB.) for creators',
    'pillar.creators.util2': 'Internal ecosystem payments',
    'pillar.creators.util3': 'Loyalty and reward systems',
    'pillar.creators.util4': 'Discounts on creator tools',

    'pillar.travel.title': 'Youbbe Travel',
    'pillar.travel.desc': 'Experiences and travel. Integrated booking systems and premium rewarded experiences within the ecosystem.',
    'pillar.travel.feat1': 'Global Booking Integration',
    'pillar.travel.feat2': 'Premium Travel Experiences',
    'pillar.travel.feat3': 'VIP Traveler Programs',
    'pillar.travel.feat4': 'Integrated Travel Insurance',
    'pillar.travel.util1': 'Discounts on bookings',
    'pillar.travel.util2': 'Cashback in (YOUB.) on travel',
    'pillar.travel.util3': 'Tiered VIP benefits',
    'pillar.travel.util4': 'Access to premium upgrades',

    'pillar.ai.title': 'Youbbe AI',
    'pillar.ai.desc': 'The intelligence layer. Automating processes and increasing productivity across the Youbbe ecosystem.',
    'pillar.ai.feat1': 'Business Process Automation with AI',
    'pillar.ai.feat2': 'Intelligent Content Generation Tools',
    'pillar.ai.feat3': 'AI Sales and Support Agents',
    'pillar.ai.feat4': 'Data-Driven Predictive Analysis',
    'pillar.ai.util1': 'Access to Premium AI Models',
    'pillar.ai.util2': 'AI Computing Credits',
    'pillar.ai.util3': 'Advanced automation tools',
    'pillar.ai.util4': 'Expanded usage limits',

    // Tokenomics Distribution Labels
    'tokenomics.dist.ecosystem': 'Ecosystem',
    'tokenomics.dist.liquidity': 'Liquidity',
    'tokenomics.dist.treasury': 'Treasury',
    'tokenomics.dist.team': 'Team',
    'tokenomics.dist.marketing': 'Marketing',
    'tokenomics.dist.social_fund': 'Social Fund',
    'tokenomics.dist.strategic_reserve': 'Strategic Reserve',
    'tokenomics.dist.presale1': '1st Presale',
    'tokenomics.dist.presale2': '2nd Presale',
    'tokenomics.dist.presale3': '3rd Presale',

    // Roadmap
    'roadmap.hero.subtitle': 'Official YOUB Token ecosystem roadmap',
    'roadmap.footer.title': 'YOUB TOKEN UTILITIES',
    'roadmap.benefit.cashback.title': 'Cashback',
    'roadmap.benefit.cashback.desc': 'Rewards on purchases and payments.',
    'roadmap.benefit.discounts.title': 'Discounts',
    'roadmap.benefit.discounts.desc': 'Progressive benefits for holders.',
    'roadmap.benefit.vip.title': 'VIP Access',
    'roadmap.benefit.vip.desc': 'Premium access and exclusive features.',
    'roadmap.benefit.community.title': 'Community',
    'roadmap.benefit.community.desc': 'Participation in campaigns and social governance.',
    'roadmap.benefit.ecosystem.title': 'Ecosystem',
    'roadmap.benefit.ecosystem.desc': 'Integration with Pay, AI, Life and Creators.',

    // Roadmap Steps
    'roadmap.step1.title': 'Ecosystem Foundation',
    'roadmap.step1.month': 'Month 1 - Month 3',
    'roadmap.step1.i1': 'Corporate and legal structure',
    'roadmap.step1.i2': 'Brand and website development',
    'roadmap.step1.i3': 'Platform structuring',
    'roadmap.step1.i4': 'Initial community building',

    'roadmap.step2.title': 'Token & Infrastructure',
    'roadmap.step2.month': 'Month 4 - Month 6',
    'roadmap.step2.i1': 'Smart contract development',
    'roadmap.step2.i2': 'Security audit',
    'roadmap.step2.i3': 'Cashback and benefits system',
    'roadmap.step2.i4': 'Wallet, integrations, and compliance',

    'roadmap.step3.title': 'Official Launch',
    'roadmap.step3.month': 'Month 7 - Month 9',
    'roadmap.step3.i1': 'Token launch and liquidity',
    'roadmap.step3.i2': 'Official platform and holder area',
    'roadmap.step3.i3': 'Global campaigns and marketing',
    'roadmap.step3.i4': 'Full ecosystem integration',

    'roadmap.step4.title': 'Youbbe Pay',
    'roadmap.step4.month': 'Month 10 - Month 12',
    'roadmap.step4.i1': 'Digital wallet',
    'roadmap.step4.i2': 'PIX and transfers',
    'roadmap.step4.i3': 'Integrated cashback',
    'roadmap.step4.i4': 'Financial benefits',

    'roadmap.step5.title': 'Youbbe Creators',
    'roadmap.step5.month': 'Month 13 - Month 18',
    'roadmap.step5.i1': 'Monetization platform',
    'roadmap.step5.i2': 'Marketplace and premium content',
    'roadmap.step5.i3': 'Rewards in YBB',
    'roadmap.step5.i4': 'Loyalty programs',

    'roadmap.step6.title': 'Youbbe Life',
    'roadmap.step6.month': 'Month 19 - Month 24',
    'roadmap.step6.i1': 'Product line launch',
    'roadmap.step6.i2': 'Cashback on purchases',
    'roadmap.step6.i3': 'Benefits for holders',
    'roadmap.step6.i4': 'Exclusive marketplace',

    'roadmap.step7.title': 'Youbbe AI',
    'roadmap.step7.month': 'Month 25 - Month 30',
    'roadmap.step7.i1': 'AI tools for businesses',
    'roadmap.step7.i2': 'AI for creators and marketing',
    'roadmap.step7.i3': 'Premium credits for holders',
    'roadmap.step7.i4': 'Operational automation',

    'roadmap.step8.title': 'Global Expansion',
    'roadmap.step8.month': 'Month 31 - Month 48',
    'roadmap.step8.i1': 'Entry into new markets',
    'roadmap.step8.i2': 'International partnerships',
    'roadmap.step8.i3': 'Strategic integrations',
    'roadmap.step8.i4': 'Community governance',

    'roadmap.step9.title': 'Self-Sustaining Economy',
    'roadmap.step9.month': 'Month 49 - Month 60+',
    'roadmap.step9.i1': 'Sustainable growth',
    'roadmap.step9.i2': 'New products and services',
    'roadmap.step9.i3': 'Utility expansion',
    'roadmap.step9.i4': 'Consolidated global infrastructure',
  },
  es: {
    // Navbar
    'nav.hub': 'Hub',
    'nav.pay': 'Pay',
    'nav.life': 'Life',
    'nav.creators': 'Creators',
    'nav.travel': 'Travel',
    'nav.ai': 'IA',
    'nav.token': 'Token',
    'nav.ecosystem': 'Ecosistema',
    'nav.tokenomics': 'Tokenomics',
    'nav.impact': 'Impacto',
    'nav.docs': 'Documentación',
    'nav.connect': 'Conectar Cartera',
    
    // Hero
    'hero.badge': 'Protocolo de Utilidad Youbbe',
    'hero.title.base': 'La nueva era de la',
    'hero.title.highlight': 'utilidad digital',
    'hero.subtitle': 'Arquitectura de alto rendimiento unificada por inteligencia artificial y protocolos distribuidos.',
    'hero.cta.primary': 'Explorar Ecosistema',
    'hero.cta.secondary': 'Ver Tokenomics',
    
    // Section Headers
    'section.digital_infra': 'Infraestructura Digital',
    'section.digital_infra.desc': 'Una sinfonía de módulos verticales, unificados por la inteligencia.',
    'section.tokenomics.badge': 'El Activo Central',
    'section.tokenomics.title': 'Youbbe Token (YOUB.)',
    'section.tokenomics.total_supply': 'Suministro Total Fijo',
    'section.tokenomics.strategy': 'Estrategia del Ecosistema',
    'section.tokenomics.strategy.desc': 'Youbbe podrá utilizar parte de sus ingresos operativos para programas de incentivo y fortalecimiento del ecosistema, incluyendo iniciativas de cashback, recompensas, liquidez operativa y expansión de la utilidad del token (YOUB.), siempre de forma estratégica, variable y no garantizada.',
    'section.tokenomics.buy': 'Adquirir Token (YOUB.)',
    'section.tokenomics.distribution': 'Distribución del Token',
    'section.tokenomics.fees': 'Sistema de Tasas',
    'section.tokenomics.fees.desc': 'Cada transacción podrá tener una tasa de hasta el 5%, distribuida en:',
    'section.tokenomics.fees.burn': 'Quema',
    'section.tokenomics.fees.social': 'Fondo social',
    'section.tokenomics.fees.ecosystem': 'Ecosistema',
    'section.tokenomics.revenue_allocation': 'Youbbe podrá destinar:',
    'section.tokenomics.revenue_allocation.desc': 'Hasta el 1% de los ingresos operativos netos',
    'section.tokenomics.buyback': 'Recompra / Liquidez',
    'section.tokenomics.social_fund': 'Fondo Social',
    
    // Social Impact
    'social.badge': 'Impacto Social',
    'social.quote': '"La tecnología es más poderosa cuando empodera a las comunidades y protege a quienes no pueden hablar por sí mismos."',
    'social.causes_animals': 'Causas Animales',
    'social.causes_animals.desc': 'Financiamiento directo para refugios, operaciones de rescate y organizaciones de bienestar animal a nivel mundial.',
    'social.social_projects': 'Proyectos Sociales',
    'social.social_projects.desc': 'Empoderando comunidades vulnerables a través de la educación tecnológica e infraestructura.',
    'social.environment': 'Medio Ambiente',
    'social.environment.desc': 'Apoyando iniciativas de sostenibilidad y programas de compensación de carbono en nuestra infraestructura digital.',
    'social.governance': 'Conozca más sobre nuestro modelo de gobernanza',

    // Pillars
    'pillar.view_features': 'Recursos Principales',
    'pillar.token_utility': 'Utilidade del Token',
    
    // Labels
    'label.protocol_v': 'Protocolo v1.0.4',
    'label.impact_footer': 'Impacto: Causas Animales y Apoyo Comunitario',
    'footer.staking': 'Staking de Utilidad Activo',
    'footer.infra': 'Infraestructura Global Lista',

    // Disclaimer
    'disclaimer.title': 'AVISO LEGAL — YOUBBE TOKEN (YOUB.)',
    'disclaimer.nature.title': 'Naturaleza del Token',
    'disclaimer.nature.text1': 'El Youbbe Token (YOUB.) fue desarrollado exclusivamente como un utility token, destinado a su uso dentro del ecosistema digital Youbbe, incluyendo, pero no limitado a:',
    'disclaimer.nature.item1': 'acceso a funcionalidades y servicios;',
    'disclaimer.nature.item2': 'programas de fidelidad;',
    'disclaimer.nature.item3': 'descuentos y beneficios operativos;',
    'disclaimer.nature.item4': 'cashback;',
    'disclaimer.nature.item5': 'uso en productos y plataformas del ecosistema;',
    'disclaimer.nature.item6': 'participación en iniciativas comunitarias y sociales;',
    'disclaimer.nature.item7': 'mecanismos de participación y recompensas.',
    'disclaimer.nature.text2': 'El (YOUB.) no representa, bajo ninguna circunstancia: participación corporativa; valor mobiliario; contrato de inversión colectiva; título financiero; participación accionaria; derecho a dividendos; derecho a ingresos, beneficios o activos de la empresa; promesa de revalorización financiera; garantía de rentabilidad futura.',
    
    'disclaimer.investment.title': '⚖️ Ausencia de Oferta de Inversión',
    'disclaimer.investment.text1': 'La adquisición, el uso o el mantenimiento del token (YOUB.) no deben interpretarse como: inversión financiera; aplicación especulativa; expectativa de beneficio; instrumento de renta pasiva; participación en los resultados de la empresa; promesa de rendimiento económico.',
    'disclaimer.investment.text2': 'El token tiene una finalidad exclusivamente utilitaria dentro de las plataformas, productos y servicios del ecosistema Youbbe.',
    
    'disclaimer.utility.title': '🌐 Utilidad Operativa del Token',
    'disclaimer.utility.text1': 'El (YOUB.) fue estructurado para tener una utilidad funcional real, incluyendo: pagos internos; acceso a servicios premium; reducción de tasas operativas; programas de cashback; programas de recompensas; beneficios vinculados al uso del ecosistema; características de fidelización y compromiso; participación en iniciativas sociales y comunitarias.',
    'disclaimer.utility.text2': 'El valor percibido del token podrá variar según factores de mercado, adopción tecnológica, crecimiento del ecosistema y dinámica económica general, sin ninguna garantía por parte de Youbbe.',
    
    'disclaimer.programs.title': '⚠️ Programas Económicos del Ecosistema',
    'disclaimer.programs.text1': 'Youbbe podrá, a su discreción, de forma estratégica y no obligatoria, destinar parte de sus ingresos operativos a iniciativas relacionadas con el fortalecimiento del ecosistema, incluyendo: programas de liquidez; cashback; recompensas; incentivos operativos; expansión de la utilidad del token (YOUB.).',
    'disclaimer.programs.text2': 'Tales iniciativas: no constituyen distribución de beneficios; no representan una promesa de revalorización; no crean una obligación financiera ante los usuarios; podrán ser alteradas, reducidas, suspendidas o finalizadas en cualquier momento.',
    
    'disclaimer.compliance.title': '🏛️ Regulación y Cumplimiento',
    'disclaimer.compliance.text1': 'El proyecto Youbbe busca actuar en cumplimiento con las legislaciones aplicables relacionadas con: tecnología; activos digitales; prevención del blanqueo de capitales; cumplimiento; protección de datos; regulaciones operativas aplicables.',
    'disclaimer.compliance.text2': 'El token (YOUB.) fue concebido basándose en características típicas de los utility tokens ampliamente reconocidos por el mercado internacional. Aun así, las regulaciones relacionadas con los activos digitales pueden variar según la jurisdicción y podrán sufrir cambios futuros. Los usuarios son responsables de comprender y respetar las leyes locales aplicables en sus respectivos países.',
    
    'disclaimer.risks.title': '⚠️ Riesgos',
    'disclaimer.risks.text1': 'El uso de activos digitales implica riesgos significativos, incluyendo: volatilidad del mercado; cambios regulatorios; riesgos tecnológicos; riesgos operativos; riesgos de liquidez; riesgos relacionados con la adopción del ecosistema. No hay ninguna garantía de: revalorización; estabilidad de precios; liquidez continua; disponibilidad futura del token.',
    
    'disclaimer.liability.title': '🔐 Limitación de Responsabilidad',
    'disclaimer.liability.text1': 'Youbbe no garantiza: revalorización del token; rendimiento financiero; mantenimiento del precio; disponibilidad permanente de mercados secundarios; resultados económicos futuros. La participación en el ecosistema es voluntaria y se realiza bajo el riesgo exclusivo del usuario.',
    
    'disclaimer.final.title': '📌 Declaración Final',
    'disclaimer.final.text1': 'El Youbbe Token (YOUB.) es un utility token desarrollado para su uso dentro de un ecosistema tecnológico integrado, con fines operativos, funcionales y utilitarios, y no debe interpretarse como un instrumento financiero, valor mobiliario u oferta de inversión bajo ninguna circunstancia.',

    // Pillars translated strings
    'pillar.hub.title': 'Youbbe Hub',
    'pillar.hub.desc': 'El motor SaaS central del ecosistema. Una plataforma de negocios completa con herramientas integradas para marketing, CRM, automatización y gestión.',
    'pillar.hub.feat1': 'CRM Inteligente y Gestión de Pipeline',
    'pillar.hub.feat2': 'Automatización de Marketing por Correo y WhatsApp',
    'pillar.hub.feat3': 'Panel Financiero Integral',
    'pillar.hub.feat4': 'IA Integrada para Ventas y Contenido',
    'pillar.hub.util1': 'Descuentos en suscripciones mensuales',
    'pillar.hub.util2': 'Desbloqueo de funciones SaaS premium',
    'pillar.hub.util3': 'Acceso anticipado a nuevas herramientas',
    'pillar.hub.util4': 'Cashback en (YOUB.) al usar la plataforma',

    'pillar.pay.title': 'Youbbe Pay',
    'pillar.pay.desc': 'La columna vertebral financiera. Una infraestructura de pago moderna para transacciones digitales, integración cripto y soluciones financieras globales.',
    'pillar.pay.feat1': 'Cartera Digital Multi-moneda',
    'pillar.pay.feat2': 'PIX, Tarjeta y Pagos Recurrentes',
    'pillar.pay.feat3': 'Pasarela Cripto y Conversión',
    'pillar.pay.feat4': 'Sistema de Cashback Automatizado',
    'pillar.pay.util1': 'Tasas de transacción reducidas',
    'pillar.pay.util2': 'Tasas de cashback aumentadas',
    'pillar.pay.util3': 'Procesamiento de transacciones prioritario',
    'pillar.pay.util4': 'Recompensas por holding',

    'pillar.life.title': 'Youbbe Life',
    'pillar.life.desc': 'Productos físicos y bienestar. Nutracéuticos premium, bebidas energéticas y productos de estilo de vida diseñados para el rendimiento.',
    'pillar.life.feat1': 'Bebidas Funcionales Youbbe Energy',
    'pillar.life.feat2': 'Nutracéuticos de Rendimiento y Cognición',
    'pillar.life.feat3': 'Ropa de Estilo de Vida Exclusiva',
    'pillar.life.feat4': 'Monitoreo de Salud y Rendimiento',
    'pillar.life.util1': 'Descuentos en la tienda',
    'pillar.life.util2': 'Acceso a productos exclusivos',
    'pillar.life.util3': 'Recompensas en (YOUB.) en cada compra',
    'pillar.life.util4': 'Lanzamientos de productos VIP',

    'pillar.creators.title': 'Youbbe Creators',
    'pillar.creators.desc': 'La plataforma de la economía creadora. Monetización, compromiso comunitario y mercados digitales para influencers y educadores.',
    'pillar.creators.feat1': 'Suscripciones de Contenido Premium',
    'pillar.creators.feat2': 'Mercado de Productos Digitales',
    'pillar.creators.feat3': 'Sistemas de Participación Gamificados',
    'pillar.creators.feat4': 'Propinas Directas y Soporte en Vivos',
    'pillar.creators.util1': 'Pagos en (YOUB.) para creadores',
    'pillar.creators.util2': 'Pagos internos del ecosistema',
    'pillar.creators.util3': 'Sistemas de fidelización y recompensa',
    'pillar.creators.util4': 'Descuentos en herramientas para creadores',

    'pillar.travel.title': 'Youbbe Travel',
    'pillar.travel.desc': 'Experiencias y viajes. Sistemas de reserva integrados y experiencias premium recompensadas dentro del ecosistema.',
    'pillar.travel.feat1': 'Integración de Reservas Globales',
    'pillar.travel.feat2': 'Experiencias de Viaje Premium',
    'pillar.travel.feat3': 'Programas VIP para Viajeros',
    'pillar.travel.feat4': 'Seguro de Viaje Integrado',
    'pillar.travel.util1': 'Descuentos en reservas',
    'pillar.travel.util2': 'Cashback en (YOUB.) en viajes',
    'pillar.travel.util3': 'Beneficios VIP por niveles',
    'pillar.travel.util4': 'Acceso a mejoras premium',

    'pillar.ai.title': 'Youbbe AI',
    'pillar.ai.desc': 'La capa de inteligencia. Automatizando procesos y aumentando la productividad en todo el ecosistema Youbbe.',
    'pillar.ai.feat1': 'Automatización de Procesos de Negocio con IA',
    'pillar.ai.feat2': 'Herramientas de Generación de Contenido Inteligente',
    'pillar.ai.feat3': 'Agentes de Ventas y Soporte con IA',
    'pillar.ai.feat4': 'Análisis Predictivo Basado en Datos',
    'pillar.ai.util1': 'Acceso a Modelos de IA Premium',
    'pillar.ai.util2': 'Créditos de Computación de IA',
    'pillar.ai.util3': 'Herramientas avanzadas de automatización',
    'pillar.ai.util4': 'Límites de uso ampliados',

    // Tokenomics Distribution Labels
    'tokenomics.dist.ecosystem': 'Ecosistema',
    'tokenomics.dist.liquidity': 'Liquidez',
    'tokenomics.dist.treasury': 'Tesorería',
    'tokenomics.dist.team': 'Equipo',
    'tokenomics.dist.marketing': 'Marketing',
    'tokenomics.dist.social_fund': 'Fundo Social',
    'tokenomics.dist.strategic_reserve': 'Reserva Estratégica',
    'tokenomics.dist.presale1': '1ª Pre-venta',
    'tokenomics.dist.presale2': '2ª Pre-venta',
    'tokenomics.dist.presale3': '3ª Pre-venta',

    // Roadmap
    'roadmap.hero.subtitle': 'Roadmap oficial del ecosistema YOUB Token',
    'roadmap.footer.title': 'UTILIDADES DEL TOKEN YOUB',
    'roadmap.benefit.cashback.title': 'Cashback',
    'roadmap.benefit.cashback.desc': 'Recompensas en compras y pagos.',
    'roadmap.benefit.discounts.title': 'Descuentos',
    'roadmap.benefit.discounts.desc': 'Beneficios progresivos para holders.',
    'roadmap.benefit.vip.title': 'Acceso VIP',
    'roadmap.benefit.vip.desc': 'Acceso premium y funciones exclusivas.',
    'roadmap.benefit.community.title': 'Comunidad',
    'roadmap.benefit.community.desc': 'Participación en campañas e governanza social.',
    'roadmap.benefit.ecosystem.title': 'Ecosistema',
    'roadmap.benefit.ecosystem.desc': 'Integración con Pay, AI, Life y Creators.',

    // Roadmap Steps
    'roadmap.step1.title': 'Fundación del Ecosistema',
    'roadmap.step1.month': 'Mes 1 - Mes 3',
    'roadmap.step1.i1': 'Estructura corporativa y jurídica',
    'roadmap.step1.i2': 'Desarrollo de marca y sitio web',
    'roadmap.step1.i3': 'Estructuración de plataformas',
    'roadmap.step1.i4': 'Construcción de la comunidad inicial',

    'roadmap.step2.title': 'Token e Infraestructura',
    'roadmap.step2.month': 'Mes 4 - Mes 6',
    'roadmap.step2.i1': 'Desarrollo del contrato inteligente',
    'roadmap.step2.i2': 'Auditoría de seguridad',
    'roadmap.step2.i3': 'Sistema de cashback y beneficios',
    'roadmap.step2.i4': 'Wallet, integraciones y cumplimiento',

    'roadmap.step3.title': 'Lanzamiento Oficial',
    'roadmap.step3.month': 'Mes 7 - Mes 9',
    'roadmap.step3.i1': 'Lanzamiento del token y liquidez',
    'roadmap.step3.i2': 'Plataforma oficial y área del titular',
    'roadmap.step3.i3': 'Campañas globales y marketing',
    'roadmap.step3.i4': 'Integración completa del ecosistema',

    'roadmap.step4.title': 'Youbbe Pay',
    'roadmap.step4.month': 'Mes 10 - Mes 12',
    'roadmap.step4.i1': 'Cartera digital',
    'roadmap.step4.i2': 'PIX y transferencias',
    'roadmap.step4.i3': 'Cashback integrado',
    'roadmap.step4.i4': 'Beneficios financieros',

    'roadmap.step5.title': 'Youbbe Creators',
    'roadmap.step5.month': 'Mes 13 - Mes 18',
    'roadmap.step5.i1': 'Plataforma de monetización',
    'roadmap.step5.i2': 'Marketplace y contenido premium',
    'roadmap.step5.i3': 'Recompensas en YBB',
    'roadmap.step5.i4': 'Programas de fidelización',

    'roadmap.step6.title': 'Youbbe Life',
    'roadmap.step6.month': 'Mes 19 - Mes 24',
    'roadmap.step6.i1': 'Lanzamiento de línea de productos',
    'roadmap.step6.i2': 'Cashback en compras',
    'roadmap.step6.i3': 'Beneficios para titulares',
    'roadmap.step6.i4': 'Marketplace exclusivo',

    'roadmap.step7.title': 'Youbbe AI',
    'roadmap.step7.month': 'Mes 25 - Mes 30',
    'roadmap.step7.i1': 'Herramientas de IA para empresas',
    'roadmap.step7.i2': 'IA para creadores y marketing',
    'roadmap.step7.i3': 'Créditos premium para titulares',
    'roadmap.step7.i4': 'Automatización operativa',

    'roadmap.step8.title': 'Expansión Global',
    'roadmap.step8.month': 'Mes 31 - Mes 48',
    'roadmap.step8.i1': 'Entrada en nuevos mercados',
    'roadmap.step8.i2': 'Asociaciones internacionales',
    'roadmap.step8.i3': 'Integraciones estratégicas',
    'roadmap.step8.i4': 'Gobernanza comunitaria',

    'roadmap.step9.title': 'Economía Autosustentable',
    'roadmap.step9.month': 'Mes 49 - Mes 60+',
    'roadmap.step9.i1': 'Crecimiento sostenible',
    'roadmap.step9.i2': 'Nuevos productos y servicios',
    'roadmap.step9.i3': 'Expansión de utilidades',
    'roadmap.step9.i4': 'Infraestructura global consolidada',
  }

};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
