import React from "react";

const ShiftSelector = (props) => {
  return (
    <div>
      <span>System: </span>
      <select
        name="system"
        value={props.system}
        id="systems"
        onChange={(e) => {
          props.handleSystemChange(e.target.value);
        }}
      >
        <option value="blank">wybierz system</option>
        <option value="2shift">dwuzmianowy</option>
        <option value="4shift">czterozmianowy</option>
      </select>
      <br />
      <span>Zmiana: </span>
      <input
        type="date"
        value={props.date}
        onChange={(e) => {
          props.handleDateChange(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default ShiftSelector;
