import React from "react";
import DayBox from "../DayBox/DayBox";
import Shifts from "../../services/shifts";
import DateSelector from "../DateSelector/DateSelector";
import "./Calendar.css";

class Calendar extends React.Component {
  state = {
    month: new Date(Date.now()).getMonth(),
    year: new Date(Date.now()).getFullYear(),
    shift: "blank",
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
      shift: props === "blank" ? props : parseInt(props),
    });
  };
  render() {
    const dutyMonth =
      this.state.shift === "blank"
        ? Shifts.createBlankMonth(this.state.month, this.state.year)
        : (this.state.shift < 5
        ? Shifts.createShiftMonth(
            this.state.month,
            this.state.year,
            this.state.shift
          )
        : Shifts.createDualShiftMonth(
            this.state.month,
            this.state.year,
            this.state.shift - 4
          ));
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
            <DayBox date={day.date} duty={day.duty} shift={this.state.shift} holiday={day.holiday} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Calendar;
