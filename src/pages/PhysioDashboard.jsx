import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PhysioProfile from "../components/PhysioProfile";
import "../styles/PhysioDashboard.css";

const TABS = [
  { id: "perfil", label: "Perfil do Utilizador" },
  { id: "documentacao", label: "Documentação" },
  { id: "tratamentos", label: "Tratamentos" },
  { id: "sessoes", label: "Sessões" },
  { id: "honorarios", label: "Honorários" },
  { id: "blog", label: "Blog" },
  { id: "plano", label: "Plano de Contingência COVID-19" }
];

const PhysioDashboard = () => {
  const [activeTab, setActiveTab] = useState("perfil");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="dashboard-container">
        <div className="dashboard-box">
          <nav className="dashboard-nav">
            {TABS.map((tab) => (
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
                {tab.id === "perfil" && (
                  <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                    <li><a href="#">Editar Perfil</a></li>
                    <li><a href="#">Dados para Pagamento</a></li>
                    <li><a href="#">Ausências</a></li>
                    <li><a href="#">Terminar Sessão</a></li>
                  </ul>
                )}
              </div>
            ))}
          </nav>

          <div className="dashboard-content">
            {activeTab === "perfil" && <PhysioProfile />}
            {activeTab !== "perfil" && (
              <p>Conteúdo da secção "{TABS.find(t => t.id === activeTab)?.label}" a desenvolver.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PhysioDashboard;
