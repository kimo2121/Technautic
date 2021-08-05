import CreateItem from "./pages/CreateItemPage/CreateItemPage";
import CreateSingle from "./pages/CreateSinglePage/CreateSinglePage";
import Market from "./pages/MarketPage/MarketPage";
import Profile from "./pages/ProfilePage/ProfilePage";
import TopSellers from "./pages/TopSellersPage/TopSellersPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Detail from "./pages/DetailPage/DetailPage";
import TopFlatters from "./pages/TopFlattersPage/TopFlattersPage";

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
