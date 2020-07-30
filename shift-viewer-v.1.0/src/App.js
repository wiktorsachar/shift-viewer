import React from 'react';
import Calendar from "./components/Calendar/Calendar";
import "./App.css"

function App() {
  return (
    <div className="App">
      <h1 className="prison-service">KALENDARZ ZMIANOWY</h1>
      <h2 className="prison-service">SŁUŻBY WIĘZIENNEJ</h2>
      <Calendar />
    </div>
  );
}

export default App;
