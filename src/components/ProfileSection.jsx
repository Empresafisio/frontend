import React, { useState } from "react";
import { useAuth } from "../components/context/AuthContext";
import "../styles/PhysioProfile.css";

const ProfileSection = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("porReceber");

  const historyData = [
    { anoMes: "02/2025", sessoes: 8, sRetencao: 500, cRetencao: 450 },
    { anoMes: "01/2025", sessoes: 10, sRetencao: 600, cRetencao: 540 },
  ];

  return (
    <>
      <section className="profile-form-section">
        <h2>Perfil do Fisioterapeuta</h2>
        <p>Informações da sua conta:</p>
        <div className="profile-form">
          <div className="form-row">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" value={user?.name || "Profissional"} readOnly />
            </div>
            <div className="form-group">
              <label>Utilizador</label>
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
              <h3>Montantes por receber</h3>
              <table>
                <thead>
                  <tr>
                    <th>Paciente</th>
                    <th>Data</th>
                    <th># Sessões</th>
                    <th>A Receber</th>
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
                <p><strong>NIF:</strong> [preencher]</p>
                <p><strong>Morada:</strong> Rua [preencher]</p>
              </div>
            </div>
          )}

          {activeTab === "historico" && (
            <div className="billing-table">
              <h3>Histórico de Recebimentos</h3>
              <table>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th># Sessões</th>
                    <th>S/ Retenção</th>
                    <th>C/ Retenção</th>
                  </tr>
                </thead>
                <tbody>
                  {historyData.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.anoMes}</td>
                      <td>{item.sessoes}</td>
                      <td>{item.sRetencao}€</td>
                      <td>{item.cRetencao}€</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProfileSection;
