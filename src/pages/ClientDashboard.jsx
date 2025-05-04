import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/ClientDashboard.css";

const ClientDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const goToEditProfile = () => {
    navigate("/cliente/editar-perfil");
  };

  return (
    <>
      <Header />
      <main className="client-dashboard">
        <section className="dashboard-section">
          <h2>Bem-vindo{user?.name ? `, ${user.name}` : ""} à sua Área de Cliente</h2>
          <div className="cards-container">
            <div className="dashboard-card">
              <h3>Próximas Consultas</h3>
              <p>Consulte as suas próximas sessões de fisioterapia.</p>
              <button>Ver Consultas</button>
            </div>
            <div className="dashboard-card">
              <h3>Marcar Nova Consulta</h3>
              <p>Agende uma nova sessão com o fisioterapeuta da sua escolha.</p>
              <button>Marcar Consulta</button>
            </div>
            <div className="dashboard-card">
              <h3>Editar Perfil</h3>
              <p>Atualize os seus dados pessoais e preferências.</p>
              <button onClick={goToEditProfile}>Editar Perfil</button>
            </div>
            <div className="dashboard-card">
              <h3>Histórico de Consultas</h3>
              <p>Veja as consultas anteriores já realizadas.</p>
              <button>Ver Histórico</button>
            </div>
            <div className="dashboard-card">
              <h3>Fisioterapeutas</h3>
              <p>Explore os profissionais disponíveis na plataforma.</p>
              <button>Ver Fisioterapeutas</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ClientDashboard;

