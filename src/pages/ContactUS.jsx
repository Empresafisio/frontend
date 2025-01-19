import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <main className="contact-us">
        <section className="container">
          <h1>Contact Us</h1>
          <form>
            <label>
              Nome:
              <input type="text" placeholder="Digite seu nome" />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Digite seu email" />
            </label>
            <label>
              Mensagem:
              <textarea placeholder="Sua mensagem"></textarea>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
