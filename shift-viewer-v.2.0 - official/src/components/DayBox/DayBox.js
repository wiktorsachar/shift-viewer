import React from "react";
import displayUnicode from "../../services/displayUnicode";
import getDayName from "../../services/getDayName";
import "./DayBox.css";

const DayBox = (props) => {
  const dayName = getDayName(props.date);
  const holidayCheck =
    dayName === "ND" || props.holiday ? "holiday-dayname" : "regular-dayname";
  const digitNumberCheck = (props.date[2] + "").length === 2 && true;
  return (
    <div
      className={
        props.date[2] === props.today && props.isMonthAndYearMatch
          ? "day-box-today"
          : "day-box"
      }
      id={
        props.duty
          ? props.duty === "day"
            ? "duty-day"
            : "duty-night"
          : "blank"
      }
    >
      <div className="day-box-children">
        {digitNumberCheck ? (
          <p className={holidayCheck}>{props.date[2]}</p>
        ) : (
          <p className={holidayCheck}>{props.date[2]}&#8205; &#8205; &#8205;</p>
        )}
        <p className={holidayCheck}>{dayName}</p>
      </div>
      {/*props.shift === "blank"*/ props.hideCondition ? (
        <div className="day-time-box">
          <span role="img" className="hidden" aria-label="">
            &#127769;
          </span>
        </div>
      ) : (
        <div className="day-time-box">
          <p>{displayUnicode(props.duty)}</p>
          {!props.duty && (
            <span className="hidden" role="img" aria-label="">
              &#127769;
            </span>
          )}
          <p>{displayUnicode(props.duty, true)}</p>
        </div>
      )}
    </div>
  );
};

export default DayBox;
