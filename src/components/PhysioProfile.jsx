import React, { useState } from "react";
import { useAuth } from "../components/context/AuthContext";
import "../styles/PhysioProfile.css"; // Estilo específico para esta página

const PhysioProfile = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("porReceber");

  // Simulação de dados do histórico
  const historyData = [
    { anoMes: "02/2025", sessoes: 8, sRetencao: 500, cRetencao: 450 },
    { anoMes: "01/2025", sessoes: 10, sRetencao: 600, cRetencao: 540 },
  ];

  return (
    <>
      <section className="profile-form-section">
        <h2>Perfil do Fisioterapeuta</h2>
        <p>Aqui estão as informações associadas à sua conta.</p>
        <div className="profile-form">
          <div className="form-row">
            <div className="form-group">
              <label>Nome Completo</label>
              <input type="text" value={user?.name || "Profissional de Saúde"} readOnly />
            </div>
            <div className="form-group">
              <label>Nome de utilizador</label>
              <input type="text" value={user?.username || "N/A"} readOnly />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Data de Registo</label>
              <input type="text" value={user?.registrationDate || "N/A"} readOnly />
            </div>
            <div className="form-group">
              <label>Última Visita</label>
              <input type="text" value={user?.lastVisit || "N/A"} readOnly />
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Montantes por Receber e Histórico */}
      <section className="billing-section">
        <div className="billing-tabs">
          <button className={activeTab === "porReceber" ? "active" : ""} onClick={() => setActiveTab("porReceber")}>
            Por Receber
          </button>
          <button className={activeTab === "historico" ? "active" : ""} onClick={() => setActiveTab("historico")}>
            Histórico
          </button>
        </div>

        <div className="billing-content">
          {activeTab === "porReceber" && (
            <div className="billing-table">
              <h3>Montantes por receber à data</h3>
              <table>
                <thead>
                  <tr>
                    <th>Paciente</th>
                    <th>Ano/Mês</th>
                    <th>#Sessões</th>
                    <th>À Receber</th>
                    <th>Com Retenção</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Paciente Exemplo</td>
                    <td>2025/02</td>
                    <td>3</td>
                    <td>150€</td>
                    <td>Sim</td>
                  </tr>
                </tbody>
              </table>

              <div className="billing-info">
                <h4>Dados para Emissão de Recibos</h4>
                <p><strong>Designação:</strong> FISIOHOME, LDA</p>
                <p><strong>NIF:</strong> </p>
                <p><strong>Morada:</strong> Rua </p>
              </div>
            </div>
          )}

          {activeTab === "historico" && (
            <div className="billing-table">
              <h3>Histórico de Montantes Recebidos</h3>
              <table>
                <thead>
                  <tr>
                    <th>Ano/Mês</th>
                    <th>#Sessões</th>
                    <th>S/Retenção</th>
                    <th>C/Retenção</th>
                  </tr>
                </thead>
                <tbody>
                  {historyData.length > 0 ? (
                    historyData.map((item, index) => (
                      <tr key={index}>
                        <td>{item.anoMes}</td>
                        <td>{item.sessoes}</td>
                        <td>{item.sRetencao}€</td>
                        <td>{item.cRetencao}€</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center">Sem registros</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PhysioProfile;
