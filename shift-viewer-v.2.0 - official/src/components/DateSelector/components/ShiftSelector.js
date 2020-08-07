import React from "react";
import Shifts from "../../../services/shifts";

class ShiftSelector extends React.Component {
  state = { system: "blank" };
  handleChangeSystem = (system) => {
    this.setState({
      system,
    });
  };
  render() {
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
        <input type="date"></input>
      </div>
    );
  }
}

export default ShiftSelector;
