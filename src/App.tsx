import { levels } from "./data/level";

export default function App() {
  return (
    <div className="app">
      <h1>🟨 Backrooms Explorer</h1>

      <p>
        Uma enciclopédia interativa das Backrooms.
      </p>

      <h2>📚 Níveis disponíveis</h2>

      {levels.map((level) => (
        <div className="level-card" key={level.id}>
          <h3>
            Nível {level.id} — {level.nome}
          </h3>

          <p>📌 {level.classe}</p>
          <p>⚠️ Perigo: {level.perigo}</p>

          <p>{level.descricao}</p>

          <p>
            👁 Entidades: {level.entidades.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}
