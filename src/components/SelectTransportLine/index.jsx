import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const SelectTransportLine = ({ mode, onChange }) => {
  const [transportLine, setTransportLine] = useState([]);

  const GetTransportData = [];
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Mode/${mode}`)
      .then((res) => res.json())
      .then((data) => {
        GetTransportData.push(...data);
        setTransportLine(GetTransportData.map((d) => d.id));
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  return (
    <React.Fragment>
      {transportLine.length !== 0 && (
        <Form.Control
          as="select"
          size="lg"
          className="mt-10 xs-12 sm-12"
          id="drdTransportVehicle"
          onChange={(e) => {
            onChange(e.target.value);
          }}
        >
          <option key="-1" value="">
            Choose a Line ...
          </option>
          {transportLine.map((d) => {
            return (
              <option key={d} value={d}>
                {d}
              </option>
            );
          })}
        </Form.Control>
      )}
    </React.Fragment>
  );
};

export default SelectTransportLine;
