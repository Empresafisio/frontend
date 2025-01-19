import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main className="contact-us-page">
        <h1>Formulário de Contacto</h1>
        <form>
          <label>
            Nome Completo:
            <input type="text" placeholder="Digite seu nome" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Digite seu email" />
          </label>
          <label>
            Telefone:
            <input type="tel" placeholder="Digite seu telefone" />
          </label>
          <label>
            Questões ou Dúvidas:
            <textarea placeholder="Digite sua mensagem"></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
