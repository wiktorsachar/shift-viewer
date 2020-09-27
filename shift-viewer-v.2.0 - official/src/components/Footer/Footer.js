import React from "react";
import "./Footer.css";

const url = "https://github.com/wiktorsachar";

const Footer = () => {
  return (
    <a href={url} className="footer" target="_blank" rel="noopener noreferrer">
      © Wiktor Sacharczuk 2020
    </a>
  );
};

export default Footer;
