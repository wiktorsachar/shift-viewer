import React from "react";
import displayUnicode from "../../services/displayUnicode";
import getDayName from "../../services/getDayName";
import "./DayBox.css";

const DayBox = (props) => {
  const dayName = getDayName(props.date);
  const checkIfSunday = () =>
    dayName === "ND" ? "holiday-dayname" : "regular-dayname";
  return (
    <div
      className="day-box"
      id={
        props.duty
          ? props.duty === "day"
            ? "duty-day"
            : "duty-night"
          : "blank"
      }
    >
      <p className={checkIfSunday() /*"holiday-dayname / regular-dayname" */}>
        {props.date[2]}
      </p>
      <p className={checkIfSunday() /*"holiday-dayname / regular-dayname" */}>
        {dayName}
      </p>
      <p className="day-box-children" id="unicodes">
        {displayUnicode(props.duty)}
      </p>
    </div>
  );
};

export default DayBox;
