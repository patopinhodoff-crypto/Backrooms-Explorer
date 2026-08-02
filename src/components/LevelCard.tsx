type Props = {
  nome: string;
  classe: string;
  perigo: string;
  descricao: string;
};

export default function LevelCard({
  nome,
  classe,
  perigo,
  descricao,
}: Props) {
  return (
    <div
      style={{
        background: "#161616",
        border: "1px solid #333",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <h2>{nome}</h2>

      <p><b>Classe:</b> {classe}</p>

      <p><b>Perigo:</b> {perigo}</p>

      <p>{descricao}</p>

      <button>📖 Ler dossiê</button>

      <button style={{ marginLeft: 10 }}>
        🎮 Explorar
      </button>
    </div>
  );
}
