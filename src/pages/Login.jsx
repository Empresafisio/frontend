import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { font } from "../theme/typography";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mockUsers = [
      {
        email: "fisio@example.com",
        password: "123456",
        role: "fisioterapeuta",
        name: "Dr. Ana Fisio"
      },
      {
        email: "cliente@example.com",
        password: "123456",
        role: "cliente",
        name: "Carlos Cliente",
        favoritos: ["1", "2"],
        historico: ["3", "4"]
     }
    ];

    const userData = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (userData) {
      login({
        ...userData,
        username: email,
        registrationDate: "01-01-2024",
        lastVisit: "Hoje"
      });

      // Redirecionar para rota específica ou para a área pessoal
      let redirectTo = new URLSearchParams(location.search).get("redirect");
      if (!redirectTo) {
        redirectTo = userData.role === "fisioterapeuta" ? "/fisioterapeuta" : "/cliente";
      }

      navigate(redirectTo);
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <>
      <Header />
      <main
        style={{
          backgroundColor: colors.login.background,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: spacing.lg
        }}
      >
        <div
          style={{
            backgroundColor: colors.login.formBg,
            padding: spacing.xl,
            borderRadius: 12,
            maxWidth: 400,
            width: "100%",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: spacing.lg }}>Bem-vindo!</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: spacing.md }}>
              <label style={{ fontWeight: font.weight.bold }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: spacing.sm,
                  fontSize: font.size.base,
                  border: `1px solid ${colors.login.border}`,
                  borderRadius: 8
                }}
              />
            </div>

            <div style={{ marginBottom: spacing.md }}>
              <label style={{ fontWeight: font.weight.bold }}>Password</label>
              <div style={{ position: "relative" }}>
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: spacing.sm,
                    fontSize: font.size.base,
                    border: `1px solid ${colors.login.border}`,
                    borderRadius: 8
                  }}
                />
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: spacing.sm,
                    transform: "translateY(-50%)",
                    cursor: "pointer"
                  }}
                >
                  <i className={`fa ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`} />
                </span>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: spacing.lg }}>
              <button
                type="submit"
                style={{
                  backgroundColor: colors.login.focus,
                  color: "#fff",
                  padding: spacing.sm,
                  fontSize: font.size.base,
                  borderRadius: 8,
                  border: "none",
                  width: "100%",
                  cursor: "pointer"
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;

