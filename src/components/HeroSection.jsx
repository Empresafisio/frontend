import React from "react";
import "../styles/HomePage.css"; // Importar os estilos necessários
import bannerImage from "../assets/banner.png"; // Atualizar o caminho para a imagem

const HeroSection = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <div className="hero-content">
        <h2>Saúde à distância de um clique!</h2>
        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
