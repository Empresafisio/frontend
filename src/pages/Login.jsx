import React, { useState } from "react";
import "../styles/Login.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useAuth } from "../components/context/AuthContext"; // Importar o contexto de autenticação
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login } = useAuth(); // Desestruturar a função login
  const navigate = useNavigate(); // Inicializar o hook navigate

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifique as credenciais de login. Para o exemplo, estamos usando dados simulados.
    // Você pode substituir isso por uma autenticação real via API.
    if (email === "test@example.com" && password === "123456") {
      // Dados de exemplo do usuário
      login({
        name: "João Silva",
        username: email,
        registrationDate: "01-01-2020",
        lastVisit: "01-02-2025",
      });

      // Redirecionar para a página de perfil após o login bem-sucedido
      navigate("/fisioterapeuta"); // Redireciona para a página do perfil
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <>
      <Header hideLoginButton={true} />
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
