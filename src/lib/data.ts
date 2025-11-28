// Dados mockados para o Clear Mind App

import { Strategy, Community, Post } from './types';

export const STRATEGIES: Strategy[] = [
  // COMPREENDA O VÍCIO
  {
    id: 'understand-1',
    title: 'Entenda o Ciclo do Vício',
    description: 'Aprenda como o cérebro cria padrões de dependência e como a dopamina afeta seu comportamento.',
    category: 'understanding',
    completed: false,
  },
  {
    id: 'understand-2',
    title: 'Identifique Seus Gatilhos',
    description: 'Reconheça situações, emoções e ambientes que desencadeiam o comportamento viciante.',
    category: 'understanding',
    completed: false,
  },
  {
    id: 'understand-3',
    title: 'Neuroplasticidade: Seu Cérebro Pode Mudar',
    description: 'Descubra como o cérebro pode se reconectar e criar novos padrões saudáveis.',
    category: 'understanding',
    completed: false,
  },
  {
    id: 'understand-4',
    title: 'Os Efeitos do Vício na Sua Vida',
    description: 'Reflita sobre o impacto do vício em relacionamentos, trabalho e saúde mental.',
    category: 'understanding',
    completed: false,
  },

  // ESTRATÉGIAS PRÁTICAS
  {
    id: 'practical-1',
    title: 'Técnica dos 5 Minutos',
    description: 'Quando sentir o impulso, espere 5 minutos. O desejo geralmente passa.',
    category: 'practical',
    completed: false,
  },
  {
    id: 'practical-2',
    title: 'Substitua o Hábito',
    description: 'Crie um hábito alternativo saudável para ocupar o tempo e a mente.',
    category: 'practical',
    completed: false,
  },
  {
    id: 'practical-3',
    title: 'Exercício Físico Diário',
    description: 'Pratique 30 minutos de atividade física para liberar endorfinas naturais.',
    category: 'practical',
    completed: false,
  },
  {
    id: 'practical-4',
    title: 'Meditação e Mindfulness',
    description: 'Pratique 10 minutos de meditação diária para fortalecer o autocontrole.',
    category: 'practical',
    completed: false,
  },
  {
    id: 'practical-5',
    title: 'Bloqueie Conteúdo Gatilho',
    description: 'Use ferramentas de bloqueio para evitar acesso a conteúdo prejudicial.',
    category: 'practical',
    completed: false,
  },
  {
    id: 'practical-6',
    title: 'Técnica do Diário',
    description: 'Escreva seus pensamentos e sentimentos diariamente para processar emoções.',
    category: 'practical',
    completed: false,
  },

  // ROTINA E DISCIPLINA
  {
    id: 'routine-1',
    title: 'Estabeleça uma Rotina Matinal',
    description: 'Crie uma sequência de ações positivas logo ao acordar.',
    category: 'routine',
    completed: false,
  },
  {
    id: 'routine-2',
    title: 'Horário de Sono Consistente',
    description: 'Durma e acorde no mesmo horário todos os dias para regular o cérebro.',
    category: 'routine',
    completed: false,
  },
  {
    id: 'routine-3',
    title: 'Planeje Seu Dia',
    description: 'Organize suas atividades para evitar tempo ocioso e tédio.',
    category: 'routine',
    completed: false,
  },
  {
    id: 'routine-4',
    title: 'Check-in Diário',
    description: 'Reserve 5 minutos no final do dia para avaliar seu progresso.',
    category: 'routine',
    completed: false,
  },

  // DISCIPLINA
  {
    id: 'discipline-1',
    title: 'Compromisso de 30 Dias',
    description: 'Faça um compromisso sério de 30 dias sem recaídas.',
    category: 'discipline',
    completed: false,
  },
  {
    id: 'discipline-2',
    title: 'Accountability Partner',
    description: 'Encontre alguém de confiança para compartilhar sua jornada.',
    category: 'discipline',
    completed: false,
  },
  {
    id: 'discipline-3',
    title: 'Recompensas por Marcos',
    description: 'Celebre cada semana limpa com uma recompensa saudável.',
    category: 'discipline',
    completed: false,
  },
  {
    id: 'discipline-4',
    title: 'Aprenda com Recaídas',
    description: 'Se recair, analise o que aconteceu e ajuste sua estratégia.',
    category: 'discipline',
    completed: false,
  },
];

