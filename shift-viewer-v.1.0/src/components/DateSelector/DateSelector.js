import React from "react";
import MonthSelector from "./components/MonthSelector";
import ShiftSelector from "./components/ShiftSelector";
import YearSelector from "./components/YearSelector";

const DateSelector = (props) => {
  return (
    <div>
      <YearSelector
        handler={props.yearSelector}
        year={props.state.year}
      />
      <MonthSelector
        handler={props.monthSelector}
        month={props.state.month}
      />
      <ShiftSelector
        handler={props.shiftSelector}
        shift={props.state.shift}
      />
    </div>
  );
};

export default DateSelector;
