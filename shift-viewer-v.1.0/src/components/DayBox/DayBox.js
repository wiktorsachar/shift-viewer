import React from "react";
import displayUnicode from "../../services/displayUnicode";
import getDayName from "../../services/getDayName";
import "./DayBox.css";

const DayBox = (props) => {
  const dayName = getDayName(props.date);
  const checkIfSunday = () =>
    dayName === "ND" ? "holiday-dayname" : "regular-dayname";
  const checkIfDigitNumber = (number) => {
    if ((number + "").length === 2) {
      return true;
    }
  };
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
      <div className="day-box-children">
        {checkIfDigitNumber(props.date[2]) ? (
          <p className={checkIfSunday()}>{props.date[2]}</p>
        ) : (
          <p className={checkIfSunday()}>
            {props.date[2]}&#8205; &#8205; &#8205;
          </p>
        )}
        <p className={checkIfSunday()}>{dayName}</p>
      </div>
      <div className="day-time-box">
        <p>{displayUnicode(props.duty)}</p>
        <p>{displayUnicode(props.duty, true)}</p>
      </div>
    </div>
  );
};

export default DayBox;
