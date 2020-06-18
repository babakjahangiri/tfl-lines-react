import React, { useState, useEffect } from "react";
//import { API_GetModes } from "./constants";

const [transportVehicle, setTransportVehicle] = useState([]);

const GetTransportVehicleData = [];
useEffect(() => {
  fetch("API_GetModes")
    .then((res) => res.json())
    .then((data) => {
      GetModesData.push(...data);
      setModes(GetModesData.map((d) => d.modeName));
    });
}, []);

const SelectTransportVehicle = (data) => {
  return <div></div>;
};

export default SelectTransportVehicle;
