export interface Level {
  id: number;
  nome: string;
  classe: string;
  perigo: string;
  descricao: string;
  entidades: string[];
}

export const levels: Level[] = [
  {
    id: 0,
    nome: "Lobby",
    classe: "Classe 1",
    perigo: "Baixo",
    descricao:
      "Corredores amarelos infinitos, carpete úmido e luzes fluorescentes. É o primeiro nível encontrado pela maioria dos exploradores.",
    entidades: ["Nenhuma confirmada"],
  },
  {
    id: 1,
    nome: "Habitable Zone",
    classe: "Classe 1",
    perigo: "Baixo",
    descricao:
      "Grande depósito industrial onde existem alguns recursos e locais relativamente seguros.",
    entidades: ["Skin-Stealers"],
  },
  {
    id: 2,
    nome: "Pipe Dreams",
    classe: "Classe 2",
    perigo: "Médio",
    descricao:
      "Corredores estreitos cheios de tubulações quentes e vapor constante.",
    entidades: ["Hounds", "Smilers"],
  },
  {
    id: 3,
    nome: "Electrical Station",
    classe: "Classe 3",
    perigo: "Alto",
    descricao:
      "Uma enorme estação elétrica com máquinas antigas funcionando sem explicação.",
    entidades: ["Facelings", "Hounds"],
  },
  {
    id: 4,
    nome: "Abandoned Office",
    classe: "Classe 1",
    perigo: "Baixo",
    descricao:
      "Escritórios vazios com computadores antigos e iluminação fraca.",
    entidades: ["Poucas entidades"],
  },
];
