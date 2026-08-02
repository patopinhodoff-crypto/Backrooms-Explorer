import { levels } from "./data/levels";
import LevelCard from "./components/LevelCard";

export default function App() {
  return (
    <div className="app">
      <h1>📚 Backrooms Explorer</h1>

      <p className="intro">
        Uma enciclopédia interativa das Backrooms.
        Explore níveis, descubra entidades e veja como sobreviver.
      </p>

      <div className="levels">
        {levels.map((level) => (
          <LevelCard
            key={level.id}
            level={level}
          />
        ))}
      </div>
    </div>
  );
}
