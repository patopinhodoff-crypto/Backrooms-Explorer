import { levels } from "./data/levels";

export default function App() {
  return (
    <div className="container">
      <h1>📚 Backrooms Explorer</h1>

      <p className="intro">
        Arquivo digital das Backrooms. Explore níveis, entidades e relatos de sobreviventes.
      </p>

      <div className="levels">
        {levels.map((level) => (
          <div className="level-card" key={level.id}>
            <h2>
              🟨 Nível {level.id} — {level.nome}
            </h2>

            <p>
              <strong>Classe:</strong> {level.classe}
            </p>

            <p>
              <strong>Perigo:</strong> {level.perigo}
            </p>

            <p>
              {level.descricao}
            </p>

            <h3>👁 Entidades</h3>
            <ul>
              {level.entidades.map((entidade, index) => (
                <li key={index}>{entidade}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
