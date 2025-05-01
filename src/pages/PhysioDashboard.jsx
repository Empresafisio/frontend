import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PhysioProfile from "../components/PhysioProfile";
import "../styles/PhysioDashboard.css";

const PhysioDashboard = () => {
  const [activeTab, setActiveTab] = useState("perfil");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tabs = [
    { id: "perfil", label: "Perfil do Utilizador" },
    { id: "documentacao", label: "Documentação" },
    { id: "tratamentos", label: "Tratamentos" },
    { id: "sessoes", label: "Sessões" },
    { id: "honorarios", label: "Honorários" },
    { id: "blog", label: "Blog" },
    { id: "plano", label: "Plano de Contingência COVID-19" },
  ];

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-box">
          <nav className="dashboard-nav">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="tab-wrapper"
                onMouseEnter={() => tab.id === "perfil" && setDropdownOpen(true)}
                onMouseLeave={() => tab.id === "perfil" && setDropdownOpen(false)}
              >
                <button
                  className={activeTab === tab.id ? "active" : ""}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id === "perfil") setDropdownOpen(!dropdownOpen);
                  }}
                >
                  {tab.label}
                </button>

                {/* Exibe o menu suspenso apenas para "Perfil do Utilizador" */}
                {tab.id === "perfil" && (
                  <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                    <li><a href="#">Editar Perfil</a></li>
                    <li><a href="#">Dados para Pagamento de Honorários</a></li>
                    <li><a href="#">Inserir Período de Ausência</a></li>
                    <li><a href="#">Terminar Sessão</a></li>
                  </ul>
                )}
              </div>
            ))}
          </nav>

          <div className="dashboard-content">
            {activeTab === "perfil" && <PhysioProfile />}
            {activeTab === "documentacao" && <p>Área de Documentação (a desenvolver)</p>}
            {activeTab === "tratamentos" && <p>Área de Tratamentos (a desenvolver)</p>}
            {activeTab === "sessoes" && <p>Área de Sessões (a desenvolver)</p>}
            {activeTab === "honorarios" && <p>Área de Honorários (a desenvolver)</p>}
            {activeTab === "blog" && <p>Blog (a desenvolver)</p>}
            {activeTab === "plano" && <p>Plano de Contingência COVID-19 (a desenvolver)</p>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhysioDashboard;
