import React, { useState, useEffect } from "react";
import "./Home.css";
import logo from "/LeadPulse_Logo.png";
import logo_light from "/LP_LIGHT.png";
import SwitchButton from "./SwitchButton";
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
    </div>
  );
}

export default Home;
