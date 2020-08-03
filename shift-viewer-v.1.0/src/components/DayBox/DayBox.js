import React from "react";
import displayUnicode from "../../services/displayUnicode";
import getDayName from "../../services/getDayName";
import "./DayBox.css";

const DayBox = (props) => {
  const dayName = getDayName(props.date);
  const checkIfHoliday = () =>
    dayName === "ND" || props.holiday ? "holiday-dayname" : "regular-dayname";
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
          <p className={checkIfHoliday()}>{props.date[2]}</p>
        ) : (
          <p className={checkIfHoliday()}>
            {props.date[2]}&#8205; &#8205; &#8205;
          </p>
        )}
        <p className={checkIfHoliday()}>{dayName}</p>
      </div>
      {props.shift === "blank" ? (
        <div className="day-time-box"></div>
      ) : (
        <div className="day-time-box">
          <p>{displayUnicode(props.duty)}</p>
          <p>{displayUnicode(props.duty, true)}</p>
        </div>
      )}
    </div>
  );
};

export default DayBox;
