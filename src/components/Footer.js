// src/components/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>New JMJ Steel Traders is your one-stop shop for all steel and cement needs.</p>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: info@jmjsteeltraders.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Steel Street, Industrial Area, City</p>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 New JMJ Steel Traders. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
