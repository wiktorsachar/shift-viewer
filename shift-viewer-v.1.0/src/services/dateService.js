class DateService {
  static makeDateArray(date) {
    return [date.getFullYear(), date.getMonth(), date.getDate()];
  }
  //konwertuje datę z formatu date na tablicę
  static isDatesMatch(firstDate, secondDate) {
    if (
      firstDate[0] === secondDate[0] &&
      firstDate[1] === secondDate[1] &&
      firstDate[2] === secondDate[2]
    ) {
      return true;
    } else {
      return false;
    }
  }
  //sprawdza, czy pierwsza data jest taka sama jak druga
  static getYears(startDate, endDate) {
    let startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    let years = [startYear];
    while (startYear !== endYear) {
      startYear++;
      years.push(startYear);
    }
    return years;
  }
  //zwraca tablicę z latami, które obejmuje podany przedział dat w formacie date
  static addDaysToDate(date, days) {
    return new Date(date.valueOf() + days * 86400000);
  }
  //dodaje określoną liczbę dni do daty w formacie date
  static getDates(startDate, endDate) {
    let days = [];
    let currentDate = startDate;
    while (
      !this.isDatesMatch(
        this.makeDateArray(currentDate),
        this.makeDateArray(endDate)
      )
    ) {
      days.push(this.makeDateArray(currentDate));
      currentDate = this.addDaysToDate(currentDate, 1);
    }
    if (days[days.length - 1] !== currentDate) {
      days.push(this.makeDateArray(currentDate));
    }
    return days;
  }
  //zwraca wszystkie dni z podanego przedziału w formacie date w formie tablic
  static checkIfContainsDates(element, datesToCheck, fixed) {
    let isContains = false;
    datesToCheck.forEach((e) => {
      if (this.isDatesMatch(fixed ? e.date : e, element)) {
        isContains = true;
      }
    });
    return isContains;
  }
  static containsDateCheck(day, datesToCheck) {
    let isContains = false;
    datesToCheck.forEach((e) => {
      if (this.isDatesMatch(day, e)) {
        isContains = true;
      }
    });
    return isContains;
  }
}

export default DateService;
