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

const AppRoutes = () => (
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
);

export default AppRoutes;
