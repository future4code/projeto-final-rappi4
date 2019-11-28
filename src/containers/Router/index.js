import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../SignUp/signup";
import Address from "../Address/Address";
import { Carrinho } from "../Carrinho/Carrinho";
import ProductCard from "../../components/ProductCard";
import FeedPage from "../FeedPage";
import ProfilePage from "../ProfilePage";

export const routes = {
  root: "/",
  signup: "/signup",
  address: "/address",
  cart: "/cart",
  profile: "/profile",
  feed: "/feed",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={Login} />
        <Route exact path={routes.signup} component={SignUp} />
        <Route exact path={routes.address} component={Address} />
        <Route exact path={routes.cart} component={Carrinho} />
        <Route exact path={routes.feed} component={FeedPage} />
        <Route exact path={routes.profile} component={ProfilePage} />
        <Route exact path={routes.root} component={ProductCard} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
