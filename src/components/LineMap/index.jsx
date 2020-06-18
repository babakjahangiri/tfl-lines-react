import React, { useState, useEffect } from "react";
import { Col, Card } from "react-bootstrap";

const LineMap = ({ LineNo }) => {
  const [RouteSection, setRouteSection] = useState([]);

  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/${LineNo}/Route`)
      .then((res) => res.json())
      .then((data) => {
        setRouteSection(data.routeSections[0]);
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [LineNo]);

  return (
    <React.Fragment>
      <Col lg="6" sm="6" xs="6">
        <Card className="padding-10 line-card">
          <Card.Body>
            <Card.Title className="text-left">START OF LINE</Card.Title>
            <Card.Text>{RouteSection.originationName}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col lg="6" sm="6" xs="6">
        <Card className="padding-10 line-card">
          <Card.Body>
            <Card.Title className="text-left">END OF LINE</Card.Title>
            <Card.Text>{RouteSection.destinationName}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default LineMap;
