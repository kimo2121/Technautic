import React, { useEffect } from "react";
import { useState } from "react";
import "./BurgerIcon.styles.css";
import NavBar from "../NavBar/NavBar.component";
// import NavBarSlider from "./NavBarSlider/NavBarSlider";
import Aos from "aos";
import "aos/dist/aos.css";

const BurgerIcon = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [openNavBar, setOpenNavBar] = useState(false);
  const openBurgerMenu = (): void => {
    setOpenNavBar(!openNavBar);
  };
  return (
    <div>
      <div onClick={openBurgerMenu} className="menu-btn">
        <div className={openNavBar ? "navi-icon open" : "navi-icon"}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {openNavBar && <NavBar openNavBar={openNavBar} />}
      <div
        data-aos-duration="500"
        data-aos="fade"
        className={openNavBar ? "c-mask opened" : "c-mask"}
      ></div>
    </div>
  );
};

export default BurgerIcon;
