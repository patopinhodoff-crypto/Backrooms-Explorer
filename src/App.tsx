import Sidebar from "./components/Sidebar";
import LevelCard from "./components/LevelCard";
import { levels } from "./data/levels";

export default function App() {
  return (
    <div>
      <Sidebar />

      <main
        style={{
          marginLeft: "260px",
          padding: "30px",
        }}
      >
        <h1>📚 Backrooms Explorer</h1>

        <p>
          Uma enciclopédia das Backrooms com níveis, entidades e documentos.
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
      </main>
    </div>
  );
}
