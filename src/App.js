import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Header, DropDown } from "./components";
import "./App.css";

import { API_GetModes } from "./constants";

function App() {
  const [modes, setModes] = useState([]);

  const GetModesData = [];
  useEffect(() => {
    fetch(API_GetModes)
      .then((res) => res.json())
      .then((data) => {
        GetModesData.push(...data);
        setModes(GetModesData.map((d) => d.modeName));
      });
  }, []);

  //console.log(modes);
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <Row>
          <Col>
            <h1 className="mt-10">Transport For London Line Information</h1>
          </Col>
          <Col lg="12">
            <DropDown listData={modes}></DropDown>
          </Col>
          <Col lg="12"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
