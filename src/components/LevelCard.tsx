import { Level } from "../data/levels";

interface Props {
  level: Level;
}

export default function LevelCard({ level }: Props) {
  return (
    <div className="level-card">
      <h2>
        Nível {level.id} - {level.nome}
      </h2>

      <p>
        <b>Classe:</b> {level.classe}
      </p>

      <p>
        <b>Perigo:</b> {level.perigo}
      </p>

      <p>{level.descricao}</p>

      <p>
        <b>Entidades:</b> {level.entidades.join(", ")}
      </p>

      <button>
        Explorar nível
      </button>
    </div>
  );
}
