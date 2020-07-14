import React from "react";
import DayBox from "../DayBox/DayBox";
import Shifts from "../../services/shifts";

const Calendar = () => {
  const dutyMonth = Shifts.createShiftMonth(6, 2020, 3);
  return (
    <div>
      {dutyMonth.map((day, i) => (
        <DayBox date={day.date} duty={day.duty} key={i} />
      ))}
    </div>
  );
};

export default Calendar;
