export default class Reservation {
  constructor(dateStart, dateEnd, locationStart, locationEnd) {
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.locationStart = locationStart;
    this.locationEnd = locationEnd;
  }

  getDateStart() {
    return this.getDateHuman(this.dateStart);
  }

  getDateEnd() {
    return this.getDateHuman(this.dateEnd);
  }

  getLocationStart() {
    return this.locationStart;
  }

  getLocationEnd() {
    return this.locationEnd;
  }

  getDateHuman(dateString) {
    let date = new Date(dateString);
    return `${date.getDay()} - ${date.getMonth() + 1} - ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  }

  getLocationNameStart() {
    return this.locationStart.getName();
  }

  getLocationNameEnd() {
    return this.locationEnd.getName();
  }
}
