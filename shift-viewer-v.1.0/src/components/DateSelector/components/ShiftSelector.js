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
        <option value="1">czterozmienny 1</option>
        <option value="2">czterozmienny 2</option>
        <option value="3">czterozmienny 3</option>
        <option value="4">czterozmienny 4</option>
        <option value="5">dwuzmienny 1/3</option>
        <option value="6">dwuzmienny 2/4</option>
      </select>
    </div>
  );
};

export default ShiftSelector;
