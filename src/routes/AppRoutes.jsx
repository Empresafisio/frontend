import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ClientDashboard from "../pages/ClientDashboard";
import FindTherapist from "../pages/FindTherapist";
import MyConcerns from "../pages/MyConcerns";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import EditClientProfile from "../pages/EditClientProfile";
import PhysioDashboard from "../pages/PhysioDashboard";
import PrivateRoute from "../components/PrivateRoute";
import ProfessionalProfile from "../pages/ProfessionalProfile";
import AgendarConsulta from "../pages/AgendarConsulta";
import MarcarConsultaCliente from "../pages/MarcarConsultaCliente"; // 
import ProfissionalDetalhe from "../pages/ProfissionalDetalhe";
import HistoricoConsultas from "../pages/HistoricoConsultas";
import ProximasConsultas from "../pages/ProximasConsultas";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/find-a-therapist" element={<FindTherapist />} />
    <Route path="/my-concerns" element={<MyConcerns />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/profissional/:id" element={<ProfessionalProfile />} />
    <Route path="/agendar/:id" element={<AgendarConsulta />} />


    {/* Rotas protegidas */}
    <Route path="/cliente" element={<PrivateRoute><ClientDashboard /></PrivateRoute>} />
    <Route path="/cliente/editar-perfil" element={<PrivateRoute><EditClientProfile /></PrivateRoute>} />
    <Route path="/cliente/marcar-consulta" element={<PrivateRoute><MarcarConsultaCliente /></PrivateRoute>} />
    <Route path="/fisioterapeuta" element={<PrivateRoute><PhysioDashboard /></PrivateRoute>} />
    <Route path="/cliente/historico" element={<PrivateRoute><HistoricoConsultas /></PrivateRoute>} />
    <Route path="/cliente/proximas-consultas" element={<PrivateRoute><ProximasConsultas /></PrivateRoute>
} />


  </Routes>
);

export default AppRoutes;

