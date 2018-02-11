export default class CarCost {
  constructor(total, estimated, currency) {
    this.total = total;
    this.estimated = estimated;
    this.currency = currency;
  }

  getTotal() {
    return this.total;
  }

  getEstimated() {
    return this.estimated;
  }

  getCurrency() {
    switch (this.currency) {
      case 'CAD':
        return `$`;
      case 'USD':
        return `$`;
      case 'GBP':
        return `£`;
      case 'EUR':
        return `€`;
    }
  }

  getPrice() {
    return parseFloat(this.total);
  }

  getPriceString() {
    return this.getCurrency() + ' ' + this.getTotal();
  }
}
