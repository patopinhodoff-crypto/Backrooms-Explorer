import { levels } from "./data/levels";

export default function App() {
  return (
    <div style={{ padding: "30px", color: "white" }}>
      <h1>📚 Backrooms Explorer</h1>
      <p>
        Uma enciclopédia completa das Backrooms com mais de 100 níveis e um
        simulador de exploração.
      </p>

      {levels.map((level) => (
        <div
          key={level.id}
          style={{
            border: "1px solid #555",
            borderRadius: "10px",
            padding: "15px",
            marginTop: "20px",
            background: "#111",
          }}
        >
          <h2>
            Nível {level.id} — {level.nome}
          </h2>

          <p><b>Classe:</b> {level.classe}</p>
          <p><b>Perigo:</b> {level.perigo}</p>
          <p>{level.descricao}</p>

          <p>
            <b>Entidades:</b> {level.entidades.join(", ")}
          </p>

          <button>Explorar este nível</button>
        </div>
      ))}
    </div>
  );
}
