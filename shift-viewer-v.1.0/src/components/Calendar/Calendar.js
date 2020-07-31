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
    calendarHeight: "0px",
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
  componentDidMount() {
    const headersHeight = document.getElementById("prison-service")
      .clientHeight;
    const selectorsHeight = document.getElementById("header").clientHeight;
    const windowHeight = window.innerHeight;
    const calendarHeight = windowHeight - (headersHeight + selectorsHeight);
    if (this.state.calendarHeight !== calendarHeight) {
      this.setState({ calendarHeight: calendarHeight + "px" });
    }
    console.log("headers height: " + (headersHeight + selectorsHeight));
    console.log("calendar height: " + calendarHeight);
  }
  render() {
    const dutyMonth = Shifts.createShiftMonth(
      this.state.month,
      this.state.year,
      this.state.shift
    );
    console.log("window height: " + window.innerHeight);
    console.log("state calendar height: " + this.state.calendarHeight);
    return (
      <div>
        <div className="header" id="header">
          <DateSelector
            monthSelector={this.handleMonthSelector}
            yearSelector={this.handleYearSelector}
            shiftSelector={this.handleShiftSelector}
            state={this.state}
          />
        </div>
        <div
          id="container"
          style={{
            height: this.state.calendarHeight,
            maxHeight: this.state.calendarHeight,
          }}
        >
          <div
            className="content"
            // id="container"
            // style={{
            //   height: this.state.calendarHeight,
            //   maxHeight: this.state.calendarHeight,
            // }}
          >
            {dutyMonth.map((day, i) => (
              <DayBox date={day.date} duty={day.duty} key={i} />
            ))}
          </div>
        </div>
        <div
          className="content"
          // id="container"
          // style={{
          //   height: this.state.calendarHeight,
          //   maxHeight: this.state.calendarHeight,
          // }}
        >
          {dutyMonth.map((day, i) => (
            <DayBox date={day.date} duty={day.duty} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Calendar;
