import CarCost from '../model/CarCost';

const createCarCost = ({RateTotalAmount, EstimatedTotalAmount, CurrencyCode}) =>
  new CarCost(RateTotalAmount, EstimatedTotalAmount, CurrencyCode)

export default createCarCost;
