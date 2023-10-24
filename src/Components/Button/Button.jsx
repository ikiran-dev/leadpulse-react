import React from "react";
import "./Button.css";
import arrow from "./arrow.png";

function Button({ link, text }) {
  return (
    <>
      <a href={link}>
        {text} <img src={arrow} alt="" />
      </a>
    </>
  );
}

export default Button;
