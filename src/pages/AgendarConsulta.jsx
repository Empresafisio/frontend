import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profissionaisData from "../data/profissionais";
import "../styles/AgendarConsulta.css";

const AgendarConsulta = () => {
  const { id } = useParams();
  const profissional = profissionaisData.find((p) => p.id === id);

  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Consulta com ${profissional.nome} marcada para ${data} às ${hora}.`);
    // Aqui faria o envio real para a API / base de dados
  };

  if (!profissional) return <p>Profissional não encontrado.</p>;

  return (
    <>
      <Header />
      <main className="agendar-page">
        <div className="agendar-card">
          <h2>Agendar com {profissional.nome}</h2>
          <p className="especialidade">{profissional.especialidade}</p>
          {profissional.subespecialidade && <p className="subespecialidade">{profissional.subespecialidade}</p>}

          <form className="form-agendar" onSubmit={handleSubmit}>
            <label>Seu nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <label>Data desejada</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />

            <label>Hora desejada</label>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            />

            <label>Mensagem adicional (opcional)</label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              rows={4}
              placeholder="Ex: Tenho dores no ombro desde a semana passada..."
            />

            <button type="submit">Confirmar Agendamento</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AgendarConsulta;
