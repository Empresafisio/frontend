import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ClientDashboard from "./pages/ClientDashboard.jsx";
import FindTherapist from "./pages/FindTherapist.jsx";
import MyConcerns from "./pages/MyConcerns.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import EditClientProfile from "./pages/EditClientProfile.jsx";
import PhysioDashboard from "./pages/PhysioDashboard.jsx";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx"; // novo componente

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-a-therapist" element={<FindTherapist />} />
          <Route path="/my-concerns" element={<MyConcerns />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Rotas protegidas */}
          <Route path="/cliente" element={<PrivateRoute><ClientDashboard /></PrivateRoute>} />
          <Route path="/cliente/editar-perfil" element={<PrivateRoute><EditClientProfile /></PrivateRoute>} />
          <Route path="/fisioterapeuta" element={<PrivateRoute><PhysioDashboard /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
