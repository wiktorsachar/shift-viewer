import React from "react";
import "./DayBox.css";

const displayUnicode = (duty) => {
  switch (duty) {
    case "night":
      return "🌘";
    case "day":
      return "☀";
    default:
      return "-";
  }
};

const getDayName = (dateArray) => {
  const date = new Date(...dateArray).getDay();
  switch (date) {
    case "0":
      return "ND";
    case 1:
      return "PN";
    case 2:
      return "WT";
    case 3:
      return "ŚR";
    case 4:
      return "CZW";
    case 5:
      return "PT";
    case 6:
      return "SO";
    default:
        return "error"
  }
};

const DayBox = (props) => {
  return (
    <div className="day-box">
      <p>{props.date[2]}</p>
      <p>{getDayName(props.date)}</p>
      <p className="unicodes">{displayUnicode(props.duty)}</p>
    </div>
  );
};

export default DayBox;
