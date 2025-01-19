import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FindTherapist = () => {
  return (
    <>
      <Header />
      <main className="find-therapist-page">
        <h1>Encontre o Melhor Profissional para Você</h1>
        <form className="search-form">
          <label>
            Data:
            <input type="date" />
          </label>
          <label>
            Localização:
            <input type="text" placeholder="Digite sua localização" />
          </label>
          <button type="submit">Pesquisar</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default FindTherapist;
