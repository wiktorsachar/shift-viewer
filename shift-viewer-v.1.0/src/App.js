import React from "react";
import Calendar from "./components/Calendar/Calendar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App-container">
      <div className="App">
        <div className="prison-service">
          <h1>KALENDARZ ZMIANOWY</h1>
          <h2>SŁUŻBY WIĘZIENNEJ</h2>
        </div>
        <Calendar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
