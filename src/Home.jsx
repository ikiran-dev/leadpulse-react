import React, { useState, useEffect } from "react";
import "./Home.css";
import logo from "/LeadPulse_Logo.png";
import logo_light from "/LP_LIGHT.png";
import SwitchButton from "./SwitchButton";
import Button from "./Components/Button/Button";
import "./SwitchButton.css";

function Home({ state }) {
  const [isChecked, setIsChecked] = useState(false);
  const [ismenu, setIsmenu] = useState(false);

  useEffect(() => {
    if (isChecked) {
      state("light");
    } else {
      state("dark");
    }
  }, [isChecked]);

  return (
    <div className="wrapper">
      <div className="container">
        <nav>
          <SwitchButton idname="Lights" state={setIsChecked} />
          <img src={isChecked ? logo_light : logo} alt="" />
          <SwitchButton idname="Menu" state={setIsmenu} />
        </nav>
      </div>
      <div className="hero">
        <h1>
          We <span>craft</span> integrated marketing technology solutions &
          digital interfaces that <span>captivate</span> audiences and&nbsp;
          <span>drive </span>
          conversions.
        </h1>
        <Button link={"#"} text={"Learn More"} />
      </div>
    </div>
  );
}

export default Home;
