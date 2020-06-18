import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  Header,
  SelectTransportMode,
  SelectTransportLine,
  LineMap,
} from "./components";
import "./App.css";

function App() {
  const [modes, setModes] = useState([]); //is the data that fill the first select box
  const [selectedMode, setSelectedMode] = useState("");
  const [selectedLine, setSelectedLine] = useState("");

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
    setSelectedLine("");
  }

  function OnSelectTransportVehicle(LineNo) {
    setSelectedLine(LineNo);
  }

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

          {selectedMode !== "" && (
            <Col lg="12">
              <SelectTransportLine
                mode={selectedMode}
                onChange={OnSelectTransportVehicle}
              ></SelectTransportLine>
            </Col>
          )}
        </Row>
        <Row>
          <Col xs="12" lg="12">
            <div className="mt-10 mb-10 font-bold">
              {selectedMode !== "" && `${selectedMode}`}
              {selectedLine !== "" && `: ${selectedLine}`}
            </div>
          </Col>
        </Row>
        <Row>
          {selectedMode !== "" && selectedLine !== "" ? (
            <LineMap LineNo={selectedLine}></LineMap>
          ) : null}
        </Row>
      </Container>
    </div>
  );
}

export default App;
