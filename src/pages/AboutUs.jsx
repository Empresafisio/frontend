import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />
      <main className="about-us-page">
        <h1>Sobre Nós</h1>
        <p>A HomeCare nasceu com a missão de...</p>
        <h2>História dos Fundadores</h2>
        <p>Texto detalhado...</p>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
