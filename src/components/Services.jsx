import React from "react";
import "../styles/Services.css";
import IconHome from "../assets/process-1.svg";
import IconOnline from "../assets/process-3.svg";
import IconOther from "../assets/process-1-1.svg";

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="service-card">
          <img src={IconHome} alt="Fisioterapia em casa" className="service-icon" />
          <h3>Fisioterapia em casa</h3>
          <p>
            Conforto, segurança e resultados. Agende sua avaliação e recupere o seu bem-estar
            sem sair de casa!
          </p>
          <a href="#fisioterapia">Encontre o seu Fisioterapeuta →</a>
        </div>
        <div className="service-card">
          <img src={IconOnline} alt="Consulta Online" className="service-icon" />
          <h3>Consulta Online</h3>
          <p>
            Flexibilidade, praticidade e resultados. Agende sua avaliação online e recupere seu
            bem-estar onde você estiver.
          </p>
          <a href="#consulta-online">Encontre o seu Fisioterapeuta →</a>
        </div>
        <div className="service-card">
          <img src={IconOther} alt="Outros serviços ao domicílio" className="service-icon" />
          <h3>Outros serviços ao domicílio</h3>
          <p>
            Psicologia e outras especialidades no conforto da sua casa.
          </p>
          <a href="#outros-servicos">Saiba mais →</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
