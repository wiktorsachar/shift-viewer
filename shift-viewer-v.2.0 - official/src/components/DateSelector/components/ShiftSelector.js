import React from "react";
import "./ShiftSelector.css";

class ShiftSelector extends React.Component {
  state = {
    popupStatus: "popuptext",
  };
  changePopupStatus = () => {
    this.state.popupStatus === "popuptext"
      ? this.setState({ popupStatus: "popuptext show" })
      : this.setState({ popupStatus: "popuptext" });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <span>System: </span>
          <select
            name="system"
            value={this.props.system}
            id="systems"
            onChange={(e) => {
              this.props.handleSystemChange(e.target.value);
            }}
          >
            <option value="blank">wybierz system</option>
            <option value="2shift">dwuzmianowy</option>
            <option value="4shift">czterozmianowy</option>
          </select>
        </div>
        <div className="shift-creator">
          <p className="shift-title">Zmiana dzienna: </p>
          <input
            type="date"
            value={this.props.date}
            onChange={(e) => {
              this.props.handleDateChange(e.target.value);
            }}
            id="shift-date"
          ></input>
          <div className="popup" onClick={this.changePopupStatus}>
            �
            <span className={this.state.popupStatus} id="myPopup">
              Wybierz dowolny dzień, w którym Twoja zmiana miała służbę dzienną.
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShiftSelector;

//kolor napisów zmienić na niebieski-sw
//zrobić ukrywanie popupu po kliknięciu gdziekolwiek
