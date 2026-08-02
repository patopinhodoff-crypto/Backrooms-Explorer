import { useState } from "react";

type Props = {
  onSearch: (text: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [text, setText] = useState("");

  return (
    <input
      placeholder="🔎 Procurar nível..."
      value={text}
      onChange={(e) => {
        setText(e.target.value);
        onSearch(e.target.value);
      }}
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #333",
        background: "#111",
        color: "white",
        marginBottom: "20px",
      }}
    />
  );
}
