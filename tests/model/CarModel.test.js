import CarModel from "../../src/model/CarModel";

let carModel;
beforeEach(() => {
  carModel = new CarModel('AUDI');
});

describe('carModel', () => {
  it('Is defined', () => {
    expect(carModel).toBeDefined();
  });

  it('has name', () => {
    expect(carModel.getName()).toBe('AUDI');
  });
});
