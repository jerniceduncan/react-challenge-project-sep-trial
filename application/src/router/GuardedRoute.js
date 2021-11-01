import React, {Component} from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const GuardedRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Route {...rest}>
      {token ? <Component /> : <Redirect to={"/login"} />}
    </Route>
  );
};

export default GuardedRoute;
