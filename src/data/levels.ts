export interface Level {
  id: number;
  nome: string;
  classe: string;
  perigo: string;
  descricao: string;
  entidades: string[];
  entrada: string;
  saida: string;
  recursos: string[];
  dicas: string[];
}

export const levels: Level[] = [
  {
    id: 0,
    nome: "Lobby",
    classe: "Classe 1",
    perigo: "Baixo",
    descricao:
      "Corredores amarelos infinitos, carpete úmido e luzes fluorescentes que criam um som constante. Um dos níveis mais conhecidos das Backrooms.",
    entidades: [
      "Nenhuma confirmada"
    ],
    entrada:
      "Através de um noclip acidental na realidade.",
    saida:
      "Encontrando transições escondidas para outros níveis.",
    recursos: [
      "Água de Amêndoa",
      "Mochilas abandonadas",
      "Pequenos suprimentos"
    ],
    dicas: [
      "Não corra sem motivo.",
      "Marque seu caminho.",
      "Economize recursos."
    ]
  },

  {
    id: 1,
    nome: "Habitable Zone",
    classe: "Classe 1",
    perigo: "Baixo",
    descricao:
      "Uma grande área industrial com salas de armazenamento, corredores e alguns locais considerados seguros.",
    entidades: [
      "Skin-Stealers"
    ],
    entrada:
      "Encontrando uma porta metálica no Nível 0.",
    saida:
      "Portas específicas levam para outros níveis.",
    recursos: [
      "Água",
      "Ferramentas",
      "Materiais abandonados"
    ],
    dicas: [
      "Não confie em pessoas desconhecidas.",
      "Verifique se alguém é realmente humano."
    ]
  },

  {
    id: 2,
    nome: "Pipe Dreams",
    classe: "Classe 2",
    perigo: "Médio",
    descricao:
      "Um sistema infinito de túneis com tubulações quentes, vapor e sons misteriosos.",
    entidades: [
      "Hounds",
      "Smilers"
    ],
    entrada:
      "Encontrando corredores de manutenção no Nível 1.",
    saida:
      "Seguindo áreas com menos vapor.",
    recursos: [
      "Canos de metal",
      "Água condensada"
    ],
    dicas: [
      "Evite lugares muito escuros.",
      "Não siga sons estranhos."
    ]
  },

  {
    id: 3,
    nome: "Electrical Station",
    classe: "Classe 3",
    perigo: "Alto",
    descricao:
      "Uma estação elétrica abandonada com máquinas funcionando sem energia aparente.",
    entidades: [
      "Hounds",
      "Facelings"
    ],
    entrada:
      "Através de áreas industriais profundas.",
    saida:
      "Encontrando salas de controle antigas.",
    recursos: [
      "Equipamentos elétricos",
      "Baterias"
    ],
    dicas: [
      "Evite máquinas desconhecidas.",
      "Fique atento aos sons."
    ]
  }
];
