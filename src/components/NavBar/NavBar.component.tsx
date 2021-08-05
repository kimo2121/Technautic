import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.styles.css";
import Aos from "aos";
import "aos/dist/aos.css";

interface IProps {
  openNavBar?: boolean;
}

interface ITypes {
  Links: {
    title: string;
    to: string;
  }[];
}

const links: ITypes["Links"] = [
  { title: "Address", to: "/" },
  { title: "My Profile", to: "/profile" },
  { title: "Explore", to: "/" },
  { title: "Activity", to: "/" },
  { title: "Flat Token", to: "/" },
  { title: "Top Flatters", to: "/topflatters" },
  { title: "Subscribe", to: "/" },
  { title: "Connect Wallet", to: "/" },
];

const NavBar: React.FC<IProps> = ({ openNavBar }) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div
      data-aos-duration="500"
      data-aos="slide-right"
      className={
        openNavBar ? "navigation-holder open-menu" : "navigation-holder"
      }
    >
      <ul className="mobile-nav">
        <div className="logo-mobile">
          <span className="mobile-nav-to-link-style">
            <Link to="/profile" className="white-logo">
              <img src="assets/images/profile-icon-img.png" alt="" />
            </Link>
          </span>
          <p>owner</p>
          <span>address goes here</span>
        </div>
        <li>
          {links.map((item, index) => (
            <Link key={index} to={item.to}>
              {item.title}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
