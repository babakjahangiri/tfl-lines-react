import React from "react";
import { Form } from "react-bootstrap";
const DropDown = ({ listData }) => {
  console.log(listData);
  return (
    <Form.Control
      as="select"
      size="lg"
      className="sm-2 mb-10"
      id="drdTransportMode"
    >
      <option key="-1" value="-1">
        Choose a Mode of Transport
      </option>
      {listData.map((mode, id) => {
        return (
          <option key={id} value={id}>
            {mode}
          </option>
        );
      })}
    </Form.Control>
  );
};

export default DropDown;
