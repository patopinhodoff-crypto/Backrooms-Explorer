export default function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        minHeight: "100vh",
        background: "#111",
        padding: "20px",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <h2>📚 Backrooms</h2>

      <nav>
        <p>🏠 Início</p>
        <p>🔎 Pesquisar</p>
        <p>📚 Níveis</p>
        <p>👁️ Entidades</p>
        <p>📖 Livros</p>
        <p>🗺️ Mapa</p>
        <p>⭐ Favoritos</p>
      </nav>
    </aside>
  );
}
