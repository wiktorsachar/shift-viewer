import React from "react";
import "./YearSelector.css";

const YearSelector = (props) => {
  return (
    <div className="year-selector">
      <span onClick={() => props.handler("-")} className="pointer">
        ◄
      </span>
      <span> {props.year < 0 ? props.year * -1 + " p.n.e" : props.year} </span>
      <span onClick={() => props.handler("+")} className="pointer">
        ►
      </span>
    </div>
  );
};

export default YearSelector;
