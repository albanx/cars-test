import Car from '../../src/model/Car';
import Vendor from '../../src/model/Vendor';
import CarModel from "../../src/model/CarModel";
import CarCost from "../../src/model/CarCost";

let car;
beforeEach(() => {
  car = new Car(
    'true',
    'manual',
    'petrol',
    'left',
    3,
    2,
    1234,
    'nocontext',
    3,
    new CarModel('BMW'),
    'none.jpg');
});

describe('Car', () => {
  it('Is defined', () => {
    expect(car).toBeDefined();
  });

  it('has get methods', () => {
    expect(car.getFuelType()).toBe('petrol');
    expect(car.hasAirCondition()).toBe(true);
    expect(car.getUrlImage()).toBe('none.jpg');
    expect(car.getPassengerQuantity()).toBe(3);
    expect(car.getDoorCount()).toBe(3);
    expect(car.getDoorCount()).toBe(3);
    expect(car.getTransmissionType()).toBe('manual');
    expect(car.getCode()).toBe(1234);
    expect(car.getBaggageQuantity()).toBe(2);
    expect(car.getVendor()).toBe(null);
    car.setStatus('available');
    expect(car.getStatus()).toBe('available');
  });

  it('set vendor', () => {
    car.setVendor(new Vendor('Avis', 'xxx'));
    expect(car.getVendor()).toBeDefined();
    expect(car.getVendorName()).toBe('Avis');
  });

  it('set model', () => {
    expect(car.getModelName()).toBe('BMW');
  });

  it('set costs', () => {
    car.setCost(new CarCost(100, 99, 'EUR'));
    expect(car.getPrice()).toBe(100);
    expect(car.getPriceString()).toBe('€ 100');
  });
});
