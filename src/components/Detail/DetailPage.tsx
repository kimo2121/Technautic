import { useEffect, useState } from "react";
import BurgerIcon from "../BurgerIcon.component";
import NavBar from "../NavBar.component";
import "./DetailPage.styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Detail() {
  const [openedDetailOrNot1, setOpenedDetailOrNot1] = useState<boolean>(false);
  const [openedDetailOrNot2, setOpenedDetailOrNot2] = useState<boolean>(false);
  const [openedDetailOrNot3, setOpenedDetailOrNot3] = useState<boolean>(false);

  const toggle1 = (): void => {
    setOpenedDetailOrNot1(!openedDetailOrNot1);
  };
  const toggle2 = (): void => {
    setOpenedDetailOrNot2(!openedDetailOrNot2);
  };
  const toggle3 = (): void => {
    setOpenedDetailOrNot3(!openedDetailOrNot3);
  };

  useEffect(() => {
    Aos.init({ duration: 1400 });
  }, []);

  return (
    <div className="detailPage">
      <div className="outer">
        <BurgerIcon />
        <div className="custom-container">
          <div className="navigation">
            <NavBar />
          </div>
        </div>

        <div className="detail-page-outer clearfix" id="home">
          <div className="chain-container clearfix">
            <div className="row">
              <div className="col-md-7">
                <div className="detail-page-left-img">
                  <img src="assets/images/detail-page-left-img.png" alt="" />
                </div>

                <audio
                  src="assets/images/ES_Arabic Peninsula - Sight of Wonders.mp3"
                  preload="auto"
                />
              </div>
              <div className="col-md-5">
                <div className="detail-page-right">
                  <div className="nft-heading">
                    <div className="nft-heading-top">
                      <h2>
                        NFT ID: <span>12433</span>
                      </h2>
                      <div className="nft-likes">
                        <img
                          src="assets/images/heart-icon.jpg"
                          alt=""
                          className="nft-likes-icon cursor-pointer"
                        />
                        <img
                          src="assets/images/heart-icoen.jpg"
                          alt=""
                          className="cursor-pointer"
                        />
                      </div>
                    </div>

                    <h2>
                      Sketches From Quiet
                      <br />
                      Earth #1:
                    </h2>
                    <div className="likes-holder">
                      <p>6 of 10</p>
                    </div>
                  </div>

                  <div className="last-price">
                    <p>
                      Price = 4 BNB <span>( Lowest price: 3 BNB)</span>
                    </p>
                  </div>
                  <div className="last-price">
                    <p>
                      Your Bid: 1 BNB <span>(Highest Bid: 2 BNB)</span>
                    </p>
                  </div>
                  <div className="detail-page-bottom">
                    <p>10% of sale will go to creator</p>
                  </div>
                </div>

                <div className="tabs-outer">
                  <ul className="nav nav-tabs">
                    <li className="active">
                      <a id="1" href="#">
                        Info
                      </a>
                    </li>
                    <li>
                      <a id="4" href="#">
                        Owners
                      </a>
                    </li>
                    <li>
                      <a id="3" href="#">
                        History
                      </a>
                    </li>
                    <li>
                      <a id="2" href="#">
                        Bids
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="tabContent" id="tabContent1">
                  <div className="panel-group" id="accordion">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <div
                            className="panel-title-img "
                            data-toggle="collapse"
                            data-parent="#accordion"
                          >
                            <span
                              className="toggleCollapseOne"
                              onClick={toggle1}
                            >
                              <img
                                src="assets/images/panel-img-con.png"
                                alt=""
                              />
                              <div className="panel-title-detail">
                                <p>Owners</p>
                                <span>
                                  0xb620..48hsn{" "}
                                  <img src="assets/images/copy.png" alt="" />
                                </span>
                              </div>
                            </span>
                          </div>
                        </h4>
                      </div>
                      <div
                        id="collapseOne"
                        className={`${
                          openedDetailOrNot1 ? "detail-opened" : "detail-closed"
                        }`}
                      >
                        <div className="panel-body">
                          <div className="panel-body-text">
                            <p>20% of sales will go to creator</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <div
                            className="panel-title-img"
                            data-toggle="collapse"
                            data-parent="#accordion"
                          >
                            <span
                              className="toggleCollapseTwo"
                              onClick={toggle2}
                            >
                              <img
                                src="assets/images/top-sellers-img-thir.png"
                                alt=""
                              />
                              <div className="panel-title-detail">
                                <p>Creater</p>
                                <span>
                                  Adif Raza{" "}
                                  <img src="assets/images/copy.png" alt="" />
                                </span>
                              </div>
                            </span>
                          </div>
                        </h4>
                      </div>
                      <div
                        id="collapseTwo"
                        className={`${
                          openedDetailOrNot2 ? "detail-opened" : "detail-closed"
                        }`}
                      >
                        <div className="panel-body">
                          <div className="panel-body-text">
                            <p>20% of sales will go to creator</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h4 className="panel-title">
                          <div
                            className="panel-title-img "
                            data-toggle="collapse"
                            data-parent="#accordion"
                          >
                            <span
                              className="toggleCollapseThree"
                              onClick={toggle3}
                            >
                              <img
                                src="assets/images/panel-img-con.png"
                                alt=""
                              />
                              <div className="panel-title-detail">
                                <p>Owners</p>
                                <span>
                                  0xb620..48hsn{" "}
                                  <img src="assets/images/copy.png" alt="" />
                                </span>
                              </div>
                            </span>
                          </div>
                        </h4>
                      </div>
                      <div
                        id="collapseThree"
                        className={`${
                          openedDetailOrNot3 ? "detail-opened" : "detail-closed"
                        }`}
                      >
                        <div className="panel-body">
                          <div className="panel-body-text">
                            <p>20% of sales will go to creator</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tabContent" id="tabContent2">
                  <div className="tab-2-offers-detail">
                    <p>
                      <a href="">@waste</a> made an offer of 1.2Ξ
                    </p>
                    <p>
                      3 HOURS AGO <a href="">[view tx]</a>{" "}
                    </p>
                  </div>
                  <div className="tab-2-offers-detail">
                    <p>
                      <a href="">@waste</a> made an offer of 1.2Ξ
                    </p>
                    <p>
                      3 HOURS AGO <a href="">[view tx]</a>{" "}
                    </p>
                  </div>
                  <div className="tab-2-offers-detail">
                    <p>
                      <a href="">@waste</a> made an offer of 1.2Ξ
                    </p>
                    <p>
                      3 HOURS AGO <a href="">[view tx]</a>{" "}
                    </p>
                  </div>
                </div>

                <div className="tabContent" id="tabContent3">
                  <div
                    className="panel-title-img "
                    data-toggle="collapse"
                    data-parent="#accordion"
                  >
                    <a href="#collapseThree">
                      <img src="assets/images/panel-img-con.png" alt="" />
                      <div className="panel-title-detail">
                        <p>
                          Put on sale for <strong>0.13 BNB</strong> 3 hours ago
                          by L'Avion
                        </p>
                      </div>
                    </a>
                  </div>
                  <div
                    className="panel-title-img "
                    data-toggle="collapse"
                    data-parent="#accordion"
                  >
                    <a href="#collapseThree">
                      <img src="assets/images/panel-img-con.png" alt="" />
                      <div className="panel-title-detail">
                        <p>
                          Put on sale for <strong>0.13 BNB</strong> 3 hours ago
                          by L'Avion
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="tabContent" id="tabContent4">
                  <div
                    className="panel-title-img "
                    data-toggle="collapse"
                    data-parent="#accordion"
                  >
                    <a href="#collapseFour">
                      <img src="assets/images/panel-img-con.png" alt="" />
                      <div className="row">
                        <div className="col-6 col-md-6">
                          <div className="panel-title-detail">
                            <p>Owners</p>
                            <span>
                              0xb620..48hsn{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />
                              </a>{" "}
                            </span>
                          </div>
                        </div>
                        <div className="col-6 col-md-6">
                          <div className="panel-title-detail">
                            <p>Hold</p>
                            <span>49945</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    className="panel-title-img "
                    data-toggle="collapse"
                    data-parent="#accordion"
                  >
                    <a href="#collapseFour">
                      <img src="assets/images/panel-img-con.png" alt="" />
                      <div className="row">
                        <div className="col-6 col-md-6">
                          <div className="panel-title-detail">
                            <p>Owners</p>
                            <span>
                              0xb620..48hsn{" "}
                              <a href="#">
                                <img src="assets/images/copy.png" alt="" />
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="col-6 col-md-6">
                          <div className="panel-title-detail">
                            <p>Hold</p>
                            <span>49945</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="detail-page-actions">
                  <div className="row">
                    <div className="col-md-4 nopadding">
                      <div className="buy-now-btn-outer">
                        <a href="#">Buy Now</a>
                      </div>
                    </div>
                    <div className="col-md-4 nopadding">
                      <div className="buy-now-btn-outer">
                        <a href="#">place a bid</a>
                      </div>
                    </div>
                    <div className="col-md-4 nopadding"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="c-mask-right" className="c-mask"></div>
    </div>
  );
}

export default Detail;
