import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { Carrinho } from "../Carrinho/Carrinho";
import ProductCard from "../../components/ProductCard";
import FeedPage from "../FeedPage";
import PerfilPage from "../PerfilPage";

const routes = {
  root: "/",
  feed: "/feed",
  cart: "/cart",
  perfil: "/perfil"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.cart} component={Carrinho} />
        <Route path={routes.feed} component={FeedPage} />
        <Route path={routes.perfil} component={PerfilPage} />
        <Route path={routes.root} component={ProductCard} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
