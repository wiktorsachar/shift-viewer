import React from "react";
import DayBox from "../DayBox/DayBox";
import Shifts from "../../services/shifts";
import DateSelector from "../DateSelector/DateSelector";
import "./Calendar.css";

class Calendar extends React.Component {
  state = {
    month: new Date(Date.now()).getMonth(),
    year: new Date(Date.now()).getFullYear(),
    shift: 3,
  };
  handleMonthSelector = (props) => {
    this.setState({
      month: parseInt(props),
    });
  };
  handleYearSelector = (props) => {
    switch (props) {
      case "+":
        this.setState({ year: this.state.year + 1 });
        break;
      case "-":
        this.setState({ year: this.state.year - 1 });
        break;
      default:
        break;
    }
  };
  handleShiftSelector = (props) => {
    this.setState({
      shift: parseInt(props),
    });
  };
  render() {
    const dutyMonth = Shifts.createShiftMonth(
      this.state.month,
      this.state.year,
      this.state.shift
    );
    return (
      <div>
        <div className="header">
          <DateSelector
            monthSelector={this.handleMonthSelector}
            yearSelector={this.handleYearSelector}
            shiftSelector={this.handleShiftSelector}
            state={this.state}
          />
        </div>
        <div className="content">
          {dutyMonth.map((day, i) => (
            <DayBox date={day.date} duty={day.duty} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Calendar;
