import CarModel from '../model/CarModel';

const createCarModel = ({Name}) => new CarModel(Name);

export default createCarModel;
