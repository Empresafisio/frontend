import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <h3>QUICK LINKS</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/find-a-therapist">Find a Therapist</a>
          </li>
          <li>
            <a href="/my-concerns">My Concerns</a>
          </li>
          <li>
            <a href="/about-us">About</a>
          </li>
          <li>
            <a href="/register">Register with us</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms-and-conditions">Terms & Conditions</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2025 FisioHome. All Rights Reserved. Design & Developed by iGex Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
