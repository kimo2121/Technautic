import BurgerIcon from "../../components/BurgerIcon/BurgerIcon.component";
import ItemCard from "../../components/ItemCard/ItemCard.component";
import MarketProfileHeader from "../../components/MarketProfileHeader/MarketProfileHeader.component";
import NavBar from "../../components/NavBar/NavBar.component";
import ProfileCard from "../../components/ProfileCard/ProfileCard.component";
import "../../components/main.css";
import "./ProfilePage.styles.css";

function Profile() {
  const page = "Profile";

  return (
    <div className="profilePage">
      <div className="outer">
        <BurgerIcon />
        <NavBar />
        <div className="welcome-market-opener clearfix" id="home">
          <MarketProfileHeader />
          <div className="chain-container">
            <div className="row">
              <div className="col-md-3">
                <ProfileCard />
              </div>
              <div className="col-md-9">
                <div className="tab_container">
                  <input
                    className="some-input-field"
                    id="tab1"
                    type="radio"
                    name="tabs"
                    defaultChecked={true}
                  />
                  <label>
                    <span>On Sale</span>
                  </label>

                  <input id="tab2" type="radio" name="tabs" />
                  <label>
                    <i className="fa fa-pencil-square-o"></i>
                    <span>Collections</span>
                  </label>

                  <input id="tab3" type="radio" name="tabs" />
                  <label>
                    <i className="fa fa-pencil-square-o"></i>
                    <span>Creations</span>
                  </label>

                  <input id="tab4" type="radio" name="tabs" />
                  <label>
                    <i className="fa fa-pencil-square-o"></i>
                    <span>Likes</span>
                  </label>
                  <section id="content1" className="tab-content">
                    <div className="row">
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                    </div>
                  </section>
                  <section id="content2" className="tab-content">
                    <div className="row">
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                      <ItemCard page={page} />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
