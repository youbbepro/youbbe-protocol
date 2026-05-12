export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  tokenUtility: string[];
  color: string;
}

export const ECOSYSTEM_PILLARS: Pillar[] = [
  {
    id: "hub",
    title: "Youbbe Hub",
    description: "O motor SaaS central do ecossistema. Uma plataforma de negócios completa com ferramentas integradas para marketing, CRM, automação e gestão.",
    icon: "LayoutDashboard",
    features: [
      "CRM Inteligente e Gestão de Pipeline",
      "Automação de E-mail e WhatsApp Marketing",
      "Dashboard Financeiro Abrangente",
      "IA Integrada para Vendas e Conteúdo"
    ],
    tokenUtility: [
      "Descontos em assinaturas mensais",
      "Desbloqueio de recursos SaaS premium",
      "Acesso antecipado a novas ferramentas",
      "Cashback em (YOUB.) no uso da plataforma"
    ],
    color: "blue"
  },
  {
    id: "pay",
    title: "Youbbe Pay",
    description: "A espinha dorsal financeira. Uma infraestrutura de pagamento moderna para transações digitais, integração cripto e soluções financeiras globais.",
    icon: "Wallet",
    features: [
      "Carteira Digital Multi-moeda",
      "PIX, Cartão e Pagamentos Recorrentes",
      "Gateway Cripto e Conversão",
      "Sistema de Cashback Automatizado"
    ],
    tokenUtility: [
      "Taxas de transação reduzidas",
      "Taxas de cashback aumentadas",
      "Processamento de transação prioritário",
      "Recompensas por holding"
    ],
    color: "emerald"
  },
  {
    id: "life",
    title: "Youbbe Life",
    description: "Produtos físicos e bem-estar. Nutracêuticos premium, bebidas energéticas e produtos de lifestyle projetados para performance.",
    icon: "HeartPulse",
    features: [
      "Bebidas Funcionais Youbbe Energy",
      "Nutracêuticos de Performance e Cognição",
      "Vestuário de Lifestyle Exclusivo",
      "Monitoramento de Saúde e Performance"
    ],
    tokenUtility: [
      "Descontos na loja",
      "Acesso a produtos exclusivos",
      "Recompensas em (YOUB.) em cada compra",
      "Lançamentos de produtos VIP"
    ],
    color: "rose"
  },
  {
    id: "creators",
    title: "Youbbe Creators",
    description: "A plataforma da economia creator. Monetização, engajamento comunitário e marketplaces digitais para influenciadores e educadores.",
    icon: "Users",
    features: [
      "Assinaturas de Conteúdo Premium",
      "Marketplace de Produtos Digitais",
      "Sistemas de Engajamento Gamificados",
      "Gorjetas Diretas e Suporte em Lives"
    ],
    tokenUtility: [
      "Pagamentos em (YOUB.) para criadores",
      "Pagamentos internos no ecossistema",
      "Sistemas de fidelidade e recompensa",
      "Descontos em ferramentas para criadores"
    ],
    color: "purple"
  },
  {
    id: "travel",
    title: "Youbbe Travel",
    description: "Experiências e viagens. Sistemas de reserva integrados e experiências premium recompensadas dentro do ecossistema.",
    icon: "Plane",
    features: [
      "Integração de Reservas Globais",
      "Experiências de Viagem Premium",
      "Programas VIP para Viajantes",
      "Seguro Viagem Integrado"
    ],
    tokenUtility: [
      "Descontos em reservas",
      "Cashback em (YOUB.) em viagens",
      "Benefícios VIP em níveis",
      "Acesso a upgrades premium"
    ],
    color: "cyan"
  },
  {
    id: "ai",
    title: "Youbbe AI",
    description: "A camada de inteligência. Automatizando processos e aumentando a produtividade em todo o ecossistema Youbbe.",
    icon: "Brain",
    features: [
      "Automação de Processos de Negócio com IA",
      "Ferramentas de Geração de Conteúdo Inteligente",
      "Agentes de Vendas e Suporte com IA",
      "Análise Preditiva Baseada em Dados"
    ],
    tokenUtility: [
      "Acesso a Modelos de IA Premium",
      "Créditos de Computação de IA",
      "Ferramentas avançadas de automação",
      "Limites de uso expandidos"
    ],
    color: "amber"
  }
];

export const TOKENOMICS = {
  name: "Youbbe Token",
  symbol: "(YOUB.)",
  totalSupply: "1.000.000.000",
  distribution: [
    { label: "Ecossistema", percentage: 15 },
    { label: "Liquidez", percentage: 20 },
    { label: "Tesouraria", percentage: 10 },
    { label: "Equipe", percentage: 5 },
    { label: "Marketing", percentage: 10 },
    { label: "Fundo Social", percentage: 10 },
    { label: "Reserva Estratégica", percentage: 10 },
    { label: "1ª Pré-venda", percentage: 5 },
    { label: "2ª Pré-venda", percentage: 5 },
    { label: "3ª Pré-venda", percentage: 10 }
  ]
};
