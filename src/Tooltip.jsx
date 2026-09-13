import React from "react";
import { useState } from "react";
import "./Tooltip.css";

export default function Tooltip({ texto, children }) {
  const [visibilidade, setVisibilidade] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setVisibilidade(true)}
      onMouseLeave={() => setVisibilidade(false)}
    >
      {children}
      {visibilidade && <div className="tooltip-box">{texto}</div>}
    </div>
  );
}
