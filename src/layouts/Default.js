/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import PropTypes from "prop-types";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import { Col, Container, Row } from "react-bootstrap";
import "./layout.css";
const DefaultLayout = ({ children, noNavbar, noFooter, title }) => {
  return (
    <React.Fragment>
      {!noNavbar && <MainNavbar />}

      {!noNavbar && (
        <header className="s-title">
          <h1 className="p-1 mt-4 ml-4">{title}</h1>
        </header>
      )}

      <Container fluid className="p-0">
        <Row className="m-auto">
          <Col
            className="main-content p-0 m-auto"
            lg={12}
            md={12}
            sm={12}
            xs={12}
            tag="main"
          >
            {children}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool,
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false,
};
export default DefaultLayout;
