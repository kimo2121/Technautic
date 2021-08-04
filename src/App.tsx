import CreateItem from "./components/CreateItem/CreateItemPage";
import CreateSingle from "./components/CreateSingle/CreateSinglePage";
import Market from "./pages/MarketPage";
import Profile from "./pages/ProfilePage";
import TopSellers from "./components/TopSellers/TopSellersPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Detail from "./components/Detail/DetailPage";
import TopFlatters from "./components/TopFlatters/TopFlattersPage";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Market} />
        <Route path="/createitem" component={CreateItem} />
        <Route path="/createsingle" component={CreateSingle} />
        <Route path="/profile" component={Profile} />
        <Route path="/detail" component={Detail} />
        <Route path="/topflatters" component={TopFlatters} />
        <Route path="/topsellers" component={TopSellers} />
      </Switch>
    </Router>
  );
};

export default App;
