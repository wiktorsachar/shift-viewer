import React from "react";

const YearSelector = (props) => {
  return (
    <div>
      <span onClick={() => props.handler("-")}>◄ </span>
      <span>{props.year}</span>
      <span onClick={() => props.handler("+")}> ►</span>
    </div>
  );
};

export default YearSelector;
