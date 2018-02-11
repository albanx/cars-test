export default class Car {
  constructor(AirConditionInd,
              TransmissionType,
              FuelType,
              DriveType,
              PassengerQuantity,
              BaggageQuantity,
              Code,
              CodeContext,
              DoorCount,
              VehMakeModel,
              PictureURL) {

    this.airConditionInd = AirConditionInd;
    this.transmissionType = TransmissionType;
    this.fuelType = FuelType;
    this.driveType = DriveType;
    this.passengerQuantity = PassengerQuantity;
    this.baggageQuantity = BaggageQuantity;
    this.code = Code;
    this.codeContext = CodeContext;
    this.doorCount = DoorCount;
    this.vehMakeModel = VehMakeModel;
    this.pictureURL = PictureURL;
    this.vendor = null;
    this.cost = null;
    this.status = null;
  }


  getUrlImage() {
    return this.pictureURL;
  }

  getModelName() {
    return this.vehMakeModel.getName();
  }

  getFuelType() {
    return this.fuelType;
  }

  getPassengerQuantity() {
    return this.passengerQuantity;
  }

  getDoorCount() {
    return this.doorCount;
  }

  getDriveType() {
    return this.driveType;
  }

  getTransmissionType() {
    return this.transmissionType;
  }

  getCode() {
    return this.code;
  }

  getCodeContext() {
    return this.codeContext;
  }

  getBaggageQuantity() {
    return this.baggageQuantity;
  }

  hasAirCondition() {
    return this.airConditionInd === 'true';
  }

  getVendorName() {
    return this.vendor.getName();
  }

  getVendor() {
    return this.vendor;
  }

  getStatus() {
    return this.status;
  }

  getPrice() {
    return this.cost.getPrice();
  }

  getPriceString() {
    return this.cost.getPriceString();
  }

  setVendor(vendor) {
    this.vendor = vendor;
  }

  setCost(cost) {
    this.cost = cost;
  }

  setStatus(status) {
    this.status = status;
  }
}
