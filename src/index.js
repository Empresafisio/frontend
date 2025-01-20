import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"; // Extensão .jsx adicionada
import FindTherapist from "./pages/FindTherapist.jsx"; // Extensão .jsx adicionada
import MyConcerns from "./pages/MyConcerns.jsx"; // Extensão .jsx adicionada
import AboutUs from "./pages/AboutUs.jsx"; // Extensão .jsx adicionada
import ContactUs from "./pages/ContactUs.jsx"; // Extensão .jsx adicionada

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-a-therapist" element={<FindTherapist />} />
        <Route path="/my-concerns" element={<MyConcerns />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
