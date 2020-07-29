import React from "react";
import DayBox from "../DayBox/DayBox";
import Shifts from "../../services/shifts";
import DateSelector from "../DateSelector/DateSelector";
import "./Calendar.css";

// const Calendar = () => {
//   const dutyMonth = Shifts.createShiftMonth(6, 2020, 3);
//   return (
//     <div>
//       <DateSelector />
//       {dutyMonth.map((day, i) => (
//         <DayBox date={day.date} duty={day.duty} key={i} />
//       ))}
//     </div>
//   );
// };

class Calendar extends React.Component {
  state = {
    // dutyMonth: Shifts.createShiftMonth(6, 2020, 3),
    month: new Date(Date.now()).getMonth(),
    year: new Date(Date.now()).getFullYear(),
    shift: 3,
  };
  // handleDateSelectorInput = (props) => {
  //   this.setState(() => {
  //     return { dutyMonth: Shifts.createShiftMonth(...props) };
  //   });
  // };
  handleMonthSelector = (props) => {
    this.setState({
      month: parseInt(props),
    });
    // this.props.handler(this.state.year, this.state.month, this.state.shift);

    console.log(props);
  };
  handleYearSelector = (props) => {
    this.setState({
      year: parseInt(props),
    });
  };
  handleShiftSelector = (props) => {
    this.setState({
      shift: parseInt(props),
    });
    console.log(props);
  };
  render() {
    // const dutyMonth = Shifts.createShiftMonth(6, 2020, 3);
    const dutyMonth = Shifts.createShiftMonth(this.state.month, this.state.year, this.state.shift)
    console.log(dutyMonth)
    return (
      <div>
        <DateSelector
          // handler={this.handleDateSelectorInput}
          monthSelector={this.handleMonthSelector}
          yearSelector={this.handleYearSelector}
          shiftSelector={this.handleShiftSelector}
          state={this.state}
        />
        {/*this.state.*/dutyMonth.map((day, i) => (
          <DayBox date={day.date} duty={day.duty} key={i} />
        ))}
      </div>
    );
  }
}

export default Calendar;
