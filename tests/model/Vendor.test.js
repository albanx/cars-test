import Vendor from "../../src/model/Vendor";
import Car from "../../src/model/Car";

let vendor;
beforeEach(() => {
  vendor = new Vendor('AVIS', 'xxx');
});

describe('vendor', () => {
  it('Is defined', () => {
    expect(vendor).toBeDefined();
  });

  it('has name', () => {
    expect(vendor.getName()).toBe('AVIS');
  });

  it('has getCode', () => {
    expect(vendor.getCode()).toBe('xxx');
  });

  it('has carlist', () => {
    expect(vendor.getCarList()).toEqual([]);
    vendor.setCarList([new Car()]);
    expect(vendor.getCarList().length).toBe(1);
  });
});
