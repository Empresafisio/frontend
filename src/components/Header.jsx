import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">FisioHome</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/find-a-therapist">Find a Therapist</Link>
        <Link to="/my-concerns">My Concerns</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <Link to="/login" className="login-button">
        Login
      </Link>
    </header>
  );
};

export default Header;
