import CarModel from "../model/CarModel";

const createCarModel = ({Name})=>{
  return new CarModel(Name);
}

export default createCarModel;
