import React from "react";

const MonthSelector = (props) => {
  return (
    <div>
      <span>Miesiąc: </span>
      <select
        name="months"
        value={props.month}
        id="months"
        onChange={(e) => props.handler(e.target.value)}
      >
        <option value="0">Styczeń</option>
        <option value="1">Luty</option>
        <option value="2">Marzec</option>
        <option value="3">Kwiecień</option>
        <option value="4">Maj</option>
        <option value="5">Czerwiec</option>
        <option value="6">Lipiec</option>
        <option value="7">Sierpień</option>
        <option value="8">Wrzesień</option>
        <option value="9">Październik</option>
        <option value="10">Listopad</option>
        <option value="11">Grudzień</option>
      </select>
    </div>
  );
};

const ShiftSelector = (props) => {
  return (
    <div>
      <span>Zmiana: </span>
      <select
        name="shifts"
        value={props.shift}
        id="shifts"
        onChange={(e) => props.handler(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
};

const YearSelector = (props) => {
  return (
    <div>
      <span>Rok: </span>
      <input
        placeholder="wpisz rok"
        value={props.year}
        onChange={(e) => props.handler(e.target.value)}
      ></input>
    </div>
  );
};

// const DateSelector = () => {
//   return (
//     <div>
//       <span>Rok: </span>
//       <input placeholder="wpisz rok"></input>
//       <MonthSelector />
//       <ShiftSelector />
//     </div>
//   );
// };

class DateSelector extends React.Component {
  // state = {
  //   month: new Date(Date.now()).getMonth(),
  //   year: new Date(Date.now()).getFullYear(),
  //   shift: 3,
  // };
  // handleMonthSelector = (props) => {
  //   this.setState({
  //     month: parseInt(props),
  //   });
  //   this.props.handler([this.state.year, this.state.month, this.state.shift])

  //   console.log(props);
  // };
  // handleYearSelector = (props) => {
  //   this.setState({
  //     year: parseInt(props),
  //   });
  // };
  // handleShiftSelector = (props) => {
  //   this.setState({
  //     shift: parseInt(props),
  //   });
  //   console.log(props);
  // };
  render() {
    return (
      <div>
        <YearSelector
          handler={this.props.yearSelector}
          year={this.props.state.year}
        />
        <MonthSelector
          handler={this.props.monthSelector}
          month={this.props.state.month}
        />
        <ShiftSelector
          handler={this.props.shiftSelector}
          shift={this.props.state.shift}
        />
      </div>
    );
  }
}

export default DateSelector;
