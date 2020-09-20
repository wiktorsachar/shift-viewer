import React from "react";
import "./ShiftSelector.css";
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

const ShiftSelector = (props) => {
//  const toggleClass = (event) => {
//     event.target.classList.toggle('show')
//  }
  return (
    <React.Fragment>
      <div>
        <span>System: </span>
        <select
          name="system"
          value={props.system}
          id="systems"
          onChange={(e) => {
            props.handleSystemChange(e.target.value);
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
          value={props.date}
          onChange={(e) => {
            props.handleDateChange(e.target.value);
          }}
          id="shift-date"
        ></input>
        {/* <div id="help">�</div> */}
        <div className="popup" onClick={myFunction/*e=>toggleClass(e)*/}>
          �
          <span className="popuptext" id="myPopup">
            Wybierz dowolny dzień, w którym Twoja zmiana miała służbę dzienną. 
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShiftSelector;

//kolor napisów zmienić na niebieski-sw
//dodać popup do znaku zapytania
