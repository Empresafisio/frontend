import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Welcome from "../components/Welcome";
import WorkProcess from "../components/WorkProcess";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {

  return (
    <>
      <Header />
      <HeroSection />
      <section className="services-section">
        <h2 className="services-title">Our Services</h2>
        <Services />
      </section>
      <section className="about-section">
        <Welcome />
      </section>
      <section className="work-process-section">
        <WorkProcess />
      </section>
      <section className="contact-section">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
