import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import logo from "../assets/logo.png";
import { colors } from "../theme/colors.js";
import { spacing } from "../theme/spacing.js";
import { border } from "../theme/border.js";
import { buttons } from "../theme/buttons.js";



const Header = ({ hideLoginButton, hideRegisterButton }) => {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const goToProfile = () => {
    navigate(user?.role === "cliente" ? "/cliente" : "/fisioterapeuta");
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 24px",
        backgroundColor: colors.header.background,
        fontFamily: "'Segoe UI', sans-serif",
        boxShadow: border.shadow.default,
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      {/* Logo + nav links juntos à esquerda */}
      <div style={{ display: "flex", alignItems: "center", gap: spacing.gap.lg }}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: 28 }} />
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <NavLink to="/" label="Home" />
          <NavLink to="/find-a-therapist" label="Find a Therapist" />
          <NavLink to="/my-concerns" label="My Concerns" />
          <NavLink to="/about-us" label="About Us" />
          <NavLink to="/contact-us" label="Contact Us" />
          {!isAuthenticated && !hideRegisterButton && (
            <NavLink to="/register" label="Register" />
          )}
        </nav>
      </div>

      {/* Área direita: login/logout/área pessoal */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {!isAuthenticated ? (
          !hideLoginButton && (
            <Link to="/login" style={buttons.primary}>
              Login
            </Link>
          )
        ) : (
          <>
            <button onClick={goToProfile} style={buttons.secondary}>
              Área Pessoal
            </button>

            <button onClick={handleLogout} style={buttons.primary}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

// Estilo de cada link
const NavLink = ({ to, label }) => (
  <Link
    to={to}
    style={{
      fontSize: 14,
      textDecoration: "none",
      color: colors.header.text,
      fontWeight: 400
    }}
  >
    {label}
  </Link>
);

export default Header;
