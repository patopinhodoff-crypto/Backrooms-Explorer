import { Level } from "../data/level";

interface Props {
  level: Level;
}

export default function LevelPage({ level }: Props) {
  return (
    <div className="level-page">

      <h1>
        🟨 Nível {level.id} — {level.nome}
      </h1>

      <div className="info-box">
        <h3>📌 Classe de Sobrevivência</h3>
        <p>{level.classe}</p>

        <h3>⚠️ Grau de Perigo</h3>
        <p>{level.perigo}</p>
      </div>


      <h2>🌍 Ambiente</h2>
      <p>{level.descricao}</p>


      <h2>👁 Entidades</h2>
      <ul>
        {level.entidades.map((entidade) => (
          <li key={entidade}>
            {entidade}
          </li>
        ))}
      </ul>


      <h2>🚪 Como entrar</h2>
      <p>{level.entrada}</p>


      <h2>🚪 Como escapar</h2>
      <p>{level.saida}</p>


      <h2>🎒 Recursos encontrados</h2>
      <ul>
        {level.recursos.map((recurso) => (
          <li key={recurso}>
            {recurso}
          </li>
        ))}
      </ul>


      <h2>💡 Dicas de sobrevivência</h2>
      <ul>
        {level.dicas.map((dica) => (
          <li key={dica}>
            {dica}
          </li>
        ))}
      </ul>


      <hr />


      <h2>📖 Relato de Explorador</h2>

      <div className="relato">
        "Entrei nesse nível sem saber o que esperar.
        Os corredores pareciam mudar enquanto eu caminhava.
        Depois de horas explorando, percebi que eu não estava sozinho..."
      </div>


    </div>
  );
}
