export default class {
  constructor(totalConfirmed, totalRecovered, totalDeath, newConfirmed, newRecovered, newDeath, date) {
    this.totalConfirmed = totalConfirmed;
    this.totalRecovered = totalRecovered;
    this.newConfirmed = newConfirmed;
    this.newRecovered = newRecovered;
    this.newDeath = newDeath;
    this.totalDeath = totalDeath;
    this.date = date;
  }

  get getRecoveredData() {
    return {
      count: this.totalRecovered,
      newCount: this.newRecovered,
      date: this.date
    }
  }

  get getConfirmedData() {
    return {
      count: this.totalConfirmed,
      newCount: this.newConfirmed,
      date: this.date
    }
  }

  get getDeathData() {
    return {
      count: this.totalDeath,
      newCount: this.newDeath,
      date: this.date
    }
  }
}
