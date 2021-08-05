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
