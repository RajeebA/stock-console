/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Redirect } from "react-router-dom";
// Layout Types
import { DefaultLayout, AuthLayout } from "./layouts";

// Route Views

const Homeview = React.lazy(() => import("./views/home"));
const Login = React.lazy(() => import("./views/login"));

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/login" />,
  },
  {
    path: "/home",
    layout: DefaultLayout,
    component: Homeview,
    noNavbar: false,
  },
  {
    path: "/login",
    layout: AuthLayout,
    component: Login,
  },
];
