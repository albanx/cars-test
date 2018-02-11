import CarCost from "../../src/model/CarCost";

let carCost;
beforeEach(() => {
  carCost = new CarCost('100', 101, 'EUR');
});

describe('carModel', () => {
  it('Is defined', () => {
    expect(carCost).toBeDefined();
  });

  it('has total', () => {
    expect(carCost.getTotal()).toBe('100');
  });

  it('has estimation', () => {
    expect(carCost.getEstimated()).toBe(101);
  });

  it('has currency', () => {
    expect(carCost.getCurrency()).toBe('€');
  });

  it('has currency', () => {
    expect(carCost.getPrice()).toBe(100);
    expect(carCost.getPriceString()).toBe('€ 100');
  });
});
