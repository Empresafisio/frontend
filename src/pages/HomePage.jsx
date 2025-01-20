import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import WorkProcess from "../components/WorkProcess";
import Contact from "../components/Contact"; // Importação do componente Contact
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Services />
      <section className="about-section">
        <AboutUs />
      </section>
      <section className="work-process-section">
        <WorkProcess />
      </section>
      <section className="contact-section"> {/* Adicionando a seção de contatos */}
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;

