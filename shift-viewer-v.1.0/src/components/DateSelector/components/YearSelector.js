import React from "react";
import "./YearSelector.css";

const YearSelector = (props) => {
  return (
    <div className="year-selector">
      <span onClick={() => props.handler("-")}>◄ </span>
      <span>{props.year}</span>
      <span onClick={() => props.handler("+")}> ►</span>
    </div>
  );
};

export default YearSelector;
