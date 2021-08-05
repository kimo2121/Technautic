import NavBarFlatItems from "../../components/NavBarFlatItems/NavBarFlatItems";
import "./TopFlattersPage.styles.css";
import crown from "../../pages/assets/images/crown-icon.png";
import star from "../../pages/assets/images/stars.png";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { flatters } from "./data";

const TopFlatters: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);

  return (
    <div className="topFlattersPage">
      <NavBarFlatItems />
      <div className="ranked-sellers">
        <div className="hot-bids-header-top-sellers aos-init aos-animate">
          <h2 data-aos="fade-up" data-aos-duration="1400">
            Top Flatters
          </h2>
        </div>
        <div className="top-sellers-inner">
          {flatters.map((item, index) => (
            <div key={index} className="top-flatters-inner-holder">
              <div className="top-flatter-img-holder">
                <div className="flatter-crown">
                  {item?.crown === "1" && <img src={crown} />}
                </div>
                <div className="flatter-stars-container">
                  {item.stars > 0 &&
                    Array(item.stars)
                      .fill(item.stars)
                      .map((_, i) => (
                        <img className="flatter-stars" src={star} />
                      ))}
                </div>
                <Link href="top-sellers.html">
                  <img src={item.img} alt="" />
                </Link>
              </div>
              <div>
                <div className="top-sellers-detail-holder">
                  <p className="numb-rank-seller">{item.name}</p>{" "}
                  <span>
                    {item.amount} <span>Flat</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopFlatters;
