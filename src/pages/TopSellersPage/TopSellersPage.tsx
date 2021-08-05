import NavBarFlatItems from "../../components/NavBarFlatItems/NavBarFlatItems";
import "./TopSellersPage.styles.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { sellers } from "./data";

const TopSellers: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);

  return (
    <div className="topFlattersPage">
      <NavBarFlatItems />
      <div className="ranked-sellers">
        <div className="hot-bids-header-top-sellers aos-init aos-animate">
          <h2 data-aos="fade-up" data-aos-duration="1400">
            Top Sellers
          </h2>
        </div>
        <div className="top-sellers-inner">
          {sellers.map((item, index) => (
            <div key={index} className="top-seller-inner-holder">
              <div className="top-seller-img-holder">
                <div className={`seller-number-in-list nu${index + 1}`}>
                  <span>{index + 1}</span>
                </div>
                <Link href="top-sellers.html">
                  <img src={item.img} alt="" />
                </Link>
                <Link href="top-sellers.html">
                  <div className="top-sellers-detail-holder">
                    <p className={`numb-rank-seller nu${index + 1}`}>
                      {item.name}
                    </p>{" "}
                    <span>{item.amount} BNB</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
