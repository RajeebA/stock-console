import "./nav.css";

import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
function MainNavbar({ width, marginLeft }) {
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
