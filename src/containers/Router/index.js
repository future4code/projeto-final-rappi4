import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const routes = {
  root: "/"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={ProductCard} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
