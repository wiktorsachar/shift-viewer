import React from "react";
import "./ShiftSelector.css";

const ShiftSelector = (props) => {
  return (
    <React.Fragment>
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
      </div>
      <div className="shift-creator">
        <p className="shift-title">Zmiana dzienna: </p>
        <input
          type="date"
          value={props.date}
          onChange={(e) => {
            props.handleDateChange(e.target.value);
          }}
          id="shift-date"
        ></input>
        <div id="help">�</div>
      </div>
    </React.Fragment>
  );
};

export default ShiftSelector;
