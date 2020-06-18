import React from "react";
import { Form } from "react-bootstrap";
const SelectTransportMode = ({ listData, onChange }) => {
  //console.log(listData);
  return (
    <Form.Control
      as="select"
      size="lg"
      className="xs-12 sm-12"
      id="drdTransportMode"
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      <option key="-1" value="">
        Choose a Mode of Transport
      </option>
      {listData.map((mode, id) => {
        return (
          <option key={id} value={mode}>
            {mode}
          </option>
        );
      })}
    </Form.Control>
  );
};

export default SelectTransportMode;
