import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import { Login } from "../Login/Login";
import { SignUp } from "../SignUp/signup";

export const routes = {
  root: "/",
  signup: "/signup",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={Login} />
        <Route exact path={routes.signup} component={SignUp} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
