import React from "react"; 
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import FindTherapist from "./pages/FindTherapist.jsx";
import MyConcerns from "./pages/MyConcerns.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Login from "./pages/Login.jsx"; // Importa a página de login
import Register from "./pages/Register.jsx"; // Importa a página de registro
import { AuthProvider } from "./components/context/AuthContext.jsx"; // Importa o contexto de autenticação

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider> {/* Envolve a aplicação com o contexto de autenticação */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-a-therapist" element={<FindTherapist />} />
          <Route path="/my-concerns" element={<MyConcerns />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* Adiciona a rota de registro */}
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
