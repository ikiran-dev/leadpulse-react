import React, { useState, useEffect } from "react";
import "./Home.css";
import logo from "/LeadPulse_Logo.png";
import logo_light from "/LP_LIGHT.png";
import SwitchButton from "./SwitchButton";
import Button from "./Components/Button/Button";
import "./SwitchButton.css";
import Arrow from "/Arrows.png";
import darkArrow from "/darkArrows.png";
/* import Footer from "./Components/Footer/Footer"; */

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
  //write a function to prevent mouse scrolling when menu is open
  useEffect(() => {
    if (ismenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [ismenu]);
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <nav>
            <SwitchButton idname="Lights" state={setIsChecked} />
            <img src={isChecked ? logo_light : logo} alt="" />
            <SwitchButton idname="Menu" state={setIsmenu} />
          </nav>
        </div>
        {ismenu ? (
          <div className="menu_list">
            <a href="/">
              What We Do <img src={isChecked ? darkArrow : Arrow} alt="" />
            </a>
            <a href="/">
              {" "}
              Insights <img src={isChecked ? darkArrow : Arrow} alt="" />
            </a>
            <a href="/">
              About Us <img src={isChecked ? darkArrow : Arrow} alt="" />
            </a>
            <a href="/">
              Book a Consultation{" "}
              <img src={isChecked ? darkArrow : Arrow} alt="" />
            </a>
          </div>
        ) : null}
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

      {/*   <Footer /> */}
    </>
  );
}

export default Home;
