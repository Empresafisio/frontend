import React, { useState } from "react";
import "../styles/Login.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      {/* Propriedade hideLoginButton é passada para ocultar o botão Login */}
      <Header hideLoginButton={true} />
      <main className="login-page">
        <div className="login-container">
          <h2>Welcome Back!</h2>
          <form className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group password-field">
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Enter your password"
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
