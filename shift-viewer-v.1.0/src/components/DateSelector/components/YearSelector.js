import React from "react";

const YearSelector = (props) => {
  return (
    <div>
      {/* <span>Rok: </span>
      <input
        placeholder="wpisz rok"
        value={props.year}
        onChange={(e) => props.handler(e.target.value)}
      ></input> */}
      <span onClick={() => props.handler("-")}>◄</span>
      <span>{props.year}</span>
      <span onClick={() => props.handler("+")}>►</span>
    </div>
  );
};

export default YearSelector;
