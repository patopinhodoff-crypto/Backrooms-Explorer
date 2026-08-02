export interface Level {
  id: number;
  nome: string;
  classe: string;
  perigo: string;

  descricao: string;

  anomalias: string[];
  entidades: string[];
  recursos: string[];

  entrada: string;
  saida: string;

  dicas: string[];
  curiosidades: string;

  relato: string;
}

export const levels: Level[] = [
  {
    id: 0,
    nome: "Lobby",
    classe: "Classe 1",
    perigo: "Baixo",

    descricao:
      "Corredores amarelos infinitos, carpete úmido e luzes fluorescentes. O primeiro nível conhecido das Backrooms.",

    anomalias: [
      "Corredores parecem mudar lentamente",
      "Sons distantes sem origem"
    ],

    entidades: [
      "Nenhuma confirmada"
    ],

    recursos: [
      "Água de Amêndoa",
      "Mochilas abandonadas"
    ],

    entrada:
      "Um noclip acidental da realidade pode levar ao nível.",

    saida:
      "Encontrar transições escondidas nos corredores.",

    dicas: [
      "Não corra sem motivo",
      "Marque seu caminho",
      "Economize recursos"
    ],

    curiosidades:
      "Apesar de parecer simples, muitos exploradores acabam presos por causa da imensidão do local.",

    relato:
      "Caminhei por horas. O som das lâmpadas era a única coisa que me acompanhava."
  },

  {
    id: 1,
    nome: "Habitable Zone",
    classe: "Classe 1",
    perigo: "Baixo",

    descricao:
      "Um enorme estacionamento industrial aparentemente abandonado, com áreas relativamente seguras.",

    anomalias: [
      "Veículos aparecem em locais diferentes",
      "Ecos de motores sem origem"
    ],

    entidades: [
      "Skin-Stealers"
    ],

    recursos: [
      "Ferramentas",
      "Água",
      "Materiais abandonados"
    ],

    entrada:
      "Pode ser encontrado através de uma saída instável do Nível 0.",

    saida:
      "Portas específicas levam a outros níveis.",

    dicas: [
      "Não siga sons desconhecidos",
      "Evite ficar parado por muito tempo"
    ],

    curiosidades:
      "É considerado um dos primeiros níveis onde humanos conseguem sobreviver por mais tempo.",

    relato:
      "Parecia seguro demais. E nas Backrooms, isso nunca é um bom sinal."
  }
];
