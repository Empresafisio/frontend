import React from "react";
import "../styles/Contact.css";
import IconLocation from "../assets/icon-location.png"; // Atualize o caminho conforme necessário
import IconPhone from "../assets/icon-phone.png";
import IconEmail from "../assets/icon-email.png";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contactos</h2>
      <div className="contact-container">
        <div className="contact-card">
          <div className="icon-container">
            <img src={IconLocation} alt="Office Address" />
          </div>
          <h3>Office Address</h3>
          <p>74A High Road, Wanstead, London, E11 7RJ</p>
        </div>
        <div className="contact-card">
          <div className="icon-container">
            <img src={IconPhone} alt="Telephone number" />
          </div>
          <h3>Telephone number</h3>
          <p>078-4518-4100</p>
        </div>
        <div className="contact-card">
          <div className="icon-container">
            <img src={IconEmail} alt="Mail address" />
          </div>
          <h3>Mail address</h3>
          <p>info@geoatherapydirectory.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
