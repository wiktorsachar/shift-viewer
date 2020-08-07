import React from "react";
import monthNames from "../../../services/monthNames";

const MonthSelector = (props) => {
  return (
    <div>
      <span>Miesiąc: </span>
      <select
        name="months"
        value={props.month}
        id="months"
        onChange={(e) => props.handler(e.target.value)}
      >
        {monthNames.map((month, i) => (
          <option value={i} key={i}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MonthSelector;
