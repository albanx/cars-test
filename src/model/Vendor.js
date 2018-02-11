export default class Vendor
{
  constructor(name, code)
  {
    this.name = name;
    this.code = code;
    this.carList = [];
  }

  getCode() {
    return this.code;
  }

  getName() {
    return this.name;
  }

  setCarList(cars) {
    this.carList = cars;
  }

  getCarList() {
    return this.carList;
  }
}
