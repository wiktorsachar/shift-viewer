/*
static getEaster is from: https://gist.github.com/johndyer/0dffbdd98c2046f41180c051f378f343
*/

import DateService from "./dateService";

class BigHolidays {
  static constantDays(year) {
    return [
      [year, 0, 1],
      [year, 0, 6],
      [year, 4, 1],
      [year, 4, 3],
      [year, 7, 15],
      [year, 10, 1],
      [year, 10, 11],
      [year, 11, 25],
      [year, 11, 26],
    ];
  }
  //zwraca dni wolne od pracy bez świąt ruchomych w formie tablic
  static getEaster(year) {
    const f = Math.floor,
      G = year % 19,
      C = f(year / 100),
      H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
      I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
      J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
      L = I - J,
      month = 3 + f((L + 40) / 44),
      day = L + 28 - 31 * f(month / 4);
    return [year, month, day];
  }
  //zwraca datę wielkanocy dla danego roku w formie tablicy
  static getSecondEaster(year) {
    const easter = new Date(this.getEaster(year)),
      secondEaster = DateService.addDaysToDate(easter, 1);
    return [year, secondEaster.getMonth(), secondEaster.getDate()];
  }
  //zwraca drugi dzień świąt wielkanocnych w formie tablicy
  static getCorpusChristi(year) {
    let corpusChristi = DateService.addDaysToDate(
      new Date(this.getEaster(year)),
      50
    );
    while (corpusChristi.getDay() !== 0) {
      corpusChristi = DateService.addDaysToDate(corpusChristi, 1);
    }
    while (corpusChristi.getDay() !== 4) {
      corpusChristi = DateService.addDaysToDate(corpusChristi, 1);
    }
    return [year, corpusChristi.getMonth(), corpusChristi.getDate()];
  }
  //zwraca datę bożego ciała w formie tablicy
  static getBigHolidays(year) {
    return [
      ...this.constantDays(year),
      this.getSecondEaster(year),
      this.getCorpusChristi(year),
    ];
  }
}

export default BigHolidays;
