import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { useAuth } from "./context/AuthContext.jsx"; // Importa o AuthContext
import "@fortawesome/fontawesome-free/css/all.min.css";


const Header = ({ hideLoginButton, hideRegisterButton }) => {
  const { isAuthenticated, logout } = useAuth(); // Estado de autenticação e função logout
  const navigate = useNavigate(); // Para navegar até o perfil

  const handleLogout = () => {
    logout();
    navigate("/"); // Após logout, volta para a página inicial
  };

  const goToProfile = () => {
    navigate("/fisioterapeuta"); // Vai para a área pessoal
  };

  return (
    <header className="header">
      <h1 className="logo">FisioHome</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/find-a-therapist">Find a Therapist</Link>
        <Link to="/my-concerns">My Concerns</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
        {!isAuthenticated && !hideRegisterButton && (
          <Link to="/register" className="nav-link">
            Register
          </Link>
        )}
      </nav>
      <div className="auth-links">
        {!isAuthenticated ? (
          !hideLoginButton && (
            <Link to="/login" className="auth-button">
              Login
            </Link>
          )
        ) : (
          <>
            {/* Ícone de perfil visível apenas para utilizadores autenticados */}
            <button className="profile-icon" onClick={goToProfile} title="Área Pessoal">
              <i className="fas fa-user-circle"></i>
            </button>
            <button onClick={handleLogout} className="auth-button">
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
