import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyConcerns = () => {
  return (
    <>
      <Header />
      <main className="my-concerns-page">
        <h1>Minhas Dúvidas</h1>
        <ul>
          <li>Como sei qual o profissional que escolho?</li>
          <li>Posso trocar de terapeuta após escolher?</li>
          <li>Preciso entregar a fatura ao seguro, como faço?</li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default MyConcerns;
