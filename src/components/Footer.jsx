import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Row: Navigation Links */}
      <div className="footer-nav">
        <a href="/privacy" className="footer-link">
          Privacy policy
        </a>
        <a href="/faq" className="footer-link">
          FAQ
        </a>
      </div>

      {/* Bottom Row: Language Selector */}
      <div className="footer-lang">
        <span className="lang-item">EN</span>
        <span className="separator">·</span>
        <span className="lang-item">PL</span>
        <span className="separator">·</span>
        <span className="lang-item">DE</span>
        <span className="separator">·</span>
        <span className="lang-item">PT</span>
      </div>
    </footer>
  );
};

export default Footer;
