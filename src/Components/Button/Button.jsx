import React from "react";
import "./Button.css";
import arrow from "./arrow.png";

function Button({ link, text }) {
  return (
    <div className="prim-but">
      <a href={link}>
        {text} <img src={arrow} alt="" />
      </a>
    </div>
  );
}

export default Button;
