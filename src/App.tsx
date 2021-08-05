import CreateItem from "./pages/CreateItem/CreateItemPage";
import CreateSingle from "./pages/CreateSingle/CreateSinglePage";
import Market from "./pages/MarketPage/MarketPage";
import Profile from "./pages/ProfilePage/ProfilePage";
import TopSellers from "./pages/TopSellers/TopSellersPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Detail from "./pages/Detail/DetailPage";
import TopFlatters from "./pages/TopFlatters/TopFlattersPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Market} />
        <Route exact path="/createitem" component={CreateItem} />
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
