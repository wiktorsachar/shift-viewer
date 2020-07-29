import React from "react";

const ShiftSelector = (props) => {
  return (
    <div>
      <span>Zmiana: </span>
      <select
        name="shifts"
        value={props.shift}
        id="shifts"
        onChange={(e) => props.handler(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
};

export default ShiftSelector;
