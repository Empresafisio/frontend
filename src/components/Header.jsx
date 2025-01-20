import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useAuth } from "./context/AuthContext.jsx"; // Importa o AuthContext

const Header = ({ hideLoginButton, hideRegisterButton }) => {
  const { isAuthenticated, logout } = useAuth(); // Pega o estado de autenticação e a função de logout

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
          <button onClick={logout} className="auth-button">
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
