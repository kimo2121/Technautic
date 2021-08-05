import React from "react";
import OpeningDots from "../OpeningDots/OpeningDots.component";
import "./ItemCard.styles.css";

const ItemCard = ({ page }) => {
  return (
    <div
      className={`${page === "Profile" ? "col-md-4" : "col-md-3"} nopadding`}
    >
      <div className="item-card">
        <ul className="artists">
          <li>
            <img src="assets/images/artist-icon.jpg" alt="" />
          </li>
        </ul>
        <div className="owner-detial-outer">
          <p>owner</p>

          <span>
            oxbak...dithel{" "}
            <a href="#">
              <img src="assets/images/copy.png" alt="" />{" "}
            </a>{" "}
          </span>
        </div>
        <OpeningDots page={page} />
        <div className="image-holder">
          <a href="#">
            <img src="assets/images/trust-img.png" alt="gallery-img" />
          </a>
        </div>
        <div className="details-row">
          <div className="row">
            <div className="col-7">
              <h2>
                <a href="#">Ring offff trust</a>
              </h2>
            </div>
            <div className="col-5">
              <div className="trust-price">
                <span>6 of 10</span>
              </div>
            </div>
          </div>

          <div className="counter">
            <span>Price: 4 BNB</span> (Lowest price: 3 BNB)
          </div>
          <div className="counter">
            <span>Your Bid: 1 BNB</span> (Highest bid: 2 BNB)
          </div>
          <div className="bid-row">
            <a href="#">Placed a bid</a>
            <a href="#" className="buy-now-btn">
              Buy Now
            </a>
          </div>
        </div>
        <div className="like-icon">
          <a href="#">
            <img src="assets/images/heart-icon.jpg" alt="" />
          </a>
        </div>
        <div className="heart-icon">
          <a href="#">
            <img src="assets/images/heart-icoen.jpg" alt="" />
          </a>
        </div>
        <div className="item-id">
          <p>12348</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
