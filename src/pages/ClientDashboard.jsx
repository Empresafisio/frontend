import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/ClientDashboard.css";

const dashboardItems = [
  { title: "Próximas Consultas", text: "Consulte as suas próximas sessões de fisioterapia." },
  { title: "Marcar Nova Consulta", text: "Agende uma nova sessão com o fisioterapeuta da sua escolha." },
  { title: "Editar Perfil", text: "Atualize os seus dados pessoais e preferências.", action: "editar" },
  { title: "Histórico de Consultas", text: "Veja as consultas anteriores já realizadas." },
  { title: "Fisioterapeutas", text: "Explore os profissionais disponíveis na plataforma." }
];

const ClientDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCardClick = (action) => {
    if (action === "editar") navigate("/cliente/editar-perfil");
  };

  return (
    <>
      <Header />
      <main className="client-dashboard">
        <section className="dashboard-section">
          <h2>Bem-vindo{user?.name ? `, ${user.name}` : ""} à sua Área de Cliente</h2>
          <div className="cards-container">
            {dashboardItems.map((item, idx) => (
              <div className="dashboard-card" key={idx}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button onClick={() => handleCardClick(item.action)}>Aceder</button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ClientDashboard;
