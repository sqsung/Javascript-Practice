import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

const scaleNames = {
  c: "Celsius", 
  f: "Fahrenheit", 
};

export default function TemperatureInput(props) {
//   const [temperature, setTemperature] = useState(0);

  function handleChange(e) {
    // setTemperature(e.target.value);
    props.onTemperatureChange({ scale : props.scale, temperature : e.target.value });
  }

  const scale = scaleNames[props.scale];

  return (
    <fieldset>
      <legend>Enter temperature in {scale}:</legend>
      <input value={props.temperature} onChange={handleChange} />
      <BoilingVerdict
        scale={props.scale}
        temperature={parseFloat(props.temperature)}
      />
    </fieldset>
  );
}