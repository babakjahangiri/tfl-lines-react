import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
//import { API_GetModes } from "./constants";

const SelectTransportVehicle = ({ mode, onChange }) => {
  const [transportVehicle, setTransportVehicle] = useState([]);

  const GetTransportData = [];
  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Mode/${mode}`)
      .then((res) => res.json())
      .then((data) => {
        GetTransportData.push(...data);
        // console.log(
        //   GetTransportData.map((d) => (d.id !== [] ? d.id : "no-data"))
        // );
        setTransportVehicle(GetTransportData.map((d) => d.id));
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  return (
    <Form.Control
      as="select"
      size="lg"
      className="mt-10 xs-12 sm-12"
      id="drdTransportVehicle"
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      {transportVehicle.map((d) => {
        return (
          <option key={d} value={d}>
            {d}
          </option>
        );
      })}
    </Form.Control>
  );
};

export default SelectTransportVehicle;
