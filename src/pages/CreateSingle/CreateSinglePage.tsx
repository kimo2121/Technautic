import NavBarFlatItems from "../../components/NavBarFlatItems/NavBarFlatItems";
import "./CreateSingle.css";
import { ReactComponent as UploadICon } from "../../pages/assets/icons/upload.svg";
import Footer from "../../components/Footer/Footer";
function Createsingle() {
  return (
    <div className="createSinglePage">
      <NavBarFlatItems CreateSingle />
      <div className="single-create-outer">
        <div className="something-unknown">
          <div className="create-single-headings">
            <h2>Create single</h2>
          </div>
          <div className="file-data-inputs">
            <div className="file-uploader-outer">
              <form method="post">
                <strong>Upload Files</strong>
                <div className="custom-file">
                  <input
                    type="file"
                    name="files[]"
                    multiple
                    className="custom-file-input create-single-form-control"
                    id="customFile"
                  />
                  <label className="label-choose-file" htmlFor="customFile">
                    Browse
                  </label>
                </div>
                <button
                  type="button"
                  name="upload"
                  value="upload"
                  className="upload-btn"
                >
                  <UploadICon className="fa-upload" /> Upload
                </button>
              </form>
            </div>
            <div className="item-detail-outer">
              <h2>Item Details</h2>
              <div className="item-name-holder">
                <div className="form-group">
                  <span className="input-lebel">Name:</span>
                  <input
                    type="text"
                    className="create-single-form-control"
                    placeholder="NFT Name"
                    name="NFT Name"
                  />
                </div>
              </div>
              <div className="item-name-holder">
                <div className="form-group">
                  <span>Descripton:</span>
                  <input
                    type="text"
                    className="create-single-form-control"
                    placeholder="NFT Description"
                    name="NFT Description"
                  />
                </div>
              </div>
              <div className="form-group item-size">
                <span>Price:</span>
                <input
                  type="text"
                  className="create-single-form-control"
                  placeholder="NFT Price"
                  name="nft-price"
                />
              </div>
            </div>
            <div className="connect-acount-holder">
              <a href="#" className="connect-wallet-create-btn">
                Create
              </a>
            </div>
          </div>
        </div>
        <div className="collectible-preview-profile-holder">
          <span>Preview</span>
          <div className="create-item-img-holder">
            <img src="assets/images/create-item-img.jpg" alt="" />
          </div>
          <div className="cardname-price">
            <div className="">
              <div className="collectible-price">
                <p>Black Golden Tiger</p>
              </div>
            </div>
            <div className="profile-preview-price-btn-holder">
              <a href="#" className="btn-profile-price">
                2.5 BNB
              </a>
            </div>
          </div>
          <a className="collectibel-clear-all" href="#">
            Clear All
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Createsingle;
