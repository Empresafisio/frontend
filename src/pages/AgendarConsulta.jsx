import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profissionaisData from "../data/profissionais";
import { useAuth } from "../components/context/AuthContext";
import "../styles/AgendarConsulta.css";

// Simulação de disponibilidade por profissional
const disponibilidadeMock = {
  segunda: ["09:00", "10:00", "14:00"],
  terca: ["10:00", "11:00", "15:00"],
  quarta: ["09:30", "11:00", "16:00"],
  quinta: ["10:00", "13:00", "17:00"],
  sexta: ["09:00", "12:00", "14:30"]
};

const diasSemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];

const AgendarConsulta = () => {
  const { id } = useParams();
  const profissional = profissionaisData.find((p) => p.id === id);
  const { user } = useAuth();

  const [nome] = useState(user?.name || "");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Consulta com ${profissional.nome} marcada para ${data} às ${hora}.`);
    // Aqui podias enviar os dados para o backend
  };

  if (!profissional) return <p>Profissional não encontrado.</p>;

  // Obter horário com base na data selecionada
  const getHorariosDisponiveis = () => {
    if (!data) return [];
    const dia = new Date(data).getDay(); // 0 = domingo, 1 = segunda, ...
    const nomeDia = diasSemana[dia];
    return disponibilidadeMock[nomeDia] || [];
  };

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
            <input type="text" value={nome} readOnly />

            <label>Data desejada</label>
            <input type="date" value={data} onChange={(e) => {
              setData(e.target.value);
              setHora(""); // reset hora ao mudar data
            }} required />

            {data && (
              <>
                <label>Horários disponíveis</label>
                <div className="horarios-grid">
                  {getHorariosDisponiveis().length > 0 ? (
                    getHorariosDisponiveis().map((h, i) => (
                      <button
                        key={i}
                        type="button"
                        className={hora === h ? "hora-selecionada" : ""}
                        onClick={() => setHora(h)}
                      >
                        {h}
                      </button>
                    ))
                  ) : (
                    <p>Sem horários disponíveis para este dia.</p>
                  )}
                </div>
              </>
            )}

            {hora && (
              <>
                <label>Mensagem adicional (opcional)</label>
                <textarea
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  rows={4}
                  placeholder="Ex: Tenho dores no ombro desde a semana passada..."
                />

                <button type="submit">Confirmar Agendamento</button>
              </>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AgendarConsulta;

