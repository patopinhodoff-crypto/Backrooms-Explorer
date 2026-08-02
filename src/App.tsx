import { useState } from "react";
import { levels } from "./data/level";
import LevelPage from "./pages/LevelPage";

export default function App() {
  const [selectedLevel, setSelectedLevel] = useState(null);

  if (selectedLevel) {
    return (
      <div>
        <button onClick={() => setSelectedLevel(null)}>
          ⬅ Voltar para níveis
        </button>

        <LevelPage level={selectedLevel} />
      </div>
    );
  }

  return (
    <div className="app">
      <h1>🟨 Backrooms Explorer</h1>

      <p>
        Uma enciclopédia interativa das Backrooms.
      </p>

      <h2>📚 Níveis</h2>

      {levels.map((level) => (
        <div className="level-card" key={level.id}>

          <h3>
            Nível {level.id} — {level.nome}
          </h3>

          <p>
            ⚠️ Perigo: {level.perigo}
          </p>

          <p>
            {level.descricao}
          </p>

          <button onClick={() => setSelectedLevel(level)}>
            🔍 Explorar nível
          </button>

        </div>
      ))}
    </div>
  );
}
