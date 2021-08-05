import React, { useEffect, useState } from "react";
import "./NavBarFlatItems.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import BurgerIcon from "../BurgerIcon/BurgerIcon.component";
import NavBar from "../NavBar/NavBar.component";

interface IProps {
  CreateSingle?: boolean;
}

const NavBarFlatItems: React.FC<IProps> = ({ CreateSingle }) => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  console.log(offset);

  return (
    <div className={"navbar-flat"}>
      <div className="nav-resp-size">
        <div
          className={
            CreateSingle ? "header-holder CreateSingle" : "header-holder"
          }
        >
          <div className="left-logo-nav">
            <div>
              <Link to="/" className="transparent-logo">
                <img src="assets/images/opt-logo3.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="header-btns">
            <button className={offset > 1 ? "btn-create offet" : "btn-create"}>
              Create
            </button>
            <button
              className={
                offset > 1 ? "btn-connect-wallet offet" : "btn-connect-wallet"
              }
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
      <div>
        <BurgerIcon />
      </div>
    </div>
  );
};

export default NavBarFlatItems;
