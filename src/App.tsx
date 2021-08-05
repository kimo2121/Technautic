import CreateSingle from "./pages/CreateSingle/CreateSinglePage";
import Market from "./pages/MarketPage/MarketPage";
import TopSellers from "./components/TopSellers/TopSellersPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Detail from "./components/Detail/DetailPage";
import TopFlatters from "./components/TopFlatters/TopFlattersPage";
import Createitem from "./pages/CreateItem/CreateItemPage";
import Profile from "./pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Market} />
        <Route exact path="/createitem" component={Createitem} />
        <Route exact path="/createsingle" component={CreateSingle} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/topflatters" component={TopFlatters} />
        <Route exact path="/topsellers" component={TopSellers} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