export const COMMUNITIES: Community[] = [
  {
    id: 'porn-addiction',
    name: 'Vencendo a Pornografia',
    description: 'Comunidade de apoio para homens superando o vício em pornografia',
    addictionType: 'pornography',
    memberCount: 1247,
    posts: [],
  },
  {
    id: 'gaming-addiction',
    name: 'Equilíbrio nos Games',
    description: 'Para quem busca um relacionamento saudável com jogos',
    addictionType: 'gaming',
    memberCount: 892,
    posts: [],
  },
  {
    id: 'social-media',
    name: 'Desintoxicação Digital',
    description: 'Reduzindo o uso compulsivo de redes sociais',
    addictionType: 'social-media',
    memberCount: 1534,
    posts: [],
  },
  {
    id: 'alcohol',
    name: 'Vida Sem Álcool',
    description: 'Comunidade de apoio para sobriedade',
    addictionType: 'alcohol',
    memberCount: 2103,
    posts: [],
  },
  {
    id: 'smoking',
    name: 'Livre do Cigarro',
    description: 'Apoio mútuo para parar de fumar',
    addictionType: 'smoking',
    memberCount: 967,
    posts: [],
  },
];

export const SAMPLE_POSTS: Post[] = [
  {
    id: 'post-1',
    userId: 'user-1',
    userName: 'Carlos M.',
    communityId: 'porn-addiction',
    content: '30 dias limpo! Nunca pensei que conseguiria. A técnica dos 5 minutos salvou minha vida várias vezes. Obrigado a todos pelo apoio! 💪',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    likes: 47,
    comments: [
      {
        id: 'comment-1',
        userId: 'user-2',
        userName: 'João S.',
        content: 'Parabéns, irmão! Continue firme! 🔥',
        createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
      },
    ],
  },
  {
    id: 'post-2',
    userId: 'user-3',
    userName: 'Rafael P.',
    communityId: 'porn-addiction',
    content: 'Tive uma recaída hoje depois de 15 dias. Me sinto péssimo, mas não vou desistir. Analisando o que aconteceu: estava sozinho, entediado e estressado. Vou ajustar minha estratégia.',
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    likes: 23,
    comments: [
      {
        id: 'comment-2',
        userId: 'user-4',
        userName: 'Marcos L.',
        content: 'Não desista! Recaída faz parte do processo. O importante é levantar e continuar.',
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
      },
    ],
  },
];

export const PLANS = [
  {
    id: 'trial',
    name: 'Teste Grátis',
    price: 0,
    period: '7 dias',
    features: [
      'Acesso a todas as estratégias',
      'Check-in diário',
      'Comunidades básicas',
      'Bloqueador de sites',
    ],
    popular: false,
  },
  {
    id: 'monthly',
    name: 'Mensal',
    price: 29.90,
    period: 'mês',
    features: [
      'Tudo do plano grátis',
      'Diário ilimitado',
      'Reflexões guiadas',
      'Suporte prioritário',
      'Estatísticas avançadas',
    ],
    popular: false,
  },
  {
    id: 'semester',
    name: 'Semestral',
    price: 149.90,
    period: '6 meses',
    savings: 'Economize 17%',
    features: [
      'Tudo do plano mensal',
      'Sessões de coaching',
      'Conteúdo exclusivo',
      'Grupo VIP',
      'Certificado de conclusão',
    ],
    popular: true,
  },
  {
    id: 'annual',
    name: 'Anual',
    price: 249.90,
    period: 'ano',
    savings: 'Economize 30%',
    features: [
      'Tudo do plano semestral',
      'Acompanhamento personalizado',
      'Acesso vitalício ao conteúdo',
      'Workshops ao vivo',
      'Garantia de 30 dias',
    ],
    popular: false,
  },
];
