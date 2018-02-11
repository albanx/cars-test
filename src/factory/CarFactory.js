import Car from '../model/Car';
import createModel from './CarModelFactory';
import cleanKeys from "../utility/cleanKeys";

const createCar = ({
                     AirConditionInd,
                     TransmissionType,
                     FuelType,
                     DriveType,
                     PassengerQuantity,
                     BaggageQuantity,
                     Code,
                     CodeContext,
                     DoorCount,
                     VehMakeModel,
                     PictureURL
                   }) => new Car(
  AirConditionInd,
  TransmissionType,
  FuelType,
  DriveType,
  PassengerQuantity,
  BaggageQuantity,
  Code,
  CodeContext,
  DoorCount,
  createModel(cleanKeys(VehMakeModel)),
  PictureURL);


export default createCar;
