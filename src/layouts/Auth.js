import React from "react";

import { Col, Container, Row } from "react-bootstrap";

const AuthLayout = ({ children }) => (
  <React.Fragment>
    <Container fluid>
      <Row>
        <Col
          className="main-content p-0"
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

export default AuthLayout;
