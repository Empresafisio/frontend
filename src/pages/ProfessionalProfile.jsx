import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import profissionaisData from "../data/profissionais";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../components/context/AuthContext";
import "../styles/ProfessionalProfile.css";

const ProfessionalProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const profissional = profissionaisData.find((p) => p.id === id);

  if (!profissional) return <p>Profissional não encontrado.</p>;

  const handleAgendar = () => {
    if (isAuthenticated) {
      navigate(`/agendar/${profissional.id}`);
    } else {
      navigate(`/login?redirect=/agendar/${profissional.id}`);
    }
  };

  return (
    <>
      <Header />
      <main className="profile-page">
        <div className="profile-card">
          <img src={profissional.foto} alt={profissional.nome} className="profile-photo" />
          <h2>{profissional.nome}</h2>
          <p className="especialidade">{profissional.especialidade}</p>
          {profissional.subespecialidade && (
            <p className="subespecialidade">{profissional.subespecialidade}</p>
          )}
          <p className="localizacao">📍 {profissional.localizacao}</p>
          <p className="preco">💶 {profissional.preco} / consulta</p>

          <p className="descricao">{profissional.descricao}</p>

          <button className="agendar-btn" onClick={handleAgendar}>
            Agendar Consulta
          </button>

          <section className="avaliacoes">
            <h3>O que dizem os clientes</h3>
            <div className="avaliacao">
              <strong>Maria F.</strong> ★★★★★
              <p>Excelente profissional. Muito atenta e dedicada.</p>
            </div>
            <div className="avaliacao">
              <strong>João R.</strong> ★★★★☆
              <p>Ótimo acompanhamento pós-lesão. Recomendo.</p>
            </div>
          </section>

          <section className="atendimento">
            <h3>Zona de Atendimento</h3>
            <p>{profissional.localizacao} e arredores (até 10 km)</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProfessionalProfile;
