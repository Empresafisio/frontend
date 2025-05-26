import React, { useState } from "react";
import "../styles/TratamentosSection.css";

const TratamentosSection = () => {
  // Exemplo de dados simulados das sessões
  const [sessoes, setSessoes] = useState([
    {
      id: 1,
      data: "2024-05-10",
      paciente: "João Silva",
      relatorio: null,
    },
    {
      id: 2,
      data: "2024-05-17",
      paciente: "Maria Costa",
      relatorio: null,
    },
  ]);

  const handleUploadRelatorio = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const updated = [...sessoes];
    updated[index].relatorio = file;
    setSessoes(updated);
  };

  return (
    <section className="tratamentos-section">
      <h2>Sessões Anteriores</h2>
      {sessoes.length === 0 ? (
        <p>Sem sessões registadas.</p>
      ) : (
        <table className="tratamentos-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Paciente</th>
              <th>Relatório</th>
              <th>Anexar Relatório</th>
            </tr>
          </thead>
          <tbody>
            {sessoes.map((sessao, index) => (
              <tr key={sessao.id}>
                <td>{sessao.data}</td>
                <td>{sessao.paciente}</td>
                <td>
                  {sessao.relatorio ? (
                    <span className="anexo-ok">✔ {sessao.relatorio.name}</span>
                  ) : (
                    <span className="anexo-falta">—</span>
                  )}
                </td>
                <td>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.png"
                    onChange={(e) => handleUploadRelatorio(e, index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default TratamentosSection;

