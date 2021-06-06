import "./nav.css";

import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
function MainNavbar({ width, marginLeft }) {
  let location = useLocation();
  let activeStyle = { backgroundColor: "#ff7b74", color: "#ffffff" };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      style={{ width, marginLeft }}
    >
      <Navbar.Brand>
        <Link to="/home">
          <h4>Stocks</h4>
        </Link>
      </Navbar.Brand>
    </Navbar>
  );
}

export default MainNavbar;
