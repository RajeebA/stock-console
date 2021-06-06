import React, { useState, useEffect } from "react";
import "./styles/login.css";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { alerter, postData, setTokens, getAccessToken } from "../api";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const history = useHistory();
  useEffect(() => {
    checkAccess();
    return () => {};
  }, []);
  const checkAccess = () => {
    let isAuthenticated = getAccessToken();
    console.log(isAuthenticated);
    if (isAuthenticated) history.push("/home");
  };
  const handleKeypress = (e) => {
    const { name, value } = e.target;
    let chunk = { ...state };
    chunk[name] = value;
    setState(chunk);
  };
  const handleSubmit = async () => {
    if (!state.username || !state.password) {
      alerter("Required fields missing", "username and password are required");
      return false;
    }

    let response = await postData("/users/login", state, false);

    if (response && response.access_token) {
      setTokens(response.access_token);
      history.push("/home");
    }
  };

  return (
    <Container fluid className=" login main-content-container px-4 pb-4">
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input
              type="text"
              placeholder="username"
              name="username"
              onInput={handleKeypress}
            />

            <input
              type="password"
              placeholder="password"
              name="password"
              onInput={handleKeypress}
            />
            <button type="button" onClick={handleSubmit}>
              login
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
