import React from "react";
import MonthSelector from "./components/MonthSelector";
import ShiftSelector from "./components/ShiftSelector";
import YearSelector from "./components/YearSelector";
import "./DateSelector.css";

const DateSelector = (props) => {
  return (
    <div>
      <div className="header-nav" id="year-selector">
        <YearSelector handler={props.yearSelector} year={props.state.year} />
      </div>
      <div className="header-nav">
        <MonthSelector
          handler={props.monthSelector}
          month={props.state.month}
        />
      </div>
      <div className="header-nav">
        <ShiftSelector
          handler={props.shiftSelector}
          // handleDateSelector={props.handleDateSelector}
          shift={props.state.shift}
          date={props.state.date}
        />
      </div>
    </div>
  );
};

export default DateSelector;
