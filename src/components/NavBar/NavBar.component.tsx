import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
interface IProps {
  openNavBar?: boolean;
}
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
          <Link to="#">Address</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
        <li>
          <Link to="#" className="#">
            Explore
          </Link>
        </li>
        <li>
          <Link to="#" className="#">
            Activity
          </Link>
        </li>
        <li>
          <Link to="#" className="#">
            Flat Token
          </Link>
        </li>
        <li>
          <Link to="/topflatters" className="#">
            Top Flatters
          </Link>
        </li>
        <li>
          <Link to="#" className="#">
            Subscribe
          </Link>
        </li>
        <li>
          <Link to="#" className="#">
            Connect Wallet
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
