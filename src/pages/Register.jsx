import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Register.css";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    alert("Registo efetuado com sucesso!");
  };

  return (
    <>
      <Header hideRegisterButton={true} />
      <main className="register-page">
        <h2>Registar</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label>Nome Completo</label>
            <input type="text" placeholder="Introduza o seu nome" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Introduza o seu email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="form-group">
            <label>Confirmar Password</label>
            <input type="password" placeholder="Confirme a password" required />
          </div>
          <div className="form-group">
            <label>Género</label>
            <select required>
              <option value="">Selecione o seu género</option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
            </select>
          </div>
          <div className="form-group">
            <label>Data de Nascimento</label>
            <input type="date" required />
          </div>
          <div className="form-group">
            <label>Histórico Clínico</label>
            <textarea placeholder="Descreva o seu histórico clínico" />
          </div>
          <button type="submit" className="register-button">Registar</button>
        </form>
        <p className="login-link">
          Já tem conta? <a href="/login">Iniciar sessão</a>
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Register;
