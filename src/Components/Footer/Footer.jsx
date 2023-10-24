import React from "react";
import "./Footer.css";
import logo from "./footer.png";

function Footer() {
  return (
    <div className="footer-container">
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Footer;
