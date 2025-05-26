import React, { useState } from "react";
import "../styles/HonorariosSection.css";

const HonorariosSection = () => {
  const [recibos, setRecibos] = useState([]);
  const [novoRecibo, setNovoRecibo] = useState(null);

  const handleAnexarRecibo = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setRecibos((prev) => [...prev, { file, data: new Date().toLocaleDateString() }]);
    setNovoRecibo(null);
  };

  const handleRemoverRecibo = (index) => {
    const updated = [...recibos];
    updated.splice(index, 1);
    setRecibos(updated);
  };

  return (
    <section className="honorarios-section">
      <h2>Gestão de Honorários</h2>

      <div className="upload-area">
        <label htmlFor="recibo-upload">Anexar Recibo Verde:</label>
        <input
          type="file"
          id="recibo-upload"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleAnexarRecibo}
        />
      </div>

      <h3>Recibos Submetidos</h3>
      {recibos.length === 0 ? (
        <p>Nenhum recibo submetido ainda.</p>
      ) : (
        <ul className="recibo-list">
          {recibos.map((r, i) => (
            <li key={i}>
              {r.file.name} — <em>{r.data}</em>
              <button onClick={() => handleRemoverRecibo(i)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default HonorariosSection;

