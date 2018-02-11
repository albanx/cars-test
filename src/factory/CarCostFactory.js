import CarCost from "../model/CarCost";

const createCarCost = ({RateTotalAmount, EstimatedTotalAmount, CurrencyCode})=>{
  return new CarCost(RateTotalAmount, EstimatedTotalAmount, CurrencyCode);
}

export default createCarCost;
