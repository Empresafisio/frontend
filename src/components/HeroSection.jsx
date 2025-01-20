import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>Saúde à distância de um clique</h1>
        <p>
          Encontre os melhores profissionais e serviços de saúde ao seu alcance.
        </p>
      </div>
      <div className="hero-right">
        <h2>Encontre o melhor profissional para si:</h2>
        <form>
          <div className="form-group">
            <label htmlFor="date">Data:</label>
            <input
              type="date"
              id="date"
              placeholder="Selecione a data"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Localização:</label>
            <select id="location" required>
              <option value="" disabled selected>
                Selecione a localização
              </option>
              <option value="lisboa">Lisboa</option>
              <option value="porto">Porto</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Começar a procurar
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
