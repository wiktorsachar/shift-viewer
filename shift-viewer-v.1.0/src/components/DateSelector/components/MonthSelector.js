import React from "react";

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
        <option value="0">Styczeń</option>
        <option value="1">Luty</option>
        <option value="2">Marzec</option>
        <option value="3">Kwiecień</option>
        <option value="4">Maj</option>
        <option value="5">Czerwiec</option>
        <option value="6">Lipiec</option>
        <option value="7">Sierpień</option>
        <option value="8">Wrzesień</option>
        <option value="9">Październik</option>
        <option value="10">Listopad</option>
        <option value="11">Grudzień</option>
      </select>
    </div>
  );
};

export default MonthSelector;
