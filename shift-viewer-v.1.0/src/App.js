import React from "react";
import Calendar from "./components/Calendar/Calendar";
import "./App.css";

function App() {
  return (
    <div className="App-container" id="try">
      <div className="App">
        <div id="prison-service">
          <h1>KALENDARZ ZMIANOWY</h1>
          <h2>SŁUŻBY WIĘZIENNEJ</h2>
        </div>
        <Calendar />
      </div>
    </div>
  );
}

export default App;
