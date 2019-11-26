import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { Carrinho } from "../Carrinho/Carrinho";
import ProductCard from "../../components/ProductCard";
import FeedPage from "../FeedPage";

const routes = {
  root: "/",
  feed: "/feed",
  cart: "/cart"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.cart} component={Carrinho} />
        <Route path={routes.root} component={ProductCard} />
        <Route path={routes.feed} component={FeedPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
