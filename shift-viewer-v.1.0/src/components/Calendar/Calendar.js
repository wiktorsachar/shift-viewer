import React from "react";
import DayBox from "../DayBox/DayBox";
import Shifts from "../../services/shifts";
import DateSelector from "../DateSelector/DateSelector"
import "./Calendar.css";

const Calendar = () => {
  const dutyMonth = Shifts.createShiftMonth(6, 2020, 3);
  return (
    <div>
      <DateSelector />
      {dutyMonth.map((day, i) => (
        <DayBox date={day.date} duty={day.duty} key={i} />
      ))}
    </div>
  );
};

export default Calendar;
