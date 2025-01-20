import React from "react";
import "../styles/AboutUs.css";
import geriatriaImage from "../assets/fisioterapia-em-geriatria-3.jpg";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-image">
          <img src={geriatriaImage} alt="Fisioterapia em geriatria" />
        </div>
        <div className="about-us-text">
          <h2>Bem-vindo à HomeCare</h2>
          <p>
            A HomeCare é uma empresa portuguesa, dedicada à melhoria e
            personalização dos serviços de saúde. Sabemos que cada pessoa é
            diferente e, dado isto, percebemos a necessidade, acrescida nos dias
            de hoje, de cada pessoa escolher o profissional de saúde mais indicado
            para si.
          </p>
          <p>
            Damos por isso a possibilidade do paciente poder escolher o
            profissional que mais se adeque para o seu caso específico,
            aumentando assim a confiança entre paciente e terapeuta, a uma
            distância de alguns cliques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
