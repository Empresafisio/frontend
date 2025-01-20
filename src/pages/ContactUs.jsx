import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Contact from "../components/Contact";

const ContactUs = () => {
  return (
    <>
      <Header />
      <main className="contact-us-page">
        <ContactForm /> {/* Formulário de Contato atualizado */}
        <section className="contact-section">
          <Contact /> {/* Detalhes de Contato */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
