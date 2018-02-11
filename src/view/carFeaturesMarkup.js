const renderFeatures = car => `
  <p>Car features</p>
  <ul class="car-features">
    ${car.hasAirCondition() ? `<li class="">Air conditioned</li>` : ''}
    <li class="">${car.getTransmissionType()} Transmission</li>
    <li class="">${car.getFuelType()} Engine Vehicle</li>
    <li class="">${car.getPassengerQuantity()} Passengers</li>
    <li class="">${car.getBaggageQuantity()} Bags</li>
    <li class="">${car.getDoorCount()} Doors</li>
    <li class="">${car.getDriveType()} Drive Type</li>
  </ul>
`;

export default renderFeatures;
