import React from "react";

const MonthSelector = () => {
  return (
    <select name="months" id="months">
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
  );
};

const DateSelector = () => {
  return (
    <div>
      <input placeholder="rok"></input>
      <MonthSelector />
    </div>
  );
};

export default DateSelector;
