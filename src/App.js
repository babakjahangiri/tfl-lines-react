import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Header, SelectTransportMode } from "./components";
import "./App.css";

function App() {
  const [modes, setModes] = useState([]);
  const [selectedMode, setSelectedMode] = useState("");

  const GetModesData = [];
  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => {
        GetModesData.push(...data);
        setModes(GetModesData.map((d) => d.modeName));
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function OnSelectTransportMode(mode) {
    setSelectedMode(mode);
  }

  const GetTransportData = [];
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Mode/${selectedMode}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMode]);

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
            <SelectTransportMode
              listData={modes}
              onChange={OnSelectTransportMode}
            ></SelectTransportMode>
          </Col>
          <Col lg="12"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
