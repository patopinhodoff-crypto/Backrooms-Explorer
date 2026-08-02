import LevelCard from "./components/LevelCard";
import { levels } from "./data/levels";

export default function App() {
  return (
    <div style={{ maxWidth: "1100px", margin: "auto", padding: "30px" }}>
      <h1>📚 Backrooms Explorer</h1>

      <p>
        Explore níveis, leia documentos confidenciais e experimente pequenas
        simulações de cada Backroom.
      </p>

      {levels.map((level) => (
        <LevelCard
          key={level.id}
          nome={`Nível ${level.id} - ${level.nome}`}
          classe={level.classe}
          perigo={level.perigo}
          descricao={level.descricao}
        />
      ))}
    </div>
  );
}
