class Shifts {
  static getRefDate() {
    return 1581634800000;
  }
  static getDayDifference(dateArray) {
    const day = 86400000,
      dayDifference =
        (new Date(...dateArray).valueOf() - this.getRefDate()) / day;
    return {
      days: Math.round(Math.abs(dayDifference)),
      positive: dayDifference >= 0,
    };
  }
  static getShiftNumber(dateArray, night) {
    const { days, positive } = this.getDayDifference(dateArray),
      dayPattern = [3, 2, 1, 4, 3],
      nightPattern = [4, 3, 2, 1, 4],
      counter = positive ? days % 4 : 4 - (days % 4);
    if (!night) {
      return dayPattern[counter];
    } else {
      return nightPattern[counter];
    }
  }
  // zwraca numer zmiany, która ma służbę podanego dnia;
  static createMonth(monthNumber, year) {
    let monthArray = [];
    for (let i = 1; i < 32; i++) {
      if (new Date(year, monthNumber, i).getMonth() === monthNumber) {
        monthArray.push([year, monthNumber, i]);
      } else {
        break;
      }
    }
    return monthArray;
  }
  //tworzy tablicę ze wszystkimi datami danego miesiąca roku w formacie [yyyy, mm, dd];
  static getFirstShiftDay(monthArray, shiftNumber) {
    for (let i = 0; i < monthArray.length; i++) {
      if (this.getShiftNumber(monthArray[i], false) === shiftNumber) {
        return { dateIndex: i, night: false };
      }
      if (this.getShiftNumber(monthArray[i], true) === shiftNumber) {
        return { dateIndex: i, night: true };
      }
    }
  }
  //zwraca index pierwszego rekordu monthArray, w którym dana zmiana ma służbę;
  static createShiftMonth(monthNumber, year, shiftNumber) {
    const month = this.createMonth(monthNumber, year);
    const firstDay = this.getFirstShiftDay(month, shiftNumber);
    let shiftMonth = [];
    let firstDateShowed = false;
    let dutySwitch = firstDay.night; // true/false
    let counter = 0;
    month.forEach((date, i) => {
      if (i === firstDay.dateIndex) {
        firstDateShowed = true;
      }
      if (firstDateShowed) {
        if (dutySwitch && counter === 0) {
          shiftMonth.push({ date, duty: "night" });
          counter++;
          dutySwitch = false;
        } else if (!dutySwitch && counter === 0) {
          shiftMonth.push({ date, duty: "day" });
          counter = 0;
          dutySwitch = true;
        } else {
          if (counter === 1) {
            shiftMonth.push({ date, duty: false });
            counter++;
          } else if (counter === 2) {
            shiftMonth.push({ date, duty: false });
            counter = 0;
          }
        }
      } else {
        shiftMonth.push({ date, duty: false });
      }
    });
    return shiftMonth;
  }
  //zwraca tablicę ze wszystkimi dniami miesiąca, gdzie rekordy zawierają informację o dacie, o tym czy dana zmiana
  //ma tego dnia służbę i jeśli tak, to czy jest to dzień czy noc;
}

//usage example: Shifts.createShiftMonth(6, 2020, 3);

export default Shifts;
