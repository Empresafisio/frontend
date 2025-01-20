import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Register.css";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    alert("Registration successful!");
  };

  return (
    <>
      <Header hideRegisterButton={true} /> {/* Oculta o botão de Register no Header */}
      <div className="register-page">
        <h2>Register With Us</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label>Nome Completo</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email id" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" required />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select required>
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Birth Date</label>
            <input type="date" required />
          </div>
          <div className="form-group">
            <label>Clinical Record</label>
            <textarea placeholder="Tell us about your clinical record"></textarea>
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Register;
