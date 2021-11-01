import React, { useEffect } from "react";
import LoginForm from "./login-form/loginForm";
import "./login.css";
import { useSelector } from "react-redux";

const Login = (props) => {
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token) {
      props.history.push("/view-orders");
    }
  }, [token]);

  return (
    <div className="main-body">
      <h1 className="text-center">Login Screen</h1>
      <div className="d-flex justify-content-center mt-5">
        <LoginForm onLogin={() => {props.history.push('/view-orders')}}  />
      </div>
    </div>
  );
};

export default Login;
