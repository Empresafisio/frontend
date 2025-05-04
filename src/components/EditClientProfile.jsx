import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../components/context/AuthContext";
import "../styles/EditClientProfile.css";

const EditClientProfile = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.username || "");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados atualizados:", { name, email, phone });
    alert("Perfil atualizado com sucesso!");
  };

  return (
    <>
      <Header />
      <main className="edit-client-profile">
        <section className="profile-section">
          <h2>Editar Perfil</h2>
          <form className="profile-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome Completo</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Telefone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Ex: 912345678"
              />
            </div>

            <div className="button-row">
              <button type="submit" className="save-button">
                Guardar Alterações
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EditClientProfile;

