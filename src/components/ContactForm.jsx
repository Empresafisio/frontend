import React from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <h2>Formulário de Contacto</h2>
      <p>
        Preencha os campos abaixo. A nossa equipa irá responder brevemente às
        suas necessidades.
      </p>
      <form className="contact-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="Nome Completo"
            aria-label="Nome Completo"
            required
          />
          <input
            type="email"
            placeholder="Email"
            aria-label="Email"
            required
          />
          <input
            type="text"
            placeholder="Telemóvel"
            aria-label="Telemóvel"
            required
          />
        </div>
        <textarea
          placeholder="Questões ou dúvidas"
          aria-label="Questões ou dúvidas"
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
