import React from "react";
import "./Header.css";
import HeaderImage from "./../../images/header-image.jpg";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="header">
          <img src={HeaderImage} alt="header" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
