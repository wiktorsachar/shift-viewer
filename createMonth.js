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
}
// zwraca numer zmiany, która ma służbę podanego dnia

const createMonth = (monthNumber, year) => {
  let monthArray = [];
  for (let i = 1; i < 32; i++) {
    if (new Date(year, monthNumber, i).getMonth() === monthNumber) {
      monthArray.push([year, monthNumber, i]);
    } else {
      break;
    }
  }
  return monthArray;
};
//tworzy tablicę ze wszystkimi datami danego miesiąca roku w formacie [yyyy, mm, dd];

const getFirstShiftDay = (monthArray, shiftNumber) => {
  for (let i = 0; i < monthArray.length; i++) {
    if (Shifts.getShiftNumber(monthArray[i], false) === shiftNumber) {
      return {/*date: monthArray[i], night: false*/ dateIndex: i, night: false};
    }
    if (Shifts.getShiftNumber(monthArray[i], true) === shiftNumber) {
      return {/*date: monthArray[i], night: true*/ dateIndex: i, night: true};
    }
  }
}
//zwraca pierwszy dzień/noc podanego miesiąca, w którym dana zmiana ma służbę, np. dla zmiany 4 => { date: [ 2020, 7, 3 ], night: false }

const createShiftMonth = (monthNumber, year, shiftNumber) => {
  const month = createMonth(monthNumber, year);
  const firstDay = getFirstShiftDay(month, shiftNumber);
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
        shiftMonth.push({date, duty: "night"});
        counter++;
        dutySwitch = false
      } else if (!dutySwitch && counter === 0) {
        shiftMonth.push({date, duty: "day"});
        counter = 0;
        dutySwitch = true
      } else {
        if (counter === 1) {
          shiftMonth.push({date, duty: false});
          counter ++;
        } else if (counter === 2) {
          shiftMonth.push({date, duty: false});
          counter = 0;
        }
      }
    } else {
      shiftMonth.push({date, duty: false});
    }
  })
  return shiftMonth
}




// const month = createMonth(7,2020)
// console.log(getFirstShiftDay(month,4))
console.log(createShiftMonth(6,2020,3))
