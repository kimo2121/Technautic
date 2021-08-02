import NavBarFlatItems from "../NavBarFlatItems/NavBarFlatItems";
import "./CreateItemPage.styles.css";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../../pages/assets/icons/right-arrow.svg";
import Footer from "../Footer/Footer";
function Createitem() {
  return (
    <div className="createItemPage">
      <NavBarFlatItems CreateSingle />
      <div className="top-create-header">
        <div className="">
          <Link className="back-to-home-btn">Back to Home</Link>
        </div>
        <div className="create-items-links">
          <Link href="#"> Home </Link>
          <span>
            <RightArrow style={{ width: "10px", fill: "#37afe7" }} />
          </span>
          <Link href="#"> Create Item </Link>
        </div>
      </div>
      <div className="create-item-outer">
        <div className="create-item-header">
          <h2>Create Item</h2>
          <p>
            Choose “Single” if you want your collectible to be one of a kind or
            “Multiple” if you want to sell one collectible multiple times.
          </p>
        </div>
        <div className="create-item-inner-outer">
          <div className="create-item-left">
            <img src="assets/images/create-item-img.jpg" alt="" />
            <button className="create-single-btn"> Create Single</button>
          </div>
          <div className="create-item-left">
            <img src="assets/images/create-item-img.jpg" alt="" />
            <button className="create-single-btn"> Create Multiple</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Createitem;
