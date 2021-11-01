import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main, Login, OrderFormHook, ViewOrdersHook } from "../components";
import GuardedRoute from "./GuardedRoute";

const AppRouter = (props) => {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <GuardedRoute path="/order" exact component={OrderFormHook} />
      <GuardedRoute path="/view-orders" exact component={ViewOrdersHook} />
    </Router>
  );
};

export default AppRouter;
