import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { useAuth } from "./context/AuthContext.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/logo.png";

const Header = ({ hideLoginButton, hideRegisterButton }) => {
  const { isAuthenticated, logout, user } = useAuth(); // ✅ unificado
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const goToProfile = () => {
    if (user?.role === "cliente") {
      navigate("/cliente");
    } else {
      navigate("/fisioterapeuta");
    }
  };

  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="FisioHome Logo" className="logo-image-only" />
      </Link>

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
            <button
              className="profile-icon"
              onClick={goToProfile}
              title="Área Pessoal"
            >
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

