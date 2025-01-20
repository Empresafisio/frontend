import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#find-therapist">Find a Therapist</a></li>
          <li><a href="#my-concerns">My Concerns</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#register">Register with us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-conditions">Terms & Conditions</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2025 FisioHome. All Rights Reserved. Design & Developed by <a href="#igex-solutions">iGex Solutions</a></p>
        <div className="footer-socials">
          <a href="#twitter"><i className="fa fa-twitter"></i></a>
          <a href="#facebook"><i className="fa fa-facebook"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
