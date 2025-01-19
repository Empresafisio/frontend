import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="hero-section">
        <div className="hero-left">
          <h1>Saúde à distância de um clique!</h1>
          <p>
            Encontre os melhores profissionais e serviços de saúde ao seu
            alcance.
          </p>
          <img
            src="../assets/hero-image.png"
            alt="Banner"
            className="hero-banner"
          />
        </div>
        <div className="hero-right">
          <div className="search-box">
            <h3>Encontre o melhor profissional para si:</h3>
            <label>
              Data:
              <input type="date" placeholder="Selecione a data" />
            </label>
            <label>
              Localização:
              <select>
                <option>Selecione a localização</option>
                <option>Lisboa</option>
                <option>Porto</option>
              </select>
            </label>
            <button>Começar a procurar</button>
          </div>
        </div>
      </section>

      <section className="services-section">
        <h2 className="services-title">Nossos Serviços</h2>
        <div className="services-container">
          <div className="service-card">
            <img
              src="../assets/physiotherapy-home.png"
              alt="Fisioterapia em casa"
            />
            <h3>Fisioterapia em casa</h3>
            <p>Conforto, segurança e resultados no seu lar.</p>
            <a href="#">Encontre o seu fisioterapeuta →</a>
          </div>
          <div className="service-card">
            <img
              src="../assets/online-consultation.png"
              alt="Consulta Online"
            />
            <h3>Consulta Online</h3>
            <p>Flexibilidade e praticidade com avaliações remotas.</p>
            <a href="#">Agende sua consulta online →</a>
          </div>
          <div className="service-card">
            <img
              src="../assets/home-services.png"
              alt="Outros serviços ao domicílio"
            />
            <h3>Outros serviços ao domicílio</h3>
            <p>Psicologia e outras especialidades no conforto da sua casa.</p>
            <a href="#">Saiba mais →</a>
          </div>
        </div>
      </section>

      <section className="welcome-section">
        <div className="welcome-left">
          <h2>Bem-vindo à HomeCare</h2>
          <p>
            A HomeCare é uma empresa portuguesa dedicada à melhoria e
            personalização dos serviços de saúde. Sabemos que cada pessoa é
            única e oferecemos soluções que se adaptam às suas necessidades.
          </p>
        </div>
        <div className="welcome-right">
          <img
            src="../assets/welcome-image.jpg"
            alt="Bem-vindo à HomeCare"
            className="welcome-image"
          />
        </div>
      </section>

      <section className="process-section">
        <h2 className="process-title">How it works?</h2>
        <div className="process-steps">
          <div className="process-step">
            <img
              src="../assets/step-1.png"
              alt="Step 1"
              className="process-icon"
            />
            <h3>1</h3>
            <p>Escolha o melhor profissional para si.</p>
          </div>
          <div className="process-step">
            <img
              src="../assets/step-2.png"
              alt="Step 2"
              className="process-icon"
            />
            <h3>2</h3>
            <p>Escolha os horários que mais lhe convêm.</p>
          </div>
          <div className="process-step">
            <img
              src="../assets/step-3.png"
              alt="Step 3"
              className="process-icon"
            />
            <h3>3</h3>
            <p>Contacte o terapeuta para informações adicionais.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Find a Therapist</a>
          <a href="#">My Concerns</a>
          <a href="#">About Us</a>
          <a href="#">Register With Us</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-contact">
          <p>
            <strong>Office Address:</strong> 74L High Road, Londres, E1 1FJ
          </p>
          <p>
            <strong>Telephone:</strong> 078 451 861 103
          </p>
          <p>
            <strong>Email:</strong> info@healthdirectory.com
          </p>
        </div>
        <div className="footer-social">
          <a href="https://twitter.com">
            <img src="../assets/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://facebook.com">
            <img src="../assets/facebook.svg" alt="Facebook" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
