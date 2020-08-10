import React from "react";
import DayBox from "../DayBox/DayBox";
import Shifts from "../../services/shifts";
import DateSelector from "../DateSelector/DateSelector";
import DateService from "../../services/dateService";
import "./Calendar.css";

class Calendar extends React.Component {
  state = {
    month: new Date(Date.now()).getMonth(),
    year: new Date(Date.now()).getFullYear(),
    shift: "blank",
    system: "blank",
    date: "",
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
  handleShiftChange = (dateString, system) => {
    const dateArray = DateService.makeDateArray(new Date(dateString));
    const shift = Shifts.getShiftNumber(dateArray);
    switch (system) {
      case "4shift":
        return shift;
      case "2shift":
        if (shift === 1 || shift === 3) {
          return 5;
        } else if (shift === 2 || shift === 4) {
          return 6;
        }
        break;
      default:
        return "blank";
    }
  };
  handleSystemChange = (system) => {
    this.setState({ system, shift: this.handleShiftChange(this.state.date, system) });
  };
  handleDateChange = (date) => {
    this.setState({ date, shift: this.handleShiftChange(date, this.state.system) });
  };
  render() {
    const dutyMonth =
      this.state.shift === "blank" /*|| this.state.system === "blank" || !this.state.date*/
        ? Shifts.createBlankMonth(this.state.month, this.state.year)
        : this.state.shift < 5
        ? Shifts.createShiftMonth(
            this.state.month,
            this.state.year,
            this.state.shift
          )
        : Shifts.createDualShiftMonth(
            this.state.month,
            this.state.year,
            this.state.shift - 4
          );
    const today = new Date(Date.now()).getDate();
    const isMonthAndYearMatch =
      new Date(Date.now()).getMonth() === this.state.month &&
      new Date(Date.now()).getFullYear() === this.state.year;
    return (
      <div>
        <div className="header">
          <DateSelector
            monthSelector={this.handleMonthSelector}
            yearSelector={this.handleYearSelector}
            handleShiftChange={this.handleShiftChange}
            handleDateChange={this.handleDateChange}
            handleSystemChange={this.handleSystemChange}
            state={this.state}
          />
        </div>
        <div className="content">
          {dutyMonth.map((day, i) => (
            <DayBox
              date={day.date}
              duty={day.duty}
              shift={this.state.shift}
              holiday={day.holiday}
              today={today}
              isMonthAndYearMatch={isMonthAndYearMatch}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  }
}
//dokończyć walidację warunków: zaznaczone date&&shift&&system żeby renderowało właściwy kalendarz


export default Calendar;
