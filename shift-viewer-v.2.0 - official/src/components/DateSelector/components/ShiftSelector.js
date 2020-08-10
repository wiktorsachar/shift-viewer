import React from "react";
import Shifts from "../../../services/shifts";
import DateService from "../../../services/dateService";

class ShiftSelector extends React.Component {
  state = { system: "blank", shiftDate: "" };
  handleChangeSystem = (system) => {
    this.setState({
      system,
    });
  };
  // handleShiftDateChange = (shiftDate) => {
  //   this.setState({ shiftDate });
  // };
  handleShiftChange = (dateString, system) => {
    // this.handleShiftDateChange(dateString);
    const dateArray = DateService.makeDateArray(new Date(dateString));
    const shift = Shifts.getShiftNumber(dateArray);
    // const dateArray = DateService.makeDateArray(new Date(this.state.shiftDate));
    // const shift = Shifts.getShiftNumber(dateArray);
    this.setState({shiftDate: dateString})

    switch (system) {
      case "4shift":
        this.props.handler(shift)
        // return shift;
        break;
      case "2shift":
        // switch (shift) {
        //   case 1 || 3:
        //     return 5;
        //   case 2 || 4:
        //     return 6;
        //   default:
        //     break;
        // }
        if (shift === 1 || shift === 3) {
          console.log(5);
          this.props.handler(5)
          // return 5;
        } else if (shift === 2 || shift === 4) {
          console.log(6);
          this.props.handler(6)
          // return 6;
        }
        break;
      default:
        // return "blank";
        this.props.handler("blank")
        break;
    }
  };
  render() {
    // const getShift
    console.log(this.state.shiftDate);
    return (
      <div>
        <span>System: </span>
        <select
          name="system"
          value={this.state.system}
          id="systems"
          onChange={(e) => this.handleChangeSystem(e.target.value)}
        >
          <option value="blank">wybierz system</option>
          <option value="2shift">dwuzmianowy</option>
          <option value="4shift">czterozmianowy</option>
        </select>
        {/* <select
          name="shifts"
          value={props.shift}
          id="shifts"
          onChange={(e) => props.handler(e.target.value)}
        >
          <option value="blank">wybierz zmianę</option>
          <option value="1">czterozmienny 1</option>
          <option value="2">czterozmienny 2</option>
          <option value="3">czterozmienny 3</option>
          <option value="4">czterozmienny 4</option>
          <option value="5">dwuzmienny 1/3</option>
          <option value="6">dwuzmienny 2/4</option>
        </select> */}
        <br />
        <span>Zmiana: </span>
        <input
          type="date"
          value={this.state.shiftDate}
          onChange={(e) => {
            this.handleShiftChange(e.target.value, this.state.system);
          }}
        ></input>
      </div>
    );
  }
}

//przenieść state i metody do komponentu calendar, zrobić z shiftSelector.js komponent funkcyjny;

export default ShiftSelector;
