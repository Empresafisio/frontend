import React, { useState } from "react";
import "../styles/Login.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação de autenticação com utilizadores de teste
    let userData = null;

    if (email === "fisio@example.com" && password === "123456") {
      userData = {
        name: "Dr. Ana Fisio",
        username: email,
        role: "fisioterapeuta",
        registrationDate: "01-01-2021",
        lastVisit: "02-05-2025",
      };
    } else if (email === "cliente@example.com" && password === "123456") {
      userData = {
        name: "Carlos Cliente",
        username: email,
        role: "cliente",
        registrationDate: "15-03-2022",
        lastVisit: "01-05-2025",
      };
    }

    if (userData) {
      login(userData);
      if (userData.role === "fisioterapeuta") {
        navigate("/fisioterapeuta");
      } else {
        navigate("/cliente");
      }
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <>
      <Header /> {/* Corrigido: removido hideLoginButton */}
      <main className="login-page">
        <div className="login-container">
          <h2>Welcome Back!</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group password-field">
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                >
                  <i
                    className={`fa ${
                      passwordVisible ? "fa-eye-slash" : "fa-eye"
                    }`}
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
            </div>
            <div className="form-group remember-me">
              <label>
                <input type="checkbox" className="checkbox" /> Remember Me
              </label>
              <a href="/forgot-password" className="forgot-password-link">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p className="register-link">
            Not registered yet? <a href="/register">Create an account</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;

